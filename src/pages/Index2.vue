<template>
  <q-page padding>
    <button
    @click="counter++">
    {{ counter }}
    </button>
    <div class="triangle-right" @click="triangleAction">
    </div>
    <input v-model="counter" v-autofocus>
    <h5
    v-for="obj in object"
    v-bind:key="obj.id"
    class="shadow-6 q-pa-md text-center">
      {{obj.name}}
      <br>
      ID: <input
      v-model="obj.id"
      disabled
      style="width:40px;"
      class="q-mr-md">
      <br>
      <input
      v-model="obj.name"
      @keyup="handleKeyup">
    </h5>
    <h6>
      {{ messageUppercase }}
    </h6>
    <h6>
      {{ object | messageLowercase }}
    </h6>
  </q-page>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      // todos: [],
      counter: 0,
      object: [
        {
          id: 1,
          name: 'Object 1',
        },
        {
          id: 2,
          name: 'Object 2',
        },
      ],
    };
  },
  computed: {
    messageUppercase() {
      const names = [];
      this.object.map((ob) => {
        names.push(ob.name.toUpperCase());
        return null;
      });
      console.log('computed');
      return names;
    },
  },
  methods: {
    handleKeyup() {
      console.log('keyup');
    },
    triangleAction(e) {
      console.log(e.target);
    },
    // fetchData() {
    //   const a = new Promise((resolve) => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //       .then((response) => {
    //         this.todos = response.data;
    //         resolve(response.data);
    //       })
    //       .catch(function (error) {
    //         this.answer = `Error! Could not reach the API.  ${error}`;
    //       });
    //   });
    //   return a;
    // },
  },
  filters: {
    messageLowercase(value) {
      const names = [];
      value.map((ob) => {
        names.push(ob.name.toLowerCase());
        return null;
      });
      console.log('filter');
      return names;
    },
  },
  // mounted() {
  //   this.fetchData();
  // },
  directives: {
    autofocus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>
<style>
.triangle-right {
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 50px solid black;
  cursor: pointer;
}
</style>
