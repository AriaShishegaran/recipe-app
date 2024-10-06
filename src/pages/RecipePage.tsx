import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { Recipe } from '../types'
import { fetchRecipe } from '../api'

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const loadRecipe = async () => {
      if (id) {
        const data = await fetchRecipe(id)
        setRecipe(data)
      }
    }
    loadRecipe()
  }, [id])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!recipe) return <div>Loading...</div>

  return (
    <div className="max-w-3xl mx-auto">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-red-500 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-8" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <Clock className="h-5 w-5 mr-2" />
        <span>Estimated reading time: {recipe.readingTime} minutes</span>
      </div>
      <div className="prose prose-lg max-w-none">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <h2>Tips</h2>
        <p>{recipe.tips}</p>
      </div>
    </div>
  )
}

export default RecipePage