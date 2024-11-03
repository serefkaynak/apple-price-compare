import React from 'react';
import { DollarSign, CircleDollarSign } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  priceUS: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
  exchangeRate: number;
}

function ProductCard({ product, exchangeRate }: ProductCardProps) {
  const turkishPrice = product.priceUS * exchangeRate;
  const priceDifference = turkishPrice - product.priceUS;
  
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-gray-700" />
              <span className="font-medium">USA Price</span>
            </div>
            <span className="text-lg font-semibold">${product.priceUS.toLocaleString('en-US')}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="h-5 w-5 text-gray-700" />
              <span className="font-medium">Turkey Price</span>
            </div>
            <span className="text-lg font-semibold">
              ₺{turkishPrice.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}
            </span>
          </div>

          <div className="pt-3 border-t">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Price Difference</span>
              <span className={`font-medium ${priceDifference >= 0 ? 'text-red-500' : 'text-green-500'}`}>
                {priceDifference >= 0 ? '+' : '-'}₺
                {Math.abs(priceDifference).toLocaleString('tr-TR', { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;