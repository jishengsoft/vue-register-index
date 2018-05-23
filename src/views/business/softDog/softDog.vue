<template>
<div id="softDog">
  <Card>
    <Form>
        <strong><label style="margin-left:120px">类型</label>
        <label style="margin-left:15px">数量</label></strong>
        <p>&nbsp;</p>
        <FormItem label="商务商业空狗" prop="businessNumber" :label-width="160">
            <InputNumber :max="100" :min="0" v-model.number="businessNumber" style="width:100px">

            </InputNumber>
        </FormItem>
        <FormItem label="商务工业空狗" prop="industryNumber" :label-width="160">
            <InputNumber :max="100" :min="0" v-model.number="industryNumber" style="width:100px">

            </InputNumber>
            
        </FormItem>
        <FormItem label="汽修空狗" prop="carNumber" :label-width="160">
            <InputNumber :max="100" :min="0" v-model.number="carNumber" style="width:100px">

            </InputNumber>
            
        </FormItem>
        <FormItem label="总数量" prop="total" :label-width="160">
        <!-- <p>
        {{ businessNumber }} +
        {{ industryNumber }} +
        {{ carNumber }} =
        {{ total }}
        </p> -->

            <Input style="width:100px" :value="businessNumber + industryNumber + carNumber" readonly>

            </Input>
        </FormItem>
        <FormItem>
            <Button style="margin-left:160px" type="primary" @click.prevent="submitForm">
                购买
            </Button>
        </FormItem>
    </Form>
  </Card>
  </div>
</template>
<script>
import util from '../../../libs/util.js'
var qs = require('qs');
export default {
//     component:('animated-integer', {
//     template: '<span>{{ tweeningValue }}</span>',
//     props: {
//       value: {
//         type: Number,
//         required: true
//       }
//     },
//     data: function () {
//       return {
//         tweeningValue: 0
//       }
//     },
//     watch: {
//       value: function (newValue, oldValue) {
//         this.tween(oldValue, newValue)
//       }
//     },
//     mounted: function () {
//       this.tween(0, this.value)
//     },
//     methods: {
//       tween: function (startValue, endValue) {
//         var vm = this
//         function animate () {
//           if (TWEEN.update()) {
//             requestAnimationFrame(animate)
//           }
//         }

//         new TWEEN.Tween({ tweeningValue: startValue })
//           .to({ tweeningValue: endValue }, 500)
//           .onUpdate(function (object) {
//             vm.tweeningValue = object.tweeningValue.toFixed(0)
//           })
//           .start()

//         animate()
//       }
//     }
//   }),
  data(){
    return {
      businessNumber: 0,
      industryNumber: 0,
      carNumber:0
    }
  },
  computed:{
      total: function(){
          return this.businessNumber + this.industryNumber + this.carNumber
      }

  },
  methods:{
    submitForm(){
        let _this = this;
        if(this.businessNumber == 0 && this.industryNumber ==0 && this.carNumber ==0){
            this.$Message.error('数量不能为0');
            return;
        }
        this.$confirm('您确定要购买吗?','提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'}).then(() => { 
                let postData = {
                    businessNumber:this.businessNumber,
                    industryNumber:this.industryNumber,
                    carNumber:this.carNumber
                }
                util.ajax.post('saveBuyDog.asp',qs.stringify(postData)).then(function(response){
                    let msg = response.data;
                    if(msg == 'back'){
                        _this.$Message.error('余额不足');
                    }
                    else if(msg == 'exists'){ 
                        _this.$Message.error('该折扣标准已存在');
                    }
                    else if(msg == 'failed'){ 
                        _this.$Message.error('保存出错');
                    }
                    else { 
                        _this.$Message.success('购买成功');
                    }
                })
            })
    }
  }
}
</script>