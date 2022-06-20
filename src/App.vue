<template>
  <Header />
  <div class="main">
    <select-state-component />
    <show-state-component />
    <div class="d-grid col-8 m-3">
      <button @click="show=!show" class="btn btn-primary" type="button">Show your querys</button>
    </div>
    <query-list-component v-if="show" />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import SelectStateComponent from "./components/SelectStateComponent";
import ShowStateComponent from "./components/ShowInfo.vue";
import { infoAboutStatesStore } from "@/stores/infoAboutStatesStore";
import QueryListComponent from "./components/QueryList.vue";
export default {
  name: "app-component",
  components: {
    SelectStateComponent,
    ShowStateComponent,
    Header,
    QueryListComponent,
  },
  setup() {
    const stateStore = infoAboutStatesStore();
    return {
      stateStore,
    };
  },
  data() {
    return {
      show: false,
    };
  },
  methods:{
    
  }
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
