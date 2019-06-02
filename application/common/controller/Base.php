<?php
/**
 * Created by PhpStorm.
 * User: ycp
 * Date: 2019/5/23
 * Time: 22:23
 */

namespace app\Common\controller;



use library\Controller;
use library\tools\Data;
use think\Db;
use think\facade\Cache;

class Base extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $cacheTime = 3600 * 24;
        if (Cache::get('sexData')) {
            $this->sexData = Cache::get('sexData');
        }else{
            $this->sexData = ['1' => '男', '2' => '女'];
            Cache::set('sexData', $this->sexData, $cacheTime);
        }
        //职称
        $this->titleData = ['1' => '助教', '2' => '讲师', '3' => '副教授', '4' => '教授'];
        if (Cache::get('titleData')) {
            $this->titleData = Cache::get('titleData');
        }else{
            $this->titleData = ['1' => '男', '2' => '女'];
            Cache::set('titleData', $this->titleData, $cacheTime);
        }
        //考察模式
        if (Cache::get('evaluationData')) {
            $this->evaluationData = Cache::get('evaluationData');
        }else{
            $this->evaluationData = ['1' => '考察', '2' => '考试'];
            Cache::set('evaluationData', $this->evaluationData, $cacheTime);
        }
        //公共必修、学科必修、学科选修、专业必修 、专业选修、实践选修
        if (Cache::get('collegeTypeData')) {
            $this->collegeTypeData = Cache::get('collegeTypeData');
        }else{
            $this->collegeTypeData = ['1' => '公共必修', '2' => '学科必修', '4' => '学科选修', '5' => '专业必修', '3' => '专业选修', '6' => '实践选修'];
            Cache::set('collegeTypeData', $this->collegeTypeData, $cacheTime);
        }
        //学科性质
        if (Cache::get('collegeData')) {
            $this->collegeData = Cache::get('collegeData');
        }else{
            $this->collegeData = db('obe_college')->where(['is_deleted' => '0'])->column('id, name', 'id');
            Cache::set('collegeData', $this->collegeData, $cacheTime);
        }
        //教师信息
        if (Cache::get('teacherData')) {
            $this->teacherData = Cache::get('teacherData');
        }else{
            $this->teacherData = db('obe_teacher')->where(['is_deleted' => '0'])->column('id, name', 'id');
            Cache::set('teacherData', $this->teacherData, $cacheTime);
        }
        //班级信息
        if (Cache::get('gradeData')) {
            $this->gradeData = Cache::get('gradeData');
        }else{
            $this->gradeData = db('obe_grade')->where(['is_deleted' => '0'])->column('id, name', 'id');
            Cache::set('gradeData', $this->gradeData, $cacheTime);
        }
        //课程信息
        $this->courseData = db('obe_course')->where(['is_deleted' => '0'])->column('id, name', 'id');
        if (Cache::get('courseData')) {
            $this->courseData = Cache::get('courseData');
        }else{
            $this->courseData = db('obe_course')->where(['is_deleted' => '0'])->column('id, name', 'id');
            Cache::set('courseData', $this->courseData, $cacheTime);
        }
        //学生信息
        $this->studentData = db('obe_student')->where(['is_deleted' => '0'])->column('id, name, code', 'id');
        if (Cache::get('studentData')) {
            $this->studentData = Cache::get('studentData');
        }else{
            $this->studentData = db('obe_student')->where(['is_deleted' => '0'])->column('id, name, code', 'id');
            Cache::set('studentData', $this->studentData, 3600);
        }
    }
}