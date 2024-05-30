export const ShopCard = ({ card }) => {
  return (
    <div className='box-item' key={card}>
      <h1>{card.name}</h1>
      <div>{card.color}</div>
      <img src={card.img} alt={card.name} className='card-img'></img>
      <div className="price-button-container">
        <div className='price'>${card.price}</div>
        <button className='card-button'>Add to card</button>
      </div>
    </div>
  );
};
