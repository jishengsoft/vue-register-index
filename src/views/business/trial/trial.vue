<template>
  <Card>
    <Form ref="formItem" :label-width="80" :model="formItem" :rules="ruleValidate">
        <FormItem label="注册码" prop="code" :label-width="160">
            <Input v-model="formItem.code" style="width:450px">

            </Input>
        </FormItem>
        <FormItem label="试用天数(不能超过180天)" prop="useDay" :label-width="160">
            <InputNumber :max="180" :min="1" v-model="formItem.useDay" style="width:300px">

            </InputNumber>
            
        </FormItem>
        <FormItem label="客户名称" prop="clientName" :label-width="160">
            <Input v-model="formItem.clientName" style="width:300px">

            </Input>
            
        </FormItem>
        <FormItem label="验证码" prop="verificationCode" :label-width="160">
            <Input v-model="verificationCode" style="width:450px" readonly>

            </Input>
            <Button type="primary" @click.prevent="getCode">
                生成
            </Button> 
            <Button type="primary" v-clipboard:copy="verificationCode" 
            v-clipboard:success="onCopy" v-clipboard:error="onError">
                复制
            </Button> 
        </FormItem>
    </Form>
  </Card>
</template>
<script>
import util from '../../../libs/util.js'
var qs = require('qs');
export default {
  data() {
      return {
          verificationCode:'',
          formItem:{
            code:'',
            useDay:180,
            clientName:''
          },
          ruleValidate:{ 
            code: [ { required: true, message:'注册码不能为空', trigger:'blur'}
            ]

          }
      }
  },
  methods:{
      getCode(){
        let _this = this;
        if(!this.formItem.code){
            this.$Message.error('请输入注册码');
            return;
        }
        let formdate = this.formItem;
        let url = 'saveTrialRegister.asp';
        /*
        alert(formdate.code);
        alert(formdate.useDay);
        alert(formdate.clientName);
        */
        util.ajax.post(url,qs.stringify(formdate)).then(function(response){
            if(response.data == 'codeerr'){
                _this.$Message.info('注册码错误');
            }else{
                _this.verificationCode = response.data;
            }
        }).catch(() => {
        });
      },
      onCopy: function (e) {
        alert('复制成功!')
        /*alert('复制成功: ' + e.text)*/
      },
      onError: function (e) {
        alert('该浏览器不支持复制!')
      }
  }
}
</script>