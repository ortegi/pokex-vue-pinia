<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <div class="container"> 
      
    <div class="row">
      <div class="col-3 menu mt-4">
        <div class="d-flex flex-column align-items-center">
           <router-link class="item text-light mt-5 mb-5" to="/pikachu"><i class="fa-solid fa-house fa-xl"></i> </router-Link>
           <router-link  class="item text-light mt-5 mb-5" to="/search"> <i class="fa-solid fa-play fa-xl"></i>  </router-link>
           <router-link  class="item text-light mt-5 mb-5" to="/favorites"> <i class="fa-solid fa-heart fa-xl"></i> </router-link>
        </div>
      
      </div>
      <div class="col-9">
        
      <RouterView />
      </div>

    </div>


  </div>
</template>

<style scoped>

.menu{
  height: 750px;
  background-color: #354bc5;
  padding: 40px;
  width: 10%;
  border-radius: 16px;
}

.item{
  text-decoration: none; 
}

</style>
