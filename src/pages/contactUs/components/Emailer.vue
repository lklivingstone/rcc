<template>
    <div class="emailer-container">
        <div class="details-div">
            <h3>CONTACT US</h3>
            <h1>
                Office
            </h1>
            <p>
                166, Laxmi Nagar
            </p>
            <p>
                Nagpur: 440022, India 
            </p>

            <br />
            <p>

            </p>
        </div>
        <div class="email-div">
            <form>
                <input
                    class="half-input"
                    type="text" 
                    v-model="name"
                    name="name"
                    placeholder="Full Name"
                >
                <input
                    class="half-input"
                    type="text" 
                    v-model="phone"
                    name="phone"
                    placeholder="Phone"
                >
                <input 
                    class="full-input"
                    type="email" 
                    v-model="email"
                    name="email"
                    placeholder="Email"
                >
                <textarea 
                    class="full-input"
                    name="message"
                    v-model="message"
                    cols="30" rows="5"
                    placeholder="Message">
                </textarea>

                <input class="submit-btn" type="submit" value="SEND MESSAGE">
            </form>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'Emailer'
}
</script>

<style scoped>
.emailer-container {
    padding: 90px 10vw 20px 10vw;
    display: flex;
    height: 70vh;
}

.details-div {
    width: 40%;
    text-align: left;
}

.email-div {
    width: 60%;
    display: flex;
}

.email-div form {
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
}

.half-input {
    width: 48%;
}

.full-input {
    width: 100%;
}

input {
    font-family: 'Poppins';
    margin: 1%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 0px;
}

textarea {
    font-family: 'Poppins';
    margin: 1%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 0px;
}

.submit-btn {
    font-family: 'Poppins';
    background-color: rgb(170, 212, 229);
    padding: 10px 30px;
    cursor: pointer;
}

</style>