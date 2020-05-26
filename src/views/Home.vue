<template>
  <div class="home">
    <!-- Tabbar 标签栏 -->
    <Tabbar v-model="tabActived" />

    <!-- 選擇時間區間與收尋 -->
    <div class="date-selector">
      <DateSelector />
      <span style="padding: 0 6px;">~</span>
      <DateSelector />
      <div class="ac-button">
        <van-icon name="search" color="white" size="17px" />
      </div>
    </div>
    <div v-for="(item, index) in 10" :key="index">
      <ListItem />
    </div>

  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import DateSelector from '@/components/DateSelector'
import ListItem from '@/components/ListItem'

export default {
  name: 'Home',
  components: {
    Tabbar,
    DateSelector,
    ListItem
  },
  data() {
    return {
      tabActived: 'shared'
    }
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.date-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

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
</style>