export const ShopCard = ({card}) => {
  return(
  <div className="box-item" key={card}>
    <img src={card.img} alt={card.name} className="card-img"></img>
    <div>{card.name}</div>
    <div>{card.color}</div>
    <div>{card.price}</div>
    <button className="card-button">Add to card</button>
  </div>
  )
};

