import useFetch from '../../hooks/useFetch';
import Carousel from '../carousel/carousel';
import Card from '../card/card';

const BestSellersSection = () => {
  const [bestProducts, isBestLoading] = useFetch('products?tags=best_sellers');
  return (
    <section>
      {!isBestLoading && (
        <Carousel title='Best Sellers' amount={5}>
          {(bestProducts?.products || []).map((item, i) => (
            <Card key={i} {...item} isColumn />
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default BestSellersSection;
