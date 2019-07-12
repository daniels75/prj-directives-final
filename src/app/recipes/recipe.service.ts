import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  constructor(private shoppingServe: ShoppingListService) {

  }
  private recipes: Recipe[] = [
    new Recipe('Hamburger',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Tomato', 3)
      ]
    ),
    new Recipe('Chicken butter',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Garam masala', 20)
      ])
  ];

  getRecipies() {
    return this.recipes.slice();
  }

  addIngredientToTheShoppingList(ingredients: Ingredient[]){
    this.shoppingServe.addIngredients(ingredients);
  }
}
