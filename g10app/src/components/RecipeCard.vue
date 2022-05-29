<script setup>
import { useUserStore } from "../stores/recipes";
import { useRouter } from 'vue-router'

const store = useUserStore();
const router = useRouter();
defineProps({
  recipe: {
    type: Object,
    required: true,
  },
  inFavorites: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const handleClick = (recipe) => {
  store.setRecipe(recipe);
  console.log(recipe)
  router.push({
    name: "detail",
  });
};
</script>

<template>
  <div class="card is-flex-direction-column is-align-items-center">
    <header class="card-header">
      <p class="card-header-title is-centered">{{ recipe.title }}</p>
    </header>
    <div class="card-image is-clickable" @click="() => handleClick(recipe)">
      <figure class="image">
        <img :src="recipe.image" />
      </figure>
    </div>
    <footer class="card-footer">
      <button
        v-if="
          inFavorites ||
          store.myFavorites.has(recipe) ||
          store.getIdMyFavorites.includes(recipe.id)
        "
        @click="store.removeFromFavorites(recipe)"
        class="button is-warning card-footer-item"
      >
        Eliminar receta de favoritos
      </button>
      <button
        v-else
        @click="store.addToFavorites(recipe)"
        class="button is-primary card-footer-item"
      >
        Añadir receta a favoritos
      </button>
    </footer>
  </div>
</template>

<style>
.card {
  margin-bottom: 2em;
}
</style>
