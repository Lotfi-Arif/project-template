import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export enum AccountStatus {
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type AdminCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<AdminCreateWithoutUserInput>;
};

export type AdminCreateOrConnectWithoutUserInput = {
  create: AdminCreateWithoutUserInput;
  where: AdminWhereUniqueInput;
};

export type AdminCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type AdminRelationFilter = {
  is?: InputMaybe<AdminWhereInput>;
  isNot?: InputMaybe<AdminWhereInput>;
};

export type AdminUpdateOneWithoutUserInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<AdminCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AdminUpdateWithoutUserInput>;
  upsert?: InputMaybe<AdminUpsertWithoutUserInput>;
};

export type AdminUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdminUpsertWithoutUserInput = {
  create: AdminCreateWithoutUserInput;
  update: AdminUpdateWithoutUserInput;
};

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type AdminWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type Auth = {
  __typename?: 'Auth';
  user: User;
};

export type Chat = {
  __typename?: 'Chat';
  chatStatus: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type ChatCreateInput = {
  chatStatus: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChatOrderByWithRelationInput = {
  chatStatus?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ChatScalarFieldEnum {
  ChatStatus = 'chatStatus',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type ChatUpdateInput = {
  chatStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  chatStatus?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ChatWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Counselor = {
  __typename?: 'Counselor';
  Schedule?: Maybe<Array<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  department: Scalars['String'];
  expertise: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type CounselorCreateInput = {
  Schedule?: InputMaybe<CounselorCreateScheduleInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  department: Scalars['String'];
  expertise: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselorInput>;
};

export type CounselorCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<CounselorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CounselorCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CounselorCreateWithoutUserInput>;
};

export type CounselorCreateOrConnectWithoutUserInput = {
  create: CounselorCreateWithoutUserInput;
  where: CounselorWhereUniqueInput;
};

export type CounselorCreateScheduleInput = {
  set: Array<Scalars['String']>;
};

export type CounselorCreateWithoutUserInput = {
  Schedule?: InputMaybe<CounselorCreateScheduleInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  department: Scalars['String'];
  expertise: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CounselorOrderByWithRelationInput = {
  Schedule?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  department?: InputMaybe<SortOrder>;
  expertise?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type CounselorRelationFilter = {
  is?: InputMaybe<CounselorWhereInput>;
  isNot?: InputMaybe<CounselorWhereInput>;
};

export enum CounselorScalarFieldEnum {
  Schedule = 'Schedule',
  CreatedAt = 'createdAt',
  Department = 'department',
  Expertise = 'expertise',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type CounselorSession = {
  __typename?: 'CounselorSession';
  _count: CounselorSessionCount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  participants?: Maybe<Array<User>>;
  updatedAt: Scalars['DateTime'];
};

export type CounselorSessionCount = {
  __typename?: 'CounselorSessionCount';
  participants: Scalars['Int'];
};

export type CounselorSessionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<UserCreateNestedManyWithoutCounselingSessionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CounselorSessionCreateNestedManyWithoutParticipantsInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutParticipantsInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutParticipantsInput>>;
};

export type CounselorSessionCreateOrConnectWithoutParticipantsInput = {
  create: CounselorSessionCreateWithoutParticipantsInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionCreateWithoutParticipantsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CounselorSessionListRelationFilter = {
  every?: InputMaybe<CounselorSessionWhereInput>;
  none?: InputMaybe<CounselorSessionWhereInput>;
  some?: InputMaybe<CounselorSessionWhereInput>;
};

export type CounselorSessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CounselorSessionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  participants?: InputMaybe<UserOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CounselorSessionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type CounselorSessionScalarWhereInput = {
  AND?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  OR?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CounselorSessionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  participants?: InputMaybe<UserUpdateManyWithoutCounselingSessionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateManyWithWhereWithoutParticipantsInput = {
  data: CounselorSessionUpdateManyMutationInput;
  where: CounselorSessionScalarWhereInput;
};

export type CounselorSessionUpdateManyWithoutParticipantsInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutParticipantsInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutParticipantsInput>>;
  delete?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  set?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  update?: InputMaybe<Array<CounselorSessionUpdateWithWhereUniqueWithoutParticipantsInput>>;
  updateMany?: InputMaybe<Array<CounselorSessionUpdateManyWithWhereWithoutParticipantsInput>>;
  upsert?: InputMaybe<Array<CounselorSessionUpsertWithWhereUniqueWithoutParticipantsInput>>;
};

export type CounselorSessionUpdateWithWhereUniqueWithoutParticipantsInput = {
  data: CounselorSessionUpdateWithoutParticipantsInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionUpdateWithoutParticipantsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorSessionUpsertWithWhereUniqueWithoutParticipantsInput = {
  create: CounselorSessionCreateWithoutParticipantsInput;
  update: CounselorSessionUpdateWithoutParticipantsInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionWhereInput = {
  AND?: InputMaybe<Array<CounselorSessionWhereInput>>;
  NOT?: InputMaybe<Array<CounselorSessionWhereInput>>;
  OR?: InputMaybe<Array<CounselorSessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  participants?: InputMaybe<UserListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CounselorSessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CounselorUpdateInput = {
  Schedule?: InputMaybe<CounselorUpdateScheduleInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<StringFieldUpdateOperationsInput>;
  expertise?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCounselorInput>;
};

export type CounselorUpdateOneWithoutUserInput = {
  connect?: InputMaybe<CounselorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CounselorCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CounselorCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CounselorUpdateWithoutUserInput>;
  upsert?: InputMaybe<CounselorUpsertWithoutUserInput>;
};

export type CounselorUpdateScheduleInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type CounselorUpdateWithoutUserInput = {
  Schedule?: InputMaybe<CounselorUpdateScheduleInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<StringFieldUpdateOperationsInput>;
  expertise?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorUpsertWithoutUserInput = {
  create: CounselorCreateWithoutUserInput;
  update: CounselorUpdateWithoutUserInput;
};

export type CounselorWhereInput = {
  AND?: InputMaybe<Array<CounselorWhereInput>>;
  NOT?: InputMaybe<Array<CounselorWhereInput>>;
  OR?: InputMaybe<Array<CounselorWhereInput>>;
  Schedule?: InputMaybe<StringNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  department?: InputMaybe<StringFilter>;
  expertise?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type CounselorWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumAccountStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<AccountStatus>;
};

export type EnumAccountStatusFilter = {
  equals?: InputMaybe<AccountStatus>;
  in?: InputMaybe<Array<AccountStatus>>;
  not?: InputMaybe<NestedEnumAccountStatusFilter>;
  notIn?: InputMaybe<Array<AccountStatus>>;
};

export type EnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type Event = {
  __typename?: 'Event';
  eventDetails: Scalars['String'];
  eventImageURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type EventCreateInput = {
  eventDetails: Scalars['String'];
  eventImageURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type EventOrderByWithRelationInput = {
  eventDetails?: InputMaybe<SortOrder>;
  eventImageURL?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export enum EventScalarFieldEnum {
  EventDetails = 'eventDetails',
  EventImageUrl = 'eventImageURL',
  Id = 'id',
  Title = 'title'
}

export type EventUpdateInput = {
  eventDetails?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventImageURL?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  eventDetails?: InputMaybe<StringFilter>;
  eventImageURL?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Faq = {
  __typename?: 'FAQ';
  answer: Scalars['String'];
  id: Scalars['ID'];
  question: Scalars['String'];
};

export type FaqCreateInput = {
  answer: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  question: Scalars['String'];
};

export type FaqOrderByWithRelationInput = {
  answer?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
};

export enum FaqScalarFieldEnum {
  Answer = 'answer',
  Id = 'id',
  Question = 'question'
}

export type FaqUpdateInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FaqWhereInput = {
  AND?: InputMaybe<Array<FaqWhereInput>>;
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  OR?: InputMaybe<Array<FaqWhereInput>>;
  answer?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  question?: InputMaybe<StringFilter>;
};

export type FaqWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum Gender {
  F = 'F',
  M = 'M',
  Others = 'OTHERS'
}

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: Role;
};

export type Message = {
  __typename?: 'Message';
  Message: Scalars['String'];
  id: Scalars['ID'];
  reciever: Scalars['String'];
  sender: Scalars['String'];
};

export type MessageCreateInput = {
  Message: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  reciever: Scalars['String'];
  sender: Scalars['String'];
};

export type MessageOrderByWithRelationInput = {
  Message?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  reciever?: InputMaybe<SortOrder>;
  sender?: InputMaybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  Message = 'Message',
  Id = 'id',
  Reciever = 'reciever',
  Sender = 'sender'
}

export type MessageUpdateInput = {
  Message?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  reciever?: InputMaybe<StringFieldUpdateOperationsInput>;
  sender?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  Message?: InputMaybe<StringFilter>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  id?: InputMaybe<StringFilter>;
  reciever?: InputMaybe<StringFilter>;
  sender?: InputMaybe<StringFilter>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  approveUser: User;
  createChat: Chat;
  createCounselor: Counselor;
  createCounselorSession: CounselorSession;
  createEvent: Event;
  createFaq: Faq;
  createMessage: Message;
  createPost: Post;
  createSchedule: Schedule;
  createUser: User;
  deleteChat: Chat;
  deleteCounselor: Counselor;
  deleteCounselorSession: CounselorSession;
  deleteEvent: Event;
  deleteFaq: Faq;
  deleteMessage: Message;
  deletePost: Post;
  deleteSchedule: Schedule;
  deleteUser: User;
  findOneChat: Chat;
  findOneCounselor: Counselor;
  findOneCounselorSession: CounselorSession;
  findOneEvent: Event;
  findOneFaq: Faq;
  findOneMessage: Message;
  findOnePost: Post;
  findOneSchedule: Schedule;
  findOneUser: User;
  loginUser: Auth;
  rejectUser: User;
  updateChat: Chat;
  updateCounselor: Counselor;
  updateCounselorSession: CounselorSession;
  updateEvent: Event;
  updateFaq: Faq;
  updateMessage: Message;
  updatePost: Post;
  updateSchedule: Schedule;
  updateUser: User;
};


export type MutationApproveUserArgs = {
  id: Scalars['String'];
};


export type MutationCreateChatArgs = {
  data: ChatCreateInput;
};


export type MutationCreateCounselorArgs = {
  data: CounselorCreateInput;
};


export type MutationCreateCounselorSessionArgs = {
  data: CounselorSessionCreateInput;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateScheduleArgs = {
  data: ScheduleCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteChatArgs = {
  where: ChatWhereUniqueInput;
};


export type MutationDeleteCounselorArgs = {
  where: CounselorWhereUniqueInput;
};


export type MutationDeleteCounselorSessionArgs = {
  where: CounselorSessionWhereUniqueInput;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationDeleteMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteScheduleArgs = {
  where: ScheduleWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationFindOneChatArgs = {
  where: ChatWhereUniqueInput;
};


export type MutationFindOneCounselorArgs = {
  where: CounselorWhereUniqueInput;
};


export type MutationFindOneCounselorSessionArgs = {
  where: CounselorSessionWhereUniqueInput;
};


export type MutationFindOneEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationFindOneFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationFindOneMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationFindOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationFindOneScheduleArgs = {
  where: ScheduleWhereUniqueInput;
};


export type MutationFindOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginUserArgs = {
  data: LoginInput;
};


export type MutationRejectUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateChatArgs = {
  data: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};


export type MutationUpdateCounselorArgs = {
  data: CounselorUpdateInput;
  where: CounselorWhereUniqueInput;
};


export type MutationUpdateCounselorSessionArgs = {
  data: CounselorSessionUpdateInput;
  where: CounselorSessionWhereUniqueInput;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateFaqArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpdateMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateScheduleArgs = {
  data: ScheduleUpdateInput;
  where: ScheduleWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumAccountStatusFilter = {
  equals?: InputMaybe<AccountStatus>;
  in?: InputMaybe<Array<AccountStatus>>;
  not?: InputMaybe<NestedEnumAccountStatusFilter>;
  notIn?: InputMaybe<Array<AccountStatus>>;
};

export type NestedEnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableEnumGenderFieldUpdateOperationsInput = {
  set?: InputMaybe<Gender>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type PostCreateInput = {
  author: UserCreateNestedOneWithoutPostsInput;
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostCreateManyAuthorInput = {
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  Body = 'body',
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutPostsInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findAllChats: Chat;
  findAllCounselorSessions: CounselorSession;
  findAllCounselors: Counselor;
  findAllEvents: Array<Event>;
  findAllFaqs: Faq;
  findAllMessages: Message;
  findAllPosts: Post;
  findAllSchedules: Schedule;
  findAllUsers: Array<User>;
};


export type QueryFindAllChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryFindAllCounselorSessionsArgs = {
  cursor?: InputMaybe<CounselorSessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CounselorSessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CounselorSessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CounselorSessionWhereInput>;
};


export type QueryFindAllCounselorsArgs = {
  cursor?: InputMaybe<CounselorWhereUniqueInput>;
  distinct?: InputMaybe<Array<CounselorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CounselorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CounselorWhereInput>;
};


export type QueryFindAllEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFindAllFaqsArgs = {
  cursor?: InputMaybe<FaqWhereUniqueInput>;
  distinct?: InputMaybe<Array<FaqScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FaqOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqWhereInput>;
};


export type QueryFindAllMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindAllPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindAllSchedulesArgs = {
  cursor?: InputMaybe<ScheduleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ScheduleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ScheduleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduleWhereInput>;
};


export type QueryFindAllUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  Counselor = 'COUNSELOR',
  DepartmentManager = 'DEPARTMENT_MANAGER',
  Student = 'STUDENT',
  User = 'USER'
}

export type Schedule = {
  __typename?: 'Schedule';
  id: Scalars['ID'];
  scheduleDate: Scalars['DateTime'];
};

export type ScheduleCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  scheduleDate: Scalars['DateTime'];
};

export type ScheduleOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  scheduleDate?: InputMaybe<SortOrder>;
};

export enum ScheduleScalarFieldEnum {
  Id = 'id',
  ScheduleDate = 'scheduleDate'
}

export type ScheduleUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduleDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScheduleWhereInput = {
  AND?: InputMaybe<Array<ScheduleWhereInput>>;
  NOT?: InputMaybe<Array<ScheduleWhereInput>>;
  OR?: InputMaybe<Array<ScheduleWhereInput>>;
  id?: InputMaybe<StringFilter>;
  scheduleDate?: InputMaybe<DateTimeFilter>;
};

export type ScheduleWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Staff = {
  __typename?: 'Staff';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  faculty: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  staffId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type StaffCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<StaffCreateWithoutUserInput>;
};

export type StaffCreateOrConnectWithoutUserInput = {
  create: StaffCreateWithoutUserInput;
  where: StaffWhereUniqueInput;
};

export type StaffCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  faculty: Scalars['String'];
  password: Scalars['String'];
  staffId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StaffOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  faculty?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  staffId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type StaffRelationFilter = {
  is?: InputMaybe<StaffWhereInput>;
  isNot?: InputMaybe<StaffWhereInput>;
};

export type StaffUpdateOneWithoutUserInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<StaffCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<StaffUpdateWithoutUserInput>;
  upsert?: InputMaybe<StaffUpsertWithoutUserInput>;
};

export type StaffUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  faculty?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  staffId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StaffUpsertWithoutUserInput = {
  create: StaffCreateWithoutUserInput;
  update: StaffUpdateWithoutUserInput;
};

export type StaffWhereInput = {
  AND?: InputMaybe<Array<StaffWhereInput>>;
  NOT?: InputMaybe<Array<StaffWhereInput>>;
  OR?: InputMaybe<Array<StaffWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  faculty?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  staffId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type StaffWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  staffId?: InputMaybe<Scalars['String']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Student = {
  __typename?: 'Student';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  faculty: Scalars['String'];
  id: Scalars['ID'];
  matrix: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type StudentCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<StudentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<StudentCreateWithoutUserInput>;
};

export type StudentCreateOrConnectWithoutUserInput = {
  create: StudentCreateWithoutUserInput;
  where: StudentWhereUniqueInput;
};

export type StudentCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  faculty: Scalars['String'];
  matrix: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StudentOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  faculty?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matrix?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type StudentRelationFilter = {
  is?: InputMaybe<StudentWhereInput>;
  isNot?: InputMaybe<StudentWhereInput>;
};

export type StudentUpdateOneWithoutUserInput = {
  connect?: InputMaybe<StudentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<StudentCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<StudentUpdateWithoutUserInput>;
  upsert?: InputMaybe<StudentUpsertWithoutUserInput>;
};

export type StudentUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  faculty?: InputMaybe<StringFieldUpdateOperationsInput>;
  matrix?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUpsertWithoutUserInput = {
  create: StudentCreateWithoutUserInput;
  update: StudentUpdateWithoutUserInput;
};

export type StudentWhereInput = {
  AND?: InputMaybe<Array<StudentWhereInput>>;
  NOT?: InputMaybe<Array<StudentWhereInput>>;
  OR?: InputMaybe<Array<StudentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  faculty?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  matrix?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type StudentWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  matrix?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  accountStatus: AccountStatus;
  admin?: Maybe<Admin>;
  counselingSession?: Maybe<Array<CounselorSession>>;
  counselor?: Maybe<Counselor>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  role: Role;
  staff?: Maybe<Staff>;
  student?: Maybe<Student>;
  updatedAt: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  counselingSession: Scalars['Int'];
  posts: Scalars['Int'];
};

export type UserCreateInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutParticipantsInput>;
  counselor?: InputMaybe<CounselorCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  role: Role;
  staff?: InputMaybe<StaffCreateNestedOneWithoutUserInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedManyWithoutCounselingSessionInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCounselingSessionInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCounselingSessionInput>>;
};

export type UserCreateNestedOneWithoutCounselorInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCounselorInput>;
  create?: InputMaybe<UserCreateWithoutCounselorInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
};

export type UserCreateOrConnectWithoutCounselingSessionInput = {
  create: UserCreateWithoutCounselingSessionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCounselorInput = {
  create: UserCreateWithoutCounselorInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCounselingSessionInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselor?: InputMaybe<CounselorCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  role: Role;
  staff?: InputMaybe<StaffCreateNestedOneWithoutUserInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutCounselorInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutParticipantsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  role: Role;
  staff?: InputMaybe<StaffCreateNestedOneWithoutUserInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutPostsInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutParticipantsInput>;
  counselor?: InputMaybe<CounselorCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  role: Role;
  staff?: InputMaybe<StaffCreateNestedOneWithoutUserInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  accountStatus?: InputMaybe<SortOrder>;
  admin?: InputMaybe<AdminOrderByWithRelationInput>;
  counselingSession?: InputMaybe<CounselorSessionOrderByRelationAggregateInput>;
  counselor?: InputMaybe<CounselorOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mobile?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  staff?: InputMaybe<StaffOrderByWithRelationInput>;
  student?: InputMaybe<StudentOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  AccountStatus = 'accountStatus',
  CreatedAt = 'createdAt',
  Email = 'email',
  Gender = 'gender',
  Id = 'id',
  Mobile = 'mobile',
  Name = 'name',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  accountStatus?: InputMaybe<EnumAccountStatusFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<StringFilter>;
  mobile?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserUpdateInput = {
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateManyWithoutParticipantsInput>;
  counselor?: InputMaybe<CounselorUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutUserInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutCounselingSessionInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutCounselingSessionInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCounselingSessionInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCounselingSessionInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutCounselingSessionInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutCounselingSessionInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutCounselingSessionInput>>;
};

export type UserUpdateOneRequiredWithoutCounselorInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCounselorInput>;
  create?: InputMaybe<UserCreateWithoutCounselorInput>;
  update?: InputMaybe<UserUpdateWithoutCounselorInput>;
  upsert?: InputMaybe<UserUpsertWithoutCounselorInput>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
  update?: InputMaybe<UserUpdateWithoutPostsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithWhereUniqueWithoutCounselingSessionInput = {
  data: UserUpdateWithoutCounselingSessionInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutCounselingSessionInput = {
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselor?: InputMaybe<CounselorUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutUserInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCounselorInput = {
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateManyWithoutParticipantsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutUserInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPostsInput = {
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateManyWithoutParticipantsInput>;
  counselor?: InputMaybe<CounselorUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutUserInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutCounselingSessionInput = {
  create: UserCreateWithoutCounselingSessionInput;
  update: UserUpdateWithoutCounselingSessionInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutCounselorInput = {
  create: UserCreateWithoutCounselorInput;
  update: UserUpdateWithoutCounselorInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accountStatus?: InputMaybe<EnumAccountStatusFilter>;
  admin?: InputMaybe<AdminRelationFilter>;
  counselingSession?: InputMaybe<CounselorSessionListRelationFilter>;
  counselor?: InputMaybe<CounselorRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<StringFilter>;
  mobile?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringNullableFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  staff?: InputMaybe<StaffRelationFilter>;
  student?: InputMaybe<StudentRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'Auth', user: { __typename?: 'User', id: string, name: string, email: string, password?: string | null | undefined, mobile?: string | null | undefined, accountStatus: AccountStatus, role: Role } } };

export type CreateEventMutationVariables = Exact<{
  data: EventCreateInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, title: string, eventImageURL?: string | null | undefined, eventDetails: string } };

export type UpdateEventMutationVariables = Exact<{
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', id: string, title: string, eventImageURL?: string | null | undefined, eventDetails: string } };

export type DeleteEventMutationVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent: { __typename?: 'Event', id: string, eventImageURL?: string | null | undefined } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string, email: string, password?: string | null | undefined, mobile?: string | null | undefined, accountStatus: AccountStatus, role: Role } };

export type RejectUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RejectUserMutation = { __typename?: 'Mutation', rejectUser: { __typename?: 'User', id: string } };

export type ApproveUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type ApproveUserMutation = { __typename?: 'Mutation', approveUser: { __typename?: 'User', id: string } };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { __typename?: 'Query', findAllEvents: Array<{ __typename?: 'Event', id: string, title: string, eventImageURL?: string | null | undefined, eventDetails: string }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', findAllUsers: Array<{ __typename?: 'User', id: string, name: string, email: string, mobile?: string | null | undefined, accountStatus: AccountStatus, role: Role }> };


export const LoginDocument = gql`
    mutation login($data: LoginInput!) {
  loginUser(data: $data) {
    user {
      id
      name
      email
      password
      mobile
      accountStatus
      role
    }
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
 *      data: // value for 'data'
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
export const CreateEventDocument = gql`
    mutation createEvent($data: EventCreateInput!) {
  createEvent(data: $data) {
    id
    title
    eventImageURL
    eventDetails
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation updateEvent($data: EventUpdateInput!, $where: EventWhereUniqueInput!) {
  updateEvent(data: $data, where: $where) {
    id
    title
    eventImageURL
    eventDetails
  }
}
    `;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation deleteEvent($where: EventWhereUniqueInput!) {
  deleteEvent(where: $where) {
    id
    eventImageURL
  }
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
    name
    email
    password
    mobile
    accountStatus
    role
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
export const RejectUserDocument = gql`
    mutation rejectUser($id: String!) {
  rejectUser(id: $id) {
    id
  }
}
    `;
export type RejectUserMutationFn = Apollo.MutationFunction<RejectUserMutation, RejectUserMutationVariables>;

/**
 * __useRejectUserMutation__
 *
 * To run a mutation, you first call `useRejectUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectUserMutation, { data, loading, error }] = useRejectUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRejectUserMutation(baseOptions?: Apollo.MutationHookOptions<RejectUserMutation, RejectUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectUserMutation, RejectUserMutationVariables>(RejectUserDocument, options);
      }
export type RejectUserMutationHookResult = ReturnType<typeof useRejectUserMutation>;
export type RejectUserMutationResult = Apollo.MutationResult<RejectUserMutation>;
export type RejectUserMutationOptions = Apollo.BaseMutationOptions<RejectUserMutation, RejectUserMutationVariables>;
export const ApproveUserDocument = gql`
    mutation approveUser($id: String!) {
  approveUser(id: $id) {
    id
  }
}
    `;
export type ApproveUserMutationFn = Apollo.MutationFunction<ApproveUserMutation, ApproveUserMutationVariables>;

/**
 * __useApproveUserMutation__
 *
 * To run a mutation, you first call `useApproveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveUserMutation, { data, loading, error }] = useApproveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApproveUserMutation(baseOptions?: Apollo.MutationHookOptions<ApproveUserMutation, ApproveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ApproveUserMutation, ApproveUserMutationVariables>(ApproveUserDocument, options);
      }
export type ApproveUserMutationHookResult = ReturnType<typeof useApproveUserMutation>;
export type ApproveUserMutationResult = Apollo.MutationResult<ApproveUserMutation>;
export type ApproveUserMutationOptions = Apollo.BaseMutationOptions<ApproveUserMutation, ApproveUserMutationVariables>;
export const EventsDocument = gql`
    query events {
  findAllEvents {
    id
    title
    eventImageURL
    eventDetails
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const UsersDocument = gql`
    query users {
  findAllUsers {
    id
    name
    email
    mobile
    accountStatus
    role
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
export const namedOperations = {
  Query: {
    events: 'events',
    users: 'users'
  },
  Mutation: {
    login: 'login',
    createEvent: 'createEvent',
    updateEvent: 'updateEvent',
    deleteEvent: 'deleteEvent',
    createUser: 'createUser',
    rejectUser: 'rejectUser',
    approveUser: 'approveUser'
  }
}