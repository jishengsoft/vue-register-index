<template>
<div style="padding:20px;background:#fff;margin:10px">
    <Form ref="formInline" inline label-position="right" :label-width="80">
        <FormItem label="公司名称" prop="searchCompany">
        <Input  placeholder="请输入" v-model="searchCompany"></Input>
        </FormItem>
        
        <FormItem>
            <Button type="primary" @click="searchByCompany" >查询</Button>
        </FormItem>
    </Form>
    <ButtonGroup style="margin-bottom:10px">
        <Button type="primary" icon="plus" @click="add">新增</Button>
        
    </ButtonGroup>

    <Modal
        v-model="modal1"
        :title="state"
        footerHide
       
        @on-cancel="cancel">
        <Form ref="formItem" :label-width="80" :model="formItem" :rules="ruleValidate">
            <FormItem label="公司名称" prop="Company">
                <Input v-model="formItem.Company" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="用户名" prop="User">
                <Input v-model="formItem.User" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem label="注册码" prop="uuid">
                <Input v-model="formItem.uuid" placeholder="请输入..." ></Input>
            </FormItem>
            <FormItem label="版本" prop="version">
                <Select v-model="formItem.version" placeholder="请选择版本">
                    <Option value="0" key="普通版">普通版</Option>
                    <Option value="1" key="客户跟踪">客户跟踪</Option>
                    <Option value="2" key="增强版">增强版</Option>
                </Select>
            </FormItem>
            <FormItem label="备注" prop="remark">
                <Input v-model="formItem.remark" placeholder="请输入..." ></Input>
            </FormItem>
            
            
            <FormItem>
                <Button type="primary" @click="ok('formItem')">确定</Button>
                <Button type="ghost" style="margin-left: 8px" @click="cancel">取消</Button>
            </FormItem>
        </Form>
    </Modal>
    <el-table 
    :data="agentList" 
    height="500" 
    size="mini"
    :border = "border"
    stripe
    
    highlight-current-row>
    <el-table-column
      type="index"
      width="40"
      >
    </el-table-column>
        <el-table-column
        prop="Company"
        label="公司名称"
        width="150"
        >
      </el-table-column>
      <el-table-column
        prop="User"
        label="用户名"
        width="100"
        >
      </el-table-column>
      <el-table-column
        prop="uuid"
        label="注册码"
        width="250"
        >
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="150"
        >
      </el-table-column>
      <el-table-column
        prop="version"
        label="版本"
        width="70"
        >
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        width="100"
        >
      </el-table-column>
      <el-table-column
        prop="agent"
        label="代理商"
        width="100"
        >
      </el-table-column>
      
      <el-table-column
      
      label="操作"
     >
      <template slot-scope="scope">
        <el-button @click="editrow(scope)" type="text" size="small">修改</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40,50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalRecord">
    </el-pagination>
    </div>
</template>
<script>
    import Cookies from 'js-cookie';
    import util from '../../../libs/util.js'
    var qs = require('qs');
    export default {
        data () {
            return {
                searchCompany:'',
                companyList:this.getCompanyList(),
                
                alldata:[],
                modal1:false,
                state:'新增',
                oldUsername:'',
                currentPage:1,
                totalRecord:0,
                pageSize:10,
                agentList: this.getAgentList(),
                border:true,
                formItem:{
                    Company:'',
                    User:'',
                    uuid:'',
                    version:'0',
                    remark:'',
                    agent:''
                },
                ruleValidate:{
                    Company: [
                        { required: true, message: '公司名称不能为空', trigger: 'blur' }
                    ],
                    User: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    uuid: [
                        { required: true, message: '注册码不能为空', trigger: 'blur' }
                    ],
                    
                    version: [
                        { required: true, message: '版本不能为空', trigger: 'change' }
                    ]
                }
            }
        },
        methods:{
            getAgentList(){
                let _this = this;
                let pageSize = this.pageSize||'10';
                let currentPage = this.currentPage||'1';
                let searchCompany = this.searchCompany||'';
                util.ajax.get('getAgentAppRegister.asp?rows='+pageSize+'&page='+currentPage+'&company='+searchCompany)
                .then(function(response){
                    console.log(response.data);
                    _this.totalRecord = response.data.total;
                    _this.agentList = response.data.rows;
                    _this.alldata = response.data.rows;
                })
            },
            getCompanyList(){
              let _this = this;
                util.ajax.get('getCompany.asp').then(function(response){
                    _this.companyList = response.data;
                })
            },
            handleSizeChange(apageSize){
                this.pageSize = apageSize;
                this.currentPage = 1;
                this.getAgentList();
            },
            handleCurrentChange(acurrentPage){
                this.currentPage = acurrentPage;
                this.getAgentList();
            },
            filterTag(value, row){
                
                return row.taskmoney == value;
            },
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '合计';
                    return;
                }
                if (index < 4){
                    sums[index] = 'N/A';
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                    const value = Number(curr);
                    if (!isNaN(value)) {
                        return prev + curr;
                    } else {
                        return prev;
                    }
                    }, 0);
                    
                } else {
                    sums[index] = 'N/A';
                }
                });

                return sums;
            },
            searchByCompany(){
                this.currentPage = 1;
                this.getAgentList();
            },
            ok(name){
                this.$refs[name].validate((valid) => {
                    let _this = this;
                    if (valid) {
                        let formdate = this.formItem;
                        formdate.old = this.oldUsername;
                        let url = 'addAgentAppRegister.asp';
                        if (Cookies.get('access') == '2'){
                            url = 'addAgentAppRegisterByCount.asp?rows=' + _this.alldata.length;
                        }
                        if (this.state == '修改用户'){
                            url = 'updateAppRegister.asp';
                        }
                        
                        console.log(formdate);
                        /*
                        alert(formdate.Company);
                        alert(formdate.User);
                        alert(formdate.uuid);
                        alert(formdate.version);
                        alert(formdate.remark);
                        alert(formdate.old);
                        alert(formdate.agent);
                        */

                        console.log(formdate);
                        util.ajax.post(url,qs.stringify(formdate)).then(function(response){
                            if (response.data == 'success'){
                                _this.modal1 = false;
                                _this.getAgentList();
                            }else if (response.data == 'exists'){
                                _this.$Message.info('该信息已存在');
                            }else if (response.data == 'notenough'){
                                _this.$Message.info('您的余额不足');
                            }else if (response.data == 'failed'){
                                _this.$Message.error('保存出错');
                            }else if (response.data == 'fault'){
                                _this.$Message.info('不能由高版本改为低版本');
                            }else if (response.data == 'countnotenough'){
                                _this.$Message.info('您的点数不足');
                            }else if (response.data == 'nouser'){
                                _this.$Message.info('用户名不存在');
                            }
                        })
                        
                    } else {
                        
                        this.modal1 = true;
                        return false;
                    }
                })
            },
            cancel(){
                this.modal1 = false;
            },
            clear(){
                this.formItem.User = '';
                this.formItem.uuid = '';
                this.formItem.Company = '';
                this.formItem.remark = '';
                this.formItem.version = '0';
                
            },
            add(){
                this.clear();
                this.state = '新增用户';
                this.modal1 = true;
            },
            editrow(row){
                this.formItem.User = row.row.User;
                this.formItem.uuid = row.row.uuid;
                this.formItem.Company = row.row.Company;
                /*alert(row.row.version);*/
                if(row.row.version ==='普通版'){
                    this.formItem.version = '0';
                }else if(row.row.version ==='客户跟踪'){
                    this.formItem.version = '1';
                }else {
                    this.formItem.version = '2';
                }            
                
                this.formItem.remark = row.row.remark;
                this.modal1 = true;
                this.state = '修改用户';
                this.oldUsername = row.row.id;
                console.log(row);
            }
        }
    }
</script>