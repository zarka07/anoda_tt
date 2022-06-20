<template>
  <div class="row col-12 query-list-component">
    <h3>Your querys:</h3>
    <div v-for="state in states" :key="state">
      <router-link
        :to="{
          name: 'StateId',
          params: {
            id: JSON.parse(state).hash,
            date: JSON.parse(state).date,
            total: JSON.parse(state).total,
          },
        }"
      >
        {{ JSON.parse(state).state }}
      </router-link>
    </div>
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
  computed: {
    // states() {
    //   return JSON.parse(Object.values(this.stateStore.viewedStates));
    // },
    states() {
      //console.log(JSON.parse(this.stateStore.viewedStates))
      //return JSON.parse(this.stateStore.viewedStates)
      return this.stateStore.viewedStates;
    },
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

a {
  color: #fff;
}
</style>