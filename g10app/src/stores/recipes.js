import { defineStore } from "pinia";
import { searchRequest } from "../api";

import { useStorage } from "@vueuse/core";

// Import axios to make HTTP requests
//import axios from "axios"

export const useUserStore = defineStore("recipe", {
  state: () => ({
    recipes: [],
    inputIngredients: useStorage("inputIngredients", []),
    myFavorites: useStorage("myFavorites", new Set()),
    currentRecipe: useStorage("currentRecipe", {}),
  }),
  getters: {
    getRecipes(state) {
      return state.recipes;
    },

    getIdMyFavorites(state) {
      let listOfSet = [...state.myFavorites];
      let listofIds = [];
      if (state.myFavorites) {
        listOfSet.forEach((item) => {
          listofIds.push(item.id);
        });
      }
      return listofIds;
    },
    getCurrentRecipe(state) {
      return state.currentRecipe;
    },
  },
  actions: {
    addToFavorites(item) {
      this.myFavorites.add(item);
    },
    removeFromFavorites(toRemove) {
      const obj = [...this.myFavorites].find((obj) => obj.id === toRemove.id);

      this.myFavorites.delete(obj);
    },
    addIngredient() {
      this.inputIngredients.push("");
    },
    changeIngredient(index, event) {
      this.inputIngredients[index] = event.target.value;
    },
    async fetchRecipes() {
      try {
        const itemStr = this.inputIngredients.toString();
        const data = await searchRequest(itemStr);
        this.recipes = data.data;
        //this.recipes = searchByIngredientDummy

        //console.log(this.recipes);
        //console.log("fetched");
      } catch (error) {
        alert(error);
        //console.log(error);
      }
    },
    setRecipe(recipe) {
      this.currentRecipe = recipe;
    },
  },
});
