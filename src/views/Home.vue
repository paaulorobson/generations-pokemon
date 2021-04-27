<template>
  <div class="home">
    <section class="banner-container">
      <div class="banner"></div>
    </section>
    <section class="card-container">
      <Card />
    </section>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "Home",
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
section.banner-container {
  width: 100%;

  .banner {
    background-image: url("../assets/banner.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top;
    height: 620px;
    width: 100%;
  }
}

section.card-container {
  width: 100%;
  max-width: 1240px;
  margin: auto;
  position: relative;
  top: -150px;
}
</style>
