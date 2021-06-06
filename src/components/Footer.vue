<template>
  <footer>
    <div class="container">
      <hr class="thinhr" />
      <div class="footer-flex">
        <p class="footer-note">2021 - Anton Slavin</p>
        <a @click.prevent="scrollToTop" class="no-select">Tagasi üles</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  setup() {
    function scrollToTop() {
      window.scrollTo(0, 0);
    }
    return {
      scrollToTop,
    };
  },
};
</script>
