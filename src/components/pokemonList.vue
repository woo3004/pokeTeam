<template>
    <div id="wrapper">
        <div id="input-box">
            <input id="search" v-model="pokeList" placeholder="Name for this team">
            <button v-if="pokeList === ''" id="add-pokeList">Add {{pokeList}}</button>
            <button v-else id="add-pokeList" @click="addpokeList">Add </button>
        </div>
        
        <div id="select-title" v-if="selectedpokemons.length > 0"><h2>Selected Pokemons</h2></div>

        <div v-for="select in selectedpokemons" :key="select.title" id="selected-list">
            <p ><strong>{{select.name}}</strong></p>
            <p id="remove" @click="remove(select)">remove</p>
        </div>

        <div id="pokemon-list">
            <div v-for="pokemon in pokemons" :key="pokemon.title">
                <div id="pokemon-box">
                    <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.index + '.png'">
                    <div id="total-info">
                        <div id="pokemon-info">
                            <p>Name: {{pokemon.name}}</p>
                            <p>Type: {{pokemon.type}}</p>
                        </div>
                        <div id="checkbox-box">
                            <p id="add-box" @click="checkpokemon(pokemon)">Add</p>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'pokemonList',
  props: {
      pokemons: Array
  },
  data() {
      return {
          pokeList: '',
          selectedpokemons: [],
          isReset: true
      }
  },
  methods: {
      checkpokemon(pokemon) {
            this.selectedpokemons.push(pokemon);
      },

      addpokeList() {
          let newpokeList = {
              name: this.pokeList,
              pokemons: this.selectedpokemons
          }

          if(this.selectedpokemons.length !== 0)
          {
            this.$root.$data.pokeLists.push(newpokeList);
            this.pokeList = '';
            this.selectedpokemons = [];
            this.isReset = false;
          }
      },

      remove(select) {
          let pokemonIndex = this.selectedpokemons.indexOf(select);
          if(pokemonIndex > -1)
          {
            this.selectedpokemons.splice(pokemonIndex, 1);
          }
      }
  }
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    #add-box {
        font-size: large;
    }

    #add-box:hover {
        color: #7fc79b;
    }

    #remove:hover {
        color: #F08700;
        text-decoration: underline;
    }

    #select-title {
        margin-bottom: 15px;
    }

    #selected-list {
        color: rgb(99,99,99);
        display: flex;
        width: 15%;
        margin: auto;
        margin-bottom: 10px;
        justify-content: space-between;
        font-size: 120%;
    }

    #pokemon-list {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #pokemon-box {
        border: solid 3px rgb(49, 99, 145);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        margin: 20px;
        width: 300px
    }

    #pokemon-info  {
        font-size: 110%;
        width: 60%;
        text-indent: 10px;
        text-align: left;
        border-top: solid 3px rgb(49, 99, 145);
        padding: 15px;
    }

    #total-info {
        display: flex;
    }

    #add-pokeList {
        width: 70px;
        font-size: 100%;
    }

    #input-box {
        padding: 5px;
        display: flex;
        justify-content: center;
    }

    #input-box * {
        padding: 6px;
        margin: 5px;
        margin-bottom: 30px;

    }

    #search {
        width: 20%;
        height: 30px;
        font-size: 120%;
    }

    #checkbox-box {
        width: 30%;
        border-top: solid 3px rgb(49, 99, 145);
        border-left: solid 3px rgb(49, 99, 145);
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
    }
</style>