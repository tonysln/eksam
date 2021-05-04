<template>
  <div class="grid--menu">
    <div class="menucontent" id="menu">
      <!-- TODO: make a separate list with titles & subtitles, use v-for or such -->
      <router-link class="menu-item" to="/">Avaleht</router-link><br />
      <router-link class="menu-item" to="/kursus1"
        >I. Avaldised ja arvuhulgad</router-link
      ><br />
      <router-link class="menu-item" to="/kursus2"
        >II. Võrrandid ja võrrandisüsteemid</router-link
      ><br />
      <router-link class="menu-item" to="/kursus3"
        >III. Võrratused. Trigonomeetria I</router-link
      ><br />
      <router-link class="menu-item" to="/kursus4"
        >IV. Trigonomeetria II</router-link
      ><br />
      <router-link class="menu-item" to="/kursus5"
        >V. Vektor tasandil. Joone võrrand</router-link
      ><br />
      <router-link class="menu-item" to="/kursus6"
        >VI. Tõenäosus, statistika</router-link
      ><br />
      <router-link class="menu-item" to="/kursus7"
        >VII. Funktsioonid. Arvjadad</router-link
      ><br />
      <router-link class="menu-item" to="/kursus8"
        >VIII. Eksponent- ja logaritmfunktsioon</router-link
      ><br />
      <router-link class="menu-item" to="/kursus9"
        >IX. Trigonomeetrilised funktsioonid. Funktsiooni piirväärtus ja
        tuletis</router-link
      ><br />
      <router-link class="menu-item" to="/kursus10"
        >X. Tuletise rakendused</router-link
      ><br />
      <router-link class="menu-item" to="/kursus11"
        >XI. Integraal. Planimeetria</router-link
      ><br />
      <router-link class="menu-item" to="/kursus12"
        >XII. Sirge ja tasand ruumis</router-link
      ><br />
      <router-link class="menu-item" to="/kursus13"
        >XIII. Stereomeetria</router-link
      ><br />
      <router-link class="menu-item" to="/kursus14"
        >XIV. Matemaatika rakendused, reaalsete protsesside
        uurimine</router-link
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  components: {},
};
</script>
