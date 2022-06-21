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

        <datepicker
          class="mt-4 mb-2"
          v-model="date"
          :open-date="openDate"
          :disabled-dates="state.disabledDates"
          :prevent-disable-date-selection="state.preventDisableDateSelection"
        ></datepicker>
        <label>Choose date </label>
      </div>
    </form>
    <button @click.prevent="sendRequest()" type="button" class="btn btn-info">
      Get statics
    </button>
  </div>
</template>

<script>
import Datepicker from "vuejs3-datepicker";
import axios from "axios";
import getStatesByAbbr from "../mixins/getStatesByAbbr";
import { infoAboutStatesStore } from "../stores/infoAboutStatesStore";
export default {
  name: "select-state-component",
  mixins: [getStatesByAbbr],
  components: { Datepicker },
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
      date: new Date(2021, 2, 7),
      openDate: new Date(2021, 2, 7),
      state: {
        date: new Date(2020, 4, 1),
        disabledDates: {
          to: new Date(2020, 4, 1),
          from: new Date(2021, 2, 7),
        },
        preventDisableDateSelection: true,
      },
    };
  },
  created: async function () {
    let url = "states.json";
    await axios.get(url).then((res) => {
      this.states = res.data;
    });
  },
  computed: {
    _date() {
      return this.date.toISOString().substring(0, 10).replace(/-/g, "");
    },
    abbreviation() {
      return this.current.abbreviation.toLowerCase();
    },
    path() {
      return `${this.abbreviation}/${this._date}.json` || "";
    },
  },
  methods: {
    sendRequest() {
      this.showInfo(this.path);
      this.$emit("setPages");
    },
  },
};
</script>

<style scoped>
.select-component {
  background-color: #42b983;
  min-height: 130px;
  padding: 20px;
  color: black;
}
</style>
