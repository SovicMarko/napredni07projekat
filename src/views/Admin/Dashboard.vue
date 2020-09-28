<template>
  <div>
    <h1>Dashboard</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>br.</th>
          <th>Proizvod</th>
          <th>Naziv</th>
          <th>Cena</th>
          <th>Popust</th>
          <th>Obrisi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" v-bind:key="item.id">
          <td>{{ index + 1 }}.</td>
          <td><img v-bind:src="item.image" /></td>
          <td>{{ item.name }}</td>
          <td>{{ formatPrice(item.price) }} din.</td>
          <td v-if="item.discount">{{ item.discount }} %</td>
          <td v-else></td>
          <td>
            <button class="btn btn-danger" v-on:click="deletePost(item.id)">
              <span class="glyphicon glyphicon-trash"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import db from "../../firebase";
import formatPrice from "../../mixins/formatPrice";

export default {
  name: "Dashboard",
  props: {
    products: Array,
  },
  methods: {
    deletePost: function (id) {
      db.collection("objave")
        .doc(id)
        .delete()
        .then(function () {
          alert("Objava je uspesno obrisana!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
  },
  mixins: [formatPrice],
};
</script>

<style scoped>
img {
  width: 50px;
}
</style>