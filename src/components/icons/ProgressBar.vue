<script setup>

   import { ref } from 'vue'

    const props = defineProps(['widthx', 'stat'])

    const color = ref('')
    const classColor = ref(true)

    if(props.stat === 'attack'){
        color.value = '#E5E059';
    }else if(props.stat === 'hp'){
        color.value = '#4E937A'
    }else if(props.stat === 'defense'){
        color.value = '#70CAD1 '
    }else if(props.stat === 'special-attack'){
        color.value = '#E5625E'
    }else if(props.stat === 'special-defense'){
        color.value = '#995FA3'
    }else{
        classColor.value = '#EE6C4D'
    }

</script>


<template>
    <div class="progress">
        <div class="progress-bar progress-bar-striped" :class="{color : classColor }" role="progressbar" :style="{ 'width': widthx + '%', backgroundColor: color}"  aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    
</template>

<style scoped>

    .progress{
        margin-top: 3px;
        margin-bottom: 20px;
    }

</style>