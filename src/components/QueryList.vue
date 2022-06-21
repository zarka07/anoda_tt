<template>
  <div class="row col-12 query-list-component">
    <h3>Your querys:</h3>
    <div>
      <div v-for="state in displayedStates" :key="state.id">
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

    <!-- Pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            style="color: #4caf50"
            v-if="this.stateStore.currentPage != 1"
            @click="this.stateStore.currentPage--"
          >
            Previous
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-for="pageNumber in pages.slice(
              this.stateStore.currentPage - 1,
              this.stateStore.currentPage + 5
            )"
            :key="pageNumber"
            @click="this.stateStore.currentPage = pageNumber"
          >
            {{ pageNumber }}
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            @click="this.stateStore.currentPage++"
            style="color: #4caf50"
            v-if="this.stateStore.currentPage < pages.length"
            class="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { infoAboutStatesStore } from "../stores/infoAboutStatesStore";

export default {
  name: "query-list-component",
  props: ["page"],
  components: {},
  setup() {
    const stateStore = infoAboutStatesStore();
    return {
      stateStore,
    };
  },
  data() {
    return {
      perPage: 3,
      pages: [],
    };
  },

  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.states.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(states) {
      let page = this.stateStore.currentPage;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return states.slice(from, to);
    },
  },
  computed: {
    states() {
      return this.stateStore.viewedStates;
    },
    displayedStates() {
      return this.paginate(this.states);
    },
  },
  watch: {
    states() {
      this.setPages();
    },
  },
};
</script>

<style scoped>
.query-list-component {
  background-color: slategray;
  height: auto;
  width: 80%;
  color: #fff;
  margin-bottom: 20px;
}

a {
  color: #fff;
}

button.page-link {
  display: inline-block;
}

button.page-link {
  font-size: 15px;
  color: #0b34caba;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  border: 1px dotted;
  border-radius: 2px;
}

.offset {
  width: 500px !important;
  margin: 20px auto;
}

.pagination {
  align-items: center;
  justify-content: center;
  padding-left: 0;
}
</style>