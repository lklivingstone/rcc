<template>
    <Navbar />
    <Hero />
    <Clients />
    <CompanyProfile />
    <Projects />
    <WhyUs />
    <Footer />
</template>
  
<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Hero from './components/hero/Hero.vue';
import Clients from './components/clients/Clients.vue';
import CompanyProfile from './components/companyProfile/CompanyProfile.vue';
import Projects from './components/projects/Projects.vue';
import WhyUs from './components/whyUs/WhyUs.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
    name: 'home',
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

<style scoped>

</style>