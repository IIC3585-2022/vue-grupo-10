
import { defineStore } from 'pinia'
import { searchByIngredient, searchRequest } from '../api'
import { searchByIngredientDummy } from '../dummies'

// Import axios to make HTTP requests
//import axios from "axios"

export const useUserStore = defineStore("recipe", {
    state: () => ({
        recipes: [],
    }),
    getters: {
      getRecipes(state){
          return state.recipes
        }
    },
    actions: {
      async fetchRecipes() {
        try {
          const data = await searchRequest()
          this.recipes = data.data
          //this.recipes = searchByIngredientDummy

          console.log(this.recipes)
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})