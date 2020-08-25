<template>
  <div class="row q-mb-lg">
    <q-input
      outlined
      :value="dueDate"
      label="Due Date"
      @input="$emit('update:dueDate', $event)"
      clearable>
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            ransition-show="scale"
            transition-hide="scale">
            <q-date
              years-in-month-view
              :value="dueDate"
              @input="(e) => {
                $emit('update:dueDate', e);
                $refs.qDateProxy.hide();
                }" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>
<script>
export default {
  props: ['dueDate'],
};
</script>
