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
    }

    public function index()
    {
        $this->title = '目标达成统计';
        $this->assign('collegeTypeData', $this->collegeTypeData);
        $this->fetch();
    }

}