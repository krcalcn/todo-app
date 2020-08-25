<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <q-item
    clickable
    v-ripple
    @click="updateTask({ id: id, updates: {completed: !task.completed}})"
    :class="!task.completed ? 'bg-orange-2' : 'bg-green-3'"
    v-touch-hold:1000.mouse="showEditTaskModal">
      <q-item-section side top>
        <q-checkbox
          :value="task.completed"
          class="no-pointer-events"/>
      </q-item-section>
      <q-item-section>
        <q-item-label
          v-html="$options.filters.searchHighlight(task.name, search)">
          <q-icon
            name="done"
            v-if="task.completed"
            size="18px"/>
          {{task.name | searchHighlight(search)}}
        </q-item-label>
      </q-item-section>
      <q-item-section
        v-if="task.dueDate"
        side
        top>
      <div class="row">
        <q-icon
        name="event"
        size="24px"
        class="q-mt-sm q-mr-xs"/>
        <div class="column q-mt-sm">
          <div class="row justify-end">
            <q-item-label
              caption>
              {{task.dueDate | dateFormatChange}}
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
        <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          dense
          color="primary"
          icon="edit" />
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete" />
        </div>
      </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task
        @close="showEditTask = false"
        :task="task"
        :id="id"/>
    </q-dialog>
    </q-item>
  </transition>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { date } from 'quasar';
import EditTaskVue from './Modals/EditTask.vue';

export default {
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false,
    };
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm To Delete',
        message: 'Do you really want to delete this task?',
        ok: {
          push: true,
        },
        cancel: {
          color: 'negative',
        },
        persistent: true,
      }).onOk(() => { this.deleteTask(id); });
    },
    showEditTaskModal() {
      this.showEditTask = true;
    },
  },
  filters: {
    dateFormatChange(value) {
      return date.formatDate(value, 'Do MMMM');
    },
    searchHighlight(value, search) {
      if (search) {
        const searchRegExp = new RegExp(search, 'i');
        return value.replace(searchRegExp, (match) => `<span class="bg-yellow-6">${match}</span>`);
      }
      return value;
    },
  },
  computed: {
    ...mapState('tasks', ['search']),
  },
  components: {
    'edit-task': EditTaskVue,
  },
};
</script>
