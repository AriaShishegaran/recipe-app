import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Recipe } from '../types'
import { fetchRecipes } from '../api'

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes()
      setRecipes(data)
    }
    loadRecipes()
  }, [])

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-900">Discover Perfect Pizza Recipes</h1>
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes.map(recipe => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage