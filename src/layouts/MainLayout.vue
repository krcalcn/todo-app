<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
        <q-icon name="assignment" />
          To-Do App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elavated>
      <q-tabs>
        <q-route-tab
        v-for="(item, index) in navs"
        :key="index"
        :to="item.to"
        :icon="item.icon"
        :label="item.label" />
      </q-tabs>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header>
          Navigation
        </q-item-label>
        <q-item
          v-for="(item, index) in navs"
          :key="index"
          :to="item.to"
          class="text-grey-5"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/',
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  @media screen and (min-width: 768px){
    .q-footer{
      display: none;
    }
  }
  .q-drawer {
    .q-router-link--exact-active{
    color: #fff !important;
    }
  }
</style>
