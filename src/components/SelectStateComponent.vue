<template>
  <div class="col-5 select-component">
    <form class="form">
      <div class="form__select">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="current"
        >
          <option disabled>States:</option>
          <option v-for="state in states" :key="state.id" :value="state">
            {{ state.name }}
          </option>
        </select>
        <label>Choose state </label>
      </div>
    </form>
    <button @click.prevent="sendRequest()" type="button" class="btn btn-info">
      Get statics
    </button>
  </div>
</template>

<script>
import axios from "axios";
import getStatesByAbbr from "../mixins/getStatesByAbbr";
import { infoAboutStatesStore } from "../stores/infoAboutStatesStore";
export default {
  name: "select-state-component",
  mixins: [getStatesByAbbr],
  setup() {
    const stateStore = infoAboutStatesStore();
    return {
      stateStore,
    };
  },
  data() {
    return {
      states: [],
      current: null,
      date:'20200501'
    };
  },
  created: async function () {
    let url = "states.json";
    await axios.get(url).then((res) => {
      this.states = res.data;
    });
  },
  computed: {
    abbreviation() {
      return this.current.abbreviation.toLowerCase();
    },
    path() {
      return `${this.abbreviation}/${this.date}.json` || "";
    },
  },
  methods: {
    sendRequest() {
      this.showInfo(this.path);
      
    },
  },
};
</script>

<style scoped>
.select-component {
  background-color: #42b983;
  min-height: 130px;
  padding: 20px;
  color: #fff;
}
</style>
