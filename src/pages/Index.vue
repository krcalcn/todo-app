<template>
  <q-page padding>
   <q-list bordered separator>
      <q-item clickable v-ripple v-for="task in tasks" v-bind:key="task.id">
        <q-item-section>
          <q-item-label>{{task.name}}</q-item-label>
          <q-item-label caption>
            {{task.dueDate}}
          </q-item-label>
          <q-item-label caption>
            {{task.dueTime}}
          </q-item-label>
        </q-item-section>
      </q-item>
   </q-list>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          dueDate: '11/08/2020',
          dueTime: '10:00',
        },
        {
          id: 2,
          name: 'Get bananas',
          dueDate: '12/08/2020',
          dueTime: '11:00',
        },
        {
          id: 3,
          name: 'Get apples',
          dueDate: '13/08/2020',
          dueTime: '14:30',
        },
      ],
    };
  },
  methods: {
    completeTask(a) {
      console.log(a);
    },
  },
};
</script>
