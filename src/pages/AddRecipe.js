// src/AddRecipe.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const AddRecipe = ({ userId }) => { // Accept userId as a prop
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [''], // Initialize with an empty ingredient
    procedures: [''],   // Initialize with an empty procedure
  });

  // Handle input changes for title and array fields (ingredients, procedures)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      [name]: value
    }));
  };

  // Handle changes for ingredients and procedures specifically
  const handleArrayChange = (e, index, type) => {
    const value = e.target.value;
    setRecipe(prevRecipe => {
      const updatedArray = [...prevRecipe[type]];
      updatedArray[index] = value;
      return { ...prevRecipe, [type]: updatedArray };
    });
  };

  // Add a new ingredient or procedure input
  const addArrayItem = (type) => {
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      [type]: [...prevRecipe[type], ''] // Add a new empty string to the array
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'recipes'), {
        title: recipe.title,
        ingredients: recipe.ingredients,
        procedures: recipe.procedures,
        date_created: new Date().toISOString(), // Current timestamp for creation
        date_updated: new Date().toISOString(), // Current timestamp for update
        recipe_id: Math.floor(Math.random() * 1000) + 1, // Random recipe ID
        user_id: userId // Store the userId with the recipe
      });
      alert('Recipe added successfully!');
      setRecipe({ title: '', ingredients: [''], procedures: [''] }); // Reset form
    } catch (err) {
      console.error("Error adding recipe: ", err);
      alert('Error adding recipe');
    }
  };

  return (
    <div>
      <h2>Add a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleArrayChange(e, index, 'ingredients')}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addArrayItem('ingredients')}>
            Add Ingredient
          </button>
        </div>
        <div>
          <label>Procedures</label>
          {recipe.procedures.map((procedure, index) => (
            <div key={index}>
              <input
                type="text"
                value={procedure}
                onChange={(e) => handleArrayChange(e, index, 'procedures')}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addArrayItem('procedures')}>
            Add Procedure
          </button>
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
