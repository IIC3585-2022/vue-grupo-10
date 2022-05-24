<script>
export default {
  data() {
    return {
      ingredients: [],
    };
  },
  methods: {
    addIngredient() {
      this.ingredients.push("");
    },
    changeIngredient(index, event) {
      this.ingredients[index] = event.target.value;
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>Ingresa tus ingredientes</h1>
    <button class="button" type="button" @click="addIngredient">
      Agregar +
    </button>
    <form @submit.prevent="onSubmit">
      <div
        class="input-container"
        v-for="(_, index) in ingredients"
        v-bind:key="index"
      >
        <input
          class="input"
          v-model="ingredients[index]"
          type="text"
          placeholder="onion"
          @change="(event) => changeIngredient(index, event)"
          required="true"
        />
        <button
          type="button"
          class="button is-danger"
          @click="ingredients.splice(index, 1)"
        >
          -
        </button>
      </div>
      <button class="button is-primary" v-if="ingredients.length">
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
