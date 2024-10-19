// src/RecipeList.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";

const RecipeList = ({ userId }) => { // Accept userId as a prop
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: to manage loading state

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Query recipes where userId matches and order by createdAt
        const q = query(
          collection(db, 'recipes'),
          where('user_id', '==', userId), // Ensure user_id matches Firestore field name
          orderBy('date_created', 'desc') // Ensure date_created matches Firestore field name
        );
        const querySnapshot = await getDocs(q);
        const recipeList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRecipes(recipeList);
      } catch (err) {
        console.error("Error fetching recipes: ", err);
      } finally {
        setLoading(false); // Stop loading once the query is done
      }
    };

    if (userId) {
      fetchRecipes();
    }
  }, [userId]);

  if (loading) {
    return <p>Loading recipes...</p>; // Optional loading state
  }

  return (
    <div>
      <h2>My Recipe List</h2>
      {recipes.length ? (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  );
};

export default RecipeList;
