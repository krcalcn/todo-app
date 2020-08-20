<template>
  <div class="row q-mb-sm">
    <div class="col">
      <q-input
        outlined
        :value="dueTime"
        @input="$emit('update:dueTime', $event)"
        label="Due Time"
        clearable>
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy ref="qTimeProxy"  transition-show="scale" transition-hide="scale">
              <q-time
                :value="dueTime"
                @input="(e) => {
                  $refs.qTimeProxy.hide();
                  $emit('update:dueTime', e);
                }" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </div>
</template>
<script>
export default {
  props: ['dueTime'],
};
</script>
