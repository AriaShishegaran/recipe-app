import React from 'react'
import { Link } from 'react-router-dom'
import { Pizza } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Pizza className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold text-gray-900">PizzaPerfection</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link to="/recipes" className="text-gray-600 hover:text-gray-900">Recipes</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header