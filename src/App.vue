<template>
  <div id="app" class="container">
    <Header v-bind:brojac="brojac" />
    <RouterView v-on:dodato="proba" />
  </div>
</template>

<script>
import Header from "./components/shared/Header";

export default {
  components: {
    Header,
  },
  data: function () {
    return {
      products: [],
      brojac: 0,
    };
  },
  methods: {
    proba: function () {
      this.brojac++;
    },
  },
  created() {
    // this.$store.dispatch("listaObjava");
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  color: #42b983; */
</style>
