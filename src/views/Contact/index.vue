<template>
  <ContactHero />
  <v-card class="top">
    <div class="container">
      <form @submit.prevent="sendEmail">
        <strong><label>Name</label></strong>
        <input type="text" v-model="name" name="name" placeholder="Your Name" />
        <strong><label>Email</label></strong>
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
        />
        <strong><label>Message</label></strong>
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          placeholder="Please let me know if you have any questions or a specific project in mind!"
        >
        </textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
    <h3 class="email">ttulsky@gmail.com</h3>
    <div class="contacts">
      <v-btn
        href="https://www.linkedin.com/in/tyler-tulsky-a59103141/"
        target="https://www.linkedin.com/in/tyler-tulsky-a59103141/"
      >
        linkedIN
      </v-btn>
      <v-btn
        href="https://github.com/ttulsky"
        target="https://github.com/ttulsky"
      >
        GitHub
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import * as emailjs from "@emailjs/browser";
import ContactHero from "../../components/ContactHero/index.vue";

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
    ContactHero: ContactHero,
  },
  methods: {
    async sendEmail(e) {
      if (!this.email) {
        alert("Please enter your email address");
        return;
      }
      try {
        await emailjs.sendForm(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.VUE_APP_EMAILJS_USER_ID,
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
        let firstName = this.name.split(" ")[0];
        let message = firstName
          ? `Thanks ${firstName}! Your message has been received. I'll be in touch soon!`
          : "Thank you! Your message has been received. I'll be in touch soon!";
        alert(message);
      } catch (err) {
        if (err instanceof ReferenceError) {
          alert("JSON Error: " + err.message);
        } else {
          throw err; // rethrow
        }
      }
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped src="./Contact.css" />
