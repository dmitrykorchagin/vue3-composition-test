<template>
  <component :is="`${name}-layout`" />
</template>

<script>
import AuthLayout from '@/layout/AuthLayout.vue';
import MainLayout from '@/layout/MainLayout.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
export default {
  components: { AuthLayout, MainLayout },
  setup() {
    const route = useRoute();

    return {
      name: computed(() => route.meta.layout),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
