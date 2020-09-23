<template>
  <div class="panel-heading" v-bind:style="'background-color: ' + boja">
    <RouterLink v-bind:to="'/product/' + id">
      <h4>{{name}}</h4>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "CardHeading",
  props: {
    name: String,
    tip: String,
    id: Number,
  },
  data: function () {
    return {
      boja: "#5050a1",
    };
  },
  created: function () {
    if (this.tip == "graficka kartica") {
      this.boja = "#8e3d3d";
    }
  },
};
</script>

<style scoped>
a {
  color: inherit;
}
</style>