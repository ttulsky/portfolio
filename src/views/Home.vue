<template>
  <TheHero />

  <h1 class="title">Technologies</h1>
  <div id="skills">
    <div class="front">
      <ul>
        <h2>Frontend</h2>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Vue.js</li>
      </ul>
    </div>
    <div class="back">
      <ul>
        <h2>Backend</h2>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Python</li>
        <li>MongoDB</li>
      </ul>
    </div>
    <div class="marginL"></div>
    <ul>
      <img
        height="50"
        width="50"
        src="
        https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      />

      <img
        height="50"
        width="50"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
      />

      <img
        height="50"
        width="50"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
      />

      <img
        height="50"
        width="50"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg"
      />
      <img
        height="50"
        width="50"
        class="node"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      />

      <img
        height="50"
        width="50"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
      />

      <img
        height="50"
        width="50"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
      />

      <img
        height="55"
        width="55"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
      />
    </ul>
  </div>
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
#skills {
  display: flex;
  align-items: flex-start;
}

.front,
.back {
  flex: 0 0 auto; /* Flex items to not grow and take their content's width */
}
.marginL {
  margin-left: 2%;
}

.front ul,
.back ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-left: 3em;
}

.front h2,
.back h2 {
  margin-top: 0;
}

/* Add some space between the front and back sections */
.back {
  margin-left: 2em;
}
.title {
  margin-left: 3%;
  margin-bottom: 2%;
}
</style>
