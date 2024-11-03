import React, { useState } from 'react';
import { Apple, DollarSign, CircleDollarSign, ArrowRight } from 'lucide-react';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  const [exchangeRate, setExchangeRate] = useState(32.5);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'iPhone', 'iPad', 'MacBook', 'Watch'];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Apple className="h-8 w-8" />
              <h1 className="text-2xl font-medium">Apple Price Compare</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                <ArrowRight className="h-4 w-4" />
                <CircleDollarSign className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Exchange Rate:</span>
                <input
                  type="number"
                  value={exchangeRate}
                  onChange={(e) => setExchangeRate(Number(e.target.value))}
                  className="w-24 px-2 py-1 rounded bg-gray-800 text-white border border-gray-700"
                  step="0.1"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              exchangeRate={exchangeRate}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="text-sm">
            Prices are updated regularly. Exchange rate is user-adjustable for comparison purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;