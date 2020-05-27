<template>
  <div class="list-item">
    <div class="detail">
      <div class="detail-date">
        {{ detail.date }}
      </div>
      <div class="detail-cost" :class="{'green': detail.Income === 'in'}">
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
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  padding: 10px;
  border-top: 2px rgb(167, 167, 167) solid;
  border-bottom: 2px rgb(167, 167, 167) solid;

  .content {
    line-height: 30px;
    font-weight: 500;
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
}
</style>