import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  _count: AddressCount;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  line1: Scalars['String']['output'];
  line2: Maybe<Scalars['String']['output']>;
  orders: Maybe<Array<Order>>;
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: Maybe<User>;
  userId: Maybe<Scalars['String']['output']>;
  zip: Scalars['String']['output'];
};

export type AddressCount = {
  __typename?: 'AddressCount';
  orders: Scalars['Int']['output'];
};

export type AddressCreateManyUserInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  line1: Scalars['String']['input'];
  line2: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  zip: Scalars['String']['input'];
};

export type AddressCreateManyUserInputEnvelope = {
  data: Array<AddressCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddressCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<AddressWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<AddressCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<AddressCreateWithoutUserInput>>;
  createMany: InputMaybe<AddressCreateManyUserInputEnvelope>;
};

export type AddressCreateNestedOneWithoutOrdersInput = {
  connect: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate: InputMaybe<AddressCreateOrConnectWithoutOrdersInput>;
  create: InputMaybe<AddressCreateWithoutOrdersInput>;
};

export type AddressCreateOrConnectWithoutOrdersInput = {
  create: AddressCreateWithoutOrdersInput;
  where: AddressWhereUniqueInput;
};

export type AddressCreateOrConnectWithoutUserInput = {
  create: AddressCreateWithoutUserInput;
  where: AddressWhereUniqueInput;
};

export type AddressCreateWithoutOrdersInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  line1: Scalars['String']['input'];
  line2: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: InputMaybe<UserCreateNestedOneWithoutAddressInput>;
  zip: Scalars['String']['input'];
};

export type AddressCreateWithoutUserInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  line1: Scalars['String']['input'];
  line2: InputMaybe<Scalars['String']['input']>;
  orders: InputMaybe<OrderCreateNestedManyWithoutAddressInput>;
  state: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  zip: Scalars['String']['input'];
};

export type AddressListRelationFilter = {
  every: InputMaybe<AddressWhereInput>;
  none: InputMaybe<AddressWhereInput>;
  some: InputMaybe<AddressWhereInput>;
};

export type AddressNullableRelationFilter = {
  is: InputMaybe<AddressWhereInput>;
  isNot: InputMaybe<AddressWhereInput>;
};

export type AddressScalarWhereInput = {
  AND: InputMaybe<Array<AddressScalarWhereInput>>;
  NOT: InputMaybe<Array<AddressScalarWhereInput>>;
  OR: InputMaybe<Array<AddressScalarWhereInput>>;
  city: InputMaybe<StringFilter>;
  country: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  line1: InputMaybe<StringFilter>;
  line2: InputMaybe<StringNullableFilter>;
  state: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringNullableFilter>;
  zip: InputMaybe<StringFilter>;
};

export type AddressUpdateManyMutationInput = {
  city: InputMaybe<StringFieldUpdateOperationsInput>;
  country: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  line1: InputMaybe<StringFieldUpdateOperationsInput>;
  line2: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zip: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AddressUpdateManyWithWhereWithoutUserInput = {
  data: AddressUpdateManyMutationInput;
  where: AddressScalarWhereInput;
};

export type AddressUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<AddressWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<AddressCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<AddressCreateWithoutUserInput>>;
  createMany: InputMaybe<AddressCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<AddressWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<AddressScalarWhereInput>>;
  disconnect: InputMaybe<Array<AddressWhereUniqueInput>>;
  set: InputMaybe<Array<AddressWhereUniqueInput>>;
  update: InputMaybe<Array<AddressUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<AddressUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<AddressUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AddressUpdateOneWithoutOrdersNestedInput = {
  connect: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate: InputMaybe<AddressCreateOrConnectWithoutOrdersInput>;
  create: InputMaybe<AddressCreateWithoutOrdersInput>;
  delete: InputMaybe<AddressWhereInput>;
  disconnect: InputMaybe<AddressWhereInput>;
  update: InputMaybe<AddressUpdateToOneWithWhereWithoutOrdersInput>;
  upsert: InputMaybe<AddressUpsertWithoutOrdersInput>;
};

export type AddressUpdateToOneWithWhereWithoutOrdersInput = {
  data: AddressUpdateWithoutOrdersInput;
  where: InputMaybe<AddressWhereInput>;
};

export type AddressUpdateWithWhereUniqueWithoutUserInput = {
  data: AddressUpdateWithoutUserInput;
  where: AddressWhereUniqueInput;
};

export type AddressUpdateWithoutOrdersInput = {
  city: InputMaybe<StringFieldUpdateOperationsInput>;
  country: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  line1: InputMaybe<StringFieldUpdateOperationsInput>;
  line2: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneWithoutAddressNestedInput>;
  zip: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AddressUpdateWithoutUserInput = {
  city: InputMaybe<StringFieldUpdateOperationsInput>;
  country: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  line1: InputMaybe<StringFieldUpdateOperationsInput>;
  line2: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders: InputMaybe<OrderUpdateManyWithoutAddressNestedInput>;
  state: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zip: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AddressUpsertWithWhereUniqueWithoutUserInput = {
  create: AddressCreateWithoutUserInput;
  update: AddressUpdateWithoutUserInput;
  where: AddressWhereUniqueInput;
};

export type AddressUpsertWithoutOrdersInput = {
  create: AddressCreateWithoutOrdersInput;
  update: AddressUpdateWithoutOrdersInput;
  where: InputMaybe<AddressWhereInput>;
};

export type AddressWhereInput = {
  AND: InputMaybe<Array<AddressWhereInput>>;
  NOT: InputMaybe<Array<AddressWhereInput>>;
  OR: InputMaybe<Array<AddressWhereInput>>;
  city: InputMaybe<StringFilter>;
  country: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  line1: InputMaybe<StringFilter>;
  line2: InputMaybe<StringNullableFilter>;
  orders: InputMaybe<OrderListRelationFilter>;
  state: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserNullableRelationFilter>;
  userId: InputMaybe<StringNullableFilter>;
  zip: InputMaybe<StringFilter>;
};

export type AddressWhereUniqueInput = {
  AND: InputMaybe<Array<AddressWhereInput>>;
  NOT: InputMaybe<Array<AddressWhereInput>>;
  OR: InputMaybe<Array<AddressWhereInput>>;
  city: InputMaybe<StringFilter>;
  country: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  line1: InputMaybe<StringFilter>;
  line2: InputMaybe<StringNullableFilter>;
  orders: InputMaybe<OrderListRelationFilter>;
  state: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserNullableRelationFilter>;
  userId: InputMaybe<StringNullableFilter>;
  zip: InputMaybe<StringFilter>;
};

export type Auth = {
  __typename?: 'Auth';
  accessToken: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  passwordResetExpires: Maybe<Scalars['DateTime']['output']>;
  passwordResetToken: Maybe<Scalars['String']['output']>;
  refreshToken: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AuthCreateInput = {
  accessToken: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  passwordResetExpires: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken: InputMaybe<Scalars['String']['input']>;
  refreshToken: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutAuthInput;
};

export type AuthCreateNestedOneWithoutUserInput = {
  connect: InputMaybe<AuthWhereUniqueInput>;
  connectOrCreate: InputMaybe<AuthCreateOrConnectWithoutUserInput>;
  create: InputMaybe<AuthCreateWithoutUserInput>;
};

export type AuthCreateOrConnectWithoutUserInput = {
  create: AuthCreateWithoutUserInput;
  where: AuthWhereUniqueInput;
};

export type AuthCreateWithoutUserInput = {
  accessToken: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  passwordResetExpires: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken: InputMaybe<Scalars['String']['input']>;
  refreshToken: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type AuthNullableRelationFilter = {
  is: InputMaybe<AuthWhereInput>;
  isNot: InputMaybe<AuthWhereInput>;
};

export type AuthUpdateOneWithoutUserNestedInput = {
  connect: InputMaybe<AuthWhereUniqueInput>;
  connectOrCreate: InputMaybe<AuthCreateOrConnectWithoutUserInput>;
  create: InputMaybe<AuthCreateWithoutUserInput>;
  delete: InputMaybe<AuthWhereInput>;
  disconnect: InputMaybe<AuthWhereInput>;
  update: InputMaybe<AuthUpdateToOneWithWhereWithoutUserInput>;
  upsert: InputMaybe<AuthUpsertWithoutUserInput>;
};

export type AuthUpdateToOneWithWhereWithoutUserInput = {
  data: AuthUpdateWithoutUserInput;
  where: InputMaybe<AuthWhereInput>;
};

export type AuthUpdateWithoutUserInput = {
  accessToken: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  passwordResetExpires: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  passwordResetToken: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  refreshToken: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AuthUpsertWithoutUserInput = {
  create: AuthCreateWithoutUserInput;
  update: AuthUpdateWithoutUserInput;
  where: InputMaybe<AuthWhereInput>;
};

export type AuthWhereInput = {
  AND: InputMaybe<Array<AuthWhereInput>>;
  NOT: InputMaybe<Array<AuthWhereInput>>;
  OR: InputMaybe<Array<AuthWhereInput>>;
  accessToken: InputMaybe<StringNullableFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  email: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  password: InputMaybe<StringFilter>;
  passwordResetExpires: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken: InputMaybe<StringNullableFilter>;
  refreshToken: InputMaybe<StringNullableFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type AuthWhereUniqueInput = {
  AND: InputMaybe<Array<AuthWhereInput>>;
  NOT: InputMaybe<Array<AuthWhereInput>>;
  OR: InputMaybe<Array<AuthWhereInput>>;
  accessToken: InputMaybe<StringNullableFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  email: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<StringFilter>;
  passwordResetExpires: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken: InputMaybe<Scalars['String']['input']>;
  refreshToken: InputMaybe<StringNullableFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<Scalars['String']['input']>;
};

export type BoolFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<NestedBoolFilter>;
};

export type Cart = {
  __typename?: 'Cart';
  _count: CartCount;
  cartItems: Maybe<Array<CartItem>>;
  coupon: Maybe<Coupon>;
  couponId: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  discount: Maybe<Discount>;
  discountId: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CartCount = {
  __typename?: 'CartCount';
  cartItems: Scalars['Int']['output'];
};

export type CartCreateInput = {
  cartItems: InputMaybe<CartItemCreateNestedManyWithoutCartInput>;
  coupon: InputMaybe<CouponCreateNestedOneWithoutCartsInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  discount: InputMaybe<DiscountCreateNestedOneWithoutCartsInput>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCartInput;
};

export type CartCreateNestedOneWithoutCartItemsInput = {
  connect: InputMaybe<CartWhereUniqueInput>;
  connectOrCreate: InputMaybe<CartCreateOrConnectWithoutCartItemsInput>;
  create: InputMaybe<CartCreateWithoutCartItemsInput>;
};

export type CartCreateNestedOneWithoutUserInput = {
  connect: InputMaybe<CartWhereUniqueInput>;
  connectOrCreate: InputMaybe<CartCreateOrConnectWithoutUserInput>;
  create: InputMaybe<CartCreateWithoutUserInput>;
};

export type CartCreateOrConnectWithoutCartItemsInput = {
  create: CartCreateWithoutCartItemsInput;
  where: CartWhereUniqueInput;
};

export type CartCreateOrConnectWithoutUserInput = {
  create: CartCreateWithoutUserInput;
  where: CartWhereUniqueInput;
};

export type CartCreateWithoutCartItemsInput = {
  coupon: InputMaybe<CouponCreateNestedOneWithoutCartsInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  discount: InputMaybe<DiscountCreateNestedOneWithoutCartsInput>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCartInput;
};

export type CartCreateWithoutUserInput = {
  cartItems: InputMaybe<CartItemCreateNestedManyWithoutCartInput>;
  coupon: InputMaybe<CouponCreateNestedOneWithoutCartsInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  discount: InputMaybe<DiscountCreateNestedOneWithoutCartsInput>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItem = {
  __typename?: 'CartItem';
  cart: Cart;
  cartId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  order: Maybe<Order>;
  orderId: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CartItemCreateInput = {
  cart: CartCreateNestedOneWithoutCartItemsInput;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<OrderCreateNestedOneWithoutItemsInput>;
  price: InputMaybe<Scalars['Float']['input']>;
  product: ProductCreateNestedOneWithoutCartItemsInput;
  quantity: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItemCreateManyCartInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  orderId: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['Float']['input']>;
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItemCreateManyCartInputEnvelope = {
  data: Array<CartItemCreateManyCartInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartItemCreateManyOrderInput = {
  cartId: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['Float']['input']>;
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItemCreateManyOrderInputEnvelope = {
  data: Array<CartItemCreateManyOrderInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartItemCreateManyProductInput = {
  cartId: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  orderId: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['Float']['input']>;
  quantity: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItemCreateManyProductInputEnvelope = {
  data: Array<CartItemCreateManyProductInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartItemCreateNestedManyWithoutCartInput = {
  connect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CartItemCreateOrConnectWithoutCartInput>>;
  create: InputMaybe<Array<CartItemCreateWithoutCartInput>>;
  createMany: InputMaybe<CartItemCreateManyCartInputEnvelope>;
};

export type CartItemCreateNestedManyWithoutOrderInput = {
  connect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CartItemCreateOrConnectWithoutOrderInput>>;
  create: InputMaybe<Array<CartItemCreateWithoutOrderInput>>;
  createMany: InputMaybe<CartItemCreateManyOrderInputEnvelope>;
};

export type CartItemCreateNestedManyWithoutProductInput = {
  connect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CartItemCreateOrConnectWithoutProductInput>>;
  create: InputMaybe<Array<CartItemCreateWithoutProductInput>>;
  createMany: InputMaybe<CartItemCreateManyProductInputEnvelope>;
};

export type CartItemCreateOrConnectWithoutCartInput = {
  create: CartItemCreateWithoutCartInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemCreateOrConnectWithoutOrderInput = {
  create: CartItemCreateWithoutOrderInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemCreateOrConnectWithoutProductInput = {
  create: CartItemCreateWithoutProductInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemCreateWithoutCartInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<OrderCreateNestedOneWithoutItemsInput>;
  price: InputMaybe<Scalars['Float']['input']>;
  product: ProductCreateNestedOneWithoutCartItemsInput;
  quantity: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItemCreateWithoutOrderInput = {
  cart: CartCreateNestedOneWithoutCartItemsInput;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['Float']['input']>;
  product: ProductCreateNestedOneWithoutCartItemsInput;
  quantity: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItemCreateWithoutProductInput = {
  cart: CartCreateNestedOneWithoutCartItemsInput;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<OrderCreateNestedOneWithoutItemsInput>;
  price: InputMaybe<Scalars['Float']['input']>;
  quantity: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItemListRelationFilter = {
  every: InputMaybe<CartItemWhereInput>;
  none: InputMaybe<CartItemWhereInput>;
  some: InputMaybe<CartItemWhereInput>;
};

export type CartItemOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type CartItemScalarWhereInput = {
  AND: InputMaybe<Array<CartItemScalarWhereInput>>;
  NOT: InputMaybe<Array<CartItemScalarWhereInput>>;
  OR: InputMaybe<Array<CartItemScalarWhereInput>>;
  cartId: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  orderId: InputMaybe<StringNullableFilter>;
  price: InputMaybe<FloatFilter>;
  productId: InputMaybe<StringFilter>;
  quantity: InputMaybe<IntFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type CartItemUpdateInput = {
  cart: InputMaybe<CartUpdateOneRequiredWithoutCartItemsNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  order: InputMaybe<OrderUpdateOneWithoutItemsNestedInput>;
  price: InputMaybe<FloatFieldUpdateOperationsInput>;
  product: InputMaybe<ProductUpdateOneRequiredWithoutCartItemsNestedInput>;
  quantity: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CartItemUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  price: InputMaybe<FloatFieldUpdateOperationsInput>;
  quantity: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CartItemUpdateManyWithWhereWithoutCartInput = {
  data: CartItemUpdateManyMutationInput;
  where: CartItemScalarWhereInput;
};

export type CartItemUpdateManyWithWhereWithoutOrderInput = {
  data: CartItemUpdateManyMutationInput;
  where: CartItemScalarWhereInput;
};

export type CartItemUpdateManyWithWhereWithoutProductInput = {
  data: CartItemUpdateManyMutationInput;
  where: CartItemScalarWhereInput;
};

export type CartItemUpdateManyWithoutCartNestedInput = {
  connect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CartItemCreateOrConnectWithoutCartInput>>;
  create: InputMaybe<Array<CartItemCreateWithoutCartInput>>;
  createMany: InputMaybe<CartItemCreateManyCartInputEnvelope>;
  delete: InputMaybe<Array<CartItemWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<CartItemScalarWhereInput>>;
  disconnect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set: InputMaybe<Array<CartItemWhereUniqueInput>>;
  update: InputMaybe<Array<CartItemUpdateWithWhereUniqueWithoutCartInput>>;
  updateMany: InputMaybe<Array<CartItemUpdateManyWithWhereWithoutCartInput>>;
  upsert: InputMaybe<Array<CartItemUpsertWithWhereUniqueWithoutCartInput>>;
};

export type CartItemUpdateManyWithoutOrderNestedInput = {
  connect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CartItemCreateOrConnectWithoutOrderInput>>;
  create: InputMaybe<Array<CartItemCreateWithoutOrderInput>>;
  createMany: InputMaybe<CartItemCreateManyOrderInputEnvelope>;
  delete: InputMaybe<Array<CartItemWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<CartItemScalarWhereInput>>;
  disconnect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set: InputMaybe<Array<CartItemWhereUniqueInput>>;
  update: InputMaybe<Array<CartItemUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany: InputMaybe<Array<CartItemUpdateManyWithWhereWithoutOrderInput>>;
  upsert: InputMaybe<Array<CartItemUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type CartItemUpdateManyWithoutProductNestedInput = {
  connect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CartItemCreateOrConnectWithoutProductInput>>;
  create: InputMaybe<Array<CartItemCreateWithoutProductInput>>;
  createMany: InputMaybe<CartItemCreateManyProductInputEnvelope>;
  delete: InputMaybe<Array<CartItemWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<CartItemScalarWhereInput>>;
  disconnect: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set: InputMaybe<Array<CartItemWhereUniqueInput>>;
  update: InputMaybe<Array<CartItemUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany: InputMaybe<Array<CartItemUpdateManyWithWhereWithoutProductInput>>;
  upsert: InputMaybe<Array<CartItemUpsertWithWhereUniqueWithoutProductInput>>;
};

export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
  data: CartItemUpdateWithoutCartInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateWithWhereUniqueWithoutOrderInput = {
  data: CartItemUpdateWithoutOrderInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
  data: CartItemUpdateWithoutProductInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateWithoutCartInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  order: InputMaybe<OrderUpdateOneWithoutItemsNestedInput>;
  price: InputMaybe<FloatFieldUpdateOperationsInput>;
  product: InputMaybe<ProductUpdateOneRequiredWithoutCartItemsNestedInput>;
  quantity: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CartItemUpdateWithoutOrderInput = {
  cart: InputMaybe<CartUpdateOneRequiredWithoutCartItemsNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  price: InputMaybe<FloatFieldUpdateOperationsInput>;
  product: InputMaybe<ProductUpdateOneRequiredWithoutCartItemsNestedInput>;
  quantity: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CartItemUpdateWithoutProductInput = {
  cart: InputMaybe<CartUpdateOneRequiredWithoutCartItemsNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  order: InputMaybe<OrderUpdateOneWithoutItemsNestedInput>;
  price: InputMaybe<FloatFieldUpdateOperationsInput>;
  quantity: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
  create: CartItemCreateWithoutCartInput;
  update: CartItemUpdateWithoutCartInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpsertWithWhereUniqueWithoutOrderInput = {
  create: CartItemCreateWithoutOrderInput;
  update: CartItemUpdateWithoutOrderInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
  create: CartItemCreateWithoutProductInput;
  update: CartItemUpdateWithoutProductInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemWhereInput = {
  AND: InputMaybe<Array<CartItemWhereInput>>;
  NOT: InputMaybe<Array<CartItemWhereInput>>;
  OR: InputMaybe<Array<CartItemWhereInput>>;
  cart: InputMaybe<CartRelationFilter>;
  cartId: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  order: InputMaybe<OrderNullableRelationFilter>;
  orderId: InputMaybe<StringNullableFilter>;
  price: InputMaybe<FloatFilter>;
  product: InputMaybe<ProductRelationFilter>;
  productId: InputMaybe<StringFilter>;
  quantity: InputMaybe<IntFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type CartItemWhereUniqueInput = {
  AND: InputMaybe<Array<CartItemWhereInput>>;
  NOT: InputMaybe<Array<CartItemWhereInput>>;
  OR: InputMaybe<Array<CartItemWhereInput>>;
  cart: InputMaybe<CartRelationFilter>;
  cartId: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<OrderNullableRelationFilter>;
  orderId: InputMaybe<StringNullableFilter>;
  price: InputMaybe<FloatFilter>;
  product: InputMaybe<ProductRelationFilter>;
  productId: InputMaybe<StringFilter>;
  quantity: InputMaybe<IntFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type CartListRelationFilter = {
  every: InputMaybe<CartWhereInput>;
  none: InputMaybe<CartWhereInput>;
  some: InputMaybe<CartWhereInput>;
};

export type CartNullableRelationFilter = {
  is: InputMaybe<CartWhereInput>;
  isNot: InputMaybe<CartWhereInput>;
};

export type CartRelationFilter = {
  is: InputMaybe<CartWhereInput>;
  isNot: InputMaybe<CartWhereInput>;
};

export type CartUpdateOneRequiredWithoutCartItemsNestedInput = {
  connect: InputMaybe<CartWhereUniqueInput>;
  connectOrCreate: InputMaybe<CartCreateOrConnectWithoutCartItemsInput>;
  create: InputMaybe<CartCreateWithoutCartItemsInput>;
  update: InputMaybe<CartUpdateToOneWithWhereWithoutCartItemsInput>;
  upsert: InputMaybe<CartUpsertWithoutCartItemsInput>;
};

export type CartUpdateOneWithoutUserNestedInput = {
  connect: InputMaybe<CartWhereUniqueInput>;
  connectOrCreate: InputMaybe<CartCreateOrConnectWithoutUserInput>;
  create: InputMaybe<CartCreateWithoutUserInput>;
  delete: InputMaybe<CartWhereInput>;
  disconnect: InputMaybe<CartWhereInput>;
  update: InputMaybe<CartUpdateToOneWithWhereWithoutUserInput>;
  upsert: InputMaybe<CartUpsertWithoutUserInput>;
};

export type CartUpdateToOneWithWhereWithoutCartItemsInput = {
  data: CartUpdateWithoutCartItemsInput;
  where: InputMaybe<CartWhereInput>;
};

export type CartUpdateToOneWithWhereWithoutUserInput = {
  data: CartUpdateWithoutUserInput;
  where: InputMaybe<CartWhereInput>;
};

export type CartUpdateWithoutCartItemsInput = {
  coupon: InputMaybe<CouponUpdateOneWithoutCartsNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discount: InputMaybe<DiscountUpdateOneWithoutCartsNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutCartNestedInput>;
};

export type CartUpdateWithoutUserInput = {
  cartItems: InputMaybe<CartItemUpdateManyWithoutCartNestedInput>;
  coupon: InputMaybe<CouponUpdateOneWithoutCartsNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discount: InputMaybe<DiscountUpdateOneWithoutCartsNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CartUpsertWithoutCartItemsInput = {
  create: CartCreateWithoutCartItemsInput;
  update: CartUpdateWithoutCartItemsInput;
  where: InputMaybe<CartWhereInput>;
};

export type CartUpsertWithoutUserInput = {
  create: CartCreateWithoutUserInput;
  update: CartUpdateWithoutUserInput;
  where: InputMaybe<CartWhereInput>;
};

export type CartWhereInput = {
  AND: InputMaybe<Array<CartWhereInput>>;
  NOT: InputMaybe<Array<CartWhereInput>>;
  OR: InputMaybe<Array<CartWhereInput>>;
  cartItems: InputMaybe<CartItemListRelationFilter>;
  coupon: InputMaybe<CouponNullableRelationFilter>;
  couponId: InputMaybe<StringNullableFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  discount: InputMaybe<DiscountNullableRelationFilter>;
  discountId: InputMaybe<StringNullableFilter>;
  id: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type CartWhereUniqueInput = {
  AND: InputMaybe<Array<CartWhereInput>>;
  NOT: InputMaybe<Array<CartWhereInput>>;
  OR: InputMaybe<Array<CartWhereInput>>;
  cartItems: InputMaybe<CartItemListRelationFilter>;
  coupon: InputMaybe<CouponNullableRelationFilter>;
  couponId: InputMaybe<StringNullableFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  discount: InputMaybe<DiscountNullableRelationFilter>;
  discountId: InputMaybe<StringNullableFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<Scalars['String']['input']>;
};

export type Category = {
  __typename?: 'Category';
  _count: CategoryCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Maybe<Array<Product>>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  products: Scalars['Int']['output'];
};

export type CategoryCreateNestedManyWithoutProductsInput = {
  connect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CategoryCreateOrConnectWithoutProductsInput>>;
  create: InputMaybe<Array<CategoryCreateWithoutProductsInput>>;
};

export type CategoryCreateOrConnectWithoutProductsInput = {
  create: CategoryCreateWithoutProductsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutProductsInput = {
  id: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CategoryListRelationFilter = {
  every: InputMaybe<CategoryWhereInput>;
  none: InputMaybe<CategoryWhereInput>;
  some: InputMaybe<CategoryWhereInput>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type CategoryScalarWhereInput = {
  AND: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR: InputMaybe<Array<CategoryScalarWhereInput>>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
};

export type CategoryUpdateManyMutationInput = {
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutProductsInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutProductsNestedInput = {
  connect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CategoryCreateOrConnectWithoutProductsInput>>;
  create: InputMaybe<Array<CategoryCreateWithoutProductsInput>>;
  delete: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutProductsInput>>;
  updateMany: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutProductsInput>>;
  upsert: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutProductsInput>>;
};

export type CategoryUpdateWithWhereUniqueWithoutProductsInput = {
  data: CategoryUpdateWithoutProductsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutProductsInput = {
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutProductsInput = {
  create: CategoryCreateWithoutProductsInput;
  update: CategoryUpdateWithoutProductsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND: InputMaybe<Array<CategoryWhereInput>>;
  NOT: InputMaybe<Array<CategoryWhereInput>>;
  OR: InputMaybe<Array<CategoryWhereInput>>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  products: InputMaybe<ProductListRelationFilter>;
};

export type CategoryWhereUniqueInput = {
  AND: InputMaybe<Array<CategoryWhereInput>>;
  NOT: InputMaybe<Array<CategoryWhereInput>>;
  OR: InputMaybe<Array<CategoryWhereInput>>;
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<StringFilter>;
  products: InputMaybe<ProductListRelationFilter>;
};

export type Coupon = {
  __typename?: 'Coupon';
  _count: CouponCount;
  carts: Maybe<Array<Cart>>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  expiration: Maybe<Scalars['DateTime']['output']>;
  flatAmount: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  oneTimeUse: Scalars['Boolean']['output'];
  percentage: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CouponCount = {
  __typename?: 'CouponCount';
  carts: Scalars['Int']['output'];
};

export type CouponCreateNestedOneWithoutCartsInput = {
  connect: InputMaybe<CouponWhereUniqueInput>;
  connectOrCreate: InputMaybe<CouponCreateOrConnectWithoutCartsInput>;
  create: InputMaybe<CouponCreateWithoutCartsInput>;
};

export type CouponCreateOrConnectWithoutCartsInput = {
  create: CouponCreateWithoutCartsInput;
  where: CouponWhereUniqueInput;
};

export type CouponCreateWithoutCartsInput = {
  code: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  expiration: InputMaybe<Scalars['DateTime']['input']>;
  flatAmount: InputMaybe<Scalars['Float']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  oneTimeUse: InputMaybe<Scalars['Boolean']['input']>;
  percentage: InputMaybe<Scalars['Float']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CouponNullableRelationFilter = {
  is: InputMaybe<CouponWhereInput>;
  isNot: InputMaybe<CouponWhereInput>;
};

export type CouponUpdateOneWithoutCartsNestedInput = {
  connect: InputMaybe<CouponWhereUniqueInput>;
  connectOrCreate: InputMaybe<CouponCreateOrConnectWithoutCartsInput>;
  create: InputMaybe<CouponCreateWithoutCartsInput>;
  delete: InputMaybe<CouponWhereInput>;
  disconnect: InputMaybe<CouponWhereInput>;
  update: InputMaybe<CouponUpdateToOneWithWhereWithoutCartsInput>;
  upsert: InputMaybe<CouponUpsertWithoutCartsInput>;
};

export type CouponUpdateToOneWithWhereWithoutCartsInput = {
  data: CouponUpdateWithoutCartsInput;
  where: InputMaybe<CouponWhereInput>;
};

export type CouponUpdateWithoutCartsInput = {
  code: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiration: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  flatAmount: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  oneTimeUse: InputMaybe<BoolFieldUpdateOperationsInput>;
  percentage: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CouponUpsertWithoutCartsInput = {
  create: CouponCreateWithoutCartsInput;
  update: CouponUpdateWithoutCartsInput;
  where: InputMaybe<CouponWhereInput>;
};

export type CouponWhereInput = {
  AND: InputMaybe<Array<CouponWhereInput>>;
  NOT: InputMaybe<Array<CouponWhereInput>>;
  OR: InputMaybe<Array<CouponWhereInput>>;
  carts: InputMaybe<CartListRelationFilter>;
  code: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  expiration: InputMaybe<DateTimeNullableFilter>;
  flatAmount: InputMaybe<FloatNullableFilter>;
  id: InputMaybe<StringFilter>;
  oneTimeUse: InputMaybe<BoolFilter>;
  percentage: InputMaybe<FloatNullableFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type CouponWhereUniqueInput = {
  AND: InputMaybe<Array<CouponWhereInput>>;
  NOT: InputMaybe<Array<CouponWhereInput>>;
  OR: InputMaybe<Array<CouponWhereInput>>;
  carts: InputMaybe<CartListRelationFilter>;
  code: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<DateTimeFilter>;
  expiration: InputMaybe<DateTimeNullableFilter>;
  flatAmount: InputMaybe<FloatNullableFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  oneTimeUse: InputMaybe<BoolFilter>;
  percentage: InputMaybe<FloatNullableFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<NestedDateTimeFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<NestedDateTimeNullableFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Discount = {
  __typename?: 'Discount';
  _count: DiscountCount;
  carts: Maybe<Array<Cart>>;
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  flatAmount: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  percentage: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DiscountCount = {
  __typename?: 'DiscountCount';
  carts: Scalars['Int']['output'];
};

export type DiscountCreateNestedOneWithoutCartsInput = {
  connect: InputMaybe<DiscountWhereUniqueInput>;
  connectOrCreate: InputMaybe<DiscountCreateOrConnectWithoutCartsInput>;
  create: InputMaybe<DiscountCreateWithoutCartsInput>;
};

export type DiscountCreateOrConnectWithoutCartsInput = {
  create: DiscountCreateWithoutCartsInput;
  where: DiscountWhereUniqueInput;
};

export type DiscountCreateWithoutCartsInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  flatAmount: InputMaybe<Scalars['Float']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  percentage: InputMaybe<Scalars['Float']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type DiscountNullableRelationFilter = {
  is: InputMaybe<DiscountWhereInput>;
  isNot: InputMaybe<DiscountWhereInput>;
};

export type DiscountUpdateOneWithoutCartsNestedInput = {
  connect: InputMaybe<DiscountWhereUniqueInput>;
  connectOrCreate: InputMaybe<DiscountCreateOrConnectWithoutCartsInput>;
  create: InputMaybe<DiscountCreateWithoutCartsInput>;
  delete: InputMaybe<DiscountWhereInput>;
  disconnect: InputMaybe<DiscountWhereInput>;
  update: InputMaybe<DiscountUpdateToOneWithWhereWithoutCartsInput>;
  upsert: InputMaybe<DiscountUpsertWithoutCartsInput>;
};

export type DiscountUpdateToOneWithWhereWithoutCartsInput = {
  data: DiscountUpdateWithoutCartsInput;
  where: InputMaybe<DiscountWhereInput>;
};

export type DiscountUpdateWithoutCartsInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  flatAmount: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DiscountUpsertWithoutCartsInput = {
  create: DiscountCreateWithoutCartsInput;
  update: DiscountUpdateWithoutCartsInput;
  where: InputMaybe<DiscountWhereInput>;
};

export type DiscountWhereInput = {
  AND: InputMaybe<Array<DiscountWhereInput>>;
  NOT: InputMaybe<Array<DiscountWhereInput>>;
  OR: InputMaybe<Array<DiscountWhereInput>>;
  carts: InputMaybe<CartListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  description: InputMaybe<StringNullableFilter>;
  flatAmount: InputMaybe<FloatNullableFilter>;
  id: InputMaybe<StringFilter>;
  percentage: InputMaybe<FloatNullableFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type DiscountWhereUniqueInput = {
  AND: InputMaybe<Array<DiscountWhereInput>>;
  NOT: InputMaybe<Array<DiscountWhereInput>>;
  OR: InputMaybe<Array<DiscountWhereInput>>;
  carts: InputMaybe<CartListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  description: InputMaybe<StringNullableFilter>;
  flatAmount: InputMaybe<FloatNullableFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  percentage: InputMaybe<FloatNullableFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type EnumMediaTypeFieldUpdateOperationsInput = {
  set: InputMaybe<MediaType>;
};

export type EnumMediaTypeFilter = {
  equals: InputMaybe<MediaType>;
  in: InputMaybe<Array<MediaType>>;
  not: InputMaybe<NestedEnumMediaTypeFilter>;
  notIn: InputMaybe<Array<MediaType>>;
};

export type EnumOrderStatusFieldUpdateOperationsInput = {
  set: InputMaybe<OrderStatus>;
};

export type EnumOrderStatusFilter = {
  equals: InputMaybe<OrderStatus>;
  in: InputMaybe<Array<OrderStatus>>;
  not: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn: InputMaybe<Array<OrderStatus>>;
};

export type EnumUserRoleFieldUpdateOperationsInput = {
  set: InputMaybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals: InputMaybe<UserRole>;
  in: InputMaybe<Array<UserRole>>;
  not: InputMaybe<NestedEnumUserRoleFilter>;
  notIn: InputMaybe<Array<UserRole>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement: InputMaybe<Scalars['Float']['input']>;
  divide: InputMaybe<Scalars['Float']['input']>;
  increment: InputMaybe<Scalars['Float']['input']>;
  multiply: InputMaybe<Scalars['Float']['input']>;
  set: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<Scalars['Float']['input']>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<NestedFloatFilter>;
  notIn: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableFilter = {
  equals: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<Scalars['Float']['input']>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<NestedFloatNullableFilter>;
  notIn: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement: InputMaybe<Scalars['Int']['input']>;
  divide: InputMaybe<Scalars['Int']['input']>;
  increment: InputMaybe<Scalars['Int']['input']>;
  multiply: InputMaybe<Scalars['Int']['input']>;
  set: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<Scalars['Int']['input']>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<NestedIntFilter>;
  notIn: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Media = {
  __typename?: 'Media';
  contentType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Maybe<Product>;
  productId: Maybe<Scalars['String']['output']>;
  type: MediaType;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type MediaCreateManyProductInput = {
  contentType: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  filename: Scalars['String']['input'];
  id: InputMaybe<Scalars['String']['input']>;
  type: MediaType;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type MediaCreateManyProductInputEnvelope = {
  data: Array<MediaCreateManyProductInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaCreateNestedManyWithoutProductInput = {
  connect: InputMaybe<Array<MediaWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MediaCreateOrConnectWithoutProductInput>>;
  create: InputMaybe<Array<MediaCreateWithoutProductInput>>;
  createMany: InputMaybe<MediaCreateManyProductInputEnvelope>;
};

export type MediaCreateOrConnectWithoutProductInput = {
  create: MediaCreateWithoutProductInput;
  where: MediaWhereUniqueInput;
};

export type MediaCreateWithoutProductInput = {
  contentType: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  filename: Scalars['String']['input'];
  id: InputMaybe<Scalars['String']['input']>;
  type: MediaType;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type MediaListRelationFilter = {
  every: InputMaybe<MediaWhereInput>;
  none: InputMaybe<MediaWhereInput>;
  some: InputMaybe<MediaWhereInput>;
};

export type MediaOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type MediaScalarWhereInput = {
  AND: InputMaybe<Array<MediaScalarWhereInput>>;
  NOT: InputMaybe<Array<MediaScalarWhereInput>>;
  OR: InputMaybe<Array<MediaScalarWhereInput>>;
  contentType: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  filename: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  productId: InputMaybe<StringNullableFilter>;
  type: InputMaybe<EnumMediaTypeFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  url: InputMaybe<StringFilter>;
};

export enum MediaType {
  IMAGE = 'IMAGE',
  OTHER = 'OTHER',
  VIDEO = 'VIDEO'
}

export type MediaUpdateManyMutationInput = {
  contentType: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  filename: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  type: InputMaybe<EnumMediaTypeFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateManyWithWhereWithoutProductInput = {
  data: MediaUpdateManyMutationInput;
  where: MediaScalarWhereInput;
};

export type MediaUpdateManyWithoutProductNestedInput = {
  connect: InputMaybe<Array<MediaWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MediaCreateOrConnectWithoutProductInput>>;
  create: InputMaybe<Array<MediaCreateWithoutProductInput>>;
  createMany: InputMaybe<MediaCreateManyProductInputEnvelope>;
  delete: InputMaybe<Array<MediaWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<MediaScalarWhereInput>>;
  disconnect: InputMaybe<Array<MediaWhereUniqueInput>>;
  set: InputMaybe<Array<MediaWhereUniqueInput>>;
  update: InputMaybe<Array<MediaUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany: InputMaybe<Array<MediaUpdateManyWithWhereWithoutProductInput>>;
  upsert: InputMaybe<Array<MediaUpsertWithWhereUniqueWithoutProductInput>>;
};

export type MediaUpdateWithWhereUniqueWithoutProductInput = {
  data: MediaUpdateWithoutProductInput;
  where: MediaWhereUniqueInput;
};

export type MediaUpdateWithoutProductInput = {
  contentType: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  filename: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  type: InputMaybe<EnumMediaTypeFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpsertWithWhereUniqueWithoutProductInput = {
  create: MediaCreateWithoutProductInput;
  update: MediaUpdateWithoutProductInput;
  where: MediaWhereUniqueInput;
};

export type MediaWhereInput = {
  AND: InputMaybe<Array<MediaWhereInput>>;
  NOT: InputMaybe<Array<MediaWhereInput>>;
  OR: InputMaybe<Array<MediaWhereInput>>;
  contentType: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  filename: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  product: InputMaybe<ProductNullableRelationFilter>;
  productId: InputMaybe<StringNullableFilter>;
  type: InputMaybe<EnumMediaTypeFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  url: InputMaybe<StringFilter>;
};

export type MediaWhereUniqueInput = {
  AND: InputMaybe<Array<MediaWhereInput>>;
  NOT: InputMaybe<Array<MediaWhereInput>>;
  OR: InputMaybe<Array<MediaWhereInput>>;
  contentType: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  filename: InputMaybe<StringFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  product: InputMaybe<ProductNullableRelationFilter>;
  productId: InputMaybe<StringNullableFilter>;
  type: InputMaybe<EnumMediaTypeFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  url: InputMaybe<StringFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCartItem: CartItem;
  addItemToCart: CartItem;
  applyCouponToCart: Cart;
  checkout: Order;
  clearCart: Cart;
  completePasswordReset: PasswordResetCompleteResponseType;
  createCart: Cart;
  createOrder: Order;
  createPayment: Payment;
  createProduct: Product;
  createReview: Review;
  createUser: User;
  deleteMedia: Media;
  deleteOrder: Order;
  deletePayment: Payment;
  deleteProduct: Product;
  deleteReview: Review;
  deleteUser: User;
  initiatePasswordReset: PasswordResetInitiateResponseType;
  login: TokenType;
  refreshToken: TokenType;
  register: RegisterResponseType;
  removeCartItem: CartItem;
  removeItemFromCart: CartItem;
  updateCart: CartItem;
  updateCartItem: CartItem;
  updateOrder: Order;
  updatePayment: Payment;
  updateProduct: Product;
  updateReview: Review;
  updateUser: User;
  uploadMedia: Media;
};


export type MutationAddCartItemArgs = {
  data: CartItemCreateInput;
};


export type MutationAddItemToCartArgs = {
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};


export type MutationApplyCouponToCartArgs = {
  couponCode: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationCheckoutArgs = {
  userId: Scalars['String']['input'];
};


export type MutationClearCartArgs = {
  userId: Scalars['String']['input'];
};


export type MutationCompletePasswordResetArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateCartArgs = {
  data: CartCreateInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreatePaymentArgs = {
  data: PaymentCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePaymentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteReviewArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationInitiatePasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  data: AuthCreateInput;
};


export type MutationRemoveCartItemArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveItemFromCartArgs = {
  cartItemId: Scalars['String']['input'];
};


export type MutationUpdateCartArgs = {
  cartItemId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationUpdateCartItemArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdatePaymentArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<NestedDateTimeFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<NestedDateTimeNullableFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumMediaTypeFilter = {
  equals: InputMaybe<MediaType>;
  in: InputMaybe<Array<MediaType>>;
  not: InputMaybe<NestedEnumMediaTypeFilter>;
  notIn: InputMaybe<Array<MediaType>>;
};

export type NestedEnumOrderStatusFilter = {
  equals: InputMaybe<OrderStatus>;
  in: InputMaybe<Array<OrderStatus>>;
  not: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumUserRoleFilter = {
  equals: InputMaybe<UserRole>;
  in: InputMaybe<Array<UserRole>>;
  not: InputMaybe<NestedEnumUserRoleFilter>;
  notIn: InputMaybe<Array<UserRole>>;
};

export type NestedFloatFilter = {
  equals: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<Scalars['Float']['input']>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<NestedFloatFilter>;
  notIn: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<Scalars['Float']['input']>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<NestedFloatNullableFilter>;
  notIn: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<Scalars['Int']['input']>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<NestedIntFilter>;
  notIn: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<Scalars['String']['input']>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<Scalars['String']['input']>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  not: InputMaybe<NestedStringNullableFilter>;
  notIn: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement: InputMaybe<Scalars['Float']['input']>;
  divide: InputMaybe<Scalars['Float']['input']>;
  increment: InputMaybe<Scalars['Float']['input']>;
  multiply: InputMaybe<Scalars['Float']['input']>;
  set: InputMaybe<Scalars['Float']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['String']['input']>;
};

export type Order = {
  __typename?: 'Order';
  _count: OrderCount;
  address: Maybe<Address>;
  addressId: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  items: Maybe<Array<CartItem>>;
  payments: Maybe<Array<Payment>>;
  status: OrderStatus;
  totalAmount: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type OrderCount = {
  __typename?: 'OrderCount';
  items: Scalars['Int']['output'];
  payments: Scalars['Int']['output'];
};

export type OrderCreateInput = {
  address: InputMaybe<AddressCreateNestedOneWithoutOrdersInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  items: InputMaybe<CartItemCreateNestedManyWithoutOrderInput>;
  payments: InputMaybe<PaymentCreateNestedManyWithoutOrderInput>;
  status: InputMaybe<OrderStatus>;
  totalAmount: Scalars['Float']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateManyAddressInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<OrderStatus>;
  totalAmount: Scalars['Float']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type OrderCreateManyAddressInputEnvelope = {
  data: Array<OrderCreateManyAddressInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderCreateManyUserInput = {
  addressId: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<OrderStatus>;
  totalAmount: Scalars['Float']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCreateManyUserInputEnvelope = {
  data: Array<OrderCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderCreateNestedManyWithoutAddressInput = {
  connect: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<OrderCreateOrConnectWithoutAddressInput>>;
  create: InputMaybe<Array<OrderCreateWithoutAddressInput>>;
  createMany: InputMaybe<OrderCreateManyAddressInputEnvelope>;
};

export type OrderCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<OrderCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<OrderCreateWithoutUserInput>>;
  createMany: InputMaybe<OrderCreateManyUserInputEnvelope>;
};

export type OrderCreateNestedOneWithoutItemsInput = {
  connect: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate: InputMaybe<OrderCreateOrConnectWithoutItemsInput>;
  create: InputMaybe<OrderCreateWithoutItemsInput>;
};

export type OrderCreateNestedOneWithoutPaymentsInput = {
  connect: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate: InputMaybe<OrderCreateOrConnectWithoutPaymentsInput>;
  create: InputMaybe<OrderCreateWithoutPaymentsInput>;
};

export type OrderCreateOrConnectWithoutAddressInput = {
  create: OrderCreateWithoutAddressInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutItemsInput = {
  create: OrderCreateWithoutItemsInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutPaymentsInput = {
  create: OrderCreateWithoutPaymentsInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutUserInput = {
  create: OrderCreateWithoutUserInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateWithoutAddressInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  items: InputMaybe<CartItemCreateNestedManyWithoutOrderInput>;
  payments: InputMaybe<PaymentCreateNestedManyWithoutOrderInput>;
  status: InputMaybe<OrderStatus>;
  totalAmount: Scalars['Float']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateWithoutItemsInput = {
  address: InputMaybe<AddressCreateNestedOneWithoutOrdersInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  payments: InputMaybe<PaymentCreateNestedManyWithoutOrderInput>;
  status: InputMaybe<OrderStatus>;
  totalAmount: Scalars['Float']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateWithoutPaymentsInput = {
  address: InputMaybe<AddressCreateNestedOneWithoutOrdersInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  items: InputMaybe<CartItemCreateNestedManyWithoutOrderInput>;
  status: InputMaybe<OrderStatus>;
  totalAmount: Scalars['Float']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateWithoutUserInput = {
  address: InputMaybe<AddressCreateNestedOneWithoutOrdersInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  items: InputMaybe<CartItemCreateNestedManyWithoutOrderInput>;
  payments: InputMaybe<PaymentCreateNestedManyWithoutOrderInput>;
  status: InputMaybe<OrderStatus>;
  totalAmount: Scalars['Float']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderListRelationFilter = {
  every: InputMaybe<OrderWhereInput>;
  none: InputMaybe<OrderWhereInput>;
  some: InputMaybe<OrderWhereInput>;
};

export type OrderNullableRelationFilter = {
  is: InputMaybe<OrderWhereInput>;
  isNot: InputMaybe<OrderWhereInput>;
};

export type OrderRelationFilter = {
  is: InputMaybe<OrderWhereInput>;
  isNot: InputMaybe<OrderWhereInput>;
};

export type OrderScalarWhereInput = {
  AND: InputMaybe<Array<OrderScalarWhereInput>>;
  NOT: InputMaybe<Array<OrderScalarWhereInput>>;
  OR: InputMaybe<Array<OrderScalarWhereInput>>;
  addressId: InputMaybe<StringNullableFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  status: InputMaybe<EnumOrderStatusFilter>;
  totalAmount: InputMaybe<FloatFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export enum OrderStatus {
  CANCELLED = 'CANCELLED',
  CONFIRMED = 'CONFIRMED',
  DELIVERED = 'DELIVERED',
  PENDING = 'PENDING',
  SHIPPED = 'SHIPPED'
}

export type OrderUpdateInput = {
  address: InputMaybe<AddressUpdateOneWithoutOrdersNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  items: InputMaybe<CartItemUpdateManyWithoutOrderNestedInput>;
  payments: InputMaybe<PaymentUpdateManyWithoutOrderNestedInput>;
  status: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalAmount: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutOrdersNestedInput>;
};

export type OrderUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  status: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalAmount: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderUpdateManyWithWhereWithoutAddressInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithWhereWithoutUserInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithoutAddressNestedInput = {
  connect: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<OrderCreateOrConnectWithoutAddressInput>>;
  create: InputMaybe<Array<OrderCreateWithoutAddressInput>>;
  createMany: InputMaybe<OrderCreateManyAddressInputEnvelope>;
  delete: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect: InputMaybe<Array<OrderWhereUniqueInput>>;
  set: InputMaybe<Array<OrderWhereUniqueInput>>;
  update: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany: InputMaybe<Array<OrderUpdateManyWithWhereWithoutAddressInput>>;
  upsert: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type OrderUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<OrderCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<OrderCreateWithoutUserInput>>;
  createMany: InputMaybe<OrderCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect: InputMaybe<Array<OrderWhereUniqueInput>>;
  set: InputMaybe<Array<OrderWhereUniqueInput>>;
  update: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<OrderUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutUserInput>>;
};

export type OrderUpdateOneRequiredWithoutPaymentsNestedInput = {
  connect: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate: InputMaybe<OrderCreateOrConnectWithoutPaymentsInput>;
  create: InputMaybe<OrderCreateWithoutPaymentsInput>;
  update: InputMaybe<OrderUpdateToOneWithWhereWithoutPaymentsInput>;
  upsert: InputMaybe<OrderUpsertWithoutPaymentsInput>;
};

export type OrderUpdateOneWithoutItemsNestedInput = {
  connect: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate: InputMaybe<OrderCreateOrConnectWithoutItemsInput>;
  create: InputMaybe<OrderCreateWithoutItemsInput>;
  delete: InputMaybe<OrderWhereInput>;
  disconnect: InputMaybe<OrderWhereInput>;
  update: InputMaybe<OrderUpdateToOneWithWhereWithoutItemsInput>;
  upsert: InputMaybe<OrderUpsertWithoutItemsInput>;
};

export type OrderUpdateToOneWithWhereWithoutItemsInput = {
  data: OrderUpdateWithoutItemsInput;
  where: InputMaybe<OrderWhereInput>;
};

export type OrderUpdateToOneWithWhereWithoutPaymentsInput = {
  data: OrderUpdateWithoutPaymentsInput;
  where: InputMaybe<OrderWhereInput>;
};

export type OrderUpdateWithWhereUniqueWithoutAddressInput = {
  data: OrderUpdateWithoutAddressInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithWhereUniqueWithoutUserInput = {
  data: OrderUpdateWithoutUserInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithoutAddressInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  items: InputMaybe<CartItemUpdateManyWithoutOrderNestedInput>;
  payments: InputMaybe<PaymentUpdateManyWithoutOrderNestedInput>;
  status: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalAmount: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutOrdersNestedInput>;
};

export type OrderUpdateWithoutItemsInput = {
  address: InputMaybe<AddressUpdateOneWithoutOrdersNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  payments: InputMaybe<PaymentUpdateManyWithoutOrderNestedInput>;
  status: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalAmount: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutOrdersNestedInput>;
};

export type OrderUpdateWithoutPaymentsInput = {
  address: InputMaybe<AddressUpdateOneWithoutOrdersNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  items: InputMaybe<CartItemUpdateManyWithoutOrderNestedInput>;
  status: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalAmount: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutOrdersNestedInput>;
};

export type OrderUpdateWithoutUserInput = {
  address: InputMaybe<AddressUpdateOneWithoutOrdersNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  items: InputMaybe<CartItemUpdateManyWithoutOrderNestedInput>;
  payments: InputMaybe<PaymentUpdateManyWithoutOrderNestedInput>;
  status: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalAmount: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderUpsertWithWhereUniqueWithoutAddressInput = {
  create: OrderCreateWithoutAddressInput;
  update: OrderUpdateWithoutAddressInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithWhereUniqueWithoutUserInput = {
  create: OrderCreateWithoutUserInput;
  update: OrderUpdateWithoutUserInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithoutItemsInput = {
  create: OrderCreateWithoutItemsInput;
  update: OrderUpdateWithoutItemsInput;
  where: InputMaybe<OrderWhereInput>;
};

export type OrderUpsertWithoutPaymentsInput = {
  create: OrderCreateWithoutPaymentsInput;
  update: OrderUpdateWithoutPaymentsInput;
  where: InputMaybe<OrderWhereInput>;
};

export type OrderWhereInput = {
  AND: InputMaybe<Array<OrderWhereInput>>;
  NOT: InputMaybe<Array<OrderWhereInput>>;
  OR: InputMaybe<Array<OrderWhereInput>>;
  address: InputMaybe<AddressNullableRelationFilter>;
  addressId: InputMaybe<StringNullableFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  items: InputMaybe<CartItemListRelationFilter>;
  payments: InputMaybe<PaymentListRelationFilter>;
  status: InputMaybe<EnumOrderStatusFilter>;
  totalAmount: InputMaybe<FloatFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type OrderWhereUniqueInput = {
  AND: InputMaybe<Array<OrderWhereInput>>;
  NOT: InputMaybe<Array<OrderWhereInput>>;
  OR: InputMaybe<Array<OrderWhereInput>>;
  address: InputMaybe<AddressNullableRelationFilter>;
  addressId: InputMaybe<StringNullableFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  items: InputMaybe<CartItemListRelationFilter>;
  payments: InputMaybe<PaymentListRelationFilter>;
  status: InputMaybe<EnumOrderStatusFilter>;
  totalAmount: InputMaybe<FloatFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type PasswordResetCompleteResponseType = {
  __typename?: 'PasswordResetCompleteResponseType';
  message: Scalars['String']['output'];
};

export type PasswordResetInitiateResponseType = {
  __typename?: 'PasswordResetInitiateResponseType';
  passwordResetToken: Scalars['String']['output'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  order: Order;
  orderId: Scalars['String']['output'];
  paymentMethod: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentCreateInput = {
  amount: Scalars['Float']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  order: OrderCreateNestedOneWithoutPaymentsInput;
  paymentMethod: Scalars['String']['input'];
  status: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentCreateManyOrderInput = {
  amount: Scalars['Float']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  paymentMethod: Scalars['String']['input'];
  status: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentCreateManyOrderInputEnvelope = {
  data: Array<PaymentCreateManyOrderInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type PaymentCreateNestedManyWithoutOrderInput = {
  connect: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<PaymentCreateOrConnectWithoutOrderInput>>;
  create: InputMaybe<Array<PaymentCreateWithoutOrderInput>>;
  createMany: InputMaybe<PaymentCreateManyOrderInputEnvelope>;
};

export type PaymentCreateOrConnectWithoutOrderInput = {
  create: PaymentCreateWithoutOrderInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentCreateWithoutOrderInput = {
  amount: Scalars['Float']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  paymentMethod: Scalars['String']['input'];
  status: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentListRelationFilter = {
  every: InputMaybe<PaymentWhereInput>;
  none: InputMaybe<PaymentWhereInput>;
  some: InputMaybe<PaymentWhereInput>;
};

export type PaymentScalarWhereInput = {
  AND: InputMaybe<Array<PaymentScalarWhereInput>>;
  NOT: InputMaybe<Array<PaymentScalarWhereInput>>;
  OR: InputMaybe<Array<PaymentScalarWhereInput>>;
  amount: InputMaybe<FloatFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  orderId: InputMaybe<StringFilter>;
  paymentMethod: InputMaybe<StringFilter>;
  status: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type PaymentUpdateInput = {
  amount: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  order: InputMaybe<OrderUpdateOneRequiredWithoutPaymentsNestedInput>;
  paymentMethod: InputMaybe<StringFieldUpdateOperationsInput>;
  status: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PaymentUpdateManyMutationInput = {
  amount: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  paymentMethod: InputMaybe<StringFieldUpdateOperationsInput>;
  status: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PaymentUpdateManyWithWhereWithoutOrderInput = {
  data: PaymentUpdateManyMutationInput;
  where: PaymentScalarWhereInput;
};

export type PaymentUpdateManyWithoutOrderNestedInput = {
  connect: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<PaymentCreateOrConnectWithoutOrderInput>>;
  create: InputMaybe<Array<PaymentCreateWithoutOrderInput>>;
  createMany: InputMaybe<PaymentCreateManyOrderInputEnvelope>;
  delete: InputMaybe<Array<PaymentWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<PaymentScalarWhereInput>>;
  disconnect: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set: InputMaybe<Array<PaymentWhereUniqueInput>>;
  update: InputMaybe<Array<PaymentUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany: InputMaybe<Array<PaymentUpdateManyWithWhereWithoutOrderInput>>;
  upsert: InputMaybe<Array<PaymentUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type PaymentUpdateWithWhereUniqueWithoutOrderInput = {
  data: PaymentUpdateWithoutOrderInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateWithoutOrderInput = {
  amount: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  paymentMethod: InputMaybe<StringFieldUpdateOperationsInput>;
  status: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PaymentUpsertWithWhereUniqueWithoutOrderInput = {
  create: PaymentCreateWithoutOrderInput;
  update: PaymentUpdateWithoutOrderInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentWhereInput = {
  AND: InputMaybe<Array<PaymentWhereInput>>;
  NOT: InputMaybe<Array<PaymentWhereInput>>;
  OR: InputMaybe<Array<PaymentWhereInput>>;
  amount: InputMaybe<FloatFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  order: InputMaybe<OrderRelationFilter>;
  orderId: InputMaybe<StringFilter>;
  paymentMethod: InputMaybe<StringFilter>;
  status: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type PaymentWhereUniqueInput = {
  AND: InputMaybe<Array<PaymentWhereInput>>;
  NOT: InputMaybe<Array<PaymentWhereInput>>;
  OR: InputMaybe<Array<PaymentWhereInput>>;
  amount: InputMaybe<FloatFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<OrderRelationFilter>;
  orderId: InputMaybe<StringFilter>;
  paymentMethod: InputMaybe<StringFilter>;
  status: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type Product = {
  __typename?: 'Product';
  SKU: Scalars['String']['output'];
  _count: ProductCount;
  cartItems: Maybe<Array<CartItem>>;
  categories: Maybe<Array<Category>>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  media: Maybe<Array<Media>>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  reviews: Maybe<Array<Review>>;
  stock: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductCount = {
  __typename?: 'ProductCount';
  cartItems: Scalars['Int']['output'];
  categories: Scalars['Int']['output'];
  media: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
};

export type ProductCreateInput = {
  SKU: Scalars['String']['input'];
  cartItems: InputMaybe<CartItemCreateNestedManyWithoutProductInput>;
  categories: InputMaybe<CategoryCreateNestedManyWithoutProductsInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaCreateNestedManyWithoutProductInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  reviews: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  stock: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateNestedOneWithoutCartItemsInput = {
  connect: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate: InputMaybe<ProductCreateOrConnectWithoutCartItemsInput>;
  create: InputMaybe<ProductCreateWithoutCartItemsInput>;
};

export type ProductCreateNestedOneWithoutReviewsInput = {
  connect: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate: InputMaybe<ProductCreateOrConnectWithoutReviewsInput>;
  create: InputMaybe<ProductCreateWithoutReviewsInput>;
};

export type ProductCreateOrConnectWithoutCartItemsInput = {
  create: ProductCreateWithoutCartItemsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutReviewsInput = {
  create: ProductCreateWithoutReviewsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutCartItemsInput = {
  SKU: Scalars['String']['input'];
  categories: InputMaybe<CategoryCreateNestedManyWithoutProductsInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaCreateNestedManyWithoutProductInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  reviews: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  stock: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutReviewsInput = {
  SKU: Scalars['String']['input'];
  cartItems: InputMaybe<CartItemCreateNestedManyWithoutProductInput>;
  categories: InputMaybe<CategoryCreateNestedManyWithoutProductsInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaCreateNestedManyWithoutProductInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  stock: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductListRelationFilter = {
  every: InputMaybe<ProductWhereInput>;
  none: InputMaybe<ProductWhereInput>;
  some: InputMaybe<ProductWhereInput>;
};

export type ProductNullableRelationFilter = {
  is: InputMaybe<ProductWhereInput>;
  isNot: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByWithRelationInput = {
  SKU: InputMaybe<SortOrder>;
  cartItems: InputMaybe<CartItemOrderByRelationAggregateInput>;
  categories: InputMaybe<CategoryOrderByRelationAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  media: InputMaybe<MediaOrderByRelationAggregateInput>;
  name: InputMaybe<SortOrder>;
  price: InputMaybe<SortOrder>;
  reviews: InputMaybe<ReviewOrderByRelationAggregateInput>;
  stock: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
};

export type ProductRelationFilter = {
  is: InputMaybe<ProductWhereInput>;
  isNot: InputMaybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  SKU = 'SKU',
  createdAt = 'createdAt',
  description = 'description',
  id = 'id',
  name = 'name',
  price = 'price',
  stock = 'stock',
  updatedAt = 'updatedAt'
}

export type ProductUpdateInput = {
  SKU: InputMaybe<StringFieldUpdateOperationsInput>;
  cartItems: InputMaybe<CartItemUpdateManyWithoutProductNestedInput>;
  categories: InputMaybe<CategoryUpdateManyWithoutProductsNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  media: InputMaybe<MediaUpdateManyWithoutProductNestedInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  price: InputMaybe<FloatFieldUpdateOperationsInput>;
  reviews: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  stock: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateOneRequiredWithoutCartItemsNestedInput = {
  connect: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate: InputMaybe<ProductCreateOrConnectWithoutCartItemsInput>;
  create: InputMaybe<ProductCreateWithoutCartItemsInput>;
  update: InputMaybe<ProductUpdateToOneWithWhereWithoutCartItemsInput>;
  upsert: InputMaybe<ProductUpsertWithoutCartItemsInput>;
};

export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
  connect: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate: InputMaybe<ProductCreateOrConnectWithoutReviewsInput>;
  create: InputMaybe<ProductCreateWithoutReviewsInput>;
  update: InputMaybe<ProductUpdateToOneWithWhereWithoutReviewsInput>;
  upsert: InputMaybe<ProductUpsertWithoutReviewsInput>;
};

export type ProductUpdateToOneWithWhereWithoutCartItemsInput = {
  data: ProductUpdateWithoutCartItemsInput;
  where: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateToOneWithWhereWithoutReviewsInput = {
  data: ProductUpdateWithoutReviewsInput;
  where: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateWithoutCartItemsInput = {
  SKU: InputMaybe<StringFieldUpdateOperationsInput>;
  categories: InputMaybe<CategoryUpdateManyWithoutProductsNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  media: InputMaybe<MediaUpdateManyWithoutProductNestedInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  price: InputMaybe<FloatFieldUpdateOperationsInput>;
  reviews: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  stock: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutReviewsInput = {
  SKU: InputMaybe<StringFieldUpdateOperationsInput>;
  cartItems: InputMaybe<CartItemUpdateManyWithoutProductNestedInput>;
  categories: InputMaybe<CategoryUpdateManyWithoutProductsNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  media: InputMaybe<MediaUpdateManyWithoutProductNestedInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  price: InputMaybe<FloatFieldUpdateOperationsInput>;
  stock: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpsertWithoutCartItemsInput = {
  create: ProductCreateWithoutCartItemsInput;
  update: ProductUpdateWithoutCartItemsInput;
  where: InputMaybe<ProductWhereInput>;
};

export type ProductUpsertWithoutReviewsInput = {
  create: ProductCreateWithoutReviewsInput;
  update: ProductUpdateWithoutReviewsInput;
  where: InputMaybe<ProductWhereInput>;
};

export type ProductWhereInput = {
  AND: InputMaybe<Array<ProductWhereInput>>;
  NOT: InputMaybe<Array<ProductWhereInput>>;
  OR: InputMaybe<Array<ProductWhereInput>>;
  SKU: InputMaybe<StringFilter>;
  cartItems: InputMaybe<CartItemListRelationFilter>;
  categories: InputMaybe<CategoryListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  description: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  media: InputMaybe<MediaListRelationFilter>;
  name: InputMaybe<StringFilter>;
  price: InputMaybe<FloatFilter>;
  reviews: InputMaybe<ReviewListRelationFilter>;
  stock: InputMaybe<IntFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  AND: InputMaybe<Array<ProductWhereInput>>;
  NOT: InputMaybe<Array<ProductWhereInput>>;
  OR: InputMaybe<Array<ProductWhereInput>>;
  SKU: InputMaybe<Scalars['String']['input']>;
  cartItems: InputMaybe<CartItemListRelationFilter>;
  categories: InputMaybe<CategoryListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  description: InputMaybe<StringFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaListRelationFilter>;
  name: InputMaybe<StringFilter>;
  price: InputMaybe<FloatFilter>;
  reviews: InputMaybe<ReviewListRelationFilter>;
  stock: InputMaybe<IntFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  cartItem: Maybe<CartItem>;
  getCartByUserId: Cart;
  getMediaById: Maybe<Scalars['String']['output']>;
  media: Array<Media>;
  order: Maybe<Order>;
  orders: Array<Order>;
  payment: Maybe<Payment>;
  payments: Array<Payment>;
  product: Maybe<Product>;
  products: Array<Product>;
  review: Maybe<Review>;
  reviews: Array<Review>;
  user: Maybe<User>;
  users: Array<User>;
};


export type QueryCartItemArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCartByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetMediaByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrdersArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryPaymentArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  cursor: InputMaybe<ProductWhereUniqueInput>;
  distinct: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProductWhereInput>;
};


export type QueryReviewArgs = {
  id: Scalars['String']['input'];
};


export type QueryReviewsArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};

export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive'
}

export type RegisterResponseType = {
  __typename?: 'RegisterResponseType';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: Auth;
};

export type Review = {
  __typename?: 'Review';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ReviewCreateInput = {
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutReviewsInput;
};

export type ReviewCreateManyProductInput = {
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type ReviewCreateManyProductInputEnvelope = {
  data: Array<ReviewCreateManyProductInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateManyUserInput = {
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewCreateManyUserInputEnvelope = {
  data: Array<ReviewCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateNestedManyWithoutProductInput = {
  connect: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ReviewCreateOrConnectWithoutProductInput>>;
  create: InputMaybe<Array<ReviewCreateWithoutProductInput>>;
  createMany: InputMaybe<ReviewCreateManyProductInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany: InputMaybe<ReviewCreateManyUserInputEnvelope>;
};

export type ReviewCreateOrConnectWithoutProductInput = {
  create: ReviewCreateWithoutProductInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutProductInput = {
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutReviewsInput;
};

export type ReviewCreateWithoutUserInput = {
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewListRelationFilter = {
  every: InputMaybe<ReviewWhereInput>;
  none: InputMaybe<ReviewWhereInput>;
  some: InputMaybe<ReviewWhereInput>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type ReviewScalarWhereInput = {
  AND: InputMaybe<Array<ReviewScalarWhereInput>>;
  NOT: InputMaybe<Array<ReviewScalarWhereInput>>;
  OR: InputMaybe<Array<ReviewScalarWhereInput>>;
  content: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  productId: InputMaybe<StringFilter>;
  rating: InputMaybe<IntFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export type ReviewUpdateInput = {
  content: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  product: InputMaybe<ProductUpdateOneRequiredWithoutReviewsNestedInput>;
  rating: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutReviewsNestedInput>;
};

export type ReviewUpdateManyMutationInput = {
  content: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  rating: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpdateManyWithWhereWithoutProductInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutUserInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithoutProductNestedInput = {
  connect: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ReviewCreateOrConnectWithoutProductInput>>;
  create: InputMaybe<Array<ReviewCreateWithoutProductInput>>;
  createMany: InputMaybe<ReviewCreateManyProductInputEnvelope>;
  delete: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutProductInput>>;
  upsert: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ReviewUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany: InputMaybe<ReviewCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
  data: ReviewUpdateWithoutProductInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithoutProductInput = {
  content: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  rating: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutUserInput = {
  content: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  product: InputMaybe<ProductUpdateOneRequiredWithoutReviewsNestedInput>;
  rating: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
  create: ReviewCreateWithoutProductInput;
  update: ReviewUpdateWithoutProductInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  update: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewWhereInput = {
  AND: InputMaybe<Array<ReviewWhereInput>>;
  NOT: InputMaybe<Array<ReviewWhereInput>>;
  OR: InputMaybe<Array<ReviewWhereInput>>;
  content: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  product: InputMaybe<ProductRelationFilter>;
  productId: InputMaybe<StringFilter>;
  rating: InputMaybe<IntFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type ReviewWhereUniqueInput = {
  AND: InputMaybe<Array<ReviewWhereInput>>;
  NOT: InputMaybe<Array<ReviewWhereInput>>;
  OR: InputMaybe<Array<ReviewWhereInput>>;
  content: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  product: InputMaybe<ProductRelationFilter>;
  productId: InputMaybe<StringFilter>;
  rating: InputMaybe<IntFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<Scalars['String']['input']>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<Scalars['String']['input']>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringNullableFilter>;
  notIn: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type TokenType = {
  __typename?: 'TokenType';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  address: Maybe<Array<Address>>;
  auth: Maybe<Auth>;
  cart: Maybe<Cart>;
  createdAt: Scalars['DateTime']['output'];
  firstName: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName: Maybe<Scalars['String']['output']>;
  orders: Maybe<Array<Order>>;
  reviews: Maybe<Array<Review>>;
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  address: Scalars['Int']['output'];
  orders: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
};

export type UserCreateInput = {
  address: InputMaybe<AddressCreateNestedManyWithoutUserInput>;
  auth: InputMaybe<AuthCreateNestedOneWithoutUserInput>;
  cart: InputMaybe<CartCreateNestedOneWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  orders: InputMaybe<OrderCreateNestedManyWithoutUserInput>;
  reviews: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedOneWithoutAddressInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutAddressInput>;
  create: InputMaybe<UserCreateWithoutAddressInput>;
};

export type UserCreateNestedOneWithoutAuthInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutAuthInput>;
  create: InputMaybe<UserCreateWithoutAuthInput>;
};

export type UserCreateNestedOneWithoutCartInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutCartInput>;
  create: InputMaybe<UserCreateWithoutCartInput>;
};

export type UserCreateNestedOneWithoutOrdersInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutOrdersInput>;
  create: InputMaybe<UserCreateWithoutOrdersInput>;
};

export type UserCreateNestedOneWithoutReviewsInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create: InputMaybe<UserCreateWithoutReviewsInput>;
};

export type UserCreateOrConnectWithoutAddressInput = {
  create: UserCreateWithoutAddressInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAuthInput = {
  create: UserCreateWithoutAuthInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCartInput = {
  create: UserCreateWithoutCartInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOrdersInput = {
  create: UserCreateWithoutOrdersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAddressInput = {
  auth: InputMaybe<AuthCreateNestedOneWithoutUserInput>;
  cart: InputMaybe<CartCreateNestedOneWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  orders: InputMaybe<OrderCreateNestedManyWithoutUserInput>;
  reviews: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutAuthInput = {
  address: InputMaybe<AddressCreateNestedManyWithoutUserInput>;
  cart: InputMaybe<CartCreateNestedOneWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  orders: InputMaybe<OrderCreateNestedManyWithoutUserInput>;
  reviews: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutCartInput = {
  address: InputMaybe<AddressCreateNestedManyWithoutUserInput>;
  auth: InputMaybe<AuthCreateNestedOneWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  orders: InputMaybe<OrderCreateNestedManyWithoutUserInput>;
  reviews: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutOrdersInput = {
  address: InputMaybe<AddressCreateNestedManyWithoutUserInput>;
  auth: InputMaybe<AuthCreateNestedOneWithoutUserInput>;
  cart: InputMaybe<CartCreateNestedOneWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  reviews: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutReviewsInput = {
  address: InputMaybe<AddressCreateNestedManyWithoutUserInput>;
  auth: InputMaybe<AuthCreateNestedOneWithoutUserInput>;
  cart: InputMaybe<CartCreateNestedOneWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  orders: InputMaybe<OrderCreateNestedManyWithoutUserInput>;
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserNullableRelationFilter = {
  is: InputMaybe<UserWhereInput>;
  isNot: InputMaybe<UserWhereInput>;
};

export type UserRelationFilter = {
  is: InputMaybe<UserWhereInput>;
  isNot: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER'
}

export type UserUpdateInput = {
  address: InputMaybe<AddressUpdateManyWithoutUserNestedInput>;
  auth: InputMaybe<AuthUpdateOneWithoutUserNestedInput>;
  cart: InputMaybe<CartUpdateOneWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders: InputMaybe<OrderUpdateManyWithoutUserNestedInput>;
  reviews: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCartNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutCartInput>;
  create: InputMaybe<UserCreateWithoutCartInput>;
  update: InputMaybe<UserUpdateToOneWithWhereWithoutCartInput>;
  upsert: InputMaybe<UserUpsertWithoutCartInput>;
};

export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutOrdersInput>;
  create: InputMaybe<UserCreateWithoutOrdersInput>;
  update: InputMaybe<UserUpdateToOneWithWhereWithoutOrdersInput>;
  upsert: InputMaybe<UserUpsertWithoutOrdersInput>;
};

export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create: InputMaybe<UserCreateWithoutReviewsInput>;
  update: InputMaybe<UserUpdateToOneWithWhereWithoutReviewsInput>;
  upsert: InputMaybe<UserUpsertWithoutReviewsInput>;
};

export type UserUpdateOneWithoutAddressNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutAddressInput>;
  create: InputMaybe<UserCreateWithoutAddressInput>;
  delete: InputMaybe<UserWhereInput>;
  disconnect: InputMaybe<UserWhereInput>;
  update: InputMaybe<UserUpdateToOneWithWhereWithoutAddressInput>;
  upsert: InputMaybe<UserUpsertWithoutAddressInput>;
};

export type UserUpdateToOneWithWhereWithoutAddressInput = {
  data: UserUpdateWithoutAddressInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCartInput = {
  data: UserUpdateWithoutCartInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutOrdersInput = {
  data: UserUpdateWithoutOrdersInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutReviewsInput = {
  data: UserUpdateWithoutReviewsInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAddressInput = {
  auth: InputMaybe<AuthUpdateOneWithoutUserNestedInput>;
  cart: InputMaybe<CartUpdateOneWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders: InputMaybe<OrderUpdateManyWithoutUserNestedInput>;
  reviews: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCartInput = {
  address: InputMaybe<AddressUpdateManyWithoutUserNestedInput>;
  auth: InputMaybe<AuthUpdateOneWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders: InputMaybe<OrderUpdateManyWithoutUserNestedInput>;
  reviews: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOrdersInput = {
  address: InputMaybe<AddressUpdateManyWithoutUserNestedInput>;
  auth: InputMaybe<AuthUpdateOneWithoutUserNestedInput>;
  cart: InputMaybe<CartUpdateOneWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reviews: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReviewsInput = {
  address: InputMaybe<AddressUpdateManyWithoutUserNestedInput>;
  auth: InputMaybe<AuthUpdateOneWithoutUserNestedInput>;
  cart: InputMaybe<CartUpdateOneWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders: InputMaybe<OrderUpdateManyWithoutUserNestedInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAddressInput = {
  create: UserCreateWithoutAddressInput;
  update: UserUpdateWithoutAddressInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCartInput = {
  create: UserCreateWithoutCartInput;
  update: UserUpdateWithoutCartInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutOrdersInput = {
  create: UserCreateWithoutOrdersInput;
  update: UserUpdateWithoutOrdersInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  update: UserUpdateWithoutReviewsInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND: InputMaybe<Array<UserWhereInput>>;
  NOT: InputMaybe<Array<UserWhereInput>>;
  OR: InputMaybe<Array<UserWhereInput>>;
  address: InputMaybe<AddressListRelationFilter>;
  auth: InputMaybe<AuthNullableRelationFilter>;
  cart: InputMaybe<CartNullableRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  firstName: InputMaybe<StringNullableFilter>;
  id: InputMaybe<StringFilter>;
  lastName: InputMaybe<StringNullableFilter>;
  orders: InputMaybe<OrderListRelationFilter>;
  reviews: InputMaybe<ReviewListRelationFilter>;
  role: InputMaybe<EnumUserRoleFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND: InputMaybe<Array<UserWhereInput>>;
  NOT: InputMaybe<Array<UserWhereInput>>;
  OR: InputMaybe<Array<UserWhereInput>>;
  address: InputMaybe<AddressListRelationFilter>;
  auth: InputMaybe<AuthNullableRelationFilter>;
  cart: InputMaybe<CartNullableRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  firstName: InputMaybe<StringNullableFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<StringNullableFilter>;
  orders: InputMaybe<OrderListRelationFilter>;
  reviews: InputMaybe<ReviewListRelationFilter>;
  role: InputMaybe<EnumUserRoleFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type RegisterMutationVariables = Exact<{
  data: AuthCreateInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponseType', accessToken: string, refreshToken: string, user: { __typename?: 'Auth', id: string, email: string } } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'TokenType', accessToken: string, refreshToken: string } };

export type RefreshTokenMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'TokenType', accessToken: string, refreshToken: string } };

export type InitiatePasswordResetMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type InitiatePasswordResetMutation = { __typename?: 'Mutation', initiatePasswordReset: { __typename?: 'PasswordResetInitiateResponseType', passwordResetToken: string } };

export type CompletePasswordResetMutationVariables = Exact<{
  token: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type CompletePasswordResetMutation = { __typename?: 'Mutation', completePasswordReset: { __typename?: 'PasswordResetCompleteResponseType', message: string } };

export type GetCartItemQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCartItemQuery = { __typename?: 'Query', cartItem: { __typename?: 'CartItem', id: string, productId: string, quantity: number } | undefined | null };

export type AddCartItemMutationVariables = Exact<{
  data: CartItemCreateInput;
}>;


export type AddCartItemMutation = { __typename?: 'Mutation', addCartItem: { __typename?: 'CartItem', id: string, productId: string, quantity: number } };

export type UpdateCartItemMutationVariables = Exact<{
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
}>;


export type UpdateCartItemMutation = { __typename?: 'Mutation', updateCartItem: { __typename?: 'CartItem', id: string, productId: string, quantity: number } };

export type RemoveCartItemMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveCartItemMutation = { __typename?: 'Mutation', removeCartItem: { __typename?: 'CartItem', id: string } };

export type GetCartByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetCartByUserIdQuery = { __typename?: 'Query', getCartByUserId: { __typename?: 'Cart', id: string, cartItems: Array<{ __typename?: 'CartItem', id: string, quantity: number, product: { __typename?: 'Product', id: string, name: string } }> | undefined | null } };

export type CreateCartMutationVariables = Exact<{
  data: CartCreateInput;
}>;


export type CreateCartMutation = { __typename?: 'Mutation', createCart: { __typename?: 'Cart', id: string } };

export type AddItemToCartMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type AddItemToCartMutation = { __typename?: 'Mutation', addItemToCart: { __typename?: 'CartItem', id: string, quantity: number } };

export type UpdateCartMutationVariables = Exact<{
  cartItemId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type UpdateCartMutation = { __typename?: 'Mutation', updateCart: { __typename?: 'CartItem', id: string, quantity: number } };

export type RemoveItemFromCartMutationVariables = Exact<{
  cartItemId: Scalars['String']['input'];
}>;


export type RemoveItemFromCartMutation = { __typename?: 'Mutation', removeItemFromCart: { __typename?: 'CartItem', id: string } };

export type ClearCartMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type ClearCartMutation = { __typename?: 'Mutation', clearCart: { __typename?: 'Cart', id: string } };

export type CheckoutMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type CheckoutMutation = { __typename?: 'Mutation', checkout: { __typename?: 'Order', id: string } };

export type ApplyCouponToCartMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  couponCode: Scalars['String']['input'];
}>;


export type ApplyCouponToCartMutation = { __typename?: 'Mutation', applyCouponToCart: { __typename?: 'Cart', id: string } };

export type GetAllMediaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMediaQuery = { __typename?: 'Query', media: Array<{ __typename?: 'Media', id: string, url: string }> };

export type GetMediaByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetMediaByIdQuery = { __typename?: 'Query', getMediaById: string | undefined | null };

export type DeleteMediaMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteMediaMutation = { __typename?: 'Mutation', deleteMedia: { __typename?: 'Media', id: string } };

export type OrdersQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type OrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: string, status: OrderStatus, totalAmount: number }> };

export type GetOrderByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetOrderByIdQuery = { __typename?: 'Query', order: { __typename?: 'Order', id: string, status: OrderStatus, totalAmount: number } | undefined | null };

export type CreateOrderMutationVariables = Exact<{
  data: OrderCreateInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: string, status: OrderStatus, totalAmount: number } };

export type UpdateOrderMutationVariables = Exact<{
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder: { __typename?: 'Order', id: string, status: OrderStatus, totalAmount: number } };

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteOrderMutation = { __typename?: 'Mutation', deleteOrder: { __typename?: 'Order', id: string } };

export type GetPaymentByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPaymentByIdQuery = { __typename?: 'Query', payment: { __typename?: 'Payment', id: string, amount: number, status: string, paymentMethod: string } | undefined | null };

export type GetAllPaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPaymentsQuery = { __typename?: 'Query', payments: Array<{ __typename?: 'Payment', id: string, amount: number, status: string, paymentMethod: string }> };

export type CreatePaymentMutationVariables = Exact<{
  data: PaymentCreateInput;
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'Payment', id: string, amount: number, status: string, paymentMethod: string } };

export type UpdatePaymentMutationVariables = Exact<{
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
}>;


export type UpdatePaymentMutation = { __typename?: 'Mutation', updatePayment: { __typename?: 'Payment', id: string, amount: number, status: string, paymentMethod: string } };

export type DeletePaymentMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePaymentMutation = { __typename?: 'Mutation', deletePayment: { __typename?: 'Payment', id: string } };

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: string, name: string, price: number, description: string } | undefined | null };

export type GetAllProductsQueryVariables = Exact<{
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, price: number, description: string }> };

export type CreateProductMutationVariables = Exact<{
  data: ProductCreateInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string, name: string, price: number, description: string } };

export type UpdateProductMutationVariables = Exact<{
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Product', id: string, name: string, price: number, description: string } };

export type DeleteProductMutationVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'Product', id: string } };

export type GetAllReviewsQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type GetAllReviewsQuery = { __typename?: 'Query', reviews: Array<{ __typename?: 'Review', id: string, content: string, rating: number, productId: string, userId: string }> };

export type GetReviewByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetReviewByIdQuery = { __typename?: 'Query', review: { __typename?: 'Review', id: string, content: string, rating: number, productId: string, userId: string } | undefined | null };

export type CreateReviewMutationVariables = Exact<{
  data: ReviewCreateInput;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview: { __typename?: 'Review', id: string, content: string, rating: number, productId: string, userId: string } };

export type UpdateReviewMutationVariables = Exact<{
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
}>;


export type UpdateReviewMutation = { __typename?: 'Mutation', updateReview: { __typename?: 'Review', id: string, content: string, rating: number, productId: string, userId: string } };

export type DeleteReviewMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteReviewMutation = { __typename?: 'Mutation', deleteReview: { __typename?: 'Review', id: string } };

export type GetAllUsersQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, firstName: string | undefined | null, lastName: string | undefined | null, auth: { __typename?: 'Auth', email: string } | undefined | null }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, firstName: string | undefined | null, lastName: string | undefined | null, auth: { __typename?: 'Auth', email: string } | undefined | null } | undefined | null };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, firstName: string | undefined | null, lastName: string | undefined | null, auth: { __typename?: 'Auth', email: string } | undefined | null } };

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, firstName: string | undefined | null, lastName: string | undefined | null, auth: { __typename?: 'Auth', email: string } | undefined | null } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: string } };


export const RegisterDocument = gql`
    mutation Register($data: AuthCreateInput!) {
  register(data: $data) {
    user {
      id
      email
    }
    accessToken
    refreshToken
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    refreshToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($userId: String!, $token: String!) {
  refreshToken(userId: $userId, token: $token) {
    accessToken
    refreshToken
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const InitiatePasswordResetDocument = gql`
    mutation InitiatePasswordReset($email: String!) {
  initiatePasswordReset(email: $email) {
    passwordResetToken
  }
}
    `;
export type InitiatePasswordResetMutationFn = Apollo.MutationFunction<InitiatePasswordResetMutation, InitiatePasswordResetMutationVariables>;

/**
 * __useInitiatePasswordResetMutation__
 *
 * To run a mutation, you first call `useInitiatePasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitiatePasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initiatePasswordResetMutation, { data, loading, error }] = useInitiatePasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInitiatePasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<InitiatePasswordResetMutation, InitiatePasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InitiatePasswordResetMutation, InitiatePasswordResetMutationVariables>(InitiatePasswordResetDocument, options);
      }
export type InitiatePasswordResetMutationHookResult = ReturnType<typeof useInitiatePasswordResetMutation>;
export type InitiatePasswordResetMutationResult = Apollo.MutationResult<InitiatePasswordResetMutation>;
export type InitiatePasswordResetMutationOptions = Apollo.BaseMutationOptions<InitiatePasswordResetMutation, InitiatePasswordResetMutationVariables>;
export const CompletePasswordResetDocument = gql`
    mutation CompletePasswordReset($token: String!, $newPassword: String!) {
  completePasswordReset(token: $token, newPassword: $newPassword) {
    message
  }
}
    `;
export type CompletePasswordResetMutationFn = Apollo.MutationFunction<CompletePasswordResetMutation, CompletePasswordResetMutationVariables>;

/**
 * __useCompletePasswordResetMutation__
 *
 * To run a mutation, you first call `useCompletePasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompletePasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completePasswordResetMutation, { data, loading, error }] = useCompletePasswordResetMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useCompletePasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<CompletePasswordResetMutation, CompletePasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompletePasswordResetMutation, CompletePasswordResetMutationVariables>(CompletePasswordResetDocument, options);
      }
export type CompletePasswordResetMutationHookResult = ReturnType<typeof useCompletePasswordResetMutation>;
export type CompletePasswordResetMutationResult = Apollo.MutationResult<CompletePasswordResetMutation>;
export type CompletePasswordResetMutationOptions = Apollo.BaseMutationOptions<CompletePasswordResetMutation, CompletePasswordResetMutationVariables>;
export const GetCartItemDocument = gql`
    query GetCartItem($id: String!) {
  cartItem(id: $id) {
    id
    productId
    quantity
  }
}
    `;

/**
 * __useGetCartItemQuery__
 *
 * To run a query within a React component, call `useGetCartItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCartItemQuery(baseOptions: Apollo.QueryHookOptions<GetCartItemQuery, GetCartItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartItemQuery, GetCartItemQueryVariables>(GetCartItemDocument, options);
      }
export function useGetCartItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartItemQuery, GetCartItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartItemQuery, GetCartItemQueryVariables>(GetCartItemDocument, options);
        }
export function useGetCartItemSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCartItemQuery, GetCartItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCartItemQuery, GetCartItemQueryVariables>(GetCartItemDocument, options);
        }
export type GetCartItemQueryHookResult = ReturnType<typeof useGetCartItemQuery>;
export type GetCartItemLazyQueryHookResult = ReturnType<typeof useGetCartItemLazyQuery>;
export type GetCartItemSuspenseQueryHookResult = ReturnType<typeof useGetCartItemSuspenseQuery>;
export type GetCartItemQueryResult = Apollo.QueryResult<GetCartItemQuery, GetCartItemQueryVariables>;
export const AddCartItemDocument = gql`
    mutation AddCartItem($data: CartItemCreateInput!) {
  addCartItem(data: $data) {
    id
    productId
    quantity
  }
}
    `;
export type AddCartItemMutationFn = Apollo.MutationFunction<AddCartItemMutation, AddCartItemMutationVariables>;

/**
 * __useAddCartItemMutation__
 *
 * To run a mutation, you first call `useAddCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCartItemMutation, { data, loading, error }] = useAddCartItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddCartItemMutation(baseOptions?: Apollo.MutationHookOptions<AddCartItemMutation, AddCartItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCartItemMutation, AddCartItemMutationVariables>(AddCartItemDocument, options);
      }
export type AddCartItemMutationHookResult = ReturnType<typeof useAddCartItemMutation>;
export type AddCartItemMutationResult = Apollo.MutationResult<AddCartItemMutation>;
export type AddCartItemMutationOptions = Apollo.BaseMutationOptions<AddCartItemMutation, AddCartItemMutationVariables>;
export const UpdateCartItemDocument = gql`
    mutation UpdateCartItem($data: CartItemUpdateInput!, $where: CartItemWhereUniqueInput!) {
  updateCartItem(data: $data, where: $where) {
    id
    productId
    quantity
  }
}
    `;
export type UpdateCartItemMutationFn = Apollo.MutationFunction<UpdateCartItemMutation, UpdateCartItemMutationVariables>;

/**
 * __useUpdateCartItemMutation__
 *
 * To run a mutation, you first call `useUpdateCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartItemMutation, { data, loading, error }] = useUpdateCartItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateCartItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartItemMutation, UpdateCartItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCartItemMutation, UpdateCartItemMutationVariables>(UpdateCartItemDocument, options);
      }
export type UpdateCartItemMutationHookResult = ReturnType<typeof useUpdateCartItemMutation>;
export type UpdateCartItemMutationResult = Apollo.MutationResult<UpdateCartItemMutation>;
export type UpdateCartItemMutationOptions = Apollo.BaseMutationOptions<UpdateCartItemMutation, UpdateCartItemMutationVariables>;
export const RemoveCartItemDocument = gql`
    mutation RemoveCartItem($id: String!) {
  removeCartItem(id: $id) {
    id
  }
}
    `;
export type RemoveCartItemMutationFn = Apollo.MutationFunction<RemoveCartItemMutation, RemoveCartItemMutationVariables>;

/**
 * __useRemoveCartItemMutation__
 *
 * To run a mutation, you first call `useRemoveCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCartItemMutation, { data, loading, error }] = useRemoveCartItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCartItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCartItemMutation, RemoveCartItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCartItemMutation, RemoveCartItemMutationVariables>(RemoveCartItemDocument, options);
      }
export type RemoveCartItemMutationHookResult = ReturnType<typeof useRemoveCartItemMutation>;
export type RemoveCartItemMutationResult = Apollo.MutationResult<RemoveCartItemMutation>;
export type RemoveCartItemMutationOptions = Apollo.BaseMutationOptions<RemoveCartItemMutation, RemoveCartItemMutationVariables>;
export const GetCartByUserIdDocument = gql`
    query GetCartByUserId($userId: String!) {
  getCartByUserId(userId: $userId) {
    id
    cartItems {
      id
      product {
        id
        name
      }
      quantity
    }
  }
}
    `;

/**
 * __useGetCartByUserIdQuery__
 *
 * To run a query within a React component, call `useGetCartByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCartByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>(GetCartByUserIdDocument, options);
      }
export function useGetCartByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>(GetCartByUserIdDocument, options);
        }
export function useGetCartByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>(GetCartByUserIdDocument, options);
        }
export type GetCartByUserIdQueryHookResult = ReturnType<typeof useGetCartByUserIdQuery>;
export type GetCartByUserIdLazyQueryHookResult = ReturnType<typeof useGetCartByUserIdLazyQuery>;
export type GetCartByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetCartByUserIdSuspenseQuery>;
export type GetCartByUserIdQueryResult = Apollo.QueryResult<GetCartByUserIdQuery, GetCartByUserIdQueryVariables>;
export const CreateCartDocument = gql`
    mutation CreateCart($data: CartCreateInput!) {
  createCart(data: $data) {
    id
  }
}
    `;
export type CreateCartMutationFn = Apollo.MutationFunction<CreateCartMutation, CreateCartMutationVariables>;

/**
 * __useCreateCartMutation__
 *
 * To run a mutation, you first call `useCreateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartMutation, { data, loading, error }] = useCreateCartMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCartMutation(baseOptions?: Apollo.MutationHookOptions<CreateCartMutation, CreateCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCartMutation, CreateCartMutationVariables>(CreateCartDocument, options);
      }
export type CreateCartMutationHookResult = ReturnType<typeof useCreateCartMutation>;
export type CreateCartMutationResult = Apollo.MutationResult<CreateCartMutation>;
export type CreateCartMutationOptions = Apollo.BaseMutationOptions<CreateCartMutation, CreateCartMutationVariables>;
export const AddItemToCartDocument = gql`
    mutation AddItemToCart($userId: String!, $productId: String!, $quantity: Int!) {
  addItemToCart(userId: $userId, productId: $productId, quantity: $quantity) {
    id
    quantity
  }
}
    `;
export type AddItemToCartMutationFn = Apollo.MutationFunction<AddItemToCartMutation, AddItemToCartMutationVariables>;

/**
 * __useAddItemToCartMutation__
 *
 * To run a mutation, you first call `useAddItemToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemToCartMutation, { data, loading, error }] = useAddItemToCartMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      productId: // value for 'productId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useAddItemToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddItemToCartMutation, AddItemToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddItemToCartMutation, AddItemToCartMutationVariables>(AddItemToCartDocument, options);
      }
export type AddItemToCartMutationHookResult = ReturnType<typeof useAddItemToCartMutation>;
export type AddItemToCartMutationResult = Apollo.MutationResult<AddItemToCartMutation>;
export type AddItemToCartMutationOptions = Apollo.BaseMutationOptions<AddItemToCartMutation, AddItemToCartMutationVariables>;
export const UpdateCartDocument = gql`
    mutation UpdateCart($cartItemId: String!, $quantity: Int!) {
  updateCart(cartItemId: $cartItemId, quantity: $quantity) {
    id
    quantity
  }
}
    `;
export type UpdateCartMutationFn = Apollo.MutationFunction<UpdateCartMutation, UpdateCartMutationVariables>;

/**
 * __useUpdateCartMutation__
 *
 * To run a mutation, you first call `useUpdateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartMutation, { data, loading, error }] = useUpdateCartMutation({
 *   variables: {
 *      cartItemId: // value for 'cartItemId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useUpdateCartMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartMutation, UpdateCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCartMutation, UpdateCartMutationVariables>(UpdateCartDocument, options);
      }
export type UpdateCartMutationHookResult = ReturnType<typeof useUpdateCartMutation>;
export type UpdateCartMutationResult = Apollo.MutationResult<UpdateCartMutation>;
export type UpdateCartMutationOptions = Apollo.BaseMutationOptions<UpdateCartMutation, UpdateCartMutationVariables>;
export const RemoveItemFromCartDocument = gql`
    mutation RemoveItemFromCart($cartItemId: String!) {
  removeItemFromCart(cartItemId: $cartItemId) {
    id
  }
}
    `;
export type RemoveItemFromCartMutationFn = Apollo.MutationFunction<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>;

/**
 * __useRemoveItemFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveItemFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveItemFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeItemFromCartMutation, { data, loading, error }] = useRemoveItemFromCartMutation({
 *   variables: {
 *      cartItemId: // value for 'cartItemId'
 *   },
 * });
 */
export function useRemoveItemFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>(RemoveItemFromCartDocument, options);
      }
export type RemoveItemFromCartMutationHookResult = ReturnType<typeof useRemoveItemFromCartMutation>;
export type RemoveItemFromCartMutationResult = Apollo.MutationResult<RemoveItemFromCartMutation>;
export type RemoveItemFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>;
export const ClearCartDocument = gql`
    mutation ClearCart($userId: String!) {
  clearCart(userId: $userId) {
    id
  }
}
    `;
export type ClearCartMutationFn = Apollo.MutationFunction<ClearCartMutation, ClearCartMutationVariables>;

/**
 * __useClearCartMutation__
 *
 * To run a mutation, you first call `useClearCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearCartMutation, { data, loading, error }] = useClearCartMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useClearCartMutation(baseOptions?: Apollo.MutationHookOptions<ClearCartMutation, ClearCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClearCartMutation, ClearCartMutationVariables>(ClearCartDocument, options);
      }
export type ClearCartMutationHookResult = ReturnType<typeof useClearCartMutation>;
export type ClearCartMutationResult = Apollo.MutationResult<ClearCartMutation>;
export type ClearCartMutationOptions = Apollo.BaseMutationOptions<ClearCartMutation, ClearCartMutationVariables>;
export const CheckoutDocument = gql`
    mutation Checkout($userId: String!) {
  checkout(userId: $userId) {
    id
  }
}
    `;
export type CheckoutMutationFn = Apollo.MutationFunction<CheckoutMutation, CheckoutMutationVariables>;

/**
 * __useCheckoutMutation__
 *
 * To run a mutation, you first call `useCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutMutation, { data, loading, error }] = useCheckoutMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<CheckoutMutation, CheckoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckoutMutation, CheckoutMutationVariables>(CheckoutDocument, options);
      }
export type CheckoutMutationHookResult = ReturnType<typeof useCheckoutMutation>;
export type CheckoutMutationResult = Apollo.MutationResult<CheckoutMutation>;
export type CheckoutMutationOptions = Apollo.BaseMutationOptions<CheckoutMutation, CheckoutMutationVariables>;
export const ApplyCouponToCartDocument = gql`
    mutation ApplyCouponToCart($userId: String!, $couponCode: String!) {
  applyCouponToCart(userId: $userId, couponCode: $couponCode) {
    id
  }
}
    `;
export type ApplyCouponToCartMutationFn = Apollo.MutationFunction<ApplyCouponToCartMutation, ApplyCouponToCartMutationVariables>;

/**
 * __useApplyCouponToCartMutation__
 *
 * To run a mutation, you first call `useApplyCouponToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApplyCouponToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [applyCouponToCartMutation, { data, loading, error }] = useApplyCouponToCartMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      couponCode: // value for 'couponCode'
 *   },
 * });
 */
export function useApplyCouponToCartMutation(baseOptions?: Apollo.MutationHookOptions<ApplyCouponToCartMutation, ApplyCouponToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApplyCouponToCartMutation, ApplyCouponToCartMutationVariables>(ApplyCouponToCartDocument, options);
      }
export type ApplyCouponToCartMutationHookResult = ReturnType<typeof useApplyCouponToCartMutation>;
export type ApplyCouponToCartMutationResult = Apollo.MutationResult<ApplyCouponToCartMutation>;
export type ApplyCouponToCartMutationOptions = Apollo.BaseMutationOptions<ApplyCouponToCartMutation, ApplyCouponToCartMutationVariables>;
export const GetAllMediaDocument = gql`
    query GetAllMedia {
  media {
    id
    url
  }
}
    `;

/**
 * __useGetAllMediaQuery__
 *
 * To run a query within a React component, call `useGetAllMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMediaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMediaQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMediaQuery, GetAllMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMediaQuery, GetAllMediaQueryVariables>(GetAllMediaDocument, options);
      }
export function useGetAllMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMediaQuery, GetAllMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMediaQuery, GetAllMediaQueryVariables>(GetAllMediaDocument, options);
        }
export function useGetAllMediaSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMediaQuery, GetAllMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMediaQuery, GetAllMediaQueryVariables>(GetAllMediaDocument, options);
        }
export type GetAllMediaQueryHookResult = ReturnType<typeof useGetAllMediaQuery>;
export type GetAllMediaLazyQueryHookResult = ReturnType<typeof useGetAllMediaLazyQuery>;
export type GetAllMediaSuspenseQueryHookResult = ReturnType<typeof useGetAllMediaSuspenseQuery>;
export type GetAllMediaQueryResult = Apollo.QueryResult<GetAllMediaQuery, GetAllMediaQueryVariables>;
export const GetMediaByIdDocument = gql`
    query GetMediaById($id: String!) {
  getMediaById(id: $id)
}
    `;

/**
 * __useGetMediaByIdQuery__
 *
 * To run a query within a React component, call `useGetMediaByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMediaByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMediaByIdQuery, GetMediaByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediaByIdQuery, GetMediaByIdQueryVariables>(GetMediaByIdDocument, options);
      }
export function useGetMediaByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediaByIdQuery, GetMediaByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediaByIdQuery, GetMediaByIdQueryVariables>(GetMediaByIdDocument, options);
        }
export function useGetMediaByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMediaByIdQuery, GetMediaByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMediaByIdQuery, GetMediaByIdQueryVariables>(GetMediaByIdDocument, options);
        }
export type GetMediaByIdQueryHookResult = ReturnType<typeof useGetMediaByIdQuery>;
export type GetMediaByIdLazyQueryHookResult = ReturnType<typeof useGetMediaByIdLazyQuery>;
export type GetMediaByIdSuspenseQueryHookResult = ReturnType<typeof useGetMediaByIdSuspenseQuery>;
export type GetMediaByIdQueryResult = Apollo.QueryResult<GetMediaByIdQuery, GetMediaByIdQueryVariables>;
export const DeleteMediaDocument = gql`
    mutation DeleteMedia($id: String!) {
  deleteMedia(id: $id) {
    id
  }
}
    `;
export type DeleteMediaMutationFn = Apollo.MutationFunction<DeleteMediaMutation, DeleteMediaMutationVariables>;

/**
 * __useDeleteMediaMutation__
 *
 * To run a mutation, you first call `useDeleteMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMediaMutation, { data, loading, error }] = useDeleteMediaMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMediaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMediaMutation, DeleteMediaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMediaMutation, DeleteMediaMutationVariables>(DeleteMediaDocument, options);
      }
export type DeleteMediaMutationHookResult = ReturnType<typeof useDeleteMediaMutation>;
export type DeleteMediaMutationResult = Apollo.MutationResult<DeleteMediaMutation>;
export type DeleteMediaMutationOptions = Apollo.BaseMutationOptions<DeleteMediaMutation, DeleteMediaMutationVariables>;
export const OrdersDocument = gql`
    query Orders($skip: Int!, $take: Int!) {
  orders(skip: $skip, take: $take) {
    id
    status
    totalAmount
  }
}
    `;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export function useOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersSuspenseQueryHookResult = ReturnType<typeof useOrdersSuspenseQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const GetOrderByIdDocument = gql`
    query GetOrderById($id: String!) {
  order(id: $id) {
    id
    status
    totalAmount
  }
}
    `;

/**
 * __useGetOrderByIdQuery__
 *
 * To run a query within a React component, call `useGetOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderByIdQuery(baseOptions: Apollo.QueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
      }
export function useGetOrderByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
        }
export function useGetOrderByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
        }
export type GetOrderByIdQueryHookResult = ReturnType<typeof useGetOrderByIdQuery>;
export type GetOrderByIdLazyQueryHookResult = ReturnType<typeof useGetOrderByIdLazyQuery>;
export type GetOrderByIdSuspenseQueryHookResult = ReturnType<typeof useGetOrderByIdSuspenseQuery>;
export type GetOrderByIdQueryResult = Apollo.QueryResult<GetOrderByIdQuery, GetOrderByIdQueryVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($data: OrderCreateInput!) {
  createOrder(data: $data) {
    id
    status
    totalAmount
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($data: OrderUpdateInput!, $where: OrderWhereUniqueInput!) {
  updateOrder(data: $data, where: $where) {
    id
    status
    totalAmount
  }
}
    `;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, options);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($id: String!) {
  deleteOrder(id: $id) {
    id
  }
}
    `;
export type DeleteOrderMutationFn = Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, options);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const GetPaymentByIdDocument = gql`
    query GetPaymentById($id: String!) {
  payment(id: $id) {
    id
    amount
    status
    paymentMethod
  }
}
    `;

/**
 * __useGetPaymentByIdQuery__
 *
 * To run a query within a React component, call `useGetPaymentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPaymentByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPaymentByIdQuery, GetPaymentByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaymentByIdQuery, GetPaymentByIdQueryVariables>(GetPaymentByIdDocument, options);
      }
export function useGetPaymentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentByIdQuery, GetPaymentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaymentByIdQuery, GetPaymentByIdQueryVariables>(GetPaymentByIdDocument, options);
        }
export function useGetPaymentByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPaymentByIdQuery, GetPaymentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPaymentByIdQuery, GetPaymentByIdQueryVariables>(GetPaymentByIdDocument, options);
        }
export type GetPaymentByIdQueryHookResult = ReturnType<typeof useGetPaymentByIdQuery>;
export type GetPaymentByIdLazyQueryHookResult = ReturnType<typeof useGetPaymentByIdLazyQuery>;
export type GetPaymentByIdSuspenseQueryHookResult = ReturnType<typeof useGetPaymentByIdSuspenseQuery>;
export type GetPaymentByIdQueryResult = Apollo.QueryResult<GetPaymentByIdQuery, GetPaymentByIdQueryVariables>;
export const GetAllPaymentsDocument = gql`
    query GetAllPayments {
  payments {
    id
    amount
    status
    paymentMethod
  }
}
    `;

/**
 * __useGetAllPaymentsQuery__
 *
 * To run a query within a React component, call `useGetAllPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPaymentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPaymentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>(GetAllPaymentsDocument, options);
      }
export function useGetAllPaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>(GetAllPaymentsDocument, options);
        }
export function useGetAllPaymentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>(GetAllPaymentsDocument, options);
        }
export type GetAllPaymentsQueryHookResult = ReturnType<typeof useGetAllPaymentsQuery>;
export type GetAllPaymentsLazyQueryHookResult = ReturnType<typeof useGetAllPaymentsLazyQuery>;
export type GetAllPaymentsSuspenseQueryHookResult = ReturnType<typeof useGetAllPaymentsSuspenseQuery>;
export type GetAllPaymentsQueryResult = Apollo.QueryResult<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>;
export const CreatePaymentDocument = gql`
    mutation CreatePayment($data: PaymentCreateInput!) {
  createPayment(data: $data) {
    id
    amount
    status
    paymentMethod
  }
}
    `;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, options);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const UpdatePaymentDocument = gql`
    mutation UpdatePayment($data: PaymentUpdateInput!, $where: PaymentWhereUniqueInput!) {
  updatePayment(data: $data, where: $where) {
    id
    amount
    status
    paymentMethod
  }
}
    `;
export type UpdatePaymentMutationFn = Apollo.MutationFunction<UpdatePaymentMutation, UpdatePaymentMutationVariables>;

/**
 * __useUpdatePaymentMutation__
 *
 * To run a mutation, you first call `useUpdatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePaymentMutation, { data, loading, error }] = useUpdatePaymentMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePaymentMutation, UpdatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePaymentMutation, UpdatePaymentMutationVariables>(UpdatePaymentDocument, options);
      }
export type UpdatePaymentMutationHookResult = ReturnType<typeof useUpdatePaymentMutation>;
export type UpdatePaymentMutationResult = Apollo.MutationResult<UpdatePaymentMutation>;
export type UpdatePaymentMutationOptions = Apollo.BaseMutationOptions<UpdatePaymentMutation, UpdatePaymentMutationVariables>;
export const DeletePaymentDocument = gql`
    mutation DeletePayment($id: String!) {
  deletePayment(id: $id) {
    id
  }
}
    `;
export type DeletePaymentMutationFn = Apollo.MutationFunction<DeletePaymentMutation, DeletePaymentMutationVariables>;

/**
 * __useDeletePaymentMutation__
 *
 * To run a mutation, you first call `useDeletePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePaymentMutation, { data, loading, error }] = useDeletePaymentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePaymentMutation(baseOptions?: Apollo.MutationHookOptions<DeletePaymentMutation, DeletePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePaymentMutation, DeletePaymentMutationVariables>(DeletePaymentDocument, options);
      }
export type DeletePaymentMutationHookResult = ReturnType<typeof useDeletePaymentMutation>;
export type DeletePaymentMutationResult = Apollo.MutationResult<DeletePaymentMutation>;
export type DeletePaymentMutationOptions = Apollo.BaseMutationOptions<DeletePaymentMutation, DeletePaymentMutationVariables>;
export const GetProductByIdDocument = gql`
    query GetProductById($id: String!) {
  product(id: $id) {
    id
    name
    price
    description
  }
}
    `;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
      }
export function useGetProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
        }
export function useGetProductByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
        }
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdSuspenseQueryHookResult = ReturnType<typeof useGetProductByIdSuspenseQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts($skip: Int, $take: Int) {
  products(skip: $skip, take: $take) {
    id
    name
    price
    description
  }
}
    `;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export function useGetAllProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsSuspenseQueryHookResult = ReturnType<typeof useGetAllProductsSuspenseQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($data: ProductCreateInput!) {
  createProduct(data: $data) {
    id
    name
    price
    description
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($data: ProductUpdateInput!, $where: ProductWhereUniqueInput!) {
  updateProduct(data: $data, where: $where) {
    id
    name
    price
    description
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($where: ProductWhereUniqueInput!) {
  deleteProduct(where: $where) {
    id
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const GetAllReviewsDocument = gql`
    query GetAllReviews($skip: Int!, $take: Int!) {
  reviews(skip: $skip, take: $take) {
    id
    content
    rating
    productId
    userId
  }
}
    `;

/**
 * __useGetAllReviewsQuery__
 *
 * To run a query within a React component, call `useGetAllReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReviewsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetAllReviewsQuery(baseOptions: Apollo.QueryHookOptions<GetAllReviewsQuery, GetAllReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllReviewsQuery, GetAllReviewsQueryVariables>(GetAllReviewsDocument, options);
      }
export function useGetAllReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllReviewsQuery, GetAllReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllReviewsQuery, GetAllReviewsQueryVariables>(GetAllReviewsDocument, options);
        }
export function useGetAllReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllReviewsQuery, GetAllReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllReviewsQuery, GetAllReviewsQueryVariables>(GetAllReviewsDocument, options);
        }
export type GetAllReviewsQueryHookResult = ReturnType<typeof useGetAllReviewsQuery>;
export type GetAllReviewsLazyQueryHookResult = ReturnType<typeof useGetAllReviewsLazyQuery>;
export type GetAllReviewsSuspenseQueryHookResult = ReturnType<typeof useGetAllReviewsSuspenseQuery>;
export type GetAllReviewsQueryResult = Apollo.QueryResult<GetAllReviewsQuery, GetAllReviewsQueryVariables>;
export const GetReviewByIdDocument = gql`
    query GetReviewById($id: String!) {
  review(id: $id) {
    id
    content
    rating
    productId
    userId
  }
}
    `;

/**
 * __useGetReviewByIdQuery__
 *
 * To run a query within a React component, call `useGetReviewByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetReviewByIdQuery(baseOptions: Apollo.QueryHookOptions<GetReviewByIdQuery, GetReviewByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReviewByIdQuery, GetReviewByIdQueryVariables>(GetReviewByIdDocument, options);
      }
export function useGetReviewByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReviewByIdQuery, GetReviewByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReviewByIdQuery, GetReviewByIdQueryVariables>(GetReviewByIdDocument, options);
        }
export function useGetReviewByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetReviewByIdQuery, GetReviewByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetReviewByIdQuery, GetReviewByIdQueryVariables>(GetReviewByIdDocument, options);
        }
export type GetReviewByIdQueryHookResult = ReturnType<typeof useGetReviewByIdQuery>;
export type GetReviewByIdLazyQueryHookResult = ReturnType<typeof useGetReviewByIdLazyQuery>;
export type GetReviewByIdSuspenseQueryHookResult = ReturnType<typeof useGetReviewByIdSuspenseQuery>;
export type GetReviewByIdQueryResult = Apollo.QueryResult<GetReviewByIdQuery, GetReviewByIdQueryVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($data: ReviewCreateInput!) {
  createReview(data: $data) {
    id
    content
    rating
    productId
    userId
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($data: ReviewUpdateInput!, $where: ReviewWhereUniqueInput!) {
  updateReview(data: $data, where: $where) {
    id
    content
    rating
    productId
    userId
  }
}
    `;
export type UpdateReviewMutationFn = Apollo.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, options);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = Apollo.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = Apollo.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const DeleteReviewDocument = gql`
    mutation DeleteReview($id: String!) {
  deleteReview(id: $id) {
    id
  }
}
    `;
export type DeleteReviewMutationFn = Apollo.MutationFunction<DeleteReviewMutation, DeleteReviewMutationVariables>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReviewMutation, DeleteReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReviewMutation, DeleteReviewMutationVariables>(DeleteReviewDocument, options);
      }
export type DeleteReviewMutationHookResult = ReturnType<typeof useDeleteReviewMutation>;
export type DeleteReviewMutationResult = Apollo.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<DeleteReviewMutation, DeleteReviewMutationVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers($skip: Int!, $take: Int!) {
  users(skip: $skip, take: $take) {
    id
    firstName
    lastName
    auth {
      email
    }
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: String!) {
  user(id: $id) {
    id
    firstName
    lastName
    auth {
      email
    }
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
    firstName
    lastName
    auth {
      email
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
    firstName
    lastName
    auth {
      email
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: String!) {
  deleteUser(id: $id) {
    id
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;