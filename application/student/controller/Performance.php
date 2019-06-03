<?php
/**
 * Created by PhpStorm.
 * User: ycp
 * Date: 2019/5/23
 * Time: 22:23
 */

namespace app\student\controller;



use library\Controller;
use library\tools\Data;
use think\Db;

//成绩中心
class Performance extends Controller
{
    protected $table = 'obe_performance';

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
        $this->courseData = db('obe_course')->where(['is_deleted' => '0'])->column('id, name', 'id');
        $this->studentData = db('obe_student')->where(['is_deleted' => '0'])->column('id, name, code', 'id');
    }

    public function index()
    {
        $this->title = '成绩列表';
        $where = ['is_deleted' => '0'];
        $this->_query($this->table)->like('name')->equal('student_id,grade_id,college_id,course_id')->where($where)->page();
    }

    public function add()
    {
        $this->applyCsrfToken();
        $this->_form($this->table, 'form');
    }

    public function edit()
    {
        $this->applyCsrfToken();
        if($this->request->request('id') && $this->request->isGet()){
            $performanceId = $this->request->request('id');
            $performanceData = db('obe_performance')->field('college_id,grade_id,student_id')->where(['is_deleted' => 0 ,'id' => $performanceId])->find();
            $recordData = db('obe_performance_knowledge_record')->where(['performance_id' => $performanceId])->column('id, knowledge_id, score','knowledge_id');
            $knowledgeIds = array_column($recordData, 'knowledge_id');
            $editKnowledgeData = db('obe_knowledge')->where('id', 'in', $knowledgeIds)->column('id, name,goal_id','id');
            foreach ($editKnowledgeData as $key => $val) {
                $editKnowledgeData[$key]['score'] = $recordData[$val['id']]['score'];
            }
            $this->assign('editKnowledgeData',$editKnowledgeData);
            $this->assign('gradeId',$performanceData['grade_id']);
            $this->assign('studentId',$performanceData['student_id']);
        }
        $this->_form($this->table, 'form');
    }

    public function del()
    {
        $this->applyCsrfToken();
        $this->_delete($this->table);
    }

    /**
     * 表单数据处理
     */
    public function _form_filter(&$data)
    {
        if ($this->request->isGet()) {
        } elseif ($this->request->isPost()) {
            $data['knowledgeData'] = array_filter($data['knowledgeData']);
            if (empty($data['id'])) {
                $data['code'] = 'grade_' . Data::uniqidNumberCode();
            }
            $data['create_at'] = date('Y-m-d H:i:s');
        }
    }

    public function getGradeByCollegeId()
    {
        $data = db('obe_grade')->where(['college_id' => $this->request->request('college_id'),'is_deleted' => 0])->column('id, name', 'id');
        $this->success('',$data);
    }
    public function getStudentByGradeId()
    {
        $data = db('obe_student')->where(['grade_id' => $this->request->request('grade_id'),'is_deleted' => 0])->column('id, name', 'id');
        $this->success('',$data);
    }

    public function getKnowledgeByCourseId()
    {
        $knowledgeIdS = db('obe_course_knowledge')->where(['course_id' => $this->request->request('course_id'),'is_deleted' => 0])->column('id, knowledge_id', 'id');

        $knowledgeData = db('obe_knowledge')->where(['is_deleted' => 0])->where('id', 'in', $knowledgeIdS)->column('id, name', 'id');
        $this->success('', $knowledgeData);
    }

    public function _form_result($pId, $data)
    {
        if(!empty($data['id'])){
            db('obe_performance_knowledge_record')->where([
                'performance_id' => $pId
            ])->delete();
        }
        foreach ($data['knowledgeData'] as $key => $score) {
            if(!empty($score)){
                $insertData = [
                    'score' => $score,
                    'knowledge_id' => $key,
                    'performance_id' => $pId,
                    'course_id' => $data['course_id'],
                    'college_id' => $data['college_id'],
                    'grade_id' => $data['grade_id'],
                    'student_id' => $data['student_id'],
                    'create_at' => date('Y-m-d H:i:s')
                ];
                db('obe_performance_knowledge_record')->insert($insertData);
            }
        }
    }

}