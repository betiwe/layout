export const Shopitem = ({card}) => {
  return (
    <div className="box" key={card}>
      <img src={card.img} alt={card.name} className='card-list-img'></img>
      <div>{card.name}</div>
      <div>{card.color}</div>
      <div>{card.price}</div>
      <button className='card-button'>Add to card</button>
    </div>
  );
};
