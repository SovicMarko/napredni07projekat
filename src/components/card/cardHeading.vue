<template>
  <div class="panel-heading" v-bind:style="'background-color: ' + boja">
    <RouterLink v-bind:to="'/product/' + id">
      <h4>{{ name }}</h4>
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
    return {};
  },
  computed: {
    boja: function () {
      if (this.tip == "graficka kartica") {
        return "#8e3d3d";
      } else if (this.tip == "procesor") {
        return "#5050a1";
      } else {
        return "#f0f0f0";
      }
    },
  },
  methods: {},
  created: function () {},
};
</script>

<style scoped>
a {
  color: inherit;
}
</style>