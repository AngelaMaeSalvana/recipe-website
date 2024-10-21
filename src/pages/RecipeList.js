import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";

const RecipeList = ({ userId }) => { 
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
       
        const q = query(
          collection(db, 'recipes'),
          where('user_id', '==', userId),
          orderBy('date_created', 'desc') 
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
        setLoading(false); 
      }
    };

    if (userId) {
      fetchRecipes();
    }
  }, [userId]);

  if (loading) {
    return <p>Loading recipes...</p>; 
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
