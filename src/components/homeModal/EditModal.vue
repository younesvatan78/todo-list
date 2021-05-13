<template>
  <div>
    <div class="modal__category"  style="z-index: 1005">
      <div class="modal_content" v-click-outside="closeModal">
        <h2>Edit Your Categories</h2>
        <input type="text"
               placeholder="Enter Category Name"
               :value="categoryEdit"
               @change="(e)=> categoryName = e.target.value "
        >
        <button @click="handleUpdate">Save !</button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/directive/index.js'
export default {
  name: "ActionModal",
  props:{
    categoryEdit :{
      type : String,
      required : true
    }
  },
  data(){
    return{
      isShowModal : false,
      categoryName : null
    }
  },
  methods :{
    closeModal(){
      this.isShowModal = false ;
      this.$emit('is-show-modal',this.isShowModal)
    },
    handleUpdate(){
      this.isShowModal = false;
      this.$emit('is-show-modal',this.isShowModal)
      this.$emit('update-title',this.categoryName)
    }
  },

}
</script>

