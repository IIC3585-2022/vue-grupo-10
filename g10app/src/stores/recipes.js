
import { defineStore } from 'pinia'
import { searchByIngredient, searchRequest } from '../api'
import { searchByIngredientDummy } from '../dummies'
import { useStorage } from '@vueuse/core'

// Import axios to make HTTP requests
//import axios from "axios"

export const useUserStore = defineStore("recipe", {
    state: () => ({
        recipes: [],
        inputIngredients: useStorage('inputIngredients', []),
        realIngredients: useStorage('realIngredients', []),
        myFavorites: useStorage('myFavorites', new Set()),
    }),
    getters: {
      getRecipes(state){
          return state.recipes
        },

      getIdMyFavorites(state){
        let listOfSet =  [...state.myFavorites]
        let listofIds = []
        if (state.myFavorites){
          listOfSet.forEach(item => {
            listofIds.push(item.id)
          })
        }
        return listofIds
      }
    },
    actions: {
      addToFavorites(item){
        this.myFavorites.add(item)
      },
      removeFromFavorites(toRemove){
        const obj = [...this.myFavorites].find(obj => obj.id === toRemove.id);

        this.myFavorites.delete(obj)
      },
      addIngredient() {
        this.inputIngredients.push("");
      },
      changeIngredient(index, event) {
        this.inputIngredients[index] = event.target.value;
      },
      async fetchRecipes() {
        try {
          const itemStr = this.inputIngredients.toString()
          const data = await searchRequest(itemStr)
          this.recipes = data.data
          //this.recipes = searchByIngredientDummy

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