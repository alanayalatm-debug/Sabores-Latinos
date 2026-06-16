import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <div className="loading-state">No hay recetas disponibles en este momento.</div>;
  }

  return (
    <div className="recipe-grid">
      {recipes.map((recipe, index) => (
        <RecipeCard key={recipe.id} recipe={recipe} index={index} />
      ))}
    </div>
  );
};

export default RecipeList;
