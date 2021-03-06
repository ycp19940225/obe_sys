<?php
/**
 * Created by PhpStorm.
 * User: ycp
 * Date: 2019/5/23
 * Time: 22:23
 */

namespace app\course\controller;



use library\Controller;
use library\tools\Data;
use think\Db;

class Analysis extends Controller
{
    protected $table = 'obe_college';

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
        $this->courseData = db('obe_course')->where(['is_deleted' => '0'])->column('id, name, code, college_id, teacher_id,course_type', 'id');
        $this->knowledgeData = db('obe_knowledge')->where(['is_deleted' => '0'])->column('id, name', 'id');
    }

    public function index()
    {
        $this->title = '目标达成统计';
        $requestData = $this->request->request();
        $where = [];
        foreach ($requestData as $key => $requestDatum){
            if ($key == 'grade_id' && !empty($requestDatum)){
                $where['grade_id'] = $requestDatum;
            }
            if ($key == 'course_id' && !empty($requestDatum)){
                $where['course_id'] = $requestDatum;
            }
//            if ($key == 'teacher_id' && !empty($requestDatum)){
//                $where['teacher_id'] = $requestDatum;
//            }
        }
        $where['is_deleted'] = 0;
        $recordData = db('obe_performance')->where($where)->select();
        $performanceIds = array_column($recordData, 'id');
        $knowledgeIds = array_column($recordData, 'knowledge_id');
        $studentIds = array_column($recordData, 'student_id');
        $knowledgeTemp = db('obe_performance_knowledge_record')->where(['is_deleted' => 0])->where('performance_id', 'in', $performanceIds)->select();
        $knowledgeData = [];
        foreach ($knowledgeTemp as $datum){
            $knowledgeData[$datum['performance_id']][] = $datum;
        }
//        $knowledgeData = db('obe_knowledge')->where(['is_deleted' => 0])->where('id', 'in', $knowledgeIds)->column('id, name, goal_id','id');
        $studentData = db('obe_student')->where(['is_deleted' => 0])->where('id', 'in', $studentIds)->column('id, name, is_deleted','id');

        //对数据信息统计
        $temp = [];
        $recordData = $recordData;
        foreach ($recordData as $key => $record){
            //以班进行分组(班级/课程/分数)
            $temp[$record['course_id']]['score'][] = $record['score'];
            $temp[$record['course_id']]['grade_id'] = $record['grade_id'];
            if(isset($knowledgeData[$record['id']])){
                foreach ($knowledgeData[$record['id']] as $key2 => $knowledge){
                    $temp[$record['course_id']]['knowledgeData'][$knowledge['knowledge_id']]['name'] = $this->knowledgeData[$knowledge['knowledge_id']];
                    $temp[$record['course_id']]['knowledgeData'][$knowledge['knowledge_id']]['score'][] = $knowledge['score'];
                }
            }
        }
        foreach ($temp as $courseId => $course){
            foreach ($course as $courseItem){
                $temp[$courseId]['score_avg'] = array_sum($temp[$courseId]['score'])/count($temp[$courseId]['score']);
            }
            if(isset($course['knowledgeData'])){
                foreach ($course['knowledgeData'] as $knowledgeId => $item){
                    $temp[$courseId]['knowledgeData'][$knowledgeId]['name'] = $item['name'];
                    $temp[$courseId]['knowledgeData'][$knowledgeId]['score_avg'] = array_sum($item['score'])/count($item['score']);
                }
            }
        }
        $this->assign('knowledgeData', $knowledgeData);
        $this->assign('studentData', $studentData);
        $this->assign('knowledgeData', $knowledgeData);
        $this->assign('recordData',$temp);
        $this->fetch();
    }

}