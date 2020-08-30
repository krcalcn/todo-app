<template>
  <q-page padding>
    <q-list
      bordered
      separator
      class="q-mb-md">
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" clickable v-ripple>
        <q-item-section>
          <q-item-label>
            Show 12 Hour Time Format
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="show12HourTimeFormat" />
        </q-item-section>
      </q-item>

      <q-item tag="label" clickable v-ripple>
        <q-item-section>
          <q-item-label>
            Show Tasks In One List
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="showTasksInOneList" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered separator>
      <q-item-label header>More</q-item-label>

      <q-item
        to="/settings/help"
        tag="label" clickable v-ripple>
        <q-item-section>
          <q-item-label>
            Help
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="visitOurWebsite"
        tag="label" clickable v-ripple>
        <q-item-section>
          <q-item-label>
            Visit Our Website
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="emailUs"
        tag="label" clickable v-ripple>
        <q-item-section>
          <q-item-label>
            Contact Us
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { openURL } from 'quasar';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('settings', ['settings']),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat;
      },
      set(value) {
        this.set12HourTimeFormat(value);
      },
    },
    showTasksInOneList: {
      get() {
        return this.settings.showTasksInOneList;
      },
      set(value) {
        this.setTasksInOneList(value);
      },
    },
  },
  methods: {
    ...mapActions('settings', ['set12HourTimeFormat', 'setTasksInOneList']),
    visitOurWebsite() {
      openURL('https://www.google.com');
    },
    emailUs() {
      window.location.href = 'mailto:hello@atodoapp.com?subject=Todo App Feedback';
    },
  },
};
</script>
