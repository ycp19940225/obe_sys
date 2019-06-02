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

class Record extends Controller
{
    protected $table = 'obe_course_selection_record';

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
        $this->title = '学生选课管理';
        $where = ['is_deleted' => '0'];
        //课程信息
        $this->courseData = db('obe_course')->where($where)->column('id, name, course_type, college_id, teacher_id, credits','id');
        //学生信息
        $this->studentData = db('obe_student')->where($where)->column('id, name, student_number','id');
        $this->_query($this->table)->equal('course_id')->where($where)->page();
    }

    public function add()
    {
        $this->applyCsrfToken();
        $this->_form($this->table, 'form');
    }

    public function edit()
    {
        $this->applyCsrfToken();
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
            $temp['course_id'] = $data['course_id'];
            $temp['student_id'] = $data['student_id'];
            $data = $temp;
            $data['create_at'] = date('Y-m-d H:i:s');
        }
    }

    public function getGradeByCollegeId()
    {
        $data = db('obe_grade')->where(['college_id' => $this->request->request('college_id')])->column('id, name', 'id');
        $this->success('',$data);
    }
    public function getStudentByGradeId()
    {
        $data = db('obe_student')->where(['grade_id' => $this->request->request('grade_id')])->column('id, name', 'id');
        $this->success('',$data);
    }

}