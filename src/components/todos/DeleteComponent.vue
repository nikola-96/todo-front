<template>
    <div class="remove-item" @click="handleDelete" >
        &times;
    </div>
</template>
<script>
export default {
    name: 'DeleteComponent',
    props:{
        todo:{
            type: Object,
            reqired: true
        }
    },
    methods: {
        handleDelete(){
            console.log(this.todo.id)
        }
    },
}
</script>

<style lang="scss">
.remove-item{
    cursor: pointer;
    margin-left: 14px;
    &:hover{
        color: black;
    }
}

    
</style>