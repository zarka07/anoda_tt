<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: "app-component",
  };
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 10px;
}
</style>
