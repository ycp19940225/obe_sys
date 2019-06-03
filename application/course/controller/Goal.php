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

class Goal extends Controller
{
    protected $table = 'obe_goal';

    public function __construct()
    {
        parent::__construct();
        $this->sexData = ['1' => '男', '0' => '女'];
        $this->titleData = ['0' => '助教', '1' => '讲师', '2' => '副教授', '3' => '教授'];
        $this->collegeData = db('obe_college')->where(['is_deleted' => '0'])->column('id, name', 'id');
        $this->targetData = db('obe_target')->where(['is_deleted' => '0'])->column('id, name', 'id');
        $this->professionData = db('obe_profession')->where(['is_deleted' => '0'])->column('id, name', 'id');
    }

    public function index()
    {
        $this->title = '教学目标列表';
        $where = ['is_deleted' => '0'];
        $this->_query($this->table)->like('name')->equal('college_id')->where($where)->page();
    }

    public function add()
    {
        $this->applyCsrfToken();
        $this->_form($this->table, 'form');
    }

    public function edit()
    {
        $this->applyCsrfToken();
        if($this->request->request('id')){
           $goalId = $this->request->request('id');
           $knowledgeData = db('obe_knowledge')->where(['is_deleted' => 0 ,'goal_id' => $goalId])->select();
           $this->assign('knowledgeData',$knowledgeData);
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
            $data['create_at'] = date('Y-m-d H:i:s');

        }
    }

    public function _form_result($goalId, $data)
    {
        if(!empty($data['id'])){
            db('obe_knowledge')->where(['goal_id' => $goalId])->delete();
        }
        foreach ($data['knowledgeData'] as $key => $knowledge) {
            if(!empty($knowledge)){
                $insertData = [
                    'name' => $knowledge,
                    'goal_id' => $goalId,
                    'create_at' => date('Y-m-d H:i:s')
                ];
                db('obe_knowledge')->insert($insertData);
            }
        }
    }


}