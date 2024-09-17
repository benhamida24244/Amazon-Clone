import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { GitCompareArrows, ShoppingCart, Speech, BookHeart } from 'lucide-react';
import { addToCart } from '../../redux/amazonSlice';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1 group">
            <div className="relative overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <button className="bg-white text-black p-2 rounded-full hover:bg-yellow-400 transition-colors duration-200">
                    <GitCompareArrows size={24} />
                  </button>
                  <button className="bg-white text-black p-2 rounded-full hover:bg-yellow-400 transition-colors duration-200">
                    <ShoppingCart size={24} />
                  </button>
                  <button className="bg-white text-black p-2 rounded-full hover:bg-yellow-400 transition-colors duration-200">
                    <Speech  size={24} />
                  </button>
                  <button className="bg-white text-black p-2 rounded-full hover:bg-yellow-400 transition-colors duration-200">
                    <BookHeart size={24} />
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-4 flex-grow">{product.description.substring(0, 100)}...</p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500">
                ★ {product.rating.rate} ({product.rating.count})
              </span>
              <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-200"
              onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;