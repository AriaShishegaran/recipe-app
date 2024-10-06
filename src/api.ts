import { Recipe } from './types'

const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Classic Margherita Pizza',
    description: 'A timeless Italian favorite with fresh mozzarella, tomatoes, and basil.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ingredients: [
      '1 pizza dough',
      '1/2 cup tomato sauce',
      '200g fresh mozzarella, sliced',
      'Fresh basil leaves',
      '2 tbsp extra virgin olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat your oven to 450°F (230°C) with a pizza stone or baking sheet inside.',
      'Roll out the pizza dough on a floured surface to your desired thickness.',
      'Spread the tomato sauce evenly over the dough, leaving a small border around the edges.',
      'Arrange the mozzarella slices over the sauce.',
      'Carefully transfer the pizza to the preheated stone or baking sheet.',
      'Bake for 10-12 minutes, or until the crust is golden and the cheese is bubbly.',
      'Remove from the oven and immediately top with fresh basil leaves.',
      'Drizzle with olive oil, and season with salt and pepper.',
      'Slice and serve hot.'
    ],
    tips: 'For the best flavor, use high-quality, fresh ingredients. San Marzano tomatoes make an excellent sauce base.',
    readingTime: 5
  },
  // Add 24 more recipe objects here...
]

export const fetchRecipes = async (): Promise<Recipe[]> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return MOCK_RECIPES
}

export const fetchRecipe = async (id: string): Promise<Recipe | null> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return MOCK_RECIPES.find(recipe => recipe.id === id) || null
}