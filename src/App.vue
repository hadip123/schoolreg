<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main>
<br>    
    
    <RouterView />

  </main>
</template>
<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');

@font-face {
  font-family: "B Homa";
  src: url(B_Homa.ttf);
}

@tailwind base;
@tailwind components;
@tailwind utilities;

main{
  background-image: url('./back.jpg');
   background-repeat: no-repeat; 
   background-size: cover;
    background-attachment: fixed;
    -webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
  

}


</style>
