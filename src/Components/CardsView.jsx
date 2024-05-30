import { ShopCard } from './ShopCard';

export const CardsView = ({ cards }) => {
  return (
    <div className='card_view'>
      {cards.map((card, index) => {
        return <ShopCard key={index} card={card} />;
      })}
    </div>
  );
};
