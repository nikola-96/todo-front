<template>
    <div>
        <TodoFormComponent :todo="getTodoForEditFromState" :updateTodo="updateTodo"/>
    </div>
</template>

<script>
import TodoFormComponent from '../../components/todos/TodoFormComponent';
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'TodoForm',
    components:{
        TodoFormComponent
    },
    methods:{
        ...mapActions(['getTodoForEdit', 'updateTodo'])
    },
    computed:{
        ...mapGetters(['getTodoForEditFromState'])
    },
    data(){
        return{
            todo:{}
        }
    },
    async created(){
        this.id = this.$route.params.id;
        await this.getTodoForEdit(this.id);
    }
}
</script>