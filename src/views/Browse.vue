<template>
  <div class="browse">
    <pokemonList :pokemons="pokemons"/>
  </div>
</template>

<script>
import pokemonList from '@/components/pokemonList.vue'

export default {
  name: 'Browse',
  components: {
    pokemonList
  },
  computed: {
    pokemons()
    {
      return this.$root.$data.pokemons;
    }
  }
}
</script>

