<template>
  <div>
    <h1>Nome da geracao: {{ generation.name }}</h1>
    <h2>Numero de Pokemons: {{ generation.qntPokemons }}</h2>
    <h2>Tipos de Pokemons</h2>
    <div v-for="(type, index) in generation.types" :key="index">
      {{ index }} - {{ type.name }}
    </div>
    <hr />
    <h2>Especies de Pokemons</h2>
    <div v-for="(poke, index) in generation.pokemonSpecies" :key="index">
      {{ index }} - {{ poke.name }}
    </div>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  name: "Generation",
  data() {
    return {
      generation: {
        name: "",
        qntPokemons: "",
        types: [],
        pokemonSpecies: [],
      },
    };
  },

  methods: {
    async fetchPokemons() {
      try {
        const generations = await api.get(
          `/generation/${this.$route.params.id}`
        );

        this.generation.name = generations.data.name;
        this.generation.qntPokemons = generations.data.pokemon_species.length;
        this.generation.types = generations.data.types;
        this.generation.pokemonSpecies = generations.data.pokemon_species;
      } catch (err) {
        console.warn(err);
      }
    },
  },
  created() {
    this.fetchPokemons();
  },
};
</script>
