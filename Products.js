import React, { useState } from 'react';
import './Products.css'; // Import CSS file for styling

// Import images for different products
// Add more imports for other product images as needed

const ProductsPage = () => {
  // Define an array of product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Camera',
      price: '$100.00',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Tv',
      price: '$150.00',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Laptop',
      price: '$700.00',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'smartPhone',
      price: '$200.00',
    }
    // Add more products as needed
  ]);

  // State to manage the edited product
  const [editedProduct, setEditedProduct] = useState(null);

  const handleAddProduct = () => {
    // Implement logic to add a new product
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      description: 'New Product Description',
      price: '$0.00',
    };
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (productId) => {
    // Set the edited product based on the productId
    const productToEdit = products.find(product => product.id === productId);
    setEditedProduct(productToEdit);
  };

  const handleSaveEdit = () => {
    // Implement logic to save the edited product
    // This function will update the product details in the products array
    setEditedProduct(null); // Clear the editedProduct state after saving
  };

  const handleCancelEdit = () => {
    // Cancel the editing and clear the editedProduct state
    setEditedProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    // Implement logic to delete a product
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      <button onClick={handleAddProduct}>Add Product</button>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> {product.price}</p>
            {editedProduct && editedProduct.id === product.id ? (
              <div>
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <button onClick={() => handleEditProduct(product.id)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </div>
            )}
            {/* Add additional product details if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
