<template>
  <h1 class="heading">Why Choose Us?</h1>
  <p class="subheading">When it comes to construction and rental services, we stand out from the competition. Our years of
experience have allowed us to deliver valuable and cost-effective solutions that cater to the diverse
specifications of our clients. Here are some key factors that set us apart and contribute to our success:</p>
  <div class="container">
    <div class="card left dark-bg">
      <h3>Experience</h3>
      <div class="subcard">
        <p>
          With our extensive experience in the industry, we have gained valuable insights and knowledge that
enable us to provide exceptional services. Our team has successfully completed numerous projects,
which has honed our skills and expertise in delivering quality construction and rental solutions.
        </p>
      </div>
    </div>
    <div class="card right light-bg">
      <h3>Modern Techniques and Methodologies</h3>
      <div class="subcard">
        <p>
          We stay up to date with the latest advancements in the construction industry. By utilizing modern
techniques and methodologies, we ensure that our services are efficient, sustainable, and of the
highest quality. Our commitment to innovation allows us to deliver exceptional results.
        </p>
      </div>
    </div>
    <div class="card left light-bg">
      <h3>Timely Execution</h3>
      <div class="subcard">
        <p>
          We understand the importance of timely project completion. Our dedicated team works diligently to
ensure that every project is executed within the agreed-upon timeframe. We prioritize effective
project management and coordination to minimize delays and deliver on time.
        </p>
      </div>
    </div>
    <div class="card right dark-bg">
      <h3>Customized Solutions</h3>
      <div class="subcard">
        <p>
          Every client has unique requirements, and we take pride in offering tailor-made solutions that meet
their specific needs. Our team works closely with clients to understand their vision and provide
customized solutions that align with their goals. We believe in delivering results that exceed
expectations.
        </p>
      </div>
    </div>
    <div class="card left dark-bg">
      <h3>Equipment for Mechanized Working</h3>
      <div class="subcard">
        <p>
          To enhance efficiency and productivity, we employ modern equipment and machinery for mechanized
working. By utilizing advanced tools, we ensure that our construction and rental services are executed
with precision and accuracy. Our investment in high-quality equipment enables us to deliver
exceptional results.
        </p>
      </div>
    </div>
    <div class="card right light-bg">
      <h3>Strong Technical and Execution Team</h3>
      <div class="subcard">
        <p>
          We have assembled a team of highly skilled professionals who possess strong technical expertise.
From project planning to execution, our team is dedicated to delivering excellence. With their
knowledge and experience, we tackle complex challenges and ensure the successful completion of
every project.
        </p>
      </div>
    </div>
  </div>
  <div class="footer">
    <h3>
      <span>Choosing us means partnering with a construction company that prioritizes experience, modern
  techniques, timely execution, customized solutions, mechanized working, and a strong technical and
  execution team. Contact us today to experience our commitment to excellence and to discuss how we
  can meet your construction and rental service needs.
</span></h3>
  </div>
</template>

<script>

</script>

<style scoped>

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.heading {
  padding: 50px;
  background-color: #DFE5E9;
}

.subheading {
  padding: 0 10% 10px 10%;
  background-color: #DFE5E9;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #DFE5E9;
  width: 100%;
}

.card {
  width: 50%;
  height: 250px;
  text-align: left;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}



.left {
  padding-left: 10%;
}

.right {
  padding-right: 10%;
}

.dark-bg {
  background: linear-gradient(to bottom, #3f3f3f, #333333);
  color: white;
}

.light-bg {
  background: linear-gradient(to bottom, #b9d2e5, #c9dae6);
  color: #3F3F3F;
}

.dark-bg .subcard {
  background: linear-gradient(to top, #3f3f3f, #333333);
  margin: 10px 0 10px 0;
  padding: 10px;
  height: 70%;
  line-height: 1.5;
}

.light-bg .subcard {
  background: linear-gradient(to bottom, #c9dae6, #b9d2e5);
  margin: 10px 0 10px 0;
  padding: 10px;
  height: 70%;
  line-height: 1.5;
}

.footer {
  padding: 20px 10% 20px 10%;
  background-color: #DFE5E9;
}

/* .footer h3 {
} */

.footer h3>span {
  background-color: #f3f3f3;
  color: #3f3f3f;
  line-height: 1.8;
  padding: 5px;
  font-style: italic;
}

</style>
