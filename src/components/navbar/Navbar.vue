<template>
    <div>
      <div id="navbar" :style="{ top: navbarTop }">
        <div class="logo">
            <a href="#home">Logo.</a>
        </div>
        <div class="options">
            <a href="#company">Company</a>
            <a href="#clients">Clients</a>
            <a href="#projects">Projects</a>
            <a href="#joinus">Join Us</a>
            <a href="#contactus">Contact Us</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        prevScrollPos: 0,
        navbarTop: '0',
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
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos <= 150) {
                this.navbarTop = '0';
            } else {
                if (this.prevScrollPos > currentScrollPos) {
                this.navbarTop = '0';
                } else {
                this.navbarTop = '-70px';
                }
            }
            this.prevScrollPos = currentScrollPos;
        },
    },
  };
  </script>
  
<style scoped>
    body {
        margin: 0;
        background-color: #DFE5E9;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    #navbar {
        background-color: #DFE5E9;
        color: #3F3F3F;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        /* display: block; */
        display: flex;
        justify-content: space-between;
        transition: top 0.3s;
        display: flex;
        z-index: 100;
    }
  
    a {
        color: #3F3F3F;
        text-align: center;
        text-decoration: none;
    }
  
    .logo:hover {
        background-color: #ddd;
        color: 3F3F3F;
    }

    .logo {
        height: 100%;
        width: 20%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 25px;
        font-weight: 600;
    }

    .options {
        width: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
  