<template>
  <HomePage />
</template>

<script setup>
import HomePage from './components/HomePage.vue';

</script>

<!-- <script lang="ts">

import { Options, Vue } from 'vue-class-component';
import HomePage from './components/HomePage.vue';


@Options({
  components: {
    HomePage,
  },
})
export default class App extends Vue {}
</script> -->

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Work Sans';
    font-style: normal;
}
body{
    color: #000000;
    height: 100%;
}
</style>
