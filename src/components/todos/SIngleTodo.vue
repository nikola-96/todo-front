<template>
        <div class="todo-item-left ">
            <div class="todo-item-label" >
                {{todo.title}}
            </div>
        </div>
</template>

<script>
export default {
    name: 'SingleTodo',
    props:{
        todo:{
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">

  .todo-item-left { 
    display: flex;
    align-items: center;
  }

  .todo-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
  }
</style>