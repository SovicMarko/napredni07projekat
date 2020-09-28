<template>
  <div id="app" class="container">
    <Header v-bind:brojac="brojac" />
    <RouterView v-bind:products="products" v-on:dodato="proba" />
  </div>
</template>

<script>
import Header from "./components/shared/Header";
// import MY_JSON from "./data/products.json";
import db from "./firebase";

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
    readData: function () {
      let objave = [];
      let self = this;

      db.collection("objave")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            objave.push({
              id: doc.id,
              tip: doc.data().tip,
              name: doc.data().name,
              image: doc.data().image,
              price: doc.data().price,
              description: doc.data().description,
              discount: doc.data().discount,
            });
          });
          self.products = objave;
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    },
  },
  created: function () {
    // this.products = MY_JSON;
    // db.collection("objave").where("capital", "==", true)
    this.readData();
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
