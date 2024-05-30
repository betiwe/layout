export const Shopitem = ({card}) => {
  return (
    <div className="box" key={card}>
      <img src={card.img} alt={card.name} className='card-list-img'></img>
      <div className="name-list">{card.name}</div>
      <div>{card.color}</div>
      <div className="price">${card.price}</div>
      <button className='card-button'>Add to card</button>
    </div>
  );
};
