// src/pages/Dashboard.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import AddRecipe from './AddRecipe'; 
import RecipeList from './RecipeList'; 
import Login from './Login'; 
import Register from './Register'; 

const Dashboard = () => {
  const [user, setUser] = useState(auth.currentUser); 
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null); 
  };

  const toggleRegister = () => {
    setIsRegistering((prev) => !prev); 
  };

  return (
    <div>
      <h1>Recipe Book App</h1>
      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleLogout}>Logout</button>
          <AddRecipe userId={user.uid} />
          <RecipeList userId={user.uid} />
        </>
      ) : (
        <>
          {isRegistering ? (
            <Register onRegister={() => setUser(auth.currentUser)} />
          ) : (
            <Login onLogin={() => setUser(auth.currentUser)} />
          )}
          <button onClick={toggleRegister}>
            {isRegistering ? 'Already have an account? Login' : 'Create an account'}
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
