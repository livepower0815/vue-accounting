<template>
  <div id="app" :class="{'is-ios': IsIPhone}">
    <!-- <div id="nav" style="text-align: center;">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    IsIPhone() {
      // test
      return window.navigator.userAgent.includes('iPhone')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  padding-bottom: 80px;
  box-sizing: border-box;

  &.is-ios {
    padding-bottom: 120px;
  }
}

#nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #1989fa;
    }
  }
}
</style>
