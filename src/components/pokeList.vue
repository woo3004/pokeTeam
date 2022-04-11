<template>
    <div id="wrapper">
        <h2 v-if="pokeLists.length === 0">You don't have any Pokemon teams added yet</h2>
        <h2 v-else-if="pokeLists.length === 1">You have {{pokeLists.length}} Pokemon Team</h2>
        <h2 v-else>You have {{pokeLists.length}} Pokemon Teams</h2>

        <div id="pokeList-box" v-for="pokeList in pokeLists" :key="pokeList.name">
            <div id="total-box">
                <div id="pokeList-info">
                    <p id="pokeList-name"><strong>{{pokeList.name}}</strong></p>
                    <div id="pokemon-list">
                        <div class="pokemon-name" v-for="pokemon in pokeList.pokemons" :key="pokemon.name"> 
                            <div id="pokeTeam-box">
                                <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.index + '.png'">
                                <p>{{pokemon.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="remove-button">
                    <h6 @click="removepokeList(pokeList)">Remove</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pokeList',
    props: {
        pokeLists: Array
    },
    data() {
        return {}
    },
    methods: {
        removepokeList(pokeList) {
            let pokeListIndex = this.pokeLists.indexOf(pokeList);
            if(pokeListIndex > -1) {
                this.pokeLists.splice(pokeListIndex, 1);
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

    hr {
        width: 45%;
        margin: auto;
    }

    h2 {
        margin-bottom: 10px;
        color: #225560;
    }

    #total-box {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        width: 45%;
        margin:  10px auto;
        text-align: left;
        border: solid 2px #225560;
        border-radius: 8px;  
    }

    #remove-button {
        padding: 10px;
    }

    #remove-button p {
        font-size: small;
    }

    h6:hover {
        text-decoration: underline;
        color: #F08700;
        cursor: pointer;
    }

    #pokeList-info * {
        margin: 3px;
    }

    #pokemon-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
    }

    #pokeTeam-box {
        border: solid 2px #225560;
        border-radius: 8px;
        text-align: center;
    }

    #pokeTeam-box img {
        width: 150px;
    }

    #pokeList-name {
        text-indent: 10px;
        font-size: 170%;
        margin-bottom: 10px;
    }

    #pokemon-list {
        font-size: 120%;
    }

</style>
