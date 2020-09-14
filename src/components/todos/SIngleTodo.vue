<template>
        <div class="todo-item-left ">
            <div class="todo-item-label" :class="todo.priority"  >
                {{todo.title}}
            </div>
                <span 
                 v-if="!this.description"
                 @click="changeDescStatus" 
                 class="span-show">
                 Show description
                 </span>
                <span 
                v-if="this.description" 
                @click="changeDescStatus" 
                class="span-desc">
                {{todo.description ? 
                todo.description : 
                "This todo doesen't have desc." }}
                </span>
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
    }, 
    data(){
        return {
            description: false
        }
    },
    methods: {
        changeDescStatus(){
            this.description = !this.description
        }
    },
}
</script>

<style lang="scss">

  .todo-item-left { 
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .todo-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
    font-size: 24px;
  }
  .span-show{
      font-size: 10px;
      &:hover{
            cursor: pointer;
      }
  }
  .span-desc{
        font-size: 12px;
      &:hover{
            cursor: pointer;
      }
  }
    .high::before{
      content: 'High priority';
    //   color: rgb(223, 77, 106);
      display: block;
      width: 100%;
      height: 100%;
      font-size: 10px;
  }
      .medium::before{
      content: 'Medium priority';
    //   color: rgb(240, 225, 92);
      display: block;
      width: 100%;
      height: 100%;
      font-size: 10px;
  }
    .low::before{
      content: 'Low priority';
    //   color: crimson;
      display: block;
      width: 100%;
      height: 100%;
      font-size: 10px;
  }


</style>