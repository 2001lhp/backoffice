<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { ref } from 'vue'
type OverviewType = {
  name: string
  value: string
  icon: string
  color: string
}
const overviewList = ref<OverviewType[]>([
  {
    name: '总访问量',
    value: '54543.00',
    icon: 'View',
    color: '#f60'
  },
  {
    name: '总订单量',
    value: '54543.00',
    icon: 'Clock',
    color: 'green'
  },
  {
    name: '成交额',
    value: '54543.00',
    icon: 'User',
    color: 'blue'
  },
  {
    name: '告警统计',
    value: '54543.00',
    icon: 'Memo',
    color: 'pink'
  }
])
const lineOptions = ref<EChartsOption>({
  title: {
    left: 'center',
    text: '折线图示例',
    textStyle: {
      color: '#333'
    }
  },
  grid: {
    left: '10%',
    top: '13%',
    right: '3%',
    bottom: '8%'
  },
  xAxis: {
    boundaryGap: false,
    type: 'category',
    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#409EFF'
      }
    }
  ]
})
const barOptions = ref<EChartsOption>({
  title: {
    left: 'center',
    text: '柱状图示例',
    textStyle: {
      color: '#333'
    }
  },
  grid: {
    left: '10%',
    top: '13%',
    right: '3%',
    bottom: '8%'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'bar',
      itemStyle: {
        color: '#F56C6C',
        borderRadius: 20
      },
      barWidth: '20%'
    }
  ]
})
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>
<template>
  <div class="dashbord">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in overviewList" :key="item.name">
        <div class="item">
          <el-icon :style="{ color: item.color }">
            <component :is="item.icon"></component>
          </el-icon>
          <div class="flex-item">
            <div class="name">{{ item.name }}</div>
            <div class="value color-primary" :style="{ color: item.color }">{{ item.value }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>统计图表</span>
        </div>
      </template>
      <div class="echart">
        <EchartsItem :chartOption="lineOptions" />
        <EchartsItem :chartOption="barOptions" />
      </div>
    </el-card>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>待办事项</span>
        </div>
      </template>
      <el-table border :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
        <el-table-column label="操作" width="120">
          <template #default>
            <el-button link type="primary" size="small"> 详情 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.el-col {
  .item {
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: var(--el-box-shadow-light);
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    height: 60px;

    .el-icon {
      width: 80px;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 4px;
    }

    .name {
      font-size: 14px;
      line-height: 35px;
    }

    .value {
      font-size: 16px;
      line-height: 25px;
    }

    &:hover {
      background-color: #eee;
    }
  }
}

.el-card {
  margin-top: 15px;

  .echart {
    display: flex;
  }
  .el-pagination {
    margin-top: 10px;
  }
}
</style>
