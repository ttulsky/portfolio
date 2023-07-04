<template>
  <v-footer class="custom-footer-color pa-0 footer">
    <v-row
      class="ma-0 text-center d-flex"
      justify="space-around"
      align="center"
    >
      <v-col class="pa-0" cols="auto">
        <h6></h6>
      </v-col>
      <router-link to="/Contact"
        ><v-col class="pa-0" cols="auto">
          <h6 class="links">ttulsky@gmail.com</h6>
        </v-col></router-link
      >
      <v-col class="pa-0" cols="auto">
        <h6></h6>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.pa-0 {
  text-decoration: none !important;
  color: white;
}
.links {
  text-decoration: none !important;
  color: white;
}
.links:hover {
  color: #adc8d6ac;
}
.footer {
  color: whitesmoke;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 30px;
  z-index: 9999; /* Ensures the footer is always on top */
}

.custom-footer-color {
  background-color: #445d78; /* Replace with your desired hex color */
}
.v-col {
  flex-grow: 0;
}
</style>
