<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1>See My Projects Below!</h1>
      <h3></h3>

      <router-link to="/contact"
        ><v-btn class="my-btn" rounded="xl" color="black" boarder="white"
          >Get In touch Here!</v-btn
        ></router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
/* body,
html {
  height: 100%;
} */

/* The hero image */
.my-btn {
  background-color: #4675a6 !important; /* Your preferred color */
  color: white !important; /* Text color */
}

.my-btn:hover {
  background-color: #a8cff5 !important; /* Your preferred hover color */
}
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/public/imgs/1_jVKsZjucxOyWWbEWh1I2hw.jpeg");

  /* Set a specific height */
  height: 35vh;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
@media screen and (max-width: 820px) {
  .hero-text h1 {
    font-size: 1.1rem; /* Adjust this value as needed */
  }
}
</style>

<!-- previous css

@media screen and (max-width: 414px) {
  .hero-image {
    height: 45%; /* Adjust this value as needed */
  }
}
@media screen and (max-width: 700px) {
  .hero-image {
    height: 20%; /* Adjust this value as needed */
  }
}
@media screen and (max-width: 1100px) {
  .hero-image {
    height: 30%; /* Adjust this value as needed */
  }
}
@media screen and (max-width: 1300px) {
  .hero-image {
    height: 39%; /* Adjust this value as needed */
  }
}
@media screen and (max-width: 1490px) {
  .hero-image {
    height: 39%; /* Adjust this value as needed */
  }
} -->
