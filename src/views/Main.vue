<template>
<Header />
  <div class="main">
    <select-state-component @setPages="setPages()"/>
    <show-state-component />
    <div class="d-grid col-8 m-3">
    </div>
    <query-list-component :key="page"/>
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
      page:1
    };
  },
  methods:{
    setPages(){
      this.page++
    }
  }
};
</script>