<template>
  <div
    class="hero"
    :style="{ transform: `translateY(${heroOffset}px)` }"
  >
    <h1>Rao Construction Company</h1>
    <p>At Rao Construction Company, we are committed to delivering excellence in construction services.
Contact us today for all your construction needs.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroOffset: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.heroOffset = window.scrollY  * 0.5;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.hero {
  height: 80vh;
  /* width: 100vw; */
  background: url('../../../../assets/hero-bg.png') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 30%;
  text-align: left;
  position: relative;
  z-index: -100;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

</style>
