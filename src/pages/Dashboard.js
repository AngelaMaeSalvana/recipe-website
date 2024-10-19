// src/pages/Dashboard.js
import React, { useState } from 'react';
import { auth } from '../firebase'; // Import Firebase auth
import { signOut } from 'firebase/auth';
import AddRecipe from './AddRecipe'; // Import your AddRecipe component
import RecipeList from './RecipeList'; // Import your RecipeList component
import Login from './Login'; // Import your Login component
import Register from './Register'; // Import your Register component

const Dashboard = () => {
  const [user, setUser] = useState(auth.currentUser); // Get the current user
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null); // Clear user state on logout
  };

  const toggleRegister = () => {
    setIsRegistering((prev) => !prev); // Toggle between login and register
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
