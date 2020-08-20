<template>
  <div class="col-12 q-mb-lg">
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="done" color="primary"/>
      </template>
      All done
      <template v-slot:action>
        <q-btn flat color="primary" label="Add Todo" />
      </template>
    </q-banner>
  </div>
</template>
<script>
export default {

};
</script>
