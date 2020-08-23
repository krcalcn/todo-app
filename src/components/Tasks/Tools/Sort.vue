<template>
  <q-select
  square
  outlined
  emit-value
  map-options
  v-model="sortBy"
  :options="options"
  label="Sort By"
  class="col-3 q-mb-md"/>

</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      options: [
        {
          label: 'Name',
          value: 'name',
        },
        {
          label: 'Date',
          value: 'dueDate',
        },
      ],
    };
  },
  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.setSort(value);
      },
    },
  },
  methods: {
    ...mapActions('tasks', ['setSort']),
  },
};
</script>
<style scoped>
  .q-select {
    flex: 0 0 24%;
    margin-left: 10px;
  }
</style>
