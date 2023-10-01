const { createApp } = Vue;

createApp({
  data(){
    return{
      tasks: [
        {
          cosaDaFare: 'Fare la spesa',
          isDone: false
        },
        {
          cosaDaFare: 'Portare il cane',
          isDone: false
        },
        {
          cosaDaFare: 'Andare alle poste',
          isDone: false
        },
        {
          cosaDaFare: 'Fare un viaggio',
          isDone: false
        }
      ],
      newTask: '',
      showError: false
    }
  },
  methods:{
    addNewTask(){
      if (this.newTask.length < 5){
        this.showError = true;
        return;
      };
      this.tasks.unshift({
          cosaDaFare: this.newTask,
          isDone: false
      });
      this.newTask= '';
      this.showError = false;
    },
    clearError() {
      this.showError = false; // Nascondi il messaggio di errore durante la digitazione
    },
    toggleDone(index) {
      this.tasks[index].isDone = !this.tasks[index].isDone;
    },
    removeTask(index) {
    this.tasks.splice(index, 1);
  }
  },
  mounted(){
    console.log('ciao da Vue');
  }
}).mount('#app');