<template>
  <div class="header">
    <h2 class="mb-0">COVID-19 STATICS</h2>
    <button class="btn btn-danger" @click="clearHistory()">
      Clear viewed history
    </button>
  </div>
</template>

<script>
import { infoAboutStatesStore } from "../stores/infoAboutStatesStore";
export default {
  name: "header-component",
  setup() {
    const stateStore = infoAboutStatesStore();
    return {
      stateStore,
    };
  },
  methods: {
    clearHistory() {
      if (localStorage) {
        localStorage.clear();
        this.stateStore.viewedStates = [];
        this.stateStore.currentPage = 1;
      }
      else return
    },
  },
};
</script>

<style scoped>
.header {
  background-color: crimson;
  color: #fff;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
