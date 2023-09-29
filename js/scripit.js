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

      ]
    }
  },
  methods:{

  },
  mounted(){
    console.log('ciao da Vue');
  }
}).mount('#app');