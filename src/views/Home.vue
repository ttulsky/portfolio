<template>
  <TheHero />

  <v-container class="container">
    <v-row>
      <v-col
        cols="12"
        style="
          padding-bottom: 0px;
          padding-left: 12px;
          padding-top: 10px;
          margin-bottom: 0;
        "
      >
        <h1 class="title">Technologies</h1>
      </v-col>
    </v-row>

    <v-row id="skills" class="d-flex flex-wrap">
      <v-col cols="6">
        <div class="front">
          <ul>
            <h2>Frontend</h2>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>Vue.js</li>
          </ul>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="back">
          <ul>
            <h2>Backend</h2>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Nest</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>Mysql</li>
          </ul>
        </div>
      </v-col>
    </v-row>

    <v-row class="icon-row justify-space-between" align="start">
      <v-col cols="1" class="icon-col">
        <img
          height="50"
          width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />
      </v-col>
      <v-col cols="1" class="icon-col">
        <img
          height="50"
          width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />
      </v-col>
      <v-col cols="1" class="icon-col">
        <img
          height="50"
          width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
        />
      </v-col>
      <v-col cols="1" class="icon-col">
        <img
          height="50"
          width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg"
        />
      </v-col>
      <v-col cols="1" class="icon-col">
        <img
          height="50"
          width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
      </v-col>
      <v-col cols="1" class="icon-col">
        <img
          height="50"
          width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        />
      </v-col>
      <v-col cols="1" class="icon-col">
        <img
          height="50"
          width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
        />
      </v-col>
      <v-col cols="1" class="icon-col">
        <img
          height="50"
          width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        />
      </v-col>
    </v-row>
  </v-container>

  <br />
</template>

<script>
import TheHero from "../components/TheHero.vue";

export default {
  components: {
    TheHero: TheHero,
  },
};
</script>

<style scoped>
.icon-row {
  padding-top: 1.5%;
  padding-right: 15%;
}
.icon-col {
  padding-right: 10%;
}
.container {
  padding-bottom: 0px;
}

#skills {
  align-items: flex-start;
}

.front ul,
.back ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.front h2,
.back h2 {
  margin-top: 0;
}

.title {
  margin-bottom: 2%;
}

.icon-row img {
  max-width: 100%;
  height: auto;
  text-align: center;
}

.icon-col {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 700px) {
  .container {
    padding-bottom: 0px;
  }
}

@media screen and (min-width: 1200px) {
  .front,
  .back {
    padding-left: 3%;
    flex-basis: 20%;
  }

  .icon-row {
    justify-content: center;
  }

  .icon-col {
    padding-left: 2% !important;
    padding-bottom: 2%;
  }
}
</style>
