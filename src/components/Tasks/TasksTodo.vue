<template>
  <div class="col-md-6 col-xs-12">
    <list-header bgColor="bg-orange-5">Todos</list-header>
    <q-list
      bordered
      separator>
      <q-separator spaced />
        <task
        v-for="(task, key) in tasksTodo"
        v-bind:key="key"
        :task="task"
        :id="key" />

        <q-item v-if="!Object.keys(tasksTodo).length" class="bg-orange-2">
        <q-item-section>There's No Tasks To Do Today</q-item-section>
        <q-item-section side>
           <q-btn
           color="primary"
           icon="add"
           text-color="white"
           label="Add Todo"
           @click="$emit('showaddtask')" />
        </q-item-section>
        </q-item>
    </q-list>
  </div>
</template>
<script>
import TaskVue from './Task.vue';
import ListHeaderVue from './Modals/Shared/ListHeader.vue';

export default {
  props: ['tasksTodo'],
  components: {
    task: TaskVue,
    'list-header': ListHeaderVue,
  },
};
</script>
