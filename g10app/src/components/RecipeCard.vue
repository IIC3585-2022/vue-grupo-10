<script setup>
import { useUserStore } from "../stores/recipes";
import { useRouter } from "vue-router";

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
  console.log(recipe);
  router.push({
    name: "detail",
  });
};
</script>

<template>
  <div class="columns recipeCard">
    <div class="column">
      <div class="card">
        <div class="columns is-vcentered">
          <div class="column">
            <figure
              class="image is-128x128 is-clickable"
              @click="() => handleClick(recipe)"
            >
              <img class="is-rounded image is-128x128" :src="recipe.image" />
            </figure>
          </div>

          <div class="column">
            <h3 class="title is-5">{{ recipe.title }}</h3>
          </div>

          <div class="column">
            <button
              class="button is-danger"
              @click="store.removeFromFavorites(recipe)"
              v-if="
                inFavorites ||
                store.myFavorites.has(recipe) ||
                store.getIdMyFavorites.includes(recipe.id)
              "
            >
              Eliminar receta de favoritos
            </button>
            <button
              class="button is-success addFav"
              @click="store.addToFavorites(recipe)"
              v-else
            >
              Añadir receta a favoritos
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.recipeCard {
  width: 70%;
}
.card {
  padding: 2em;
  margin-bottom: 2em;
}
.columns {
  margin-top: 2em;
}
.addFav {
 width: 100%;
}
</style>
