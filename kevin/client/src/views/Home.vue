<template>
  <div class="home text-center">
    <div class="jumbotron">
      <h1 class="display-3">BLOG'S TOROSINA</h1>
      <p class="lead">
        Graficacion y Animacion
      </p>
      <hr class="my-4">
      <p>
        <img src="../assets/kevin1.jpg" />

      </p>
      <p class="lead">
        <router-link
          class="btn btn-primary btn-lg"
          :to="{ name: 'signup' }"
          role="button">Registrarse</router-link>
      </p>
      <p class="lead">
        <router-link
          class="btn btn-primary btn-lg"
          :to="{ name: 'login' }"
          role="button">Iniciar Sesion</router-link>
      </p>
      <p>
			<a href="https://www.facebook.com/kevin.torosina" target="_blank"><img alt="siguenos en facebook" height="40" src="http://1.bp.blogspot.com/-26xGT3R3DRQ/UiX1SY8I8oI/AAAAAAAAB4Y/bKCnHS9IorE/s1600/Facebook+alt+1.png" title="siguenos en facebook" width="40" /></a>
			<a href="https://twitter.com/txevi10" target="_blank"><img alt="siguenos en Twitter" height="40" src="http://2.bp.blogspot.com/-ZaTYz5sdFmc/UiX1V-AhNLI/AAAAAAAAB6M/ufa5OqT3x4o/s1600/Twitter+alt+4.png" title="siguenos en Twitter" width="40" /></a>
			<a href="https://www.youtube.com/channel/UCMVgmKx2JVBFbzW_DmTKXDA?view_as=subscriber" target="_blank"><img alt="Canal de youtube" height="40" src="http://4.bp.blogspot.com/-NFK4YtYPiXw/UiX1X0rq9pI/AAAAAAAAB7w/l_cIRw8Cij0/s1600/Youtube+alt+2.png" title="Canal de youtube" width="40" /></a>
			<a href="https://www.instagram.com/xevidj/" target="_blank"><img alt="s�gueme en Instagram" height="40" src="http://1.bp.blogspot.com/-y2Hmt1c7DO8/UidPHZf07cI/AAAAAAAAB_4/VoI2-auBvNU/s1600/instagram2.png" title="s�gueme en Instagram" width="40" /></a>
			</p>
      <p>
      <font size=3>Todos los Derechos Reservados 2018 - DISEÑADO por TOROSINA.</font>
    </p>


    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
};
</script>
