<template>
  <BtmHero />
  <div class="about">
    <h1>My Journey Into Web Development</h1>
    <p>
      As a native Californian born and raised near the pulse of Silicon Valley,
      I've been steeped in the world of technology from an early age. However,
      it wasn't until I crafted my first website that I truly discovered the
      synergistic blend of creativity and problem-solving that web development
      offers. I am a voracious learner, and the diverse spectrum of subjects
      within the realm of coding offers a continuously unfolding landscape for
      exploration. The evolving nature of the industry keeps me perpetually
      engaged and impassioned.
    </p>
    <p>
      My journey into the world of coding began with platforms like Wix, and
      Wordpress. These intuitive platforms fostered my interest in website
      creation. Despite the user-friendly interface, I quickly realized I
      yearned for a deeper understanding and more control over my projects,
      leading me to enroll in a Python coding bootcamp.
    </p>

    <p>
      The bootcamp served as my springboard into the realm of programming,
      equipping me with the fundamentals of Python and a profound curiosity to
      learn more. Eager to build on this foundation, I embarked on another
      immersive experience, this time with a MERN (MongoDB, Express.js, React,
      and Node.js) stack bootcamp. This experience deepened my knowledge and
      skills, particularly in the realm of full-stack development, and cemented
      my passion for coding.
    </p>

    <p>
      As a part of my continuous learning endeavor, I graduated into working
      with Vue.js and TypeScript. These powerful tools enhanced my ability to
      create dynamic, efficient, and robust web applications, further expanding
      my skill set. My journey through JavaScript, Python, MERN stack, Vue, and
      TypeScript has been incredibly rewarding and stimulating, equipping me
      with the toolkit to bring diverse and complex web projects to life.
    </p>
    <p>
      In my approach to web development, I prioritize intuitive, user-friendly
      layouts that encapsulate a seamless browsing experience. I strongly
      believe in the pursuit of continuous improvement, considering each project
      not as a completed task, but as an ongoing evolution. My dedication to
      this ethos ensures that I bring unwavering commitment to actualizing my
      clients vision.
    </p>
    <br />
    <p>
      Let's collaborate to craft something extraordinary. I look forward to our
      journey of creation together!
    </p>
  </div>
</template>
<script>
import BtmHero from "../components/BtmHero.vue";

export default {
  components: {
    BtmHero: BtmHero,
  },
};
</script>

<style scoped>
.about {
  padding: 3% 100px;
  font-family: "Helvetica Neue", sans-serif;
  color: #333;
  line-height: 1.6;
  text-align: justify;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.about p {
  margin-bottom: 20px;
}

.about p:last-child {
  text-align: center;
  font-weight: bold;
}

@media screen and (max-width: 700px) {
  .about {
    padding: 3% 20px; /* reduce the left and right padding */
    font-size: 18px; /* increase the font size */
  }
  .about h1 {
    /* Change these values as needed */
    font-size: 24px;
    margin: 10px 0;
  }
}
@media screen and (max-width: 450px) {
  .about h1 {
    /* Adjust these values as needed */
    font-size: 20px;
    margin: 5px 0;
  }
}
@media screen and (max-width: 360px) {
  .about h1 {
    /* Adjust these values as needed */
    font-size: 18px;
    margin: 3px 0;
  }
}
</style>
