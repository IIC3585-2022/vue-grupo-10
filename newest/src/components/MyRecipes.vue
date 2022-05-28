
<template>
  <div class="greetings">
    <h1 class="green">Mis Recetas</h1>
  </div>
  <div 
    v-if='store.myFavorites'>
    <div 
      v-for='gettersRecipe in store.myFavorites' 
      :key='gettersRecipe.id'>
      <RecipeCard 
        :recipe="gettersRecipe" 
        :inFavorites="true"
        >
      </RecipeCard>
      
      </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import RecipeCard from "./RecipeCard.vue" 

//import users store
import { useUserStore } from "../stores/recipes";
// declare store variable
const store = useUserStore();

/*
const recipes = computed(() => {
  return store.recipes
})
*/

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
