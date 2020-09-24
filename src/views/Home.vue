<template>
  <div class="home">
    <div class="row">
      <div
        v-for="(item, index) in products"
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
  props: {
    products: Array,
  },
  components: {
    Card,
  },
  data: function () {
    return {};
  },
  methods: {
    proba: function () {
      this.$emit("dodato");
    },
  },
};
</script>
