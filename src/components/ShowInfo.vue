<template>
  <div class="col-6 info-component">
    <div
      v-if="this.stateStore.loading"
      class="spinner-border text-danger m-5"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <table v-else class="table">
      <thead>
        <tr>
          <th scope="col">State: {{ this.stateStore.newState.state }}</th>
          <th scope="col">
            Date: {{ this.stateStore.newState.date + 1 || "" }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Total test results:</th>
          <td>{{ this.stateStore.newState.totalTestResults }}</td>
        </tr>
        <tr>
          <th scope="row">Currently hospitalized:</th>
          <td>{{ this.stateStore.newState.hospitalized }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { infoAboutStatesStore } from "../stores/infoAboutStatesStore";
export default {
  name: "show-info-component",
  setup() {
    const stateStore = infoAboutStatesStore();
    return {
      stateStore,
    };
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.info-component {
  background-color: honeydew;
  height: auto;
}
</style>