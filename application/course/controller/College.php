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

class College extends Controller
{
    protected $table = 'obe_college';

    public function index()
    {
        $this->title = '学院列表';
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
            if (empty($data['id'])) {
                $data['code'] = 'college_' . Data::uniqidNumberCode();
            }
            $data['create_at'] = date('Y-m-d H:i:s');
        }
    }

}