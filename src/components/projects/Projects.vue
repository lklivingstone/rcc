<template>
  <h1 class="heading">Our Projects</h1>
  <div class="container">
    <div v-intersect="showElement" class="card hidden" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
    <div v-intersect="showElement" class="card hidden" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
    <div v-intersect="showElement" class="card hidden" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
    <div v-intersect="showElement" class="card hidden" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
    <div v-intersect="showElement" class="card hidden" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
    <div v-intersect="showElement" class="card hidden" >
      <img :src="require(`../../assets/project-1.jpg`)">
      <p class="name">PROJECT 1</p>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    intersect: {
      mounted(el, binding) {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              binding.value(el);
            }
          });
        }, options);

        observer.observe(el);
      },
    },
  },
  methods: {
    showElement(el) {
      el.classList.add('show');
    },
  },
};
</script>

<style scoped>
.hidden {
  opacity: 0;
  filter: blur(3px);
  transform: translateX(-50px);
  transition: all 0.3s;
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

.card:nth-child(2) {
  transition-delay: 200ms;
}

.card:nth-child(3) {
  transition-delay: 300ms;
}

.card:nth-child(4) {
  transition-delay: 400ms;
}

.card:nth-child(5) {
  transition-delay: 500ms;
}

.card:nth-child(6) {
  transition-delay: 600ms;
}


@media(prefers-reduced-motion) {
  .hidden {
    transition: none;
  }
}

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
  height: 240px;
  margin: 20px 50px;
  background: radial-gradient(#3f3f3f 50%, #3f3f3f 100%);
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
