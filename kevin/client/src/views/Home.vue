<template>
  <div class="home text-center">
    <div class="jumbotron">
      <h1 class="display-3">BLOG'S TOROSINA</h1>
      <p class="lead">
        Graficacion y Animacion
      </p>
      <hr class="my-4">
      <p>
        CREATED BY KEVIN TOROSINA
      </p>
      <p class="lead">
        <router-link
          class="btn btn-primary btn-lg"
          :to="{ name: 'signup' }"
          role="button">Registrarse</router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
};
</script>
