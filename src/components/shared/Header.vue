<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <RouterLink to="/" class="navbar-brand">NapredniVezba</RouterLink>
      </div>
      <ul class="nav navbar-nav">
        <li class="active">
          <RouterLink to="/">Pocetna</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">O nama</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">Kontakt</RouterLink>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <RouterLink to="/shoppingcart">
            <span class="glyphicon glyphicon-shopping-cart"></span> Korpa
          </RouterLink>
        </li>
        <li>
          <a href="#">
            <span class="glyphicon glyphicon-user"></span> Registracija
          </a>
        </li>
        <li>
          <a href="#">
            <span class="glyphicon glyphicon-log-in"></span> Prijava
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
nav {
  border-radius: 0px;
}
</style>