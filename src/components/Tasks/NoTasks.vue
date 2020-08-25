<template>
  <transition
    appear
    enter-active-class="animated slideInDown">
    <div class="col-12 q-mb-lg">
      <q-banner class="bg-grey-3">
        <template v-slot:avatar>
          <q-icon name="done" color="primary"/>
        </template>
          There's No Tasks To Do Today
        <template v-slot:action>
          <q-btn
          flat
          color="primary"
          label="Add Todo"
          @click="$emit('showaddtask')"/>
        </template>
      </q-banner>
    </div>
  </transition>
</template>
<script>
export default {

};
</script>
