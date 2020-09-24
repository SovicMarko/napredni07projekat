<template>
  <div>
    <h1 class="page-header">{{ product.name }}</h1>
    <div class="row">
      <div class="col col-md-6">
        <img v-bind:src="product.image" class="img-responsive img-thumbnail" />
      </div>
      <div class="col col-md-6">
        <h3 v-html="product.description"></h3>
        <CardFooter
          v-bind:price="product.price"
          v-bind:discount="product.discount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardFooter from "../components/card/cardFooter";

export default {
  name: "Product",
  props: {
    products: Array,
  },
  components: {
    CardFooter,
  },
  data: function () {
    return {
      product: {},
    };
  },
  created: function () {
    this.products.forEach((e) => {
      if (e.id == this.$route.params.id) {
        this.product = e;
      }
    });
  },
};
</script>

<style>
</style>