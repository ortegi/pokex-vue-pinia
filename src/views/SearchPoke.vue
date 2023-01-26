<script setup>
    import { storeToRefs } from 'pinia'
    import {RouterLink} from 'vue-router'
    import { useGetData } from '../composables/getData'
 
    import {useFavoritosStore} from '../store/favoritos'



    const { data, getData,} = useGetData()

    const useFavoritos = useFavoritosStore()
    const {add} = useFavoritos
 

    getData('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
</script>

<template>
    <div class="container mt-5 ">
        <h2 class="text-center mb-2">All pokemons of the world!</h2>
        <div v-if="data">
            <div class="d-flex flex-wrap mt-4">
                <div class="card mt-2 mx-auto" v-for="pokemon in data.results" >
                    <div class="card-body">
                        <div class="d-flex justify-content-start"> 
                            <h5 class="text-capitalize">{{ pokemon.name }}</h5>
                            <i class="fa-solid fa-dragon mt-1 mx-auto"></i>
                        </div>
                    <i class="fa-solid fa-heart fa-lg" @click="add(pokemon)"> </i>
                    <router-link :to="`/${pokemon.name}`" class="btn btn-outline-primary btn-sm ms-5"> Saber más</router-link>
                    </div>
                </div>
            </div>
            <div class="mt-4 ms-3">
                <button :disabled="!data.previous" class="btn btn-success me-2" @click="getData(data.previous)"> Previous</button>
                <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)"> Next</button>
            </div>
        </div> 
    </div>
</template>


<style scoped>

    h2{
        font-weight: 700;
        color: #495057;
    }
    .card{
        width: 200px;
    }

    .fa-heart{
        color: red;
        cursor: pointer;
    }

    .fa-dragon{
        color: #9bc53d;
    }
</style>