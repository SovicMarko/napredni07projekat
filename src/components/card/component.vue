<template>
  <div class="panel panel-primary">
    <CardHeading
      v-bind:name="item.name"
      v-bind:tip="item.tip"
      v-bind:id="item.id"
    />
    <CardBody v-bind:image="item.image" v-bind:discount="item.discount" />
    <CardFooter
      v-bind:price="item.price"
      v-bind:discount="item.discount"
      v-on:dodato="proba"
    />
  </div>
</template>

<script>
import CardHeading from "./cardHeading";
import CardBody from "./cardBody";
import CardFooter from "./cardFooter";

export default {
  name: "Card",
  components: {
    CardHeading,
    CardBody,
    CardFooter,
  },
  props: {
    item: Object,
  },
  data: function () {
    return {
      brojac: 0,
    };
  },
  methods: {
    proba: function () {
      this.brojac++;
      this.$emit("dodato");
    },
  },
};
</script>

<style scoped>
.panel-heading {
  height: 80px;
}
.panel-body {
  height: 300px;
}
</style>