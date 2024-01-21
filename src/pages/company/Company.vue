<template>
    <Navbar />
    <div class="services-container">
        <div class="services-header-container">
            <div>
                <!-- <h1 class="left-header">
                    Our Construction and Rental Services
                </h1> -->
                <p class="left-sub">
                    At our firm, we take pride in being a distinguished name in the field of construction and rental services. With 
                    our expertise and experience, we cater to the unique requirements of our clients and execute all processes 
                    involved in the construction process efficiently and effectively. From site selection to designing layouts, laying 
                    foundations, and finally building establishments, we excel in every aspect of the construction process. 
                </p>
                <router-link to="/services">
                    <button class="services-btn">SERVICES</button>
                </router-link>
            </div>
        </div>
        <div class="table-container">
            <ul class="responsive-table">
                <li class="table-header">
                <div class="col col-1">
                    <h3>CATEGORY</h3>
                </div>
                <div class="col col-2">
                    <h3>SERVICE</h3>
                </div>
                </li>
                <li class="table-row">
                <div class="col col-1" data-label="CATEGORY">Construction Service </div>
                <div class="col col-2" data-label="SERVICE">
                    <p>• Civil & Structural Construction, High Rise Building Construction</p>
                    <p>• Industrial Turnkey Projects</p>
                    <p>• Fabrication & Erection</p>
                    <p>• Pre-Engineered Building</p>
                    <!-- <ul>
                        <li>Civil & Structural Construction, High Rise Building Construction</li>
                        <li>Industrial Turnkey Projects</li>
                        <li>Fabrication & Erection</li>
                        <li>Pre-Engineered Building</li>
                    </ul> -->
            </div>
                </li>
                <li class="table-row">
                <div class="col col-1" data-label="CATEGORY">Rental Service</div>
                <div class="col col-2" data-label="SERVICE">
                    <p>• Crane Rentals</p>
                    <p>• JCB Rentals</p>
                    <!-- <ul>
                        <li>Crane Rentals</li>
                        <li>JCB Rentals</li>
                    </ul> -->
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
    <div class="details">
        <div class="left">
            <div class="left-textbox">
                <div>
                    <h1 class="left-header">
                        Rao Construction Company
                    </h1>
                    <p class="left-sub">
                        Company Factsheet
                    </p>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="fixed-div">
                <div class="textbox">
                    <div>
                        <h2 class="header">
                            D-49/50 MIDC Hingna Road,
                        </h2>
                        <h2 class="header">
                            Nagpur: 440 016, Maharashtra, India
                        </h2>
                        <p class="sub">
                            Factory location
                        </p>
                    </div>
                </div>
                <div class="textbox">
                    <div>
                        <h2 class="header">
                            166, Laxmi Nagar,
                        </h2>
                        <h2 class="header">
                            Nagpur: 440 022, Maharashtra, India
                        </h2>
                        <p class="sub">
                            Office location
                        </p>
                    </div>
                </div>
            </div>
            <div class="transition-div">
                <div class="transition-container">
                    <div class="textbox">
                        <div>
                            <transition name="loader-transition">
                                <h2 v-if="show1" class="header">
                                    1978
                                </h2>
                            </transition>
                            <transition name="loader-transition">
                                <p v-if="show1" class="sub">
                                    Date of Establishment
                                </p>
                            </transition>

                            
                            <transition name="loader-transition">
                                <h2 v-if="show2" class="header">
                                    Civil Construction & Fabrication 
                                </h2>
                            </transition>
                            <transition name="loader-transition">
                            <p v-if="show2" class="sub">
                                Business Type
                            </p>
                            </transition>
                            
                            <transition name="loader-transition">
                                <h2 v-if="show3" class="header">
                                    Bank of India 
                                </h2>
                            </transition>
                            <transition name="loader-transition">
                                <p v-if="show3" class="sub">
                                    Banker
                                </p>
                            </transition>
                        </div>
                    </div>
                    <div class="textbox">
                        <div>
                            <transition name="loader-transition">
                                <h2 v-if="show1" class="header">
                                    40 Cr+
                                </h2>
                            </transition>
                            <transition name="loader-transition">
                                <p v-if="show1" class="sub">
                                    Annual Turnover
                                </p>
                            </transition>
                            

                            
                            <transition name="loader-transition">
                                <h2 v-if="show2" class="header">
                                    Engineering – Construction
                                </h2>
                            </transition>
                            <transition name="loader-transition">
                                <p v-if="show2" class="sub">
                                    Business Operation
                                </p>
                            </transition>
                            

                            
                            
                            
                            <transition name="loader-transition">
                                <h2 v-if="show3" class="header">
                                    Inamdar & Company
                                </h2>
                            </transition>
                            <transition name="loader-transition">
                                <p v-if="show3" class="sub">
                                    Auditors
                                </p>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    </div>
    <Footer />
</template>
  
<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
    name: 'company',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            showFirstSet: true,

            show1:true,
            show2:false,
            show3:false,
        }
    },
    mounted() {
        setInterval(() => {
            if (this.show1) {
                this.show1 = false;
                setTimeout(() => {
                    this.show2 = true;
                }, 850);
            }
            else if (this.show2) {
                this.show2 = false;
                setTimeout(() => {
                    this.show3 = true;
                }, 850);
            }
            else {
                this.show3 = false;
                setTimeout(() => {
                    this.show1 = true;
                }, 850);
            }
        }, 3000)
    },
    methods: {
        showNextDiv() {
            this.currentIndex = (this.currentIndex + 1) % this.divs.length;
        }
    },
}
</script>

<style scoped>

/* Services */
.services-container {
    margin-top: 70px;
    padding: 60px;
    padding-left: 100px;
    padding-right: 100px;
    /* padding: 60px; */
    display: flex;
}
.services-header-container {
    width: 50%;
    text-align: left;
    padding: 20px;
}

.services-btn {
    margin-top: 15px;
    font-family: 'Poppins';
    padding: 15px 35px;
    color: #f3f3f3;
    background-color: #3f3f3f;
    border: none;
    border-radius: 25px;
    cursor: pointer;
}

.table-container {
    width: 50%;
    padding: 20px;
    /* margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px; */
}

.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.responsive-table .table-header {
  background-color: #95A5A6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.responsive-table .table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}

.responsive-table .col-1 {
  flex-basis: 40%;
}

.responsive-table .col-2 {
  flex-basis: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }


  .responsive-table li {
    display: block;
  }

  .responsive-table .col {
    flex-basis: 100%;
  }

  .responsive-table .col {
    display: flex;
    padding: 10px 0;
  }

  .responsive-table .col:before {
    color: #6C7A89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }
}



/* Company factsheet */
.loader-transition-enter-active {
  transition: all .8s ease-in-out;
}
.loader-transition-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.loader-transition-enter, .loader-transition-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  /* transform: translateX(-10px); */
  opacity: 0;
}


.details {
    padding: 60px;
    padding-left: 100px;
    padding-right: 100px;
    /* padding: 60px; */
    min-height: 55vh;
    background-color: #deeaf3;
    display: flex;
}

.left {
    width: 40%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
}

.right {
    width: 60%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
    transition: all 1s ease-in-out;
    opacity: 1;
    filter: blur(0);
}

.transition-container {
    display: flex;
    justify-content: space-around;
}

.fixed-div {
    display: flex;
    justify-content: space-around;
}

.right[v-show="false"] {
    opacity: 0;
    filter: blur(3px);
}

.textbox {
    width: 50%;
    text-align: left;
    padding: 20px;
}

.left-textbox {
    text-align: left;
    padding: 20px;
}

.left-header {
    font-size: 35px;
    font-weight: 600;
    color: #3f3f3f;
}

.left-sub {
    color: #3f3f3f;
}

.textbox-right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
}
 

.header {
    font-size: 20px;
    font-weight: 700;
}

.sub {
    color: #3f3f3f
}

</style>