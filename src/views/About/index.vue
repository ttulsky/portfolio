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
      My journey into the world of coding began with platforms like Wix and
      Squarespace. These intuitive platforms fostered my interest in website
      creation. Despite the user-friendly interface, I quickly realized I
      yearned for a deeper understanding and more control over my projects,
      leading me to enroll in a Python coding bootcamp.
    </p>

    <p>
      My first bootcamp served as a springboard into the concepts of
      programming, equipping me with the fundamentals of Python and a profound
      curiosity to learn more. Eager to build on this foundation, I embarked on
      another immersive experience, this time with a MERN (MongoDB, Express.js,
      React, and Node.js) stack bootcamp. This experience deepened my knowledge
      and skills, and was crucial on my path to working as a Full Stack
      Developer.
    </p>

    <p>
      As a part of my continuous learning endeavor, I moved into working with
      Vue.js, TypeScript, NextJS and Nest! These powerful tools enhanced my
      ability to create dynamic, efficient, and robust web applications, further
      expanding my skill set. My journey through JavaScript, Python, the MERN
      stack, Vue, and TypeScript has been incredibly rewarding and stimulating,
      equipping me with the toolkit to bring diverse and complex web projects to
      life.
    </p>
    <p>
      In my approach to web development, I prioritize intuitive, user-friendly
      layouts that encapsulate a seamless browsing experience. I strongly
      believe in the pursuit of continuous improvement, considering each project
      not as a completed task, but as an ongoing evolution. My dedication to
      this ethos ensures that I bring unwavering commitment to actualizing my
      clients vision.
    </p>

    <p>
      When I'm not creating user-friendly web applications, you'll most likely
      catch me in the great outdoors or on a new adventure. Maybe I'll be
      enjoying a good cup of coffee, or out hiking taking in all the beauty
      nature has to offer. When the travel bug bites, you'll find me exploring
      new places, soaking up different cultures and attempting to learn new
      languages - not always successfully, but always with a lot of enthusiasm!
      These experiences don't just enrich my life, they also inspire my work,
      bringing new perspectives and fresh ideas to every project I take on.
    </p>

    <div class="section">
      <div class="carousel-wrapper" style="text-align: center">
        <div class="carousel-container">
          <v-carousel
            cycle
            interval="7220"
            height="400"
            hide-delimiter-background
            :show-arrows="false"
            class="carousel-bg custom-transition"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              class="carousel-bg"
              reverse-transition="fade"
              transition="fade"
            >
              <v-sheet height="100%" class="carousel-bg">
                <div
                  class="image-wrapper d-flex fill-height justify-center align-center"
                >
                  <img :src="item.src" class="carousel-image text-h2" />
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
    <p class="bottom-tagline">
      Let's collaborate to craft something extraordinary. I look forward to our
      journey of creation together!
    </p>
  </div>
</template>
<script>
import BtmHero from "@/components/BtmHero";
import Image1 from "/public/imgs/IMG_20230702_100131_11zon.jpg";
import Image6 from "/public/imgs/IMG_20230116_135224_11zon.jpg";
import Image3 from "/public/imgs/Screenshot 2023-07-02 at 6.54.51 PM_11zon.jpg";

import Image4 from "/public/imgs/IMG_20230115_154426_11zon.jpg";

import Image5 from "/public/imgs/IMG-20221115-WA0007_11zon.jpg";
import Image2 from "/public/imgs/IMG_20221025_095030_11zon.jpg";

export default {
  data() {
    return {
      items: [
        {
          src: Image1,
        },
        {
          src: Image2,
        },
        {
          src: Image3,
        },
        {
          src: Image4,
        },
        {
          src: Image5,
        },
        {
          src: Image6,
        },
      ],
    };
  },
  components: {
    BtmHero: BtmHero,
  },
};
</script>

<style scoped src="./About.css" />
