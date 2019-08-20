const db = require('../../data/config')

const getRecipes = async () => {
  const [recipes] = await db('recipes')
  return recipes
}

const getShoppingList = async recipe_id => {
  const ingredients = await db('ingredients')
    .whereIn('id', function() {
      this.select('ingredient_id')
      .from('recipes_ingredients')
      .where({ recipe_id })
    })
  return ingredients
}

const getInstructions = async recipe_id => {
  const [steps] = await db('steps').where({ recipe_id })
  return steps
}

module.exports = {
  getRecipes,
  getShoppingList,
}
