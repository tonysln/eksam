<template>
  <div id="themeContainer" :class="{ dark: this.darkModeEnabled }">
    <header>
      <div class="container">
        <h1>Matemaatika Materjalid</h1>
        <h3>Valmistumine riigieksamiks</h3>
        <div class="options-panel no-select">
          <span
            @click="toggleTheme"
            v-html="this.darkModeEnabled ? sunSvg : moonSvg"
          ></span>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="main--grid">
        <Menu />
        <router-view />
      </div>
    </div>
    <Footer v-show="$route.name !== 'Home'" />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

// TODO re-write this with setup() and ref
export default {
  name: 'App',
  components: {
    Menu,
    Footer,
  },
  data: () => ({
    darkModeEnabled: (localStorage.getItem('darkModeEnabled') !== null) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches),
    moonSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
    sunSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ededed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>',
  }),
  methods: {
    toggleTheme() {
      this.darkModeEnabled = !this.darkModeEnabled;
      if (this.darkModeEnabled) {
        localStorage.setItem('darkModeEnabled', 'true');
      } else {
        localStorage.removeItem('darkModeEnabled');
      }
    },
  },
};
</script>

<style>
</style>
