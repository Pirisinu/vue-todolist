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
      newTask: ''
    }
  },
  methods:{
    addNewTask(){
      console.log(this.newTask);
      this.tasks.unshift(this.newTask);
    }
  },
  mounted(){
    console.log('ciao da Vue');
  }
}).mount('#app');