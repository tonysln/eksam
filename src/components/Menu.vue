<template>
  <div class="grid--menu">
    <div class="menucontent" id="menu">
      <router-link class="menu-item" to="/">Avaleht</router-link>
      <div v-for="(course, co_idx) of courses" :key="co_idx">
        <router-link class="menu-item" :to="course.route">{{
          course.title
        }}</router-link>
        <div v-show="$route.path === '/' + course.route" class="submenu">
          <a
            v-for="(chapter, ch_idx) of course.chapters"
            :key="ch_idx"
            :href="chapterID(co_idx, ch_idx)"
            class="submenu-item"
            >{{ chapter }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import courses from '@/data/courses.json';

export default {
  setup() {
    function chapterID(coIdx, chIdx) {
      return `kursus${coIdx + 1}_ch${chIdx + 1}`;
    }

    return {
      courses,
      chapterID,
    };
  },
};
</script>
