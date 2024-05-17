function calculateTotal(basketItems) {
  return basketItems.reduce((acc, item) => {
    return acc + item.product.price.amount * item.quantity;
  }, 0);
}

export function totalWithCurrency(basketItems) {
    if (basketItems.length > 0) {
        const total = calculateTotal(basketItems);
        const currency = basketItems?.[0].product.price.currency;
        return `${total} ${currency}`;
    }
    return 0
}