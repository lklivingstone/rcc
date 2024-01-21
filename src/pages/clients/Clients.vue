<template>
    <Navbar />
    <div class="clients-container">
        <div class="intro">
            <h1>
                Client Satisfaction 
            </h1>
            <p>
                We take great pride in our ability to satisfy our clients' needs and expectations. Our personalized and 
                quality-assured services have earned us a credible position among our clients. Whether it's residential, 
                commercial, or industrial sectors, we strive to meet the specific requirements of our valuable 
                customers.
            </p>
        </div>
    </div>
    <div class="client-sat-wrapper">
        <div class="client-sat-container-left">
            <div class="sizty-percent">
                <div class="client-sat-card">
                    <h3>
                        Site Inspection and Layout Planning
                    </h3>
                    <p>
                        To ensure that our services align with our clients' visions, our professionals conduct thorough site 
                        inspections and create layouts for approval. By involving our clients in the planning process, we can 
                        deliver tailor-made solutions that meet their unique needs. 
                    </p>
                </div>
            </div>
        </div>
        
        <div class="client-sat-container-right">
            <div class="sizty-percent">
                <div class="client-sat-card">
                    <h3>
                        Competitive Pricing and Strong Client Base
                    </h3>
                    <p>
                        We believe that quality services should be accessible to all. That's why we offer competitively priced 
                        solutions that suit the budgets of our customers. By providing cost-effective services without 
                        compromising on quality, we have built a strong and loyal client base.  
                    </p>
                </div>
            </div>
        </div>

        <div class="client-sat-container-end">
            <p>
                At our construction company, client satisfaction is at the forefront of everything we do. Our 
                commitment to quality and personalized services has helped us gain the confidence and trust of our 
                customers.
            </p>
            <p>
                <strong><em><a href="/contact">Contact us</a></em></strong> today to experience our exceptional
                construction solutions and personalized 
                approach to client satisfaction.  
            </p>
        </div>
    </div>
    <div class="our-clients-div">
        <h2>
            Clients who trust us
        </h2>
        <div class="img-container">
            <div class="img-wrapper">
                <img :src="require(`../../assets/pix-color.png`)">
            </div>
            <div class="img-wrapper">
                <img :src="require(`../../assets/safeexpress-color.png`)">
            </div>
            <div class="img-wrapper">
                <img :src="require(`../../assets/jsw-color.png`)">
            </div>
            <div class="img-wrapper">
                <img :src="require(`../../assets/caterpillar-color.png`)">
            </div>
            <div class="img-wrapper">
                <img :src="require(`../../assets/asianpaints-color.png`)">
            </div>
            <div class="img-wrapper">
                <img :src="require(`../../assets/eicher-color.png`)">
            </div>
            <div class="img-wrapper">
                <img :src="require(`../../assets/elkem-color.png`)">
            </div>
            <div class="img-wrapper">
                <img :src="require(`../../assets/neco-color.png`)">
            </div>
            <div class="img-wrapper">
                <img :src="require(`../../assets/minex-color.png`)">
            </div>
        </div>
    </div>
    <Footer />
</template>
  
<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
    name: 'clients',
    components: {
        Navbar,
        Footer
    }
}
</script>

<style scoped>
.clients-container {
    margin-top: 90px;
    padding-left: 10vw;
    padding-right: 10vw;
}

.intro {
    text-align: left;
    width: 70%;
}

.intro h1 {
    font-size: 2.3rem;
    font-weight: 600;
    margin-bottom: 20px;
}

.client-sat-wrapper {
    background-color: rgb(232, 232, 232);
    margin-top: 50px;
}

.client-sat-container-left {
    min-height: 50vh;
    display: flex;
    justify-content: flex-end;    
    background: url('../../assets/inspection.jpg') left center / 60% no-repeat;
}

.client-sat-container-right {
    min-height: 50vh;
    display: flex;
    justify-content: flex-start;    
    background: url('../../assets/strong-client.jpg') right center / 60% no-repeat;
}

.sizty-percent {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.client-sat-card {
    background-color: #f3f3f3;
    border-radius: 10px;
    padding: 20px;
    height: 70%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.client-sat-container-end {
    padding: 30px 10vw 30px 10vw;
    text-align: left;
}

.our-clients-div {
    padding: 30px 10vw 0 10vw;
}

.img-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.img-wrapper {
    width: 30%;
    margin: 10px 0 10px 0;
}

.img-wrapper img {
    width: 50%;
    /* height: auto; */
    /* margin: 10px; */
}
</style>