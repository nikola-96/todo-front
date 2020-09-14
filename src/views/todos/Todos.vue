<template>
    <div class="item-wraper">
        <div class="todo-item" v-for="todo in getAllTodosFromState" :key="todo.id">
            <SingleTodo :todo="todo"/>
            <DeleteCompoennt :todo="todo"/>
        </div>
    </div>
</template>

<script>
import SingleTodo from '../../components/todos/SIngleTodo'
import DeleteCompoennt from '../../components/todos/DeleteComponent'
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'Todos',
    components:{
        SingleTodo,
        DeleteCompoennt
    },
    methods:{
        ...mapActions(['getTodos'])
    },
    async created(){
        await this.getTodos();
    },
    computed:{
        ...mapGetters(['getAllTodosFromState'])
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