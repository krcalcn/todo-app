<template>
  <div class="row q-mb-sm">
    <q-input
      round
      outlined
      autofocus
      :value="name"
      @input="$emit('update:name', $event)"
      label="Task Name"
      :rules="[val => !!val || 'Field is required']"
      ref="name"
      class="col"
      clearable />
  </div>
</template>
<script>
export default {
  props: ['name'],
};
</script>
