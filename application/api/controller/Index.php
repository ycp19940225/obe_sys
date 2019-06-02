<?php
/**
 * Created by PhpStorm.
 * User: ycp
 * Date: 2019/5/23
 * Time: 22:23
 */

namespace app\api\controller;



use library\Controller;
use library\tools\Data;
use think\Db;

class Index extends Controller
{
    protected $table = 'obe_college';
    protected $sexData;
    protected $titleData;
    protected $evaluationData;
    protected $collegeData;
    protected $collegeTypeData;
    protected $teacherData;
    protected $gradeData;

    public function __construct()
    {
        parent::__construct();
        $this->sexData = ['1' => '男', '2' => '女'];
        $this->titleData = ['1' => '助教', '2' => '讲师', '3' => '副教授', '4' => '教授'];
        $this->evaluationData = ['1' => '考察', '2' => '考试'];
        //公共必修、学科必修、学科选修、专业必修 、专业选修、实践选修
        $this->collegeTypeData = ['1' => '公共必修', '2' => '学科必修', '4' => '学科选修', '5' => '专业必修', '3' => '专业选修', '6' => '实践选修'];
        $this->collegeData = db('obe_college')->where(['is_deleted' => '0'])->column('id, name', 'id');
        $this->teacherData = db('obe_teacher')->where(['is_deleted' => '0'])->column('id, name', 'id');
        $this->gradeData = db('obe_grade')->where(['is_deleted' => '0'])->column('id, name', 'id');
    }


    public function login()
    {
        $data = $this->request->request();
        if(empty($data['account']) || empty($data['password'])){
            $this->error('缺失参数！', $data);
        }
        $userInfo = db('obe_student')->where(['student_number' => $data['account']])->find();
        $inputPassword = md5($data['password']);
        if($userInfo['password'] == $inputPassword){
            $this->success('登录成功！', $userInfo);
        }else{
            $this->error('登录失败！');
        }
    }

    public function getSchoolYear()
    {
      $data = db('obe_course')->where(['is_deleted' => 0])->distinct(true)->column('id as value, school_year  as label, is_deleted');
      $this->success('获取成功！', $data);
    }

    public function getPerformance()
    {
        $data = $this->request->request();
        if(empty($data['year']) || empty($data['studentId'])){
            $this->error('缺失参数！', $data);
        }
        $courseData = db('obe_course')->where(['school_year' => $data['year']])->column('id, name, course_type, credits','id');
        $perDataIds = array_column($courseData, 'id');
        $performanceData = db('obe_performance')->where(['student_id' => $data['id']])->where('course_id' ,'in', $perDataIds)->column('id, course_id, score', 'course_id');
        foreach ($courseData as $key => $v){
            if(isset($performanceData[$v['id']]['score'])){
                $courseData[$key]['score'] = $performanceData[$v['id']]['score'];
                $courseData[$key]['course_name'] = $this->collegeTypeData[$v['course_type']];
            }else{
                unset($courseData[$key]);
            }
        }
        $this->success('获取成功！', $courseData);
    }

    public function getCourse()
    {
        $tempData = db('obe_course')->where(['is_deleted' => 0])->select();
        $teacherIds = array_column($tempData,'teacher_id');
        $courseIds =  array_column($tempData,'id');
        $teacherData = db('obe_teacher')->where('id', 'in', $teacherIds)->column('id, name', 'id');
        //查询选课记录
        $recordData= db('obe_course_selection_record')->where('course_id', 'in', $courseIds)->column('course_id, is_deleted', 'course_id');
        $courseData = [];
        foreach ($tempData as $key => $val){
            $courseData[$val['id']]['id'] = $val['id'];
            $courseData[$val['id']]['credits'] = $val['credits'];
            $courseData[$val['id']]['week_of_school'] = $val['week_of_school'];
            $courseData[$val['id']]['code'] = substr($val['code'], -8);
            $courseData[$val['id']]['teacherName'] = $teacherData[$val['teacher_id']];
            $courseData[$val['id']]['evaluation_mode'] = $this->evaluationData[$val['evaluation_mode']];
            $courseData[$val['id']]['course_type'] = $this->collegeTypeData[$val['course_type']];
            if(isset($recordData[$val['id']]) && $recordData[$val['id']] == 0 ){
                $courseData[$val['id']]['checked'] = true;
            }else{
                $courseData[$val['id']]['checked'] = false;
            }
        }
        $this->success('获取成功！', $courseData);
    }

    //选课
    public function selectionCourse()
    {
        $data = $this->request->request();
        if(empty($data['courseId']) || empty($data['userId'])){
            $this->error('缺失参数！', $data);
        }
        $whereData = [
            'course_id' => $data['courseId'],
            'student_id' => $data['userId'],
        ];
        if($data['type'] == "true"){
            $whereData['create_at'] = date('Y-d-d H:i:s');
            db('obe_course_selection_record')->insert($whereData);
            $this->success('选课成功！', $data['type']);
        }else{
            db('obe_course_selection_record')->where($whereData)->delete();
            $this->success('取消成功！', $data['type']);
        }
    }

}