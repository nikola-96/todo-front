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
              <p class="dropdown-item" @click="handleSearch('low')">Low</p>
              <p class="dropdown-item" @click="handleSearch('medium')">Medium</p>
              <p class="dropdown-item" @click="handleSearch('high')">High</p>
              <p class="dropdown-item" @click="fetchAllTodos()">Show all</p>
            </div>
          </li>
        </ul>
        <button class="btn btn-outline-success my-2 my-sm-0" @click="markAllTodos">Mark all</button>
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
    searchTodo: {
      type: Function,
      required: true,
    },
    getTodos: {
      type: Function,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    },
    getAllTodosFromState: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async handleSearch(priority) {
      await this.searchTodo(priority);
    },
    async fetchAllTodos() {
      await this.getTodos();
    },
    async markAllTodos() {
      this.getAllTodosFromState.forEach((todo) => {
        todo.complited = true;
        this.updateTodo(todo);
      });
    },
  },
};
</script>