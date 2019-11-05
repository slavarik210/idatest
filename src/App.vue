<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Оплата</router-link> |
      <router-link to="/history">История транзакций</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: #07070e;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1000px;
  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
