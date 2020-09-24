<template>
  <div class="panel-body">
    <img v-bind:src="image" />
    <div class="popust" v-if="discount">
      -{{ discount }}%
      <div id="triangle-down"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBody",
  props: {
    image: String,
    discount: Number,
  },
};
</script>

<style scoped>
* {
  /* outline: 1px dashed green; */
}
img {
  max-width: 100%;
  max-height: 100%;
}
.panel-body {
  position: relative;
}
.popust {
  position: absolute;
  right: 15px;
  top: 0px;
  background-color: khaki;
  width: 70px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  /* border-radius: 40px; */
}
#triangle-down {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-top: 30px solid khaki;
  left: 0px;
  bottom: -30px;
}
</style>