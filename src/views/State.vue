<template>
  <div class="main">
    <div class="info p-2 m-2 bg-primary">
      <h2>query id: {{ _id }}</h2>
      <div>date: {{ _date }}</div>
      <div>total: {{_total}}</div>
    </div>
    <button @click="this.$router.go(-1)" class="btn btn-success">Back</button>
  </div>
</template>

<script>
export default {
  name: "state-component",
  props: ["id", "date", "total"],
  computed: {
    _id() {
      return this.$route.params.id;
    },
    _date() {
      return this.$route.params.date;
    },
    _total() {
      return this.$route.params.total;
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>