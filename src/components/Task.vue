<template>
  <q-item
  clickable
  v-ripple
  @click="updateTask({ id: id, updates: {completed: !task.completed}})"
  :class="!task.completed ? 'bg-orange-2' : 'bg-green-3'">
    <q-item-section side top>
      <q-checkbox
        :value="task.completed"
        class="no-pointer-events"/>
    </q-item-section>
    <q-item-section>
      <q-item-label>
        {{task.name}}
        <q-icon
          name="done"
          v-if="task.completed"
          size="18px"/>
      </q-item-label>
    </q-item-section>
    <q-item-section side top>
    <div class="row">
      <q-icon
      name="event"
      size="24px"
      class="q-mt-sm q-mr-xs"/>
      <div class="column q-mt-sm">
        <div class="row justify-end">
          <q-item-label
            caption>
            {{task.dueDate}}
          </q-item-label>
        </div>
        <div class="row justify-end">
          <q-item-label caption>
            <small>{{task.dueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </div>
    </q-item-section>
    <q-item-section side>
       <q-btn
        @click.stop="promptToDelete(id)"
        flat
        round
        dense
        color="red"
        icon="delete" />
    </q-item-section>
  </q-item>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q.dialog({
        title: 'confirm',
        message: 'Do you really want to delete this task',
        ok: {
          push: true,
        },
        cancel: {
          color: 'negative',
        },
        persistent: true,
      }).onOk(() => { this.deleteTask(id); });
    },
  },
};
</script>
