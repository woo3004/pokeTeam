<template>
    <div id="wrapper">
        <pokeListList :pokeLists="pokeLists"/>


    </div>
</template>

<script>
import pokeListList from '../components/pokeList.vue'

export default {
    name: 'pokeLists',
    components: {
        pokeListList
    },
    data() {
        return {

        }
    },
    computed: {
        numpokeLists() {
            return this.$root.$data.pokeLists;
        },
        pokeLists() {
            return this.$root.$data.pokeLists;
        }
    }
}
</script>

<style scoped>
    #wrapper {
        margin: 40px;
    }
</style>
