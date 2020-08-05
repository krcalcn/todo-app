<template>
  <q-page padding>
   <q-list bordered separator>
      <task
      v-for="(task, index) in tasks"
      v-bind:key="task.id"
      :task="task"
      :index="index">
      </task>
   </q-list>
  </q-page>
</template>

<script>
import Task from 'components/Task';

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
  components: {
    task: Task,
  },
};
</script>
