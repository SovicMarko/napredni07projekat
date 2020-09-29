<template>
  <div class="home">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="pretraga"
      />
      <div class="input-group-btn">
        <button class="btn btn-default" type="submit">
          <i class="glyphicon glyphicon-search"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in filteredProducts"
        v-bind:key="index"
        class="col col-md-3"
      >
        <Card v-bind:item="item" v-on:dodato="proba" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/card/component";

export default {
  name: "Home",
  components: {
    Card,
  },
  data: function () {
    return {
      products: [],
      pretraga: "",
    };
  },
  computed: {
    filteredProducts: function () {
      let objave = [];
      this.products.forEach((product) => {
        if (
          product.name.toUpperCase().indexOf(this.pretraga.toUpperCase()) > -1
        ) {
          objave.push(product);
        }
      });
      return objave;
    },
  },
  methods: {
    proba: function () {
      this.$emit("dodato");
    },
  },
  created() {
    this.$store.dispatch("listaObjava");
    this.products = this.$store.state.objave;
  },
};
</script>

<style scoped>
.input-group {
  margin-bottom: 20px;
}
</style>
