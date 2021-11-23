<template>
  <div class="home-footer">
    <table class="ac-table">
      <thead>
        <th>總支出</th>
        <th>總收入</th>
        <th>合計</th>
        <!-- <th>新增</th> -->
      </thead>
      <tbody>
        <td>{{ total.outTotal }}</td>
        <td>{{ total.inTotal }}</td>
        <td>{{ total.total }}</td>
        <!-- <td>
          <van-icon name="add-o" size="25px" @click="$emit('openAdd')" />
        </td> -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  props: {
    total: {
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

<style lang="scss">
.home-footer {
  // height: 50px;
  border-top: 2px #ecd5e6 solid;
  background-color: #ff8ca7;

  .ac-table {
    width: 100%;

    th, td {
      height: 26px;
      font-size: 18px;
      color: #ffffff;
    }

    td {
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>