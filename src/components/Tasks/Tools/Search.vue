<template>
  <q-input
  outlined
  clearable
  v-model="searchField"
  label="Search"
  class="col-9 q-mb-md"
  v-select-all
  @keyup.esc="searchField = ''">
  <template v-slot:prepend>
    <q-icon name="search" />
  </template>
  </q-input>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('tasks', ['search']),
    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        this.setSearch(value);
      },
    },
  },
  methods: {
    ...mapActions('tasks', ['setSearch']),
  },
  directives: {
    selectAll: {
      inserted(el) {
        const input = el.querySelector('.q-field__native');
        input.addEventListener('focus', () => {
          if (input.value.length) {
            input.select();
          }
        });
      },
    },
  },
};
</script>
