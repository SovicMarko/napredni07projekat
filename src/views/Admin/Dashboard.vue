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
import formatPrice from "../../mixins/formatPrice";

export default {
  name: "Dashboard",
  data: function () {
    return {
      products: [],
    };
  },
  methods: {
    deletePost: function (id) {
      this.$store.dispatch("brisanjeObjave", id);
      this.products = this.$store.state.objave;
    },
  },
  mixins: [formatPrice],
  created() {
    this.$store.dispatch("listaObjava");
    this.products = this.$store.state.objave;
  },
};
</script>

<style scoped>
img {
  width: 50px;
}
</style>