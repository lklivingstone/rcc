<template>
    <div class="container">
      <div v-intersect="showElement" class="box hidden">
        <img :src="require(`../../assets/gear.svg`)">
        <div class="text">
          <p class="header">About Us</p>
          <p class="body">
            We are a leading organization engaged in rendering Construction and Rental Services. With years of
            experience, we specialize in the construction of industrial buildings, high-rise commercial complexes,
            warehouses, and turnkey projects. Our team of dedicated professionals ensures the timely
            implementation of our solutions, catering to the residential, commercial, and industrial sectors.
          </p>
        </div>
      </div>
      <div v-intersect="showElement" class="box hidden">
        <img :src="require(`../../assets/crane.svg`)">
        <div class="text">
          <p class="header">Our Services</p>
          <p class="body">
            Rao Construction Company, we pride ourselves on our ability to deliver high-quality construction
            services with utmost perfection and excellence. Our expertise lies in providing aesthetically appealing
            and functional layouts for establishments. We believe in mechanized working to ensure fast and
            efficient project completion. Additionally, we offer equipment rental services, including cranes, to our
            valuable customers.
          </p>
        </div>
      </div>
      <div v-intersect="showElement" class="box hidden">
        <img :src="require(`../../assets/gear.svg`)">
        <div class="text">
          <p class="header">Our Strengths</p>
          <p class="body">
            With an efficient workforce and the latest techniques, machines, and equipment, we are capable of
            delivering accurate and timely construction solutions. We prioritize the use of premium quality raw
            materials sourced from trusted vendors in the market, ensuring the durability and longevity of our
            projects.
          </p>
        </div>
      </div>
      <div v-intersect="showElement" class="box hidden">
        <img :src="require(`../../assets/team.svg`)">
        <div class="text">
          <p class="header">Management</p>
          <p class="body">
            Under the visionary guidance of our Managing Director, Mr. Sunil Rao, we have established ourselves
            as an eminent name in the construction industry. His in-depth knowledge and years of experience
            have helped us attain a strong foothold in the market.
          </p>
        </div>
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
  transform: translateY(20px);
  transition: all 0.3s;
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}

@media(prefers-reduced-motion) {
  .hidden {
    transition: none;
  }
}

img {
  height: 15%;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  padding: 100px;
  padding-left: 10vw;
  padding-right: 10vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 1;
  background-color: #DFE5E9;
  background: linear-gradient(rgba(223, 229, 233, .9), rgba(223, 229, 233, .9)), url('../../assets/bg-lines.jpg') center/cover no-repeat;
}

.text {
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.header {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.body {
  font-size: 1.0rem;
}

.box {
  width: 23%; /* Adjust the width as per your design */
  margin-bottom: 10px;
  /* background-color: lightgray; */
  box-sizing: border-box;
  height: 50vh;
  padding: 30px;
}

/* Media queries for responsive design */
@media (max-width: 1200px) {
  .box {
    width: 48%; /* Show 2 divs per row on medium screens */
  }
}

@media (max-width: 600px) {
  .box {
    width: 100%; /* Show 1 div per row on small screens */
  }
}
</style>
