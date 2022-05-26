<script>
import { searchIngredients,searchRequest, searchByIngredient } from "@/api/index.js";
import TheItem from "@/components/TheItem.vue";

export default {
  data() {
    return {
      inputIngredients: [],
      realIngredients: [],
      recipes: [], 
    };
  },
  methods: {

    async handleSearch (){ 
      const res2 = await searchRequest(...this.realIngredients);
      console.log("ing 2: ", this.realIngredients, " res: ", res2);
      this.recipes.push.apply(this.recipes, res2);
    },

    addIngredient() {
      this.inputIngredients.push("");
    },
    changeIngredient(index, event) {
      this.inputIngredients[index] = event.target.value;
    },
    onSubmit() {
      this.inputIngredients.map((ingredient) => {
        searchIngredients(ingredient).then((res) => {
          if (res.data.length) this.realIngredients.push(res.data[0].name);
        });
      });
    },
  },
};
</script>

<template>

  <div class="container">
    <h1 class="title">Ingresa tus ingredientes</h1>
    <button class="button is-primary" type="button" @click="addIngredient">
      Agregar +
    </button>
    <form @submit.prevent="onSubmit">
      <div
        class="input-container"
        v-for="(_, index) in inputIngredients"
        v-bind:key="index"
      >
        <input
          class="input"
          v-model="inputIngredients[index]"
          type="text"
          placeholder="onion"
          @change="(event) => changeIngredient(index, event)"
          required="true"
        />
        <button
          type="button"
          class="button is-danger"
          @click="inputIngredients.splice(index, 1)"
        >
          -
        </button>
      </div>
      <button class="button is-success" v-if="inputIngredients.length" v-on:click="handleSearch">
        Buscar Receta
      </button>
    </form>
  </div>


  <h1 class="title">Aqui las recetas</h1>
  <div class="recipes-box" v-if="recipes.length">
        <TheItem
        v-for="recipe in recipes"
        :key= "recipe.id"
        :recipe = "recipe"
        />

      </div>

</template>

<style>
.input-container {
  display: flex;
}
</style>
