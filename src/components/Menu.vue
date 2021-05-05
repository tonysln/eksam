<template>
  <div class="grid--menu">
    <div class="menucontent" id="menu">
      <router-link class="menu-item" to="/">Avaleht</router-link>
      <div v-for="(course, co_idx) of courses" :key="co_idx">
        <router-link class="menu-item" :to="course.route">{{
          course.title
        }}</router-link>
        <div v-show="$route.path === '/' + course.route" class="submenu">
          <p
            v-for="(chapter, ch_idx) of course.chapters"
            :key="ch_idx"
            class="submenu-item"
          >
            {{ chapter }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import courses from '@/data/courses.json';

export default {
  setup() {
    return {
      courses,
    };
  },
};
</script>
