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
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
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
          src="https://pulkitgangwar.gallerycdn.vsassets.io/extensions/pulkitgangwar/nextjs-snippets/1.0.1/1678968590213/Microsoft.VisualStudio.Services.Icons.Default"
        />
      </v-col>

      <v-col cols="1" class="icon-col">
        <img
          height="50"
          width="50"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnl5vWyK5FmNNFRgelYA4iR2UNB10KXk1QQ&s"
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
          src="data:image/jpeg;base64,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"
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
      <v-col cols="1" class="icon-col">
        <img
          height="50"
          width="50"
          src="data:image/png;base64,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"
        />
      </v-col>
    </v-row>
  </v-container>

  <br />
</template>

<script>
import TheHero from "../../components/TheHero/index.vue";

export default {
  components: {
    TheHero: TheHero,
  },
};
</script>

<style scoped src="./Home.css" />
