<template>
  <div class="panel panel-primary">
    <CardHeading v-bind:name="item.name" v-bind:tip="item.tip" />
    <div class="panel-body">
      <img v-bind:src="item.image" />
    </div>
    <div class="panel-footer">
      <h3>{{item.price}} din</h3>
      <h2>{{brojac}}</h2>
      <button v-on:click="brojac++">Povecaj</button>
    </div>
  </div>
</template>

<script>
import CardHeading from "./cardHeading";

export default {
  name: "Card",
  components: {
    CardHeading,
  },
  props: {
    item: Object,
  },
  data: function () {
    return {
      brojac: 0,
    };
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