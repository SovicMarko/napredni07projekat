<template>
  <div class="panel-footer">
    <div>
      <div>
        <h3>{{price}} din</h3>
      </div>
      <div>
        <button class="btn btn-info minus" v-on:click="smanji">
          <span class="glyphicon glyphicon-minus"></span>
        </button>
        <input class="form-control" type="text" v-model="brojac" />
        <button class="btn btn-info plus" v-on:click="brojac++">
          <span class="glyphicon glyphicon-plus"></span>
        </button>
        <button class="btn btn-primary korpa">
          <span class="glyphicon glyphicon-shopping-cart"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFooter",
  props: {
    price: Number,
  },
  data: function () {
    return {
      brojac: 1,
    };
  },
  methods: {
    smanji: function () {
      if (this.brojac > 1) {
        this.brojac--;
      }
    },
  },
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
  margin-left: 10px;
}
</style>