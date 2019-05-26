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

class Grade extends Controller
{
    protected $table = 'obe_grade';

    public function __construct()
    {
        parent::__construct();
        $this->sexData = ['1' => '男', '0' => '女'];
        $this->titleData = ['0' => '助教', '1' => '讲师', '2' => '副教授', '3' => '教授'];
        $this->collegeData = db('obe_college')->where(['is_deleted' => '0'])->column('id, name', 'id');
    }

    public function index()
    {
        $this->title = '班级列表';
        $where = ['is_deleted' => '0'];
        $this->_query($this->table)->like('name')->equal('code')->where($where)->page();
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
            if (empty($data['id'])) {
                $data['code'] = 'grade_' . Data::uniqidNumberCode();
            }
            $data['create_at'] = date('Y-m-d H:i:s');
        }
    }

}