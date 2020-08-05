<template>
  <q-item clickable v-ripple>
    <q-item-section>
      <q-item-label>{{task.name}} ({{index}})</q-item-label>
      <q-item-label caption>
        {{task.dueDate}}
      </q-item-label>
      <q-item-label caption>
        {{task.dueTime}}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>
<script>
export default {
  props: ['task', 'index'],
  data() {
    return {
      dat: 1,
    };
  },
};
</script>
