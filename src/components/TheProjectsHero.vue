<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1>Check out some of my work below</h1>
      <h3></h3>

      <router-link to="/contact"
        ><v-btn class="my-btn" rounded="xl" boarder="white"
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
  height: 55%;

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
@media screen and (max-width: 700px) {
  .hero-image {
    height: 25%; /* Adjust this value as needed */
  }
}
</style>
