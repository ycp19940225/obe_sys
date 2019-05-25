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

class Index extends Controller
{
    protected $table = 'obe_course';

    public function __construct()
    {
        parent::__construct();
        $this->sexData = ['1' => '男', '0' => '女'];
        $this->titleData = ['0' => '助教', '1' => '讲师', '2' => '副教授', '3' => '教授'];
        $this->evaluationData = ['0' => '考察', '1' => '考试'];
        //公共必修、学科必修、学科选修、专业必修 、专业选修、实践选修
        $this->collegeTypeData = ['0' => '公共必修', '1' => '学科必修', '2' => '学科选修', '3' => '专业必修', '4' => '专业选修', '5' => '实践选修'];
        $this->collegeData = db('obe_college')->where(['is_deleted' => '0'])->column('id, name', 'id');
        $this->teacherData = db('obe_teacher')->where(['is_deleted' => '0'])->column('id, name', 'id');
    }

    public function index()
    {
        $this->title = '课程列表';
        $where = ['is_deleted' => '0'];
        $this->_query($this->table)->dateBetween('login_at')->equal('status')->where($where)->page();
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
            $data['code'] = 'c_'. $data['college_id'] .'_t_' . $data['teacher_id'] . '_course_'.Data::uniqidNumberCode();
            $data['create_at'] = date('Y-m-d H:i:s');
        }
    }

}