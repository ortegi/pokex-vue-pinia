import { defineStore } from "pinia";
import { ref } from 'vue'
import {useShowMessage} from '../composables/showMessage'

const {showMessage} = useShowMessage()

export const useFavoritosStore = defineStore("favoritos", () => {
    
    const fav = ref([])
   

    const add = (poke) =>{
        const isPoke = fav.value.find(element => element === poke)
        if(!isPoke){
            fav.value.push(poke)
            showMessage('ok')
        }else{
            showMessage('ya existe','red')
        }
       
    }

    const remove = (name) =>{
        const result = fav.value.filter( item => item.name !== name)
        fav.value = result
        showMessage('Pokemon removed!')
    }

    return{
        fav,
        add,
        remove

    }
})