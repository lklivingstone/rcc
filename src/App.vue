<template>
  <Navbar />
  <Hero />
  <Clients />
  <CompanyProfile />
  <Projects />
  <WhyUs />
  <Footer />
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Hero from './components/hero/Hero.vue'
import Clients from './components/clients/Clients.vue'
import CompanyProfile from './components/companyProfile/CompanyProfile.vue'
import Projects from './components/projects/Projects.vue'
import WhyUs from './components/whyUs/WhyUs.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Clients,
    CompanyProfile,
    Projects,
    WhyUs,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
