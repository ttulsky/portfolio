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
      The bootcamp served as my springboard into the concepts of programming,
      equipping me with the fundamentals of Python and a profound curiosity to
      learn more. Eager to build on this foundation, I embarked on another
      immersive experience, this time with a MERN (MongoDB, Express.js, React,
      and Node.js) stack bootcamp. This experience deepened my knowledge and
      skills, particularly in the area of full-stack development, and cemented
      my passion for coding and working with databases.
    </p>

    <p>
      As a part of my continuous learning endeavor, I graduated into working
      with Vue.js and TypeScript. These powerful tools enhanced my ability to
      create dynamic, efficient, and robust web applications, further expanding
      my skill set. My journey through JavaScript, Python, the MERN stack, Vue,
      and TypeScript has been incredibly rewarding and stimulating, equipping me
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
            show-arrows="hover"
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
    <p>
      Let's collaborate to craft something extraordinary. I look forward to our
      journey of creation together!
    </p>
  </div>
</template>
<script>
import BtmHero from "../components/BtmHero.vue";
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

<style scoped>
.about {
  padding: 3% 100px;
  font-family: "Montserrat", sans-serif;
  color: #333;
  line-height: 1.6;
  text-align: left;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}
.fade {
  transition: 5s ease-out;
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
}
.about p {
  margin-bottom: 20px;
}

.about p:last-child {
  text-align: center;
  font-weight: bold;
}
.carousel-bg {
  background-color: #f9f9f9;
}
.carousel-container {
  background-color: #f9f9f9;
  width: 100%;
  overflow: hidden;
}

.carousel-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin: auto;
  display: block;
}
@media screen and (max-width: 700px) {
  .about {
    padding: 3% 20px;
    font-size: 18px;
  }
  .about h1 {
    font-size: 24px;
    margin: 10px 0;
  }
  .about p {
    line-height: 1.8;
    margin-bottom: 25px;
  }
}
.custom-transition .v-window__container {
  transition: all 5s ease-in-out;
}

@media screen and (max-width: 450px) {
  .about h1 {
    font-size: 18px;
    margin: 5px 0;
  }
  .about p {
    line-height: 1.9;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 360px) {
  .about h1 {
    font-size: 17px;
    margin: 3px 0;
  }
  .about p {
    line-height: 2;
    margin-bottom: 35px;
  }
}
</style>
