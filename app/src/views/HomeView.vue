<template>
  <div class="home">
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="../assets/statement.jpg" class="card-img-top" alt="#">
      <div class="card-body">
        <h5 class="card-title">Журнал</h5>
        <p class="card-text">В этом разделе Вы можете оставить свою заявку. Также возможен просмотр всех текущих заявок.</p>
        <div class="container"><a href="/statement" class="btn btn-primary">Перейти</a></div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="../assets/map.jpg" class="card-img-top" alt="#">
      <div class="card-body">
        <h5 class="card-title">Карта</h5>
        <p class="card-text">В этом разделе Вы можете открыть динамическую карту.</p>
        <div class="container"><a href="/map" class="btn btn-primary">Перейти</a></div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<style scoped>
  .row {
    position: absolute;
    top: 55%;
    left: 60%;
    transform: translate(-50%, -50%);
   
    height: 80%;
    width: 80%;

    text-align:justify;
  }

  .btn {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .container {
    padding-top: 50%;
  }
</style>

<script setup>

</script>
