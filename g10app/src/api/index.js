import axios from "axios";

export const searchByIngredient = async (ingredients) =>
  await axios.request({
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
    params: {
      ingredients: ingredients,
      ranking: "1",
      ignorePantry: "true",
      number: "5",
    },
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "5f8da93941msh5552c3429ba2fc8p1eefc0jsn7a633979cbd5",
    },
    
  })
  .then((response) => {
    console.log("response: ", response)
    return response;
  });
  

export const searchRequest = async (ingredients) =>
  axios({
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
    params: {
      ingredients: ingredients,
      ranking: "1",
      ignorePantry: "true",
      number: "5",
    },
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "5f8da93941msh5552c3429ba2fc8p1eefc0jsn7a633979cbd5",
    },
  }).then((response) => {
    return response;
  });

export const searchIngredients = async (ingredient) =>
  axios({
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete",
    params: { query: ingredient, number: "10" },
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "5f8da93941msh5552c3429ba2fc8p1eefc0jsn7a633979cbd5",
    },
  }).then((response) => {
    return response;
  });
