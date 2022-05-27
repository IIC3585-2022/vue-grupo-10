
import { defineStore } from 'pinia'
import { searchByIngredient, searchRequest } from '../api'
import { searchByIngredientDummy } from '../dummies'

// Import axios to make HTTP requests
//import axios from "axios"

export const useUserStore = defineStore("recipe", {
    state: () => ({
        recipes: [],
        inputIngredients: [],
        realIngredients: [],
    }),
    getters: {
      getRecipes(state){
          return state.recipes
        }
    },
    actions: {
      
      addIngredient() {
        this.inputIngredients.push("");
      },
      changeIngredient(index, event) {
        this.inputIngredients[index] = event.target.value;
      },
      async fetchRecipes() {
        try {
          //const data = await searchRequest()
          this.recipes = searchByIngredientDummy
          //this.recipes = data.data

          console.log(this.recipes)
          console.log("fetched")
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})