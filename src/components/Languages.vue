<template>
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
  </div>
  <p>this is an example</p>
</template>
<script>
export default {};
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

/* Add some space between the front and back sections */
.back {
  margin-left: 2em;
}
</style>
