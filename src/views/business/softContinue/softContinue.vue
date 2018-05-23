<template>
  <Card>
    <Form>
        <input type="hidden" v-model="dog">
        <FormItem label="服务请求码" prop="requestCode" :label-width="160">
            <Input v-model="requestCode" style="width:450px">

            </Input>
            <Button type="primary" @click.prevent="submitCode">
                请求
            </Button>
        </FormItem>
        <FormItem label="上次日期" prop="lastDate" :label-width="160">
            <Input v-model="lastDate" style="width:300px" readonly>

            </Input>
            
        </FormItem>
        <FormItem label="本次日期" prop="nowDate" :label-width="160">
            <Input v-model="nowDate" style="width:300px" readonly>

            </Input>
            
        </FormItem>
        <FormItem label="服务到期后处理" prop="state" :label-width="160">
            <Select v-model="state" style="width:300px">
                <Option value="0">提醒</Option>
                <Option value="1">停止使用</Option>
            </Select>
        </FormItem>
        <FormItem label="控制连接电脑" prop="control" :label-width="160">
            <Select v-model="control" style="width:300px">
                <Option value="0">不控制</Option>
                <Option value="1">控制</Option>
            </Select>
        </FormItem>
        <FormItem label="客户名称" prop="client" :label-width="160">
            <Input v-model="client" style="width:300px" >

            </Input>
            
        </FormItem>
        <FormItem label="服务码" prop="serviceCode" :label-width="160">
            <Input v-model="serviceCode" style="width:450px" readonly>

            </Input>
            <Button type="primary" @click.prevent="clearForm">
                生成
            </Button> 
        </FormItem>
    </Form>
  </Card>
</template>
<script>
import util from '../../../libs/util.js'
var qs = require('qs');
export default {
    data(){
            return{
                dog:'',
                requestCode:'',
                lastDate:'',
                nowDate:'',
                state:'0',
                control:'0',
                client:'',
                serviceCode:''
            }
        },
    methods:{
        submitCode(){
            let _this = this;
                if(!this.requestCode){
                    this.$Message.error('请输入请求码');
                    return;
                }
                let postData = {
                    action:0,
                    plainText:this.requestCode
                }
                util.ajax.get('saveSoftContinue.asp?aciton='+0+'&plainText='+this.requestCode).then(function(response){
                    let msg = response.data;
                    if(msg.result == 'error'){
                        
                        _this.$Message.error('请求码错误');
                    }
                    else if(msg.result == 'success'){
                        _this.lastDate = msg.lastdate;
                        _this.nowDate = msg.nowdate;
                        _this.state = msg.sstate;
                        _this.control = msg.scombine;
                        _this.dog = msg.dogCode;
                    }
                })
        },
        clearForm(){
            let _this = this;
                if(!this.requestCode){
                    this.$Message.error('请输入请求码');
                    return;
                }
                if(!this.client){
                    this.$Message.error('请输入客户名称');
                    return;
                }
                let postData_2 = {
                    aciton:1,
                    combine:this.control,
                    state:this.state,
                    lastdate:this.lastDate,
                    nowdate:this.nowDate,
                    dog:this.dog,
                    client:this.client
                }
                util.ajax.get('saveSoftContinue.asp?aciton='+1+'&combine='+this.control+'&state='+this.state+'&lastdate='+this.lastDate+
                '&nowdate='+this.nowDate+'&dog='+this.dog+'&client='+this.client).then(function(response){
                    let msg = response.data;
                    if(msg.result == 'error'){
                        _this.$Message.error('请求码错误');
                    }
                    else if(msg.result == 'success'){
                        _this.serviceCode = msg.encode;
                    }
                })
        }

    }
  
}
</script>