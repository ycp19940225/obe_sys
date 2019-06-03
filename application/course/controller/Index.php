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
        $this->sexData = ['1' => '男', '2' => '女'];
        $this->titleData = ['1' => '助教', '2' => '讲师', '3' => '副教授', '4' => '教授'];
        $this->evaluationData = ['1' => '考察', '2' => '考试'];
        //公共必修、学科必修、学科选修、专业必修 、专业选修、实践选修
        $this->collegeTypeData = ['1' => '公共必修', '2' => '学科必修', '4' => '学科选修', '5' => '专业必修', '3' => '专业选修', '6' => '实践选修'];
        $this->collegeData = db('obe_college')->where(['is_deleted' => '0'])->column('id, name', 'id');
        $this->teacherData = db('obe_teacher')->where(['is_deleted' => '0'])->column('id, name', 'id');
        $this->goalData = db('obe_goal')->where(['is_deleted' => '0'])->column('id, name', 'id');
    }

    public function index()
    {
        $this->title = '课程列表';
        $where = ['is_deleted' => '0'];
//        var_dump($this->request->request());
        $this->_query($this->table)->like('name')->equal('evaluation_mode,code,college_id,course_type,teacher_id')->where($where)->page();
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
            $courseId = $this->request->request('id');
            $knowledgeIds = db('obe_course_knowledge')->where(['is_deleted' => 0 ,'course_id' => $courseId])->column('knowledge_id','knowledge_id');
            $goalId = db('obe_course')->where(['id' => $courseId])->value('goal_id');
            $knowledgeData = db('obe_knowledge')->where(['is_deleted' => 0 ,'goal_id' => $goalId])->column('id ,name, is_deleted', 'id');
            foreach ($knowledgeData as $key => $knowledgeDatum) {
                if(in_array($key, $knowledgeIds)){
                    $knowledgeData[$key]['checked'] = 'checked';
                }else{
                    $knowledgeData[$key]['checked'] = '';
                }
            }
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
            if (empty($data['id'])) {
                $data['code'] = 'c_'. $data['college_id'] .'_t_' . $data['teacher_id'] . '_course_'.Data::uniqidNumberCode();
            }
            $data['create_at'] = date('Y-m-d H:i:s');
        }
    }

    //获取知识点
    public function getKnowledgeByGoalId()
    {
        $data = db('obe_knowledge')->where(['goal_id' => $this->request->request('goal_id')])->column('id, name', 'id');
        $this->success('',$data);
    }

    public function _form_result($courseId, $data)
    {
        if(!empty($data['id'])){
            db('obe_course_knowledge')->where(['course_id' => $courseId])->delete();
        }
        foreach ($data['knowledgeData'] as $key => $knowledge) {
            if(!empty($knowledge)){
                $insertData = [
                    'course_id' => $courseId,
                    'goal_id' => $data['goal_id'],
                    'knowledge_id' => $knowledge,
                    'create_at' => date('Y-m-d H:i:s')
                ];
                db('obe_course_knowledge')->insert($insertData);
            }
        }
    }

}