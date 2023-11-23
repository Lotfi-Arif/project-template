import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AddressKeySpecifier = ('_count' | 'city' | 'country' | 'createdAt' | 'id' | 'line1' | 'line2' | 'orders' | 'state' | 'updatedAt' | 'user' | 'userId' | 'zip' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	line1?: FieldPolicy<any> | FieldReadFunction<any>,
	line2?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	zip?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressCountKeySpecifier = ('orders' | AddressCountKeySpecifier)[];
export type AddressCountFieldPolicy = {
	orders?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthKeySpecifier = ('accessToken' | 'createdAt' | 'email' | 'id' | 'password' | 'passwordResetExpires' | 'passwordResetToken' | 'refreshToken' | 'updatedAt' | 'user' | 'userId' | AuthKeySpecifier)[];
export type AuthFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetExpires?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartKeySpecifier = ('_count' | 'cartItems' | 'coupon' | 'couponId' | 'createdAt' | 'discount' | 'discountId' | 'id' | 'updatedAt' | 'user' | 'userId' | CartKeySpecifier)[];
export type CartFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	cartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	coupon?: FieldPolicy<any> | FieldReadFunction<any>,
	couponId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartCountKeySpecifier = ('cartItems' | CartCountKeySpecifier)[];
export type CartCountFieldPolicy = {
	cartItems?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemKeySpecifier = ('cart' | 'cartId' | 'createdAt' | 'id' | 'order' | 'orderId' | 'price' | 'product' | 'productId' | 'quantity' | 'updatedAt' | CartItemKeySpecifier)[];
export type CartItemFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	cartId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productId?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('_count' | 'id' | 'name' | 'products' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCountKeySpecifier = ('products' | CategoryCountKeySpecifier)[];
export type CategoryCountFieldPolicy = {
	products?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CouponKeySpecifier = ('_count' | 'carts' | 'code' | 'createdAt' | 'expiration' | 'flatAmount' | 'id' | 'oneTimeUse' | 'percentage' | 'updatedAt' | CouponKeySpecifier)[];
export type CouponFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	carts?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	expiration?: FieldPolicy<any> | FieldReadFunction<any>,
	flatAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	oneTimeUse?: FieldPolicy<any> | FieldReadFunction<any>,
	percentage?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CouponCountKeySpecifier = ('carts' | CouponCountKeySpecifier)[];
export type CouponCountFieldPolicy = {
	carts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountKeySpecifier = ('_count' | 'carts' | 'createdAt' | 'description' | 'flatAmount' | 'id' | 'percentage' | 'updatedAt' | DiscountKeySpecifier)[];
export type DiscountFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	carts?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	flatAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	percentage?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountCountKeySpecifier = ('carts' | DiscountCountKeySpecifier)[];
export type DiscountCountFieldPolicy = {
	carts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaKeySpecifier = ('contentType' | 'createdAt' | 'filename' | 'id' | 'product' | 'productId' | 'type' | 'updatedAt' | 'url' | MediaKeySpecifier)[];
export type MediaFieldPolicy = {
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productId?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addCartItem' | 'addItemToCart' | 'applyCouponToCart' | 'checkout' | 'clearCart' | 'completePasswordReset' | 'createCart' | 'createOrder' | 'createPayment' | 'createProduct' | 'createReview' | 'createUser' | 'deleteMedia' | 'deleteOrder' | 'deletePayment' | 'deleteProduct' | 'deleteReview' | 'deleteUser' | 'initiatePasswordReset' | 'login' | 'refreshToken' | 'register' | 'removeCartItem' | 'removeItemFromCart' | 'updateCart' | 'updateCartItem' | 'updateOrder' | 'updatePayment' | 'updateProduct' | 'updateReview' | 'updateUser' | 'uploadMedia' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	addItemToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	applyCouponToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	clearCart?: FieldPolicy<any> | FieldReadFunction<any>,
	completePasswordReset?: FieldPolicy<any> | FieldReadFunction<any>,
	createCart?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	createPayment?: FieldPolicy<any> | FieldReadFunction<any>,
	createProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	createReview?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePayment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteReview?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatePasswordReset?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	removeCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	removeItemFromCart?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCart?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePayment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	updateReview?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadMedia?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('_count' | 'address' | 'addressId' | 'createdAt' | 'id' | 'items' | 'payments' | 'status' | 'totalAmount' | 'updatedAt' | 'user' | 'userId' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	addressId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCountKeySpecifier = ('items' | 'payments' | OrderCountKeySpecifier)[];
export type OrderCountFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordResetCompleteResponseTypeKeySpecifier = ('message' | PasswordResetCompleteResponseTypeKeySpecifier)[];
export type PasswordResetCompleteResponseTypeFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordResetInitiateResponseTypeKeySpecifier = ('passwordResetToken' | PasswordResetInitiateResponseTypeKeySpecifier)[];
export type PasswordResetInitiateResponseTypeFieldPolicy = {
	passwordResetToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentKeySpecifier = ('amount' | 'createdAt' | 'id' | 'order' | 'orderId' | 'paymentMethod' | 'status' | 'updatedAt' | PaymentKeySpecifier)[];
export type PaymentFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('SKU' | '_count' | 'cartItems' | 'categories' | 'createdAt' | 'description' | 'id' | 'media' | 'name' | 'price' | 'reviews' | 'stock' | 'updatedAt' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	SKU?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	cartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	stock?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCountKeySpecifier = ('cartItems' | 'categories' | 'media' | 'reviews' | ProductCountKeySpecifier)[];
export type ProductCountFieldPolicy = {
	cartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('cartItem' | 'getCartByUserId' | 'getMediaById' | 'media' | 'order' | 'orders' | 'payment' | 'payments' | 'product' | 'products' | 'review' | 'reviews' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	cartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	getCartByUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	getMediaById?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	review?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegisterResponseTypeKeySpecifier = ('accessToken' | 'refreshToken' | 'user' | RegisterResponseTypeKeySpecifier)[];
export type RegisterResponseTypeFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewKeySpecifier = ('content' | 'createdAt' | 'id' | 'product' | 'productId' | 'rating' | 'updatedAt' | 'user' | 'userId' | ReviewKeySpecifier)[];
export type ReviewFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenTypeKeySpecifier = ('accessToken' | 'refreshToken' | TokenTypeKeySpecifier)[];
export type TokenTypeFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('_count' | 'address' | 'auth' | 'cart' | 'createdAt' | 'firstName' | 'id' | 'lastName' | 'orders' | 'reviews' | 'role' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	auth?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountKeySpecifier = ('address' | 'orders' | 'reviews' | UserCountKeySpecifier)[];
export type UserCountFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	AddressCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressCountKeySpecifier | (() => undefined | AddressCountKeySpecifier),
		fields?: AddressCountFieldPolicy,
	},
	Auth?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthKeySpecifier | (() => undefined | AuthKeySpecifier),
		fields?: AuthFieldPolicy,
	},
	Cart?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartKeySpecifier | (() => undefined | CartKeySpecifier),
		fields?: CartFieldPolicy,
	},
	CartCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartCountKeySpecifier | (() => undefined | CartCountKeySpecifier),
		fields?: CartCountFieldPolicy,
	},
	CartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemKeySpecifier | (() => undefined | CartItemKeySpecifier),
		fields?: CartItemFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	CategoryCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCountKeySpecifier | (() => undefined | CategoryCountKeySpecifier),
		fields?: CategoryCountFieldPolicy,
	},
	Coupon?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CouponKeySpecifier | (() => undefined | CouponKeySpecifier),
		fields?: CouponFieldPolicy,
	},
	CouponCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CouponCountKeySpecifier | (() => undefined | CouponCountKeySpecifier),
		fields?: CouponCountFieldPolicy,
	},
	Discount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountKeySpecifier | (() => undefined | DiscountKeySpecifier),
		fields?: DiscountFieldPolicy,
	},
	DiscountCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountCountKeySpecifier | (() => undefined | DiscountCountKeySpecifier),
		fields?: DiscountCountFieldPolicy,
	},
	Media?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaKeySpecifier | (() => undefined | MediaKeySpecifier),
		fields?: MediaFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCountKeySpecifier | (() => undefined | OrderCountKeySpecifier),
		fields?: OrderCountFieldPolicy,
	},
	PasswordResetCompleteResponseType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordResetCompleteResponseTypeKeySpecifier | (() => undefined | PasswordResetCompleteResponseTypeKeySpecifier),
		fields?: PasswordResetCompleteResponseTypeFieldPolicy,
	},
	PasswordResetInitiateResponseType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordResetInitiateResponseTypeKeySpecifier | (() => undefined | PasswordResetInitiateResponseTypeKeySpecifier),
		fields?: PasswordResetInitiateResponseTypeFieldPolicy,
	},
	Payment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentKeySpecifier | (() => undefined | PaymentKeySpecifier),
		fields?: PaymentFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCountKeySpecifier | (() => undefined | ProductCountKeySpecifier),
		fields?: ProductCountFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RegisterResponseType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegisterResponseTypeKeySpecifier | (() => undefined | RegisterResponseTypeKeySpecifier),
		fields?: RegisterResponseTypeFieldPolicy,
	},
	Review?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewKeySpecifier | (() => undefined | ReviewKeySpecifier),
		fields?: ReviewFieldPolicy,
	},
	TokenType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenTypeKeySpecifier | (() => undefined | TokenTypeKeySpecifier),
		fields?: TokenTypeFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountKeySpecifier | (() => undefined | UserCountKeySpecifier),
		fields?: UserCountFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;