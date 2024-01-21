<template>
  <footer>
      <div class="top">
        <div class="contact">
          <p>
            Contact: 
          </p>
          <p>
            Mail: 
          </p>
          <p>
            Office: 166, Laxmi Nagar, Nagpur: 440022, India
          </p>
        </div>
        <div class="links">
          <h3>Links</h3>
          <router-link to="/company">About Us</router-link>
          <router-link to="/clients">Clients</router-link>
          <router-link to="/contactus">Contact Us</router-link>
        </div>
      </div>
      <!-- <div class="social">
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-github"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-youtube"></i>
      </div> -->
    </footer>
</template>

<script>

</script>

<style scoped>

.contact {
  text-align: left;
}

.links {
  display: flex;
  flex-direction: column;
  text-align: left;
}


a {
  color: rgb(231, 231, 231);
  text-decoration: none;
}

li {
  list-style: none;
}

input {
  position: relative;
  height: 100%;
}

input[type="email"] {
  padding: 7px 8px;
  border: 1px solid rgb(206, 206, 206);
}
input[type="button"] {
  border: none;
  padding: 7px 12px;
  background: rgb(79, 223, 79);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(79, 223, 79);
  cursor: pointer;
}

main {
  flex: 1;
}

footer {
  bottom: 0;
  background: rgb(46, 46, 46);
  color: white;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

/* Bottom - copyright and legal stuff */

footer .info {
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(29, 29, 29);
}

footer .info .legal {
  display: flex;
  flex-wrap: nowrap;
}

footer .info .legal > a {
  margin-right: 15px;
}

/* Middle - social media links */

footer .social {
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

footer .social i {
  font-size: 1.4rem;
  margin: 2px 8px;
  cursor: pointer;
}

footer .social:before {
  position: absolute;
  content: "";
  width: 90%;
  height: 1px;
  background: rgba(255, 255, 255, 0.192);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

/* Top - pages, email newsletter form ... */

footer .top {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
}

footer .top .pages {
  display: flex;
  flex-direction: row;
}

footer .top .pages ul {
  margin: 20px;
}

footer .top .pages ul li {
  margin: 5px;
}

footer .newsletter h3 {
  margin-bottom: 10px;
}
footer .newsletter form {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  footer .top {
    flex-direction: column;
  }
  footer .top .newsletter {
    padding-top: 1rem;
  }
  footer .top .pages ul {
    margin: 10px;
  }
}

@media screen and (max-width: 600px) {
  footer .top .pages {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  footer .info {
    flex-direction: column;
  }

  footer .info > .copyright {
    margin-top: 10px;
  }
}

@media screen and (max-width: 380px) {
  footer .top .pages {
    justify-content: center;
    flex-direction: column;
  }

  footer .info .legal {
    justify-content: center;
  }

  footer .info .legal a {
    margin: 0;
    text-align: center;
  }
}


</style>
