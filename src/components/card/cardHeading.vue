<template>
  <div class="panel-heading" v-bind:style="'background-color: ' + boja">
    <h4>{{name}}</h4>
  </div>
</template>

<script>
export default {
  name: "CardHeading",
  props: {
    name: String,
    tip: String,
  },
  data: function () {
    return {
      boja: "blue",
    };
  },
  created: function () {
    if (this.tip == "graficka kartica") {
      this.boja = "red";
    }
  },
};
</script>

<style>
</style>