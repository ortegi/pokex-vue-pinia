<script setup>
  import { ref, onMounted } from 'vue'
  import { useGetData } from '../composables/getData';
  import { useShowMessage } from '../composables/showMessage'
  import {useRoute} from 'vue-router'
  import {useFavoritosStore} from '../store/favoritos'
  import ProgressBar from '../components/icons/ProgressBar.vue'


  const useFavoritos = useFavoritosStore()
  const {add} = useFavoritos



  const route = useRoute()
  
  const { data,  getData, error} = useGetData()
  
  const {showMessage} = useShowMessage()

  const pokemonInput = ref('')

  
  getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
  
  onMounted( () =>{
    window.addEventListener('keypress', e => {
      if( e.code=== 'Enter'){ 
        getData(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.value}`)
        changeParam()
      }
    });

  })

  const changeParam = () =>{
    console.log(route.params.name)
    route.params.name = pokemonInput.value
    console.log(route.params.name)
  }


</script>

<template>
  <div class="container">
    
    <div class="row">
      <div class="col-7">
        <div class="input-group mb-3 mt-5">
          <input type="text" class="form-control" :class="{ redborder: error}" v-model="pokemonInput" placeholder="Pokemon's name" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button @click="getData(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)" class="btn btn-outline-primary" type="button" id="button-addon2"> <i class="fa-solid fa-magnifying-glass fa-lg"></i> </button>
        </div>
      </div>
   </div>

   
   <div v-if="error">
      <p>Sorry! Pokemon not found :( </p>
    </div>

    <div class="row ms-2 mt-5" v-if="data">
      <div class="col-4 poke-img">
        <i class="fa-solid fa-heart fa-xl pt-4 ps-1" @click="add(data)"></i>
        <img  :src="data.sprites.other.home.front_default" height="auto" class="img-fluid rounded mx-auto  d-block pb-3"> 
        <h3 class="text-center text-capitalize font-weight-bold"> {{ data.name }}</h3>
        <div class="d-flex justify-content-center">
            <div v-for="type in data.types" class="type d-flex align-items-center justify-content-center"> 
             {{ type.type.name }} 
            </div>
        </div>
        <p class="text-left mx-3 mt-2"> Height: <span>{{ data.height * 10 }}cm</span> </p>
        <p class="text-left mx-3"> Weight: <span>{{ data.weight / 10 }}kg</span> </p>
        <p class="text-left bolder mx-3"> Habilities:</p>
        <p v-for="ability in data.abilities"> <span class="hability mx-3">{{ ability.ability.name }} </span>   </p>
      </div>

      <div class="col-8">
        <div class="info container">
            <div class="row pt-4 mx-auto">
              <!--name Stat-->
              <div class="col-4"> 
                <ul class="stat-list">
                  <li v-for="stati in data.stats"> {{ stati.stat.name }}</li>
                </ul>
              </div>
              <div class="col-1 n-stat">
                 <ul>
                    <li v-for="level in data.stats"> {{ level.base_stat }}</li>
                 </ul>
              </div>
              <div class="col-7 pe-5 pt-2">
                  <ProgressBar 
                  v-for="stati in data.stats"
                  :widthx="stati.base_stat"
                  :stat="stati.stat.name"
                  />
              </div>

            </div>

        </div>
    
      </div>

    
    </div>
  
  </div>

</template>
 
<style scoped>

  .poke-img{
    background-color: #fff;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  img{
    display: block;
    width: 200px;
    max-width: 100%;
    padding: 20px;
  }

  .info{
    background-color: #fff;
    height: 270px;
    width: 100%;
    box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
    border-radius: 6px;
    padding: 0 15px;
  
  }

  h3{
    font-weight: 700;
  }

  .fa-heart{
    color: red;
    cursor: pointer;
  }
  .type{
    background-color: #354bc5;
    color: white;
    border-radius: 6px;
    margin: 0 4px;
    height: 30px;
    padding: 10px;
    width: 80px;
  }

  .type h5{
    font-size: 16px;
  }

  p{
    font-size: 18px;
    font-weight: 600;
  }

  span{
    font-weight: 400;
  }

  .bolder{
    font-weight: 600;
  }

  .hability{
    margin: 0 5px;
    background-color: #354bc5;
    padding: 2px 3px;
    color: #fff;
    border-radius: 6px;
    font-size: 17px;
  }

  
  
  ul{
    padding: 0px;
    text-align: end;
  }
  
  .stat-list li{
    margin: 10px 0;
    padding: 0;
    list-style-type: none;
    list-style-position: outside;
    font-size: 16px;
    font-weight: 500;
  }

  .n-stat li{
    list-style: none;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 0;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }


 .redborder {
    border: 4px solid red;
}


</style>