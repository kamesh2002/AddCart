import React from 'react';

function Product({ product, addToCart, removeFromCart, inCart }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {product.sale && <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>}
        <img className="card-img-top" src={product.imageUrl} alt={product.name} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
            {product.oldPrice && <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>} {product.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {!inCart ? (
              <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product)}>Add to cart</button>
            ) : (
              <button className="btn btn-outline-danger mt-auto" onClick={() => removeFromCart(product.id)}>Remove from cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
