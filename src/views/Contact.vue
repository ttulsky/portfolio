<template>
  <BtmHero />
  <div class="contacts">
    <v-btn
      color="green
"
      href="https://kaizen-koffee.web.app/"
      target="https://kaizen-koffee.web.app/"
    >
      linkedIN
    </v-btn>
    <v-btn
      color="green
"
      href="https://kaizen-koffee.web.app/"
      target="https://kaizen-koffee.web.app/"
    >
      GitHub
    </v-btn>
    <v-btn
      color="green
"
      href="https://kaizen-koffee.web.app/"
      target="https://kaizen-koffee.web.app/"
    >
      Email
    </v-btn>
  </div>
  <v-card class="top">
    <div class="container">
      <form @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" v-model="name" name="name" placeholder="Your Name" />
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
        />
        <label>Message</label>
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          placeholder="Please let us know if you have any qestions or a specific project in mind!"
        >
        </textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
  </v-card>
</template>

<script>
import * as emailjs from "@emailjs/browser";
import BtmHero from "../components/BtmHero.vue";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  components: {
    BtmHero: BtmHero,
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_yg0ni6u",
          "template_xjdof6o",
          e.target,
          "IBjbzHw0ArKy6WErU",
          {
            name: this.name,
            email: this.email,
            message: this.meessage,
          }
        );
      } catch (err) {
        if (err instanceof ReferenceError) {
          alert("JSON Error: " + err.message);
        } else {
          throw err; // rethrow
        }
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.contacts {
  padding-top: 50px;

  text-align: center;
  justify-content: space-around;
}

.top {
  padding-top: 25px;
  overflow-y: auto;
  height: 100vh;
}
label {
  float: left;
}
input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e4e4;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #b8c7b9;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}
</style>
