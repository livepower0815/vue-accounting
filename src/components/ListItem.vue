<template>
  <div class="list-item">
    <div class="detail">
      <div class="detail-date" @click="$emit('openDelete', detail)">
        {{ detail.date }}
        <span v-if="isAll" :class="[tabMap[detail.belong].color, 'tab']">{{ tabMap[detail.belong].name }}</span>
      </div>
      <div class="detail-cost" :class="{'green': detail.Income === 'in'}" @click="$emit('openEdit', detail)">
        NT$ {{ detail.cost }}
      </div>
    </div>
    <div class="content" :class="{'green': detail.Income === 'in'}">
      {{ detail.costTitle }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    detail: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isAll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabMap: {
        shared: { name: '共用', color: 'tab-yellow' },
        wife:  { name: '老婆', color: 'tab-red' },
        husband:  { name: '老公', color: 'tab-blue' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  padding: 7px;
  border-top: 2px #dddddd solid;

  .content {
    line-height: 20px;
    font-weight: 500;
    font-size: 16px;
  }

  .detail {
    display: flex;
    justify-content: space-between;

    &-date {
      font-size: 14px;
      color: rgb(145, 142, 142);
    }

    &-cost {
      font-weight: 500;
    }
  }

  .green {
    color: green;
  }

  .tab {
    padding: 1px 4px;
    border-radius: 10px;
    color: #6a6a6a;
    font-size: 13px;
    font-weight: bolder;
  }
  .tab-red {
    background-color: #ffdbdb;
  }
  .tab-blue {
    background-color: #d5dffb;
  }
  .tab-yellow {
    background-color: #f9f4b1;
  }
}
</style>