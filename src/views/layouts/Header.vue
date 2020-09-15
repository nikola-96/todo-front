<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Show by priority</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <p class="dropdown-item" @click="()=>handleSearchByPriority('low')">Low</p>
              <p class="dropdown-item" @click="()=>handleSearchByPriority('medium')">Medium</p>
              <p class="dropdown-item" @click="()=>handleSearchByPriority('high')">High</p>
              <p class="dropdown-item" @click="()=>handleSearchByPriority('all')">Show all</p>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" @submit.prevent="handleSearch">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      priority: "",
    };
  },
  props: {
    handleSearchByPriority: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleSearch() {
      this.searchByPriority();
    },
  },
};
</script>