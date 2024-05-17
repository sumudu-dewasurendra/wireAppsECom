import { addToBasket, clearBasket, deleteFromBasket } from '../reducers/basketSlice';
import { useDispatch, useSelector } from 'react-redux'

export const useAddToBasket = (onSuccess=()=>{}) => {
    const useAppDispatch = useDispatch.withTypes()
    const dispatch = useAppDispatch();
    const addProductsToBasket = (product, size, quantity) => {
        dispatch(addToBasket({product, size, quantity}));
        onSuccess();
    }
    return { addProductsToBasket };
}

export const useClearbasket = (onSuccess=()=>{}) => {
    const useAppDispatch = useDispatch.withTypes()
    const dispatch = useAppDispatch();
    const clearProductsBasket = () => {
        dispatch(clearBasket({}));
        onSuccess();
    }
    return { clearProductsBasket };
}

export const useDeleteFromBasket = (onSuccess=()=>{}) => {
    const useAppDispatch = useDispatch.withTypes()
    const dispatch = useAppDispatch();
    const deleteProductsFromBasket = (product, size) => {
        dispatch(deleteFromBasket({product, size}));
        onSuccess();
    }
    return { deleteProductsFromBasket };
}

export const useGetBasketItems = () => {
    const useAppSelector = useSelector.withTypes()
    const basketItems = useAppSelector(state => state.basket.basketItems)
    return {
        basketItems: (basketItems || []),
    };
}
