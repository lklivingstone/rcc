<template>
    <Navbar />
    <Emailer />
    <Footer />
</template>
  
<script>
import Emailer from './components/Emailer.vue';
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
    name: 'conact-us',
    components: {
        Emailer,
        Navbar,
        Footer,
    }
}
</script>

<style scoped>

</style>