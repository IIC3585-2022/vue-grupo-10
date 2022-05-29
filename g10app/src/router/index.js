import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecipesView from "../views/RecipesView.vue";
import RecipeDetail from "../components/RecipeDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    { 
      path:'/recipes', 
      name:'recipes',
      component: RecipesView,
    },
    { 
      path:'/detail', 
      name:'detail',
      component: RecipeDetail,
    },
  ],
});

export default router;
