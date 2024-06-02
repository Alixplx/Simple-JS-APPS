const API_KEY = "70c5d879ee3e43ad8a4814672c15626c"

const recipeListElement = document.getElementById('recipe-list')

function showRecipes(recipes) {

    recipeListElement.innerHTML = ""
    recipes.forEach((recipe) => {

        const recipeItem = document.createElement('li')
        recipeItem.classList.add('recipe-item')

        const recipeImgElement = document.createElement('img')
        recipeImgElement.src = recipe.image
        recipeImgElement.alt = "Recipe Image"

        const recipeTitle = document.createElement('h2')
        recipeTitle.innerHTML = recipe.title

        const recipeIngredientsElement = document.createElement('p')
        recipeIngredientsElement.innerHTML = `
         <strong>Ingredients :</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}
        `
        const recipeLinkElement = document.createElement('a')
        recipeLinkElement.href = recipe.sourceUrl
        recipeLinkElement.innerText = "View Recipe"

        recipeItem.appendChild(recipeImgElement)
        recipeItem.appendChild(recipeTitle)
        recipeItem.appendChild(recipeIngredientsElement)
        recipeItem.appendChild(recipeLinkElement)
        recipeListElement.appendChild(recipeItem)
    })
}

async function getRecipes() {

    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

    const data = await response.json()

    return data.recipes
}

async function init() {

    const recipes = await getRecipes()
    showRecipes(recipes)
}

init()