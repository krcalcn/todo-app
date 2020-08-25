<template>
  <div class="row q-mb-sm">
    <q-input
      round
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      label="Task Name"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      v-select-all
      ref="name"
      class="col"
      clearable />
  </div>
</template>
<script>
export default {
  props: ['name'],
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
