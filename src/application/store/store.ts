
import { configureStore } from '@reduxjs/toolkit';
import addressReducer from '../reducers/address.reducer';
import auditlogReducer from '../reducers/auditlog.reducer';
import cartReducer from '../reducers/cart.reducer';
import cartitemReducer from '../reducers/cartitem.reducer';
import categoriestate from '../reducers/category.reducer';
import newslettersubscriptionReducer from '../reducers/newslettersubscription.reducer';
import notificationReducer from '../reducers/notification.reducer';
import orderReducer from '../reducers/order.reducer';
import orderitemReducer from '../reducers/orderitem.reducer';
import paymentReducer from '../reducers/payment.reducer';
import productReducer from '../reducers/product.reducer';
import productimageReducer from '../reducers/productimage.reducer';
import productvariantReducer from '../reducers/productvariant.reducer';
import promotionReducer from '../reducers/promotion.reducer';
import refundReducer from '../reducers/refund.reducer';
import reviewReducer from '../reducers/review.reducer';
import shopReducer from '../reducers/shop.reducer';
import shopsubscriptionReducer from '../reducers/shopsubscription.reducer';
import subscriptionReducer from '../reducers/subscription.reducer';
import subsiteReducer from '../reducers/subsite.reducer';
import ticketReducer from '../reducers/ticket.reducer';
import userReducer from '../reducers/user.reducer';
import vendorReducer from '../reducers/vendor.reducer';

export const store = configureStore({
    reducer: {
        address: addressReducer ,
        auditLog: auditlogReducer,
        cart: cartReducer,
        cartItem: cartitemReducer,
        category: categoriestate,
        newsletterSubscription: newslettersubscriptionReducer,
        notification: notificationReducer,
        order: orderReducer,
        orderItem: orderitemReducer,
        payment: paymentReducer,
        product: productReducer,
        productImage: productimageReducer,
        productVariant: productvariantReducer,
        promotion: promotionReducer,
        refund: refundReducer,
        review: reviewReducer,
        shop: shopReducer,
        shopSubscription: shopsubscriptionReducer,
        subscription: subscriptionReducer,
        subsite: subsiteReducer,
        ticket: ticketReducer,
        user: userReducer,  
        vendor: vendorReducer,
    },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

