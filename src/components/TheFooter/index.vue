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

<style scoped src="./TheFooter.css" />
