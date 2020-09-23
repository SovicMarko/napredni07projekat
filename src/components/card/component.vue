<template>
  <div class="panel panel-primary">
    <CardHeading v-bind:name="item.name" v-bind:tip="item.tip" v-bind:id="item.id" />
    <div class="panel-body">
      <img v-bind:src="item.image" />
    </div>
    <CardFooter v-bind:price="item.price" />
  </div>
</template>

<script>
import CardHeading from "./cardHeading";
import CardFooter from "./cardFooter";

export default {
  name: "Card",
  components: {
    CardHeading,
    CardFooter,
  },
  props: {
    item: Object,
  },
  data: function () {
    return {};
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
img {
  max-width: 100%;
  max-height: 100%;
}
</style>