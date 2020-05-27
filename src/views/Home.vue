<template>
  <div class="home">
    <div class="home-header">
      <!-- Tabbar 标签栏 -->
      <Tabbar v-model="tabActived" />

      <!-- 選擇時間區間與收尋 -->
      <div class="date-selector">
        <DateSelector v-model="dateRange[0]" />
        <span style="padding: 0 6px;">~</span>
        <DateSelector v-model="dateRange[1]" />
        <!-- <div class="ac-button">
          <van-icon name="search" color="white" size="17px" />
        </div> -->
      </div>
    </div>

    <div class="home-content">
      <template v-for="(item, index) in filterList">
        <ListItem :key="index" :detail="item" />
      </template>
    </div>

    <HomeFooter :total="computeTotal" />

  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import DateSelector from '@/components/DateSelector'
import ListItem from '@/components/ListItem'
import HomeFooter from '@/components/HomeFooter'
import moment from 'moment'
import { db } from '@/utils/firebase.js'

const getTime = (date) => { return new Date(date).getTime() }

export default {
  name: 'Home',
  components: {
    Tabbar,
    DateSelector,
    ListItem,
    HomeFooter
  },
  data() {
    return {
      tabActived: 'shared',
      dateRange: [
        moment().subtract(1, 'month').format('YYYY/MM/DD'),
        moment().format('YYYY/MM/DD')
      ],
      listData: []
    }
  },
  computed: {
    // 過濾日期區間與歸屬
    filterList() {
      return this.listData.filter(item => {
        return (
          getTime(item.date) >= getTime(this.dateRange[0]) &&
          getTime(item.date) <= getTime(this.dateRange[1]) &&
          item.belong === this.tabActived
        )
      })
    },
    // 計算總支出收入合計
    computeTotal() {
      const outTotalMap = this.filterList.filter(item => item.Income === 'out').map(item => item.cost)
      const inTotalMap = this.filterList.filter(item => item.Income === 'in').map(item => item.cost)
      let outTotal = outTotalMap.length !== 0 ? outTotalMap.reduce((a,b) => {return  a + b}) : 0
      let inTotal = inTotalMap.length !== 0 ? inTotalMap.reduce((a,b) => {return  a + b}) : 0
      return {outTotal, inTotal, total: outTotal - inTotal}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      db.ref('accountingList').once('value').then(res => {
        this.listData = this.setData(res.val())
      })
    },
    // 設定資料並過濾
    setData(data) {
      return Object.keys(data).map(key => {return {...data[key], key}}).sort((a, b) => {
        return getTime(a.date) < getTime(b.date) ? 1 : -1
      })
    },

  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%
}

.date-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.home-content {
  // display: flex;
  flex: 1;
  overflow-y: auto;;

  .ac-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background: #1989fa;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 10px;
  }
}

</style>