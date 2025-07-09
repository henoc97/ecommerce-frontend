import IAddress from "@/domain/entities/address.entity";
import IAuditLog from "@/domain/entities/auditlog.entity";
import ICart from "@/domain/entities/cart.entity";
import ICartItem from "@/domain/entities/cartItem.entity";
import ICategory from "@/domain/entities/category.entity";
import INewsletterSubscription from "@/domain/entities/newsletterSubscription.entity";
import INotification from "@/domain/entities/notification.entity";
import IOrder from "@/domain/entities/order.entity";
import IOrderItem from "@/domain/entities/orderItem.entity";
import IPayment from "@/domain/entities/payment.entity";
import IProduct from "@/domain/entities/product.entity";
import IProductImage from "@/domain/entities/productImage.entity";
import IProductVariant from "@/domain/entities/productVariant.entity";
import IPromotion from "@/domain/entities/promotion.entity";
import IRefund from "@/domain/entities/refund.entity";
import IReview from "@/domain/entities/review.entity";
import IShop from "@/domain/entities/shop.entity";
import IShopSubscription from "@/domain/entities/shopSubscription.entity";
import ISubscription from "@/domain/entities/subscription.entity";
import ISubsite from "@/domain/entities/subsite.entity";
import ITicket from "@/domain/entities/ticket.entity";
import IUser from "@/domain/entities/user.entity";
import IUserActivity from "@/domain/entities/useractivity.entity";
import IVendor from "@/domain/entities/vendor.entity";


export interface AddressState {
    loading: boolean;
    error: string | null;
    addresses: IAddress[];
}

export interface AuditLogState {
    loading: boolean;
    error: string | null;
    auditlogs: IAuditLog[];
}

export interface CartState {
    loading: boolean;
    error: string | null;
    carts: ICart[];
}

export interface CartItemState {
    loading: boolean;
    error: string | null;
    cartitems: ICartItem[];
}

export interface categoriestate {
    loading: boolean;
    error: string | null;
    categories: ICategory[];
}

export interface NewsletterSubscriptionState {
    loading: boolean;
    error: string | null;
    newslettersubscriptions: INewsletterSubscription[];
}

export interface NotificationState {
    loading: boolean;
    error: string | null;
    notifications: INotification[];
}

export interface OrderState {
    loading: boolean;
    error: string | null;
    orders: IOrder[];
}

export interface OrderItemState {
    loading: boolean;
    error: string | null;
    orderitems: IOrderItem[];
}

export interface PaymentState {
    loading: boolean;
    error: string | null;
    payments: IPayment[];
}

export interface ProductState {
    loading: boolean;
    error: string | null;
    products: IProduct[];
}

export interface ProductImageState {
    loading: boolean;
    error: string | null;
    productimages: IProductImage[];
}

export interface ProductVariantState {
    loading: boolean;
    error: string | null;
    productvariants: IProductVariant[];
}

export interface PromotionState {
    loading: boolean;
    error: string | null;
    promotions: IPromotion[];
}

export interface RefundState {
    loading: boolean;
    error: string | null;
    refunds: IRefund[];
}

export interface ReviewState {
    loading: boolean;
    error: string | null;
    reviews: IReview[];
}

export interface ShopState {
    loading: boolean;
    error: string | null;
    shops: IShop[];
}

export interface ShopSubscriptionState {
    loading: boolean;
    error: string | null;
    shopSubscriptions: IShopSubscription[];
}

export interface SubscriptionState {
    loading: boolean;
    error: string | null;
    subscriptions: ISubscription[];
}

export interface SubsiteState {
    loading: boolean;
    error: string | null;
    subsites: ISubsite[];
}

export interface TicketState {
    loading: boolean;
    error: string | null;
    tickets: ITicket[];
}

export interface UserState {
    loading: boolean;
    error: string | null;
    user?: IUser | null;
}

export interface VendorState {
    loading: boolean;
    error: string | null;
    vendors: IVendor[]
}

export interface userActivitiestate {
    loading: boolean;
    error: string | null;
    userActivities: IUserActivity[]
}