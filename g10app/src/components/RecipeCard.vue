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
  <div class="columns is-clickable" @click="() => handleClick(recipe)">
    <div class="column">
      <div class="card">
        <div class="columns is-vcentered">
          <div class="column">
            <figure class="image is-128x128">
              <img class="is-rounded image is-128x128" :src="recipe.image" />
            </figure>
          </div>

          <div class="column">
            <h3 class="title is-5">{{ recipe.title }}</h3>
          </div>

          <div class="column">
            <div
              v-if="
                inFavorites ||
                store.myFavorites.has(recipe) ||
                store.getIdMyFavorites.includes(recipe.id)
              "
            >
              <button
                class="button is-danger"
                @click="store.removeFromFavorites(recipe)"
              >
                Eliminar receta de favoritos
              </button>
            </div>
            <div v-else>
              <button
                class="button is-danger"
                @click="store.addToFavorites(recipe)"
              >
                Añadir receta a favoritos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  margin-bottom: 2em;
}
.columns {
  margin-top: 2em;
}
</style>
