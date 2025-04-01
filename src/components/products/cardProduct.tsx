import { useState } from 'react';
import ProductBadge from './productBadge';

interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  description: string;
  price: number;
  color: string;
  colors: string[];
  position: string;
}

export default function CardProduct({
  thumb_src,
  thumb_alt,
  title,
  description,
  price,
  color,
  colors,
  position
}: Props) {
  
  const classList = "card-body " + "text-" + position;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProduct = cart.find((item: any) => item.title === title);
    
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ title, price, thumb_src, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');
  };

  return (
    <div className="card card-product border mb-5 shadow-xs border-radius-lg">
      <a href="#">
        <div className="height-350">
          <img className="w-100 h-100 p-4 rounded-top" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={thumb_alt} />
        </div>
        <div className={classList}>
          {color && <h6 className="text-md mb-1 text-body">{color}</h6>}
          {title && <h4 className="font-weight-bold">{title}</h4>}
          {description && <p className="text-body">{description}</p>}
          {colors && <ProductBadge colors={colors} />}
          {price && <h4 className="mb-0 text-lg mt-1 mb-3">${price.toLocaleString()}</h4>}
          
          <button onClick={addToCart} className="btn btn-primary w-100 mt-2">
            Agregar al carrito
          </button>
        </div>
      </a>
    </div>
  );
}
