import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import styles from './cartList.styles.module.css';
import { clearItem } from '../../store/cart/cart.actions';

const CartList = ({ products }) => {
    const dispatch = useDispatch();
    const listToRender = products.map(({ product, quantity }) => {
        return (
            <li className={styles.product__item} key={product._id}>
                <img
                    src={`http://localhost:3000/${product.images[0]}`}
                    width={40}
                    height={40}
                    alt={product.name}
                />
                <div className={styles.product__center}>
                    <div className={styles.product__name}>{product.name}</div>
                    <div className={styles.product__detail}>
                        <span className={styles.product__price}>
                            £{product.price.toFixed(2)}
                        </span>{' '}
                        x
                        <span className={styles.product__quantity}>
                            {quantity}
                        </span>
                    </div>
                </div>
                <button
                    className={styles.product__close}
                    onClick={() => dispatch(clearItem(product._id))}
                >
                    &#215;
                </button>
            </li>
        );
    });
    return <ul className={styles.product__list}>{listToRender}</ul>;
};

CartList.propTypes = {
    products: PropTypes.array,
};

export default CartList;
