<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="item">
      <h3>{{gettersRecipe.id}} {{recipe.title}}</h3>
      <img :src="gettersRecipe.image">
  </div>
</template>

<style scoped>

</style>
