<template>
    <div>
        <div class="todo-item">
            <SingleTodo/>
        </div>
    </div>
</template>

<script>
import SingleTodo from '../../components/todos/SIngleTodo'
// import { mapActions, mapGetters } from "vuex";

export default {
    name: 'Todos',
    components:{
        SingleTodo,
    }
}
</script>
<style lang="scss">

.todo-item{
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

    
</style>