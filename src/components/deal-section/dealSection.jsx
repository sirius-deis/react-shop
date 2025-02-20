import { FaFireAlt } from 'react-icons/fa';
import Carousel from '../carousel/carousel';
import Card from '../card/card';
import Stock from '../stock/stock';
import Spinner from '../spinner/spinner';
import useFetch from '../../hooks/useFetch';
import { StyledDealSection } from './dealSection.styles';

const DealSection = () => {
  const [dealProducts, isDealLoading] = useFetch(
    'products?tag=deal_of_the_day&fields=name,price,images',
  );
  return (
    <StyledDealSection>
      {!isDealLoading && (
        <Carousel
          title='Deal Of The Day'
          amount={2}
          titleColor='additional-color'
          icon={<FaFireAlt color='var(--additional-color)' fontSize='2rem' />}
        >
          {((dealProducts && dealProducts?.products) || []).map((item, i) => (
            <Card key={i} withStock {...item}>
              <Stock />
            </Card>
          ))}
        </Carousel>
      )}
      {isDealLoading && <Spinner />}
    </StyledDealSection>
  );
};

export default DealSection;
