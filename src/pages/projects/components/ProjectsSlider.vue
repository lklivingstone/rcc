<template>
    <div class="projects-slider-container">
        <h1 class="header">Site Pictures</h1>
        <div id="slider">
            <input type="radio" name="slider" id="s1">
            <input type="radio" name="slider" id="s2">
            <input type="radio" name="slider" id="s3" checked>
            <input type="radio" name="slider" id="s4">
            <input type="radio" name="slider" id="s5">
            <input type="radio" name="slider" id="s6">
            <input type="radio" name="slider" id="s7">
            <input type="radio" name="slider" id="s8">
            <input type="radio" name="slider" id="s9">
            <input type="radio" name="slider" id="s10">
            
            <label class="each-slider" for="s1" id="slide1">
                <div class="img-wrapper">
                    <img :src="require(`../../../assets/safeexpress_dhamna_1.jpg`)">
                    <p class="img-text">SAFEXPRESS LOGISTICS PARK, DHAMNA</p>
                </div>
            </label>
            <label class="each-slider" for="s2" id="slide2">
                <div class="img-wrapper">
                    <img :src="require(`../../../assets/safeexpress_dhamna_2.jpg`)">
                    <p class="img-text">SAFEXPRESS LOGISTICS PARK, DHAMNA</p>
                </div></label>
            <label class="each-slider" for="s3" id="slide3">
                <div class="img-wrapper">
                    <img :src="require(`../../../assets/safeexpress_dhamna_3.jpg`)">
                    <p class="img-text">SAFEXPRESS LOGISTICS PARK, DHAMNA</p>
                </div></label>
            <label class="each-slider" for="s4" id="slide4">
                <div class="img-wrapper">
                    <img :src="require(`../../../assets/pix_trp_plant.jpg`)">
                    <p class="img-text">PIX TRP PLANT, Nagalwadi</p>
                </div></label>
            <label class="each-slider" for="s5" id="slide5">
                <div class="img-wrapper">
                    <img :src="require(`../../../assets/pix_logistics_hub_1.jpg`)">
                    <p class="img-text">PIX LOGISTICS HUB, NAGPUR</p>
                </div>
            </label>
            <label class="each-slider" for="s6" id="slide6">
                <div class="img-wrapper">
                    <img :src="require(`../../../assets/pix_logistics_hub_2.jpg`)">
                    <p class="img-text">PIX LOGISTICS HUB, NAGPUR</p>
                </div>
            </label>
            <label class="each-slider" for="s7" id="slide7">
                <div class="img-wrapper">
                    <img :src="require(`../../../assets/pix_logistics_hub_3.jpg`)">
                    <p class="img-text">PIX LOGISTICS HUB, NAGPUR</p>
                </div>
            </label>
            <label class="each-slider" for="s8" id="slide8">
                <div class="img-wrapper">
                    <img :src="require(`../../../assets/pix_logistics_hub_4.jpg`)">
                    <p class="img-text">PIX LOGISTICS HUB, NAGPUR</p>
                </div>
            </label>
            <label class="each-slider" for="s9" id="slide9">
                <div class="img-wrapper">
                    <img :src="require(`../../../assets/pix_rubber_plant.jpg`)">
                    <p class="img-text">PIX RUBBER PLANT</p>
                </div>
            </label>
            <label class="each-slider" for="s10" id="slide10">
                <div class="img-wrapper">
                    <img :src="require(`../../../assets/da_rock.jpg`)">
                    <p class="img-text">DA ROCK</p>
                </div>
            </label>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'project_slider',

  };
  </script>
  
<style scoped>
.projects-slider-container {
    padding-bottom: 60px;
}

.header {
    padding-top: 50px;
    margin-bottom: 15px;
}

[type=radio] {
  display: none;
}

#slider {
  height: 30vw;
  position: relative;
  padding-left: 10vw;
  padding-right: 10vw;
  perspective: 70vw;
  transform-style: preserve-3d;
}

#slider label {
  margin: auto;
  width: 40%;
  height: 100%;
  border-radius: 4px;
  position: absolute;
  left: 0; right: 0;
  cursor: pointer;
  transition: transform 0.4s ease;
    border: 1px solid #3f3f3f;
    background-color: #f3f3f3;
}

#s1:checked ~ #slide8, #s2:checked ~ #slide9,
#s3:checked ~ #slide10, #s4:checked ~ #slide1,
#s5:checked ~ #slide2, #s6:checked ~ #slide3,
#s7:checked ~ #slide4, #s8:checked ~ #slide5,
#s9:checked ~ #slide6, #s10:checked ~ #slide7 {
    display: none;
  opacity: 0;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);
  transform: translate3d(-30%,0,-200px);
}

#s1:checked ~ #slide7, #s2:checked ~ #slide8,
#s3:checked ~ #slide9, #s4:checked ~ #slide10,
#s5:checked ~ #slide1, #s6:checked ~ #slide2,
#s7:checked ~ #slide3, #s8:checked ~ #slide4,
#s9:checked ~ #slide5, #s10:checked ~ #slide6 {
    display: none;
  opacity: 0;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);
  transform: translate3d(-30%,0,-200px);
}

#s1:checked ~ #slide6, #s2:checked ~ #slide7,
#s3:checked ~ #slide8, #s4:checked ~ #slide9,
#s5:checked ~ #slide10, #s6:checked ~ #slide1,
#s7:checked ~ #slide2, #s8:checked ~ #slide3,
#s9:checked ~ #slide4, #s10:checked ~ #slide5 {
    display: none;
  opacity: 0;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);
  transform: translate3d(-30%,0,-200px);
}

#s1:checked ~ #slide5, #s2:checked ~ #slide6,
#s3:checked ~ #slide7, #s4:checked ~ #slide8,
#s5:checked ~ #slide9, #s6:checked ~ #slide10,
#s7:checked ~ #slide1, #s8:checked ~ #slide2,
#s9:checked ~ #slide3, #s10:checked ~ #slide4 {
    display: none;
  opacity: 0;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);
  transform: translate3d(30%,0,-200px);
}

#s1:checked ~ #slide4, #s2:checked ~ #slide5,
#s3:checked ~ #slide6, #s4:checked ~ #slide7,
#s5:checked ~ #slide8, #s6:checked ~ #slide9,
#s7:checked ~ #slide10, #s8:checked ~ #slide1,
#s9:checked ~ #slide2, #s10:checked ~ #slide3 {
    display: none;
  opacity: 0;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);
  transform: translate3d(30%,0,-200px);
}

#s1:checked ~ #slide9, #s2:checked ~ #slide10,
#s3:checked ~ #slide1, #s4:checked ~ #slide2,
#s5:checked ~ #slide3, #s6:checked ~ #slide4,
#s7:checked ~ #slide5, #s8:checked ~ #slide6,
#s9:checked ~ #slide7, #s10:checked ~ #slide8 {
  opacity: 1;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);
  transform: translate3d(-30%,0,-200px);
}

#s1:checked ~ #slide10, #s2:checked ~ #slide1,
#s3:checked ~ #slide2, #s4:checked ~ #slide3,
#s5:checked ~ #slide4, #s6:checked ~ #slide5,
#s7:checked ~ #slide6, #s8:checked ~ #slide7,
#s9:checked ~ #slide8, #s10:checked ~ #slide9 {
  opacity: 1;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2);
  transform: translate3d(-15%,0,-100px);
}

#s1:checked ~ #slide1, #s2:checked ~ #slide2,
#s3:checked ~ #slide3, #s4:checked ~ #slide4,
#s5:checked ~ #slide5, #s6:checked ~ #slide6,
#s7:checked ~ #slide7, #s8:checked ~ #slide8,
#s9:checked ~ #slide9, #s10:checked ~ #slide10 {
  opacity: 1;
  box-shadow: 0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19);
  transform: translate3d(0,0,0);
}

#s1:checked ~ #slide2, #s2:checked ~ #slide3,
#s3:checked ~ #slide4, #s4:checked ~ #slide5,
#s5:checked ~ #slide6, #s6:checked ~ #slide7,
#s7:checked ~ #slide8, #s8:checked ~ #slide9,
#s9:checked ~ #slide10, #s10:checked ~ #slide1 {
  opacity: 1;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2);
  transform: translate3d(15%,0,-100px);
}

#s1:checked ~ #slide3, #s2:checked ~ #slide4,
#s3:checked ~ #slide5, #s4:checked ~ #slide6,
#s5:checked ~ #slide7, #s6:checked ~ #slide8,
#s7:checked ~ #slide9, #s8:checked ~ #slide10,
#s9:checked ~ #slide1, #s10:checked ~ #slide2 {
  opacity: 1;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);
  transform: translate3d(30%,0,-200px);
}

/* #s1:checked ~ #slide3, #s2:checked ~ #slide4,
#s3:checked ~ #slide5, #s4:checked ~ #slide1,
#s5:checked ~ #slide2 {
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);
  transform: translate3d(30%,0,-200px);
} */

/* .each-slider {
    border: 1px solid #3f3f3f;
    background-color: #f3f3f3;
} */

.img-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
}

.img-wrapper img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.img-text {
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    background-color: rgba(33, 67, 148, 0.585);
    color: #f3f3f3;
    padding: 20px;
}

/* #slide1 { background: #00BCD4 }
#slide2 { background: #4CAF50 }
#slide3 { background: #CDDC39 }
#slide4 { background: #FFC107 }
#slide5 { background: #FF5722 }
#slide6 { background: #2196F3 }
#slide7 { background: #673AB7 }
#slide8 { background: #E91E63 }
#slide9 { background: #9C27B0 } */
</style>
  