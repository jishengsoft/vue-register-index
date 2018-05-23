<template>
<div style="padding:20px;background:#fff;margin:10px">
    
    <ButtonGroup>
        <Button type="primary" icon="plus" @click="add">新增</Button>
        
    </ButtonGroup>

    <Modal
        v-model="modal1"
        :title="state"
        footerHide
        width ="350"
        @on-cancel="cancel">
        <Form ref="formItem" :label-width="80" :model="formItem" :rules="ruleValidate">
            <FormItem label="软件" prop="softVersion">
                <Input v-model="formItem.softVersion" placeholder="请输入..." style="width:200px"></Input>
            </FormItem>
            <FormItem label="价格" prop="standardPrice">
                <InputNumber v-model="formItem.standardPrice" placeholder="请输入..." style="width:200px"></InputNumber>
            </FormItem>
            <FormItem label="加点价" prop="sitePrice">
                <InputNumber v-model="formItem.sitePrice" placeholder="请输入..." style="width:200px"></InputNumber>
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
     
    stripe
    
    highlight-current-row>
    <el-table-column
      type="index"
      >
    </el-table-column>
        <el-table-column
        prop="softVersion"
        label="软件"
        >
      </el-table-column>
      <el-table-column
        prop="standardPrice"
        label="价格"
        >
      </el-table-column>
      <el-table-column
        prop="sitePrice"
        label="加点价"
        >
      </el-table-column>
      
      <el-table-column
      
      label="操作"
     >
      <template slot-scope="scope">
        <el-button @click="editrow(scope)" type="text" size="small">修改</el-button>
        <el-button @click="delrow(scope)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    </div>
</template>
<script>
    import util from '../../../libs/util.js'
    var qs = require('qs');
    export default {
        data () {
            return {
                searchCompany:'',
                
                agentList: this.getAgentList(),
                alldata:[],
                modal1:false,
                state:'新增',
                oldUsername:'',
                formItem:{
                    softVersion:'',
                    standardPrice:'',
                    sitePrice:'',
                   
                },
                ruleValidate:{
                    softVersion: [
                        { required: true, message: '软件名称不能为空', trigger: 'blur' }
                    ],
                    standardPrice: [
                        { required: true,type:'number', message: '价格不能为空', trigger: 'blur' }
                    ],
                    sitePrice: [
                        { required: true,type:'number', message: '加点价不能为空', trigger: 'blur' }
                    ],
                    
                }
            }
        },
        methods:{
            getAgentList(){
                let _this = this;
                util.ajax.get('getSoftPrice.asp').then(function(response){
                    console.log(response.data);
                    _this.agentList = response.data;
                    _this.alldata = response.data;
                })
            },
            
            
            
            ok(name){
                this.$refs[name].validate((valid) => {
                    let _this = this;
                    if (valid) {
                        let formdate = this.formItem;
                        formdate.old = this.oldUsername;
                        let url = 'addSoftPrice.asp';
                        if (this.state == '修改定价'){
                            url = 'updateSoftPrice.asp';
                        }
                        
                        
                        util.ajax.post(url,qs.stringify(formdate)).then(function(response){
                            if (response.data == 'success'){
                                _this.modal1 = false;
                                _this.getAgentList();
                            }else if (response.data == 'exists'){
                                _this.$Message.info('软件存在');
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
                this.formItem.softVersion = '';
                this.formItem.standardPrice = '';
                this.formItem.sitePrice = '';
                
                
            },
            add(){
                this.clear();
                this.state = '新增定价';
                this.modal1 = true;
            },
            delrow(row){
               let _this = this;
               this.$confirm('是否确定删除该定价?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                    util.ajax.get('delSoftPrice.asp',{params:{old:row.row.softVersion}}).then(function(response){
                        if(response.data == 'success'){
                            _this.agentList.splice(row.$index, 1);
                            _this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        }
                    })
                    
                    }).catch(() => {
                            
                    });
                
            },
            editrow(row){
                this.formItem.softVersion = row.row.softVersion;
                this.formItem.standardPrice = row.row.standardPrice;
                this.formItem.sitePrice = row.row.sitePrice;
                
                this.modal1 = true;
                this.state = '修改定价';
                this.oldUsername = row.row.softVersion;
                
            }
        }
    }
</script>