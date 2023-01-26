<script setup>
    import {useFavoritosStore} from '../store/favoritos.js'
    import { storeToRefs } from 'pinia';
    import { useRouter } from 'vue-router';

    const useFavoritos = useFavoritosStore()

    const {remove} = useFavoritos
    const {fav} = storeToRefs(useFavoritos)

    const router = useRouter()

    const back = ()=> {
        router.push("/search")

    }

</script>


<template>
    <div class="container mt-5">
        <h2 class="text-center">Fav pokemons</h2>
        <div v-if="fav.length > 0">
            <ul class="list-group mt-4 mx-auto">
                <li v-for="poke in fav" class="list-group-item">
                    {{ poke.name }}
                    <i class="fa-regular fa-trash-can fa-sm ms-5" @click="remove(poke.name)"></i>
                </li>
            </ul>

        </div>
        <div v-else class="d-flex justify-content-center flex-column">
            <h5 class="text-center mt-4">Favorite Pokemons not added Yet! </h5>
            <button class="btn btn-outline-primary mt-3" @click="back"> Look for Pokemons</button>
        </div>
        
    </div>

    <div>

    </div>
</template>

<style scoped>
     h2{
        font-weight: 700;
        color: #495057;
    }

    ul{
        width: 50%;
    }

    li{
        font-size: 18px;
    }


    .fa-regular{
        cursor: pointer;
    }
</style>