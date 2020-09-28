<template>
  <div class="panel-footer">
    <div>
      <div v-if="discount">
        <h4>
          <del>{{ formatPrice(price) }} din</del>
        </h4>
        <h3>{{ formatPrice(discountedPrice) }} din</h3>
      </div>
      <div v-else>
        <h4 class="hiddentext">--</h4>
        <h3>{{ formatPrice(price) }} din</h3>
      </div>

      <div>
        <button class="btn btn-info minus" v-on:click="smanji">
          <span class="glyphicon glyphicon-minus"></span>
        </button>
        <input class="form-control" type="text" v-model="brojac" />
        <button class="btn btn-info plus" v-on:click="brojac++">
          <span class="glyphicon glyphicon-plus"></span>
        </button>
        <button class="btn btn-primary korpa" v-on:click="dodajUKorpu">
          <span class="glyphicon glyphicon-shopping-cart"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { korpa } from "../../main";
import formatPrice from "../../mixins/formatPrice";

export default {
  name: "CardFooter",
  props: {
    price: Number,
    discount: Number,
  },
  data: function () {
    return {
      brojac: 1,
    };
  },
  computed: {
    discountedPrice: function () {
      return this.price - this.price * (this.discount / 100);
    },
  },
  methods: {
    smanji: function () {
      if (this.brojac > 1) {
        this.brojac--;
      }
    },
    dodajUKorpu: function () {
      this.$emit("dodato");
      korpa.$emit("dodato");
    },
  },
  mixins: [formatPrice],
};
</script>

<style scoped>
button,
input {
  vertical-align: middle;
}
input {
  width: 40px;
  text-align: center;
  display: inline-block;
  border-radius: 0px;
}
.minus {
  border-radius: 3px 0px 0px 3px;
}
.plus {
  border-radius: 0px 3px 3px 0px;
}
.korpa {
  width: 100px;
  margin-left: 10px;
}
.panel-footer {
  height: 120px;
}
.hiddentext {
  color: rgba(0, 0, 0, 0);
}
h4 {
  font-size: 15px;
  margin: 1px;
  color: gray;
}
h3 {
  margin-top: 3px;
}
</style>