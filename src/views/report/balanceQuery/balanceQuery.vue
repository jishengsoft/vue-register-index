<template>
<div id="softDog">
  <Card>
    <Form>
        <FormItem label="公司名称" prop="company" :label-width="160">
            <Input v-model="company" style="width:150px" readonly>

            </Input>
        </FormItem>
        <FormItem label="余额" prop="jsmoney" :label-width="160">
            <Input v-model="jsmoney" style="width:150px" readonly>

            </Input>
            
        </FormItem>
        <FormItem label="任务目标" prop="taskmoney" :label-width="160">
            <Input v-model="taskmoney" style="width:150px" readonly>

            </Input>
            
        </FormItem>
        <FormItem label="联系方式" prop="number" :label-width="160">
            <Input style="width:150px" v-model="number" readonly>

            </Input>
        </FormItem>
    </Form>
  </Card>
  </div>
</template>
<script>
import util from '../../../libs/util.js'
export default {
  data(){
      return {
         company:'',
         jsmoney:'',
         taskmoney:'',
         number:'' 
      }
      },    
  mounted:function(){
      this.getInformation();
  },
  methods:{
      getInformation(){
          let _this = this;
          util.ajax.get('personalInformation.asp')
                .then(function(response){
                    let msg = response.data;
                    // alert(msg);
                    _this.company = response.data.company;
                    _this.jsmoney = response.data.jsmoney;
                    _this.taskmoney = response.data.taskmoney;
                    _this.number = response.data.number;
                })
      }
  }
}
</script>

