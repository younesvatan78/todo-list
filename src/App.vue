<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name : "App",
  created() {
    if(localStorage.getItem('tasks') === null){
      localStorage.setItem('tasks' , JSON.stringify([]))
    }
    if(localStorage.getItem('categories') === null){
      localStorage.setItem('categories' , JSON.stringify([]))
    }
  }
}
</script>
<style lang="scss">

</style>
