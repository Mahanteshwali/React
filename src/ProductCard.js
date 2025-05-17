import React from 'react';
import styled from 'styled-components';
import './css/cart.css'

const Card = styled.div`
  width: 200px;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  cursor:pointer;
`;

const Image = styled.div`
  width: 100%;
  height: 100px;
  background: url(${props => props.image}) center/contain no-repeat;
  border-radius: 8px;
  margin-bottom:8px;
  
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
  font-family:serif;
`;

const Price = styled.div`
  font-size: 18px;
  color: #27ae60;
  font-weight: 500;

`;


const ProductCard = ({ image, title, price }) => {
  return (
    <Card className='card'>
      <Image image={image} />
      <Title>{title}</Title>
      <Price>{price}</Price>
    </Card>
  );
};

export default ProductCard;