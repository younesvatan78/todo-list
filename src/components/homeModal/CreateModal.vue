<template>
  <div>
    <div class="modal__category">
      <div class="modal_content" v-click-outside="closeModal">
        <h2>Create Your Categories</h2>
        <input type="text" placeholder="Enter Category Name" v-model="categoryName">
        <button @click="create">create !</button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/directive/index.js'
export default {
  name: "CreateModal",
  data(){
    return{
      isShowModal : false,
      categoryName : ''
    }
  },
  methods :{
    closeModal(){
      this.isShowModal = false ;
      this.$emit('is-show-modal',this.isShowModal)
    },
    create(){
      this.$emit('create-category',this.categoryName)
    }
  },

}
</script>

<style scoped>

</style>