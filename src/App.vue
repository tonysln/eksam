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

<style global>
/* TODO move this into a file */
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  width: 100%;
  color: #3a3a3a;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

#themeContainer {
  height: 100%;
  width: 100%;
}

a,
.ex-open {
  color: rgb(33, 50, 145);
  text-decoration: none;
  cursor: pointer;
}
a:hover,
a:active,
.ex-open:hover,
.ex-open:active {
  text-decoration: underline;
}
.container {
  max-width: 1190px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
  color: #464646;
}
.thinhr {
  opacity: 0.25;
}

header {
  padding-top: 40px;
  padding-bottom: 20px;
  line-height: 1;
}

header h1 {
  margin-bottom: 6px;
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.main--grid {
  display: grid;
  /* grid-template-columns: 35% 65%; */
  grid-template-columns: 7fr 13fr;
  grid-gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.menucontent {
  padding: 20px;
  background: rgb(240, 240, 240);
  border-radius: 3px;
}

.options-panel {
  float: right;
  margin-top: -30px;
  cursor: pointer;
}

.menu-item {
  margin-bottom: 10px;
  display: block;
}

.submenu {
  padding-left: 8%;
  /* margin-top: 6px; */
  margin-bottom: 6px;
  max-width: 92%;
}

.submenu-item {
  margin-bottom: 8px;
  display: block;
  color: #333;
}

.grid--content p {
  margin-top: 18px;
  margin-bottom: 18px;
  line-height: 1.5;
  padding-left: 4%;
}

.grid--content h3 {
  margin-top: 40px;
}

.grid--content h3:first-of-type {
  margin-top: 20px;
}

.content-title {
  margin-bottom: 10px;
}

.examp {
  background: rgba(33, 50, 145, 0.07);
  margin-top: 20px;
  overflow: hidden;
  border-radius: 3px;
}

.ex-closed {
  padding: 5px;
  padding-left: 14px;
  height: 32px;
}

.ex-opened {
  padding-top: 5px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 14px;
  height: auto;
}

footer {
  font-size: 1.4rem;
  color: gray;
  margin-top: 50px;
}

.footer-flex {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 949px) {
  .container {
    padding-left: 12px;
    padding-right: 12px;
  }

  .main--grid {
    grid-template-columns: 1fr;
  }
  .grid--content p {
    padding-left: 0;
  }
}

@media screen and (min-width: 950px) and (max-width: 1124px) {
  .main--grid {
    /* grid-template-columns: 30% 70%; */
    grid-template-columns: 3fr 7fr;
    grid-gap: 16px;
  }
}

body .dark {
  background: #2b2b2b;
  color: rgb(229, 229, 229);
}

html,
body,
#app,
.dark {
  min-height: 100vh;
}

.dark h1,
.dark h2,
.dark h3,
.dark h4,
.dark h5,
.dark h6 {
  color: rgb(229, 229, 229);
}

.dark footer {
  color: rgb(229, 229, 229);
}

.dark .examp,
.dark .menucontent {
  background: rgba(71, 74, 96, 0.666);
}

.dark .submenu-item {
  color: rgb(205, 205, 205);
}

.dark .ex-open,
.dark a {
  color: rgb(174, 181, 217);
}
</style>
