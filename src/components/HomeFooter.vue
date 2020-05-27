<template>
  <div class="home-footer">
    <table class="ac-table">
      <thead>
        <th>總支出</th>
        <th>總收入</th>
        <th>合計</th>
      </thead>
      <tbody>
        <td>{{ total.outTotal }}</td>
        <td>{{ total.inTotal }}</td>
        <td>{{ total.total }}</td>
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

  .ac-table {
    width: 100%;

    th, td {
      height: 30px;
    }

    td {
      text-align: center;
    }
  }
}
</style>