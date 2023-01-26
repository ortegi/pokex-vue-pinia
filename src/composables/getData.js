import {ref} from 'vue'

export const useGetData = () =>{
    
    const data = ref(null)
    const error = ref(null)

    const getData = async (url)=>{
        error.value = null
        try{
            const res = await fetch(url)
            const resJson = await res.json()
            data.value = resJson
        }catch(e){
            error.value = "Error del servidor"
        }
    }

    return{
        data,
        error,
        getData
    }
}