import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State variables to manage input, recipes, and loading state
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API URL base
  

  // Fetch recipes based on the ingredient input
  const fetchRecipes = async (ingredient) => {
    if (!ingredient) return;

    setLoading(true);
    setError(null);
    setRecipes([]);

    try {
      const ingredientList = ingredient.split(',').map((each) => each.trim());

      const allMeals = new Set(); // To hold unique meals

      // Loop over the ingredients and fetch meals for each one
      for (let ingredient of ingredientList) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );

        const data = await response.json();

        // If meals are returned, add them to the set (duplicates will be removed)
        if (data.meals) {
          data.meals.forEach((meal) => allMeals.add(JSON.stringify(meal))); // Store as JSON to avoid duplicates
        }
      }

      // Convert the set back to an array and update state

      const recipeList = Array.from(allMeals).map((meal) => JSON.parse(meal))
      console.log(recipeList)
      if(recipeList.length>0){
        setRecipes(recipeList);
      }
       else {
        setError("No recipes found for the given ingredient.");
      }
    } catch (err) {
      setError("There was an error fetching the recipes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchRecipes()
  },[])

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes(ingredient);
  };

  return (
    <div className="display-body">
    <div className="app-container">
      <h1>Taylor's Recipe Finder</h1>

      <form onSubmit={handleSubmit} className="ingredient-form">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter an ingredient (e.g., chicken, tomato)"
          required
        />
        <button type="submit">Find Recipes</button>
      </form>
    </div>

    <div className="recipe-results">
      {loading && <p>Loading recipes...</p>}
      {error && <p className="error">{error}</p>}
      {recipes.length > 0 &&
        recipes.map((meal) => (
          <div className="recipe-card" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <a href={`https://www.themealdb.com/meal/${meal.idMeal}`} target="_blank" rel="noopener noreferrer">
              View Full Recipe
            </a>
          </div>
        ))}
    </div>
    </div>
  );
}

export default App;

