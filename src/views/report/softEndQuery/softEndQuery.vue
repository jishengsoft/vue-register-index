<template>
<div style="padding:20px;background:#fff;margin:10px">
    <Form ref="formInline" inline label-position="right" :label-width="80">
        <FormItem label="客户名称">
            <Input v-model="searchCompany"></Input>
        </FormItem>
        <FormItem label="开始日期">
            <DatePicker v-model="beginDate" format="yyyy-MM-dd" type="date" placeholder="" style="width: 120px"></DatePicker>
        </FormItem>
        <FormItem label="结束日期">
            <DatePicker v-model="endDate" type="date" placeholder="" style="width: 120px"></DatePicker>
        </FormItem>
        
        <FormItem>
            <Button type="primary" @click="searchByCompany" >查询</Button>
        </FormItem>
    </Form>
    

    
    <el-table 
    :data="agentList" 
    height="500" 
    size="small"
    :border = "border"
    stripe
    
    highlight-current-row>
    <el-table-column
      type="index"
      
      >
    </el-table-column>
        <el-table-column
        prop="client"
        label="客户名称"
        
        >
      </el-table-column>
      <el-table-column
        prop="version"
        label="目前版本"
        
        >
      </el-table-column>
      <el-table-column
        prop="state"
        label="服务到期后处理"
        
        >
      </el-table-column>
      <el-table-column
        prop="combine"
        label="控制连接电脑"
        
        >
      </el-table-column>
      <el-table-column
        prop="enddate"
        label="到期时间"
        
        >
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
    import util from '../../../libs/util.js'
    var qs = require('qs');
    export default {
        data () {
            return {
                searchCompany:'',
                beginDate:util.getMonthBeginDay(),
                endDate:'',
                alldata:[],
                currentPage:1,
                totalRecord:0,
                pageSize:10,
                agentList: [],
                border:true
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
                let searchCompany = this.searchCompany||'';
                let searchDate = this.beginDate?util.formatDate(this.beginDate):'';
                let searchEndDate = this.endDate?util.formatDate(this.endDate):'';
                util.ajax.get('getSoftContinue.asp?rows='+pageSize+'&page='+currentPage+'&client='+searchCompany+
                '&searchDate='+searchDate+'&searchEndDate='+searchEndDate)
                .then(function(response){

                    _this.totalRecord = response.data.total;
                    _this.agentList = response.data.rows;
                    _this.alldata = response.data.rows;
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
            searchByCompany(){
                this.currentPage = 1;
                this.getAgentList();
                /*console.log(this.agentList);*/
            }
        }
    }
</script>