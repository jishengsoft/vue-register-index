<template>
<div style="padding:20px;background:#fff;margin:10px">
    <Form ref="formInline" inline label-position="right" :label-width="80">
        <FormItem label="客户名称" prop="searchClient">
            <Input v-model="searchClient" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="开始日期">
            <DatePicker v-model="beginDate" format="yyyy-MM-dd" type="date" placeholder="" style="width: 120px"></DatePicker>
        </FormItem>
        <FormItem label="结束日期">
            <DatePicker v-model="endDate" type="date" placeholder="" style="width: 120px"></DatePicker>
        </FormItem>
        
        <FormItem>
            <Button type="primary" @click="searchByClient" >查询</Button>
            <Button type="primary" @click="export2Excel" >导出</Button>
        </FormItem>
    </Form>
    

    
    <el-table 
    :data="agentList" 
    height="500" 
    size="small"
    :border = "border"
    stripe
    show-summary
    :summary-method="getSummaries" 
    highlight-current-row>
    <el-table-column
      type="index"
      
      >
    </el-table-column>
        <el-table-column
        prop="操作"
        label="操作"
        width="60"
        >
    </el-table-column>
        <el-table-column
        prop="client"
        label="客户名称"

        >
    </el-table-column>
        <el-table-column
        prop="dognumber"
        label="加密狗号"
        
        >
      </el-table-column>
      <el-table-column
        prop="oldversion"
        label="老版本"
        
        >
      </el-table-column>
      <el-table-column
        prop="newversion"
        label="新版本"
        
        >
      </el-table-column>
      <el-table-column
        prop="consumeJS"
        label="金额"
        
        >
      </el-table-column>
      <el-table-column
        prop="jsmoney"
        label="余额"
        
        >
      </el-table-column>
      <el-table-column
        prop="registerdate"
        label="注册时间"
        
        >
      </el-table-column>
      <el-table-column
        prop="registercode"
        label="注册码"
        width="200"
        >
      </el-table-column>
      <el-table-column
        prop="memo"
        label="备注"
        
        >
      </el-table-column>
      
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40,50,100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalRecord">
    </el-pagination>
    </div>
</template>
<script>
    import util from '../../../libs/util.js'
    var qs = require('qs');
    export default {
        data () {
            return {
                searchClient:'',
                beginDate:util.getMonthBeginDay(),
                endDate:'',
                alldata:[],
                modal1:false,
                currentPage:1,
                totalRecord:0,
                pageSize:10,
                agentList: [],
                border:true,

            }
        },
        mounted:function(){
                this.getAgentList();
        },
        methods:{
            getAgentList(){
                let _this = this;
                let pageSize = this.pageSize||'10';
                let currentPage = this.currentPage||'1';
                let searchClient = this.searchClient||'';
                let searchDate = this.beginDate?util.formatDate(this.beginDate):'';
                let searchEndDate = this.endDate?util.formatDate(this.endDate):'';
                util.ajax.get('getRegisterQuery.asp?rows='+pageSize+'&page='+currentPage+'&client='+searchClient+
                '&searchDate='+searchDate+'&searchEndDate='+searchEndDate)
                .then(function(response){
                    _this.totalRecord = response.data.total;
                    _this.agentList = response.data.rows;
                    _this.alldata = response.data.rows;
                })
            },
            /*
            getCompanyList(){
              let _this = this;
                util.ajax.get('getCompany.asp').then(function(response){
                    _this.companyList = response.data;
                })
                var cl = new Array();
                cl = _this.companyList;
                return cl;
            },*/
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
                if (index != 4){
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
            searchByClient(){
                this.currentPage = 1;
                this.getAgentList();
                /*console.log(this.agentList);*/
            },
            export2Excel() {
               /*
               let  companyName = '';
               for(var i=0;i< this.companyList.length;i++ ){
                   
                   if(this.companyList[i].username === sessionStorage.getItem('username')){
                       
                       companyName = this.companyList[i].company;
                   }
               }
               companyName = this.companyList.find(item => item.username === sessionStorage.getItem('username'));*/
               let tHeader = [ '操作', '公司名称', '加密狗号', '老版本', '新版本','金额','余额','注册时间','注册码','备注']; //对应表格输出的title
    　　　　　　let filterVal = [ '操作','company','dognumber', 'oldversion', 'newversion','consumeJS','jsmoney','registerdate','registercode','memo']; // 对应表格输出的数据
               let list = this.agentList;
               util.export2Excel('注册记录查询',tHeader,filterVal,list);
               
    　　　　}
        }
    }
</script>