import React from 'react';
import ProductCard from './ProductCard';
import './css/cart.css'

const Card1 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://th.bing.com/th/id/OIP.jaYYF8tCaaCBX3o_kEniLQHaHa?cb=iwc2&rs=1&pid=ImgDetMain"
        title="I phone 12"
        price="$600.99"
      />
    </div>
  );
};

const Card2 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://thanhtaostore.com/public/upload/images/hinhsanpham/iphone-13-256gb-42311683884383.jpg"
        title="I phone 13"
        price="$630.99"
      />
    </div>
  );
};
const Card3 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487403_sd.jpg"
        title="I phone 14"
        price="$750.99"
      />
    </div>
  );
};

const Card4 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://th.bing.com/th/id/R.9928de616bcd41d128c8d72c2cb8b2cf?rik=jK1TUzJ2U4NmHA&riu=http%3a%2f%2fpowermaccenter.com%2fcdn%2fshop%2ffiles%2fiPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-US_3295c924-7c21-417d-870c-32bee7f1e310.jpg%3fv%3d1695861436&ehk=%2fXKRTQlkbXyLRd5nMNtO0IMohTCHKAz1Bn%2bge2Q9ttQ%3d&risl=&pid=ImgRaw&r=0"
        title="I phone 15"
        price="$830.99"
      />
    </div>
  );
};
export default Card1;
export {Card2,Card3,Card4}
