<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/">Главная</a>
          <a class="nav-link active" href="/statement">Журнал</a>
          <a class="nav-link active" href="/map">Карта</a>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
body{  
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
}

@import url('../node_modules/ol/ol.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 
html, body, #map, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
