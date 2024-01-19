<template>
    <Navbar />
    <div class="container">
        <div class="intro-container">
            <div class="intro-left">
                <h1>
                    Our Construction and Rental Services
                </h1>
                <div class="skills-container">
                    <h3>
                        Skilled Professionals and Modern Facilities 
                    </h3>
                    <p>
                        We have a team of highly skilled professionals who bring their expertise and knowledge to every 
                        project we undertake. With their commitment and dedication, we ensure that all our services are 
                        executed with precision and within the committed time period. Our state-of-the-art facilities and 
                        modern equipment further enable us to deliver high-quality results that meet the expectations of our 
                        clients. 
                    </p>
                </div>
                <div class="commit-container">
                    <h3>
                        Commitment to Excellence
                    </h3>
                    <p>
                        At our firm, we believe in delivering services of the highest quality. We strive for excellence in every 
                        project we undertake, ensuring that our clients' expectations are not only met but exceeded. Our 
                        commitment to perfection, attention to detail, and adherence to timelines set us apart in the 
                        construction industry. 
                    </p>
                </div>
            </div>
            <div class="intro-right">
                <div class="intro-right-header-container">
                    <h3>
                        Comprehensive Services 
                    </h3>
                </div>
                <div class="intro-right-content">
                    <ol>
                        <li>Site Selection: We assist our clients in selecting the most suitable location for their construction 
                            project, considering various factors such as accessibility, infrastructure, and future development 
                            prospects.
                        </li>
                        <li>
                            Designing Layouts: Our team of experts creates well-planned and functional layouts that 
                            optimize space utilization and meet the specific requirements of our clients. 
                        </li>
                        <li>
                            Foundation Laying: We ensure a strong foundation for every construction project, using the 
                            latest techniques and quality materials to ensure durability and stability. 
                        </li>
                        <li>
                            Building Establishments: From residential buildings to commercial and industrial structures, we 
                            have the expertise to construct establishments of various scales and complexities. 
                        </li>
                        <li>
                            Paperwork Assistance: We are well-versed in the necessary paperwork and documentation 
                            required for construction and rental services. Our team ensures that all legal and regulatory 
                            requirements are met with precision. 
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="btn-container">
            <button
            class="btn"
            :style="{ backgroundColor: isConstructionService ? 'rgb(48, 99, 149)' : '' }"
            @click="setConstructionService(true)"
            >
                Construction Service
            </button>
            <button
            class="btn"
            :style="{ backgroundColor: !isConstructionService ? 'rgb(48, 99, 149)' : '' }"
            @click="setConstructionService(false)"
            >
                Rental Service
            </button>
        </div>
        <div class="services-container">
            <div
            class="construction-container"
            v-if="isConstructionService"
            >
                <div class="construction-left-container">
                    <div class="controller-div">
                        <div
                        v-bind:class="{ 'controller-bottom-line': true, 'controller-selected': currentController == 1 }"
                        @click="setController(1)"
                        >
                            <p>Civil Construction & Structural Fabrication</p>
                        </div>
                        <div
                        v-bind:class="{ 'controller-bottom-line': true, 'controller-selected': currentController == 2 }"
                        @click="setController(2)"
                        >
                            <p>Fabrication & Erection</p>
                        </div>
                        <div
                        v-bind:class="{ 'controller-bottom-line': true, 'controller-selected': currentController == 3 }"
                        @click="setController(3)"
                        >
                            <p>Turnkey Projects</p>
                        </div>
                        <div
                        v-bind:class="{'controller-selected': currentController == 4 }"
                        @click="setController(4)"
                        >
                            <p>Pre-Engineered Buildings</p>
                        </div>
                    </div>
                </div>
                <div class="construction-right-container">
                    <div class="civil" v-if="currentController === 1">
                        <div class="construction-header">
                            <h3>
                                Civil Construction and Structural Fabrication Services
                            </h3>
                        </div>
                        <p>
                            With our extensive expertise in the construction industry, we are proficient in providing a wide range 
                            of civil construction and structural fabrication services. Our well-planned approach and efficient 
                            execution ensure that every project is completed to the highest standards. Here are some of the 
                            construction stages that we manage and excel in: 
                        </p>
                        
                        <h4>
                            Foundations 
                        </h4>
                        <p>
                            We specialize in laying strong and stable foundations for buildings and structures. Our team utilizes 
                            advanced techniques and high-quality materials to ensure the durability and stability of the 
                            foundation, which is crucial for the overall integrity of the establishment. 
                        </p>
                        <h4>
                            Substructures
                        </h4>
                        <p>
                            The substructure plays a vital role in supporting the superstructure of a building. We excel in 
                            constructing substructures that are capable of withstanding the loads and stresses imposed by the 
                            superstructure. Our experienced team ensures proper execution and adherence to engineering 
                            standards. 
                        </p>
                        <h4>
                            Superstructures
                        </h4>
                        <p>
                            From residential buildings to commercial complexes, we have the expertise to construct 
                            superstructures of various scales and complexities. Our skilled workforce and attention to detail result 
                            in the creation of aesthetically appealing and functionally efficient structures. 
                        </p>
                        <h4>
                            Exterior and Internal Finish 
                        </h4>
                        <p>
                            We understand the importance of a well-finished exterior and interior for any establishment. Our 
                            team pays meticulous attention to detail when it comes to finishing touches, ensuring that the final 
                            result exceeds our clients' expectations in terms of both visual appeal and quality. 
                        </p>
                        <h4>
                            RCC Drive and Drains 
                        </h4>
                        <p>
                            We specialize in constructing robust reinforced concrete (RCC) driveways and drains. Our skilled team 
                            ensures precise execution and uses high-quality materials to deliver driveways and drains that are 
                            durable, aesthetically pleasing, and capable of withstanding heavy loads. 
                        </p>
                        <h4>
                            Green Area Development
                        </h4>
                        <p>
                            Creating green spaces within and around establishments is an essential aspect of modern 
                            construction. We undertake green area development to enhance the overall aesthetics, environmental 
                            sustainability, and well-being of the occupants. Our team carefully plans and executes landscaping 
                            and green space development to create harmonious surroundings. 
                        </p>
        
                        <p>
                            With our efficient workforce and commitment to excellence, we manage to complete these 
                            construction stages with precision and within the defined timelines. Our focus on quality, safety, and 
                            client satisfaction sets us apart in the construction industry. 
                        </p>
                        <p>
                            <strong><em><a href="/contact">Contact us</a></em></strong> today to discuss your civil construction and structural fabrication requirements. We look 
                            forward to collaborating with you and delivering exceptional results for your projects. 
                        </p>
                    </div>
    
                    <div class="fabrication" v-if="currentController === 2">
                        <div class="construction-header">
                            <h3>
                                Fabrication and Erection Services for Industries
                            </h3>
                        </div>
                        <p>
                            In addition to our construction services, we also specialize in providing fabrication and erection 
                            services for industries. With our well-equipped workshop located in MIDC Hingna, sprawling over an 
                            area of 150,000 sq. ft., we have the capabilities to fabricate heavy structures, solvent tanks, agitators, 
                            columns, and more. Our commitment to using the latest equipment and high-end techniques ensures 
                            accurate results that meet the specific requirements of our clients. 
                        </p>
                        
                        <h4>
                            State-of-the-Art Workshop
                        </h4>
                        <p>
                            Our workshop is equipped with modern facilities and advanced machinery to handle the fabrication of 
                            heavy structures and various industrial components. With the latest equipment at our disposal, we can 
                            efficiently execute complex fabrication projects while maintaining the highest standards of quality and 
                            precision. 
                        </p>
                        <h4>
                            Expertise in Fabrication
                        </h4>
                        <p>
                            Our team of experts possesses extensive knowledge and expertise in the field of fabrication. They 
                            work in complete coordination to ensure seamless execution of projects within the committed time 
                            period. From interpreting engineering drawings to selecting the right materials and utilizing cutting
                            edge techniques, our skilled professionals ensure that every fabrication project is carried out with 
                            utmost accuracy and efficiency.
                        </p>
                        <h4>
                            Erection Services
                        </h4>
                        <p>
                            In addition to fabrication, we also offer erection services for the structures and components we 
                            fabricate. Our experienced team ensures that the erection process is carried out smoothly, adhering to 
                            all safety regulations and quality standards. We understand the importance of timely completion and 
                            strive to deliver our erection services within the committed time frame.
                        </p>
                        <h4>
                            Client Satisfaction
                        </h4>
                        <p>
                            At our company, client satisfaction is of paramount importance. We work closely with our clients 
                            throughout the fabrication and erection process, keeping them informed and involved at every stage. 
                            Our team is dedicated to meeting and exceeding client expectations by delivering high-quality results 
                            that are in line with their specific requirements.  
                        </p>
                        
                        <p>
                            <strong><em><a href="/contact">Contact us</a></em></strong> today to discuss your fabrication and erection needs for your industrial projects. We are 
                            confident in our ability to provide top-notch services that will meet your expectations and contribute 
                            to the success of your ventures. 
                        </p>
                    </div>
    
                    <div class="turnkey" v-if="currentController === 3">
                        <div class="construction-header">
                            <h3>
                                Turnkey Projects: From Concept to Completion
                            </h3>
                        </div>
                        <p>
                            At our firm, we take pride in undertaking turnkey projects tailored to the specific requirements of our 
                            valuable clients. From conceptual designing to the final installation, our team of professionals keeps a 
                            close eye on every stage of the process, ensuring seamless execution and delivering exceptional 
                            results. 
                        </p>
                        
                        <h4>
                            Conceptual Designing
                        </h4>
                        <p>
                            We understand the importance of a well-thought-out and comprehensive conceptual design for any 
                            project. Our experienced professionals work closely with clients to develop a design that aligns with 
                            their vision and requirements. We pay attention to every detail, ensuring that the design meets 
                            industry standards and regulations.
                        </p>
                        <h4>
                            Adherence to Industrial Standards 
                        </h4>
                        <p>
                            Quality and compliance with industrial standards are of utmost importance to us. Our diligent team of 
                            experts meticulously follows set industrial standards throughout the project. Whether it's civil work, 
                            electrical systems, structural elements, land development, garden landscaping, fire fighting systems, 
                            or rainwater harvesting, we ensure that all aspects of the project are executed with precision and in 
                            accordance with established norms. 
                        </p>
                        <h4>
                            Single-Point Responsibility
                        </h4>
                        <p>
                            By offering turnkey solutions, we provide our clients with the convenience of a single point of contact 
                            for the entire project. Our dedicated team takes complete responsibility for coordinating and 
                            managing all aspects of the project, ensuring smooth communication and efficient execution. This 
                            streamlined approach allows us to deliver projects on time and within budget.
                        </p>
                        <h4>
                            Comprehensive Services
                        </h4>
                        <p>
                            In our turnkey projects, we take care of all the necessary components, including civil work, electrical 
                            systems, structural elements, land development, garden landscaping, fire fighting systems, and 
                            rainwater harvesting. Our diverse expertise and skilled workforce enable us to handle every aspect of 
                            the project, ensuring a cohesive and well-integrated final result.  
                        </p>
                        <h4>
                            Client Satisfaction
                        </h4>
                        <p>
                            Client satisfaction is at the core of our business philosophy. We strive to exceed our clients' 
                            expectations by delivering turnkey projects that meet their specific needs and requirements. Our 
                            commitment to transparency, quality, and timely delivery ensures a successful partnership with our 
                            clients. 
                        </p>
                        
                        <p>
                            <strong><em><a href="/contact">Contact us</a></em></strong>  today to discuss your turnkey project requirements. Our dedicated team is ready to 
                            collaborate with you, offering expertise, reliability, and a commitment to excellence throughout the 
                            entire project lifecycle.
                        </p>
                    </div>
    
                    <div class="preengineered" v-if="currentController === 4">
                        <div class="construction-header">
                            <h3>
                                Pre-Engineered Buildings: Versatile and Durable Structures
                            </h3>
                        </div>
                        <p>
                            In addition to our comprehensive range of construction services, we also specialize in offering pre
                            engineered buildings that can be transformed into attractive establishments. These buildings are 
                            constructed using high-quality materials, resulting in robust and long-lasting structures. Our pre
                            engineered buildings are widely appreciated and can serve a variety of purposes, including:
                        </p>
                        
                        <h4>
                            Warehouses and Hangars
                        </h4>
                        <p>
                            Our pre-engineered buildings are ideal for warehouse and hangar applications. Designed to provide 
                            ample storage space and accommodate large volumes, these structures offer efficient and organized 
                            storage solutions for various industries.
                        </p>
                        <h4>
                            Manufacturing Units 
                        </h4>
                        <p>
                            With their flexible design and adaptable layout, our pre-engineered buildings are well-suited for 
                            manufacturing units. These structures can be customized to meet the specific requirements of 
                            different manufacturing processes, providing a functional and efficient workspace.
                        </p>
                        <h4>
                            Social Halls and Sports Facilities
                        </h4>
                        <p>
                            Our pre-engineered buildings can be transformed into social halls and sports facilities, offering a 
                            versatile and spacious venue for various events and activities. From community gatherings to sports 
                            tournaments, these structures provide a comfortable and well-equipped space for a wide range of 
                            purposes. 
                        </p>
                        <h4>
                            Auto Dealerships and Showrooms
                        </h4>
                        <p>
                            We understand the importance of creating an appealing and functional space for auto dealerships 
                            and showrooms. Our pre-engineered buildings can be customized to showcase vehicles and create an 
                            inviting atmosphere for customers. These structures provide a professional and attractive setting to 
                            showcase products and services. 
                        </p>
                        <h4>
                            Certified Builders
                        </h4>
                        <p>
                            As certified builders for renowned brands such as Kirby Building, PEBS Pennar, Aster Buildings, and 
                            Tata Blue Scope, we uphold the highest standards of quality and craftsmanship. Our expertise in 
                            working with these reputable brands ensures that our clients receive pre-engineered buildings of 
                            exceptional quality and performance.
                        </p>
                        
                        <p>
                            At our construction company, we take pride in delivering pre-engineered buildings that exceed our 
                            clients' expectations in terms of durability, versatility, and aesthetic appeal.
                        </p>
                        <p>
                            <strong><em><a href="/contact">Contact us</a></em></strong> today to 
                            discuss your specific requirements and explore the possibilities of utilizing our pre-engineered 
                            buildings for your next project.
                        </p>
                    </div>
                </div>
            </div>
            <div
            class="rental-container"
            v-if="!isConstructionService"
            >
                <div class="crane-rental-container">
                    <div class="construction-header">
                        <h3>
                            Pre-Engineered Buildings: Versatile and Durable Structures
                        </h3>
                    </div>
                    <p>
                        In addition to our comprehensive range of construction services, we also specialize in offering pre
                        engineered buildings that can be transformed into attractive establishments. These buildings are 
                        constructed using high-quality materials, resulting in robust and long-lasting structures. Our pre
                        engineered buildings are widely appreciated and can serve a variety of purposes, including:
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Navbar from '@/components/navbar/Navbar.vue';

export default {
    name: 'services',
    components: {
        Navbar
    },
    data() {
        return {
            isConstructionService: true,
            currentController: 1,
        };
    },
    methods: {
        setConstructionService(value) {
            this.isConstructionService = value;
        },
        setController(value) {
            this.currentController = value;
        }
    }
}
</script>

<style scoped>
.container {
    margin-top: 90px;
    padding-left: 10vw;
    padding-right: 10vw;
}

.intro-container {
    display: flex;
    width: 100%;
}

.intro-left {
    width: 50%;
    padding: 20px;
}

.intro-left h1 {
    text-align: left;
    font-weight: 600;
    padding-bottom: 15px;
}

.intro-right {
    width: 50%;
    padding: 20px;
}

.intro-left h3 {
    font-weight: 600;
}

.intro-left p {
    font-size: 15px;
}

.intro-right {
    text-align: left;
    /* border: 1px solid rgb(134, 194, 204); */
}

.intro-right h3 {
    font-weight: 600;
}

.intro-right-header-container {
    background-color: rgb(134, 194, 204);
    padding: 10px 20px;
}

.intro-right-content > ol {
    border: 1px solid rgb(134, 194, 204);
    padding: 20px;
}
.intro-right-content li {
    font-size: 15px;
    text-align: left;
    list-style-position: inside;
    margin-bottom: 5px;
}

.skills-container {
    text-align: left;
    margin-bottom: 30px;
}

.commit-container {
    text-align: left;
}


.btn {
    width: 50%;
    height: 50px;
    font-family: 'Poppins';
    background-color: rgb(113, 142, 171);
    border: none;
    color: #f3f3f3;
    font-size: 17px;
    cursor: pointer;
}

.btn:hover {
    background-color: rgb(48, 99, 149);
}

/* .slide-in {
  transform: translateX(0);
}

.slide-out {
  transform: translateX(-150%);
}

.slide-out-rental {
  transform: translateX(200%);
}

.services-container {
    display: flex;
} */

.construction-container {
    display: flex;
}

.construction-left-container {
    width: 25%;
}

.controller-div {
    background-color: rgb(209, 213, 217);
    margin-top: 10px;
    text-align: left;
}

.controller-bottom-line {
    border-bottom: 1px solid #ababab;
}

.controller-selected {
    border-left: 5px solid rgb(48, 99, 149);
    color: #182434;
}

/* .controller-div div {
    cursor: pointer;
} */
.controller-div div {
  /* Your existing styles for the base class here */

  /* Add initial styles for the border-left */
  /* border-left: 5px solid transparent; */
  transition: border-left 0.2s ease-out; /* Adjust the duration and timing function as needed */
}

.controller-div div:hover {
    cursor: pointer;
    border-left: 5px solid rgb(48, 99, 149);
}

.controller-div p {
    font-size: 13px;
    padding: 10px;
}

.construction-right-container {
    width: 75%;
    padding: 10px 0 10px 20px;
    text-align: left;
}

.construction-header {
    background-color: rgb(209, 213, 217);
    padding: 5px;
    margin-bottom: 20px;
}

.construction-right-container p {
    margin-bottom: 15px;
}

.rental-container {
    min-height: 100vh;
}

.crane-rental-container {
    padding: 10px 0 0px 0px;
    text-align: left;
}

</style>