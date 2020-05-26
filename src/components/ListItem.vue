<template>
  <div class="list-item">
    <div class="detail">
      <div class="detail-date">
        2020/08/08
      </div>
      <div class="detail-cost">
        NT$ 1000
      </div>
    </div>
    <div class="content">
      這是一般收入 賺很多很多很多很多很多錢
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
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
}
</style>