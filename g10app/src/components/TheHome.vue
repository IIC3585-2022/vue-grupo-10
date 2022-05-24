<script>
import { searchIngredients } from "@/api/index.js";
export default {
  data() {
    return {
      inputIngredients: [],
      realIngredients: [],
    };
  },
  methods: {
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
      <button class="button is-success" v-if="inputIngredients.length">
        Buscar Receta
      </button>
    </form>
  </div>
</template>

<style>
.input-container {
  display: flex;
}
</style>
