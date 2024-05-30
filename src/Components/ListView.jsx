import { Shopitem } from "./ShopItem";

export const ListView = ({ item }) => {
  return (
    <div className='card_list-view'>
      {item.map((card, index) => {
        return <Shopitem key={index} card={card} />;
      })}
    </div>
  );
};
