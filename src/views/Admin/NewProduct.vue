<template>
  <div class="row">
    <div class="col col-md-offset-1 col-md-6">
      <form>
        <div class="form-group">
          <label for="sel1">Tip proizvoda:</label>
          <select class="form-control" id="sel1" v-model="item.tip">
            <option value="graficka kartica">graficka kartica</option>
            <option value="procesor">procesor</option>
          </select>
        </div>

        <div class="form-group">
          <label for="name">Naziv:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="item.name"
          />
        </div>
        <div class="form-group">
          <label for="price">Cena:</label>
          <input
            type="text"
            class="form-control"
            id="price"
            v-model.number="item.price"
          />
        </div>
        <div class="form-group">
          <label for="disc">Popust:</label>
          <input
            type="text"
            class="form-control"
            id="disc"
            v-model.number="item.discount"
          />
        </div>
        <div class="form-group">
          <label for="image">Slika:</label>
          <input
            type="text"
            class="form-control"
            id="image"
            v-model="item.image"
          />
        </div>
        <div class="form-group">
          <label for="desc">Opis:</label>
          <textarea
            class="form-control"
            rows="5"
            id="desc"
            v-model="item.description"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-default" v-on:click="createPost">
          Submit
        </button>
      </form>
    </div>
    <div class="col col-md-offset-1 col-md-3">
      <Card v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import Card from "../../components/card/component";
import db from "../../firebase";

export default {
  name: "NewProduct",
  components: {
    Card,
  },
  data: function () {
    return {
      item: {
        tip: "",
        name: "",
        price: 0,
        discount: 0,
        image: "",
        description: "",
      },
    };
  },
  methods: {
    createPost: function () {
      let self = this;

      db.collection("objave")
        .doc()
        .set({
          tip: self.item.tip,
          name: self.item.name,
          image: self.item.image,
          price: Number(self.item.price),
          description: self.item.description,
          discount: Number(self.item.discount),
        })
        .then(function () {
          alert("Objava je uspesno uneta");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
.col {
  text-align: left;
}
</style>