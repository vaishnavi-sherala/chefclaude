import React from 'react';

const Container5 = () => {
  const [ingredientItems, setIngredients] = React.useState(['tomato', 'potato', 'samosa']);
  const [recipeShow, setRecipeShown] = React.useState(false);

  function toggleRecipe() {
    setRecipeShown((prevShown) => !prevShown);
  }

  const ingredientList = ingredientItems.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(event.target);
    const newIngredient = formData.get('ingredient');
    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      event.target.reset(); // Clear input field after submission
    }
  }

  return (
    <div style={{ paddingTop: '50px'}}> {/* Added padding from the top */}
      <h2 style={{textAlign:'center'}}>Add Your Ingredient</h2 >
      <main id="main">
        <form onSubmit={addIngredient} className="ingredient-form">
          <input name="ingredient" type="text" placeholder="e.g orange" />
          <button type="submit">Add Ingredient</button>
        </form>

        {ingredientItems.length > 0 && (
          <section>
            <h2>Ingredients on Hand:</h2>
            <ul className="ingredients-list">{ingredientList}</ul>
            {ingredientItems.length > 3 && (
              <div className="get-recipe-container">
                <div>
                  <h3>Ready for a Recipe?</h3>
                  <p>Generate a recipe from your list of ingredients!</p>
                </div>
                <button onClick={toggleRecipe}>Get a Recipe</button>
              </div>
            )}
          </section>
        )}

        {recipeShow && (
          <section>
            <h2>Chef Claude Recommends:</h2>
            <article>
              <p>
                Based on the ingredients you have, here's a simple and delicious recipe suggestion. Enjoy!
              </p>
            </article>
          </section>
        )}
      </main>

      {/* Inline Styles */}
      <style>{`
        #main {
           /* Adjusted padding for proper layout */
           

          background-color: #f5f5f5;
        }

        .ingredient-form {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .ingredient-form input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          flex: 1;
        }

        .ingredient-form button {
          padding: 10px 20px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .ingredient-form button:hover {
          background-color: #0056b3;
        }

        .ingredients-list {
          margin-top: 10px;
          list-style: none;
          padding: 0;
        }

        .ingredients-list li {
          margin-bottom: 5px;
          font-size: 16px;
          color: black;
        }

        .get-recipe-container {
          margin-top: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        .get-recipe-container h3 {
          margin: 0;
          font-size: 18px;
          color: #333;
        }

        .get-recipe-container p {
          font-size: 14px;
          color: black;
        }

        .get-recipe-container button {
          margin-top: 10px;
          padding: 10px 15px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .get-recipe-container button:hover {
          background-color: #218838;
        }

        article p {
          font-size: 16px;
          color: black;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Container5;
