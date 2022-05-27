
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
        myFavorites:new Set(),
    }),
    getters: {
      getRecipes(state){
          return state.recipes
        }
    },
    actions: {
      addToFavorites(item){
        this.myFavorites.add(item)
      },
      removeFromFavorites(toRemove){
        this.myFavorites.delete(toRemove)
      },
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