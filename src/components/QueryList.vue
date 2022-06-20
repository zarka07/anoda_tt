<template>
  <div class="row col-12 query-list-component">
    <h3>Your querys:</h3>
    <p v-for="query in stateStore.info" :key="query">
        {{query}}
    </p>
  </div>
</template>
<script>
import { infoAboutStatesStore } from "../stores/infoAboutStatesStore";
export default {
  name: "query-list-component",
  setup() {
    const stateStore = infoAboutStatesStore();
    return {
      stateStore,
    };
  },
};
</script>

<style scoped>
.query-list-component {
  background-color: slategray;
  min-height: 250px;
  width: 80%;
  color: #fff;
}
</style>