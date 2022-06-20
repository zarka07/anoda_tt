<template>
<Header />
  <div class="main">
    <select-state-component />
    <show-state-component />
    <div class="d-grid col-8 m-3">
      <button @click="show = !show" class="btn btn-primary" type="button">
        Show your querys
      </button>
    </div>
    <query-list-component v-if="show" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SelectStateComponent from "../components/SelectStateComponent.vue";
import ShowStateComponent from "../components/ShowInfo.vue";
import { infoAboutStatesStore } from "@/stores/infoAboutStatesStore";
import QueryListComponent from "../components/QueryList.vue";
export default {
  name: "main-component",
  components: {
    SelectStateComponent,
    ShowStateComponent,
    QueryListComponent,
    Header,
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
};
</script>