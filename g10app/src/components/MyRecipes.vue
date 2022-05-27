
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">ACA IRAN LAS RECETAS</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
  <div>
      <h1>Made By Getters</h1>
    <div 
      v-if ="store.getRecipes"
      v-for='gettersRecipe in store.getRecipes' 
      :key='gettersRecipe.id'>
      {{gettersRecipe.id}} {{gettersRecipe.title}} 
      </div>
    
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
//import users store
import { useUserStore } from "../stores/recipes";
// declare store variable
const store = useUserStore();

//const msg = ref("Welcome to my Vuex Store");


onMounted(() => {
  store.fetchRecipes();
})


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
