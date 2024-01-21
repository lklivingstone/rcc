<template>
    <Navbar />
    <ProjectsSlider />
    <MajorProjects />
    <Footer />
</template>
  
<script>
import ProjectsSlider from './components/ProjectsSlider.vue';
import MajorProjects from './components/MajorProjects.vue';
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
    name: 'projects',
    components: {
        ProjectsSlider,
        MajorProjects,
        Navbar,
        Footer
    }
}
</script>

<style scoped>

</style>