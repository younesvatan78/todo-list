<template>
  <div>
    <div class="modal__more"  v-if="isShowModalMore">
      <div class="modal__box" v-click-outside="closeShowModalMore">
        <div class="modal__header">
          <h2>{{ dataModal.title }}</h2>
        </div>
        <div class="modal__content">
          <p>{{ dataModal.body }}</p>
        </div>
      </div>
    </div>
    <div class="modal__action"  v-if="isShowModalAction">
      <div class="modal_links" v-click-outside="closeShowModalAction">
        <ul>
          <li><a href="javascript:;" @click="handleCompleteTask(dataModal.id)">Completed</a></li>
          <li><a href="">Edit</a></li>
          <li><a href="">Remove</a></li>
        </ul>
      </div>
    </div>
    <header class="header__main">
      <nav>
        <a href="javascript:;" @click="$router.push({name : 'Home'})">
          <span class="icon-svg" >
            <svg xmlns="http://www.w3.org/2000/svg" width="7.028" height="11.557" viewBox="0 0 7.028 11.557">
            <path id="Page_1" data-name="Page 1"
                  d="M5.8,9.2a.793.793,0,0,1-1.121,1.121L.263,5.913a.9.9,0,0,1,0-1.268L4.675.233A.793.793,0,0,1,5.8,1.354L1.871,5.279Z"
                  transform="translate(0.5 0.5)" fill="#b0bec5" stroke="#b0bec5" stroke-miterlimit="10"
                  stroke-width="1"/>
            </svg>
          </span>
          Tasks
        </a>
      </nav>
    </header>
    <main>
      <div class="main__title">
        <h1>{{ title }} Category</h1>
      </div>
      <div class="filter__tab">
      <span class="custom__input" @click="filterTask = 'DoingTask' ">
          <input type="radio" :checked="filterTask === 'DoingTask'" name="filter" value="DoingTasks">
          <label id="AllTasks">Tasks</label>
        <div class="check"></div>
      </span>
        <span class="custom__input">
          <input type="radio" :checked="filterTask === 'DoneTask' " name="filter" value="CompletedTask">
          <label id="CompletedTask" @click="filterTask = 'DoneTask'">Completed</label>
           <div class="check"></div>
      </span>
      </div>



    </main>
    <footer>
      <button class="navigation__button" @click="goToCreateTask">
        <span class="icon-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="23.727" height="23.728" viewBox="0 0 23.727 23.728">
  <path id="Icon_awesome-pencil-alt" data-name="Icon awesome-pencil-alt" d="M23.076,6.587,20.939,8.724a.557.557,0,0,1-.788,0L15.007,3.58a.557.557,0,0,1,0-.788L17.144.655a2.229,2.229,0,0,1,3.147,0l2.785,2.785A2.221,2.221,0,0,1,23.076,6.587Zm-9.9-1.96L1,16.8.019,22.428a1.114,1.114,0,0,0,1.288,1.288l5.631-.987,12.17-12.17a.557.557,0,0,0,0-.788L13.964,4.627a.562.562,0,0,0-.792,0ZM5.752,15.754a.646.646,0,0,1,0-.918L12.889,7.7a.649.649,0,1,1,.918.918L6.67,15.754a.646.646,0,0,1-.918,0Zm-1.673,3.9H6.3v1.682l-2.989.524L1.873,20.417,2.4,17.427H4.079Z" transform="translate(-0.002 -0.005)" fill="#fff"/>
</svg>
        </span>

      </button>
    </footer>

  </div>
</template>

<script>
import { mapActions , mapState } from 'vuex'
export default {
  name: "Category",
  data(){
    return{
      title : null,
      categoryId : this.$route.params.slug,
      taskData : null,
      isShowModalMore : false,
      dataModal : null,
      isShowModalAction : false,
      filterTask : 'DoingTask'
    }
  },
  methods:{
    goToCreateTask(){
      this.$router.push({name : 'CreateTask',params:{slug : this.categoryId}})
    },
    showModalMore(id) {
      this.isShowModalMore = !this.isShowModalMore;
      this.dataModal = this.tasks.find(item => item.id === id)
    },
    closeShowModalMore(){
      this.isShowModalMore = false
    },
    ShowModalAction(){
      this.isShowModalAction = true
    },
    closeShowModalAction(){
      this.isShowModalAction = false
    },
    handleCompleteTask(id){
      let test = this.tasks.find(item=> item.id === id)
      let test2 = this.tasks.indexOf(test)
      let Alldata = this.tasks;
      Alldata[test2].status = 'completed';
      localStorage.setItem('tasks',JSON.stringify(Alldata))
    },
    ...mapActions(['getLocalStorageTasks']),

  },
  computed:{
    ...mapState({
      tasks : 'tasks',
      stateTitle : 'title'
    })
  },
  mounted() {
    if (!this.stateTitle){
      let categoryData = JSON.parse(localStorage.getItem('categories'));
      let category = categoryData.find(item => item.id === this.categoryId);
      this.title = category.title
    }else{
      this.title = this.stateTitle
    }
    //get Tasks from store
    this.getLocalStorageTasks();
    this.taskData = this.tasks.filter(items => items.categoryId == this.categoryId)
  }
}
</script>

<style scoped>

</style>