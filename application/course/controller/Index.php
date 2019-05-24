<?php
/**
 * Created by PhpStorm.
 * User: ycp
 * Date: 2019/5/23
 * Time: 22:23
 */

namespace app\course\controller;



use library\Controller;

class Index extends Controller
{
    protected $table = 'obe_course';

    public function index()
    {
        $this->title = '课程列表';
        $data = db($this->table)->page(10);
        $this->assign('list',$data);
        $this->fetch();
    }

    public function add()
    {
        $this->applyCsrfToken();
        return $this->fetch('form');
    }
}