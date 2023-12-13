<template>
  <h1 class="heading">Our Projects</h1>
  <div class="container">
    <div class="card" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
    <div class="card" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
    <div class="card" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
    <div class="card" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
    <div class="card" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
    <div class="card" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.heading {
  padding: 50px;
  background-color: #DFE5E9;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #DFE5E9;
  /* width: 95vw; */
  padding-left: 5%;
  padding-right: 5%;
}

.card {
  width: 300px;
  background-color: aliceblue;
  overflow: hidden;
  height: 385px;
  margin: 50px;
  background: radial-gradient(#3f3f3f 50%, #3f3f3f 100%);
  position: relative;
}

.card img {
  height: 100%;
  width: auto;
  transform: scale(1.3);
  transition: all 0.3s ease-out;
}

.card:hover img {
  transform: scale(1.1) translateY(-10px);
  opacity: 0.5;
}

.name {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  transform: translateY(30px);
  transition: all 0.2s ease-out 0.2s;
  opacity: 0;
}

.card:hover .name {
  transform: translateY(0px);
  opacity: 1;
}

</style>
