<template>
  <div class="card">
    <div v-for="(generation, index) in generations" :key="index">
      <router-link :to="`/generation/${urlId[generation.name]}`">
        <div class="wrapper">
          <div class="figure">
            <p>{{ generation.name }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  name: "Card",
  data() {
    return {
      generations: [],
      urlId: {},
    };
  },
  methods: {
    async fetchGenerations() {
      try {
        const generation = await api.get("/generation");
        this.generations = generation.data.results;
        this.urlId = this.generations.reduce(
          (acc, cur, index) => (acc = { ...acc, [cur.name]: index + 1 }),
          {}
        );
      } catch (err) {
        console.warn(err);
      }
    },
  },
  created() {
    this.fetchGenerations();
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .wrapper {
    width: 280px;
    border-radius: 8px;
    box-shadow: #ddd 0px 5px 5px;
    margin-bottom: 2rem;
    cursor: pointer;

    .figure {
      background-image: linear-gradient(
          rgba(18, 19, 18, 0.26),
          rgba(0, 0, 0, 0.822)
        ),
        url("../assets/img-card.svg");
      background-repeat: no-repeat;
      background-size: 100%;
      width: 100%;
      height: 150px;
      position: relative;

      p {
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        position: absolute;
        bottom: 0;
        padding: 10px;
        text-transform: capitalize;
      }
    }
    .card-content {
      background-color: #fff;
      p {
        color: #373737;
        font-size: 1rem;
        padding: 10px;
      }
    }
  }
}
</style>
