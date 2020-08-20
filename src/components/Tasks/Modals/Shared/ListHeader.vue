<template>
  <q-banner
    dense
    inline-actions
    :class="bgColor"
    class="list-header text-white text-center">
  <span class="text-h5"><slot></slot></span>
  </q-banner>
</template>
<script>
export default {
  props: ['bgColor'],
};
</script>
<style>
  .list-header{
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
  }
</style>
