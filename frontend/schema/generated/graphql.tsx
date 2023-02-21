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
  iCard: Scalars['String'];
  id: Scalars['ID'];
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
  iCard: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  iCard?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
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
  iCard?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  iCard?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type AdminWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
  user: User;
};

export type Chat = {
  __typename?: 'Chat';
  Message?: Maybe<Array<Message>>;
  _count: ChatCount;
  chatName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<User>>;
};

export type ChatCount = {
  __typename?: 'ChatCount';
  Message: Scalars['Int'];
  users: Scalars['Int'];
};

export type ChatCreateInput = {
  Message?: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
  chatName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutChatInput>;
};

export type ChatCreateNestedOneWithoutMessageInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<ChatCreateWithoutMessageInput>;
};

export type ChatCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ChatCreateWithoutUsersInput>;
};

export type ChatCreateOrConnectWithoutMessageInput = {
  create: ChatCreateWithoutMessageInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutUsersInput = {
  create: ChatCreateWithoutUsersInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateWithoutMessageInput = {
  chatName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutChatInput>;
};

export type ChatCreateWithoutUsersInput = {
  Message?: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
  chatName: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ChatOrderByWithRelationInput = {
  Message?: InputMaybe<MessageOrderByRelationAggregateInput>;
  chatName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type ChatRelationFilter = {
  is?: InputMaybe<ChatWhereInput>;
  isNot?: InputMaybe<ChatWhereInput>;
};

export enum ChatScalarFieldEnum {
  ChatName = 'chatName',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type ChatUpdateInput = {
  Message?: InputMaybe<MessageUpdateManyWithoutChatInput>;
  chatName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutChatInput>;
};

export type ChatUpdateOneRequiredWithoutMessageInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<ChatCreateWithoutMessageInput>;
  update?: InputMaybe<ChatUpdateWithoutMessageInput>;
  upsert?: InputMaybe<ChatUpsertWithoutMessageInput>;
};

export type ChatUpdateOneWithoutUsersInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ChatCreateWithoutUsersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ChatUpdateWithoutUsersInput>;
  upsert?: InputMaybe<ChatUpsertWithoutUsersInput>;
};

export type ChatUpdateWithoutMessageInput = {
  chatName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutChatInput>;
};

export type ChatUpdateWithoutUsersInput = {
  Message?: InputMaybe<MessageUpdateManyWithoutChatInput>;
  chatName?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatUpsertWithoutMessageInput = {
  create: ChatCreateWithoutMessageInput;
  update: ChatUpdateWithoutMessageInput;
};

export type ChatUpsertWithoutUsersInput = {
  create: ChatCreateWithoutUsersInput;
  update: ChatUpdateWithoutUsersInput;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  Message?: InputMaybe<MessageListRelationFilter>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  chatName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type ChatWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Counselor = {
  __typename?: 'Counselor';
  CounselorSession?: Maybe<Array<CounselorSession>>;
  Schedule?: Maybe<Schedule>;
  _count: CounselorCount;
  createdAt: Scalars['DateTime'];
  department?: Maybe<Scalars['String']>;
  expertise?: Maybe<Scalars['String']>;
  iCard: Scalars['String'];
  id: Scalars['ID'];
  scheduleId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type CounselorCount = {
  __typename?: 'CounselorCount';
  CounselorSession: Scalars['Int'];
};

export type CounselorCreateInput = {
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutCounselorInput>;
  Schedule?: InputMaybe<ScheduleCreateNestedOneWithoutCounselorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  department?: InputMaybe<Scalars['String']>;
  expertise?: InputMaybe<Scalars['String']>;
  iCard: Scalars['String'];
  scheduleId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselorInput>;
};

export type CounselorCreateNestedOneWithoutCounselorSessionInput = {
  connect?: InputMaybe<CounselorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CounselorCreateOrConnectWithoutCounselorSessionInput>;
  create?: InputMaybe<CounselorCreateWithoutCounselorSessionInput>;
};

export type CounselorCreateNestedOneWithoutScheduleInput = {
  connect?: InputMaybe<CounselorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CounselorCreateOrConnectWithoutScheduleInput>;
  create?: InputMaybe<CounselorCreateWithoutScheduleInput>;
};

export type CounselorCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<CounselorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CounselorCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CounselorCreateWithoutUserInput>;
};

export type CounselorCreateOrConnectWithoutCounselorSessionInput = {
  create: CounselorCreateWithoutCounselorSessionInput;
  where: CounselorWhereUniqueInput;
};

export type CounselorCreateOrConnectWithoutScheduleInput = {
  create: CounselorCreateWithoutScheduleInput;
  where: CounselorWhereUniqueInput;
};

export type CounselorCreateOrConnectWithoutUserInput = {
  create: CounselorCreateWithoutUserInput;
  where: CounselorWhereUniqueInput;
};

export type CounselorCreateWithoutCounselorSessionInput = {
  Schedule?: InputMaybe<ScheduleCreateNestedOneWithoutCounselorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  department?: InputMaybe<Scalars['String']>;
  expertise?: InputMaybe<Scalars['String']>;
  iCard: Scalars['String'];
  scheduleId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselorInput>;
};

export type CounselorCreateWithoutScheduleInput = {
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutCounselorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  department?: InputMaybe<Scalars['String']>;
  expertise?: InputMaybe<Scalars['String']>;
  iCard: Scalars['String'];
  scheduleId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselorInput>;
};

export type CounselorCreateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutCounselorInput>;
  Schedule?: InputMaybe<ScheduleCreateNestedOneWithoutCounselorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  department?: InputMaybe<Scalars['String']>;
  expertise?: InputMaybe<Scalars['String']>;
  iCard: Scalars['String'];
  scheduleId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CounselorOrderByWithRelationInput = {
  CounselorSession?: InputMaybe<CounselorSessionOrderByRelationAggregateInput>;
  Schedule?: InputMaybe<ScheduleOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  department?: InputMaybe<SortOrder>;
  expertise?: InputMaybe<SortOrder>;
  iCard?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  scheduleId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type CounselorRelationFilter = {
  is?: InputMaybe<CounselorWhereInput>;
  isNot?: InputMaybe<CounselorWhereInput>;
};

export enum CounselorScalarFieldEnum {
  CreatedAt = 'createdAt',
  Department = 'department',
  Expertise = 'expertise',
  ICard = 'iCard',
  Id = 'id',
  ScheduleId = 'scheduleId',
  UpdatedAt = 'updatedAt'
}

export type CounselorSession = {
  __typename?: 'CounselorSession';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  counsellingDate?: Maybe<Scalars['DateTime']>;
  counsellingReason?: Maybe<Scalars['String']>;
  counselor: Counselor;
  counselorId: Scalars['String'];
  counselorSchedule: Schedule;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<Scalars['String']>;
  race?: Maybe<Scalars['String']>;
  scheduleId: Scalars['String'];
  staff?: Maybe<Staff>;
  staffId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  student?: Maybe<Student>;
  studentId?: Maybe<Scalars['String']>;
  timeFrom?: Maybe<Scalars['DateTime']>;
  timeTo?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type CounselorSessionCreateManyCounselorInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate?: InputMaybe<Scalars['DateTime']>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  scheduleId: Scalars['String'];
  staffId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  timeFrom?: InputMaybe<Scalars['DateTime']>;
  timeTo?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateManyCounselorInputEnvelope = {
  data: Array<CounselorSessionCreateManyCounselorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CounselorSessionCreateManyCounselorScheduleInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate?: InputMaybe<Scalars['DateTime']>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  staffId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  timeFrom?: InputMaybe<Scalars['DateTime']>;
  timeTo?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateManyCounselorScheduleInputEnvelope = {
  data: Array<CounselorSessionCreateManyCounselorScheduleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CounselorSessionCreateManyStaffInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate?: InputMaybe<Scalars['DateTime']>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  scheduleId: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  timeFrom?: InputMaybe<Scalars['DateTime']>;
  timeTo?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateManyStaffInputEnvelope = {
  data: Array<CounselorSessionCreateManyStaffInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CounselorSessionCreateManyStudentInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate?: InputMaybe<Scalars['DateTime']>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  scheduleId: Scalars['String'];
  staffId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  timeFrom?: InputMaybe<Scalars['DateTime']>;
  timeTo?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateManyStudentInputEnvelope = {
  data: Array<CounselorSessionCreateManyStudentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CounselorSessionCreateManyUserInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate?: InputMaybe<Scalars['DateTime']>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  scheduleId: Scalars['String'];
  staffId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  timeFrom?: InputMaybe<Scalars['DateTime']>;
  timeTo?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateManyUserInputEnvelope = {
  data: Array<CounselorSessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CounselorSessionCreateNestedManyWithoutCounselorInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutCounselorInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutCounselorInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyCounselorInputEnvelope>;
};

export type CounselorSessionCreateNestedManyWithoutCounselorScheduleInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutCounselorScheduleInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutCounselorScheduleInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyCounselorScheduleInputEnvelope>;
};

export type CounselorSessionCreateNestedManyWithoutStaffInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutStaffInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutStaffInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyStaffInputEnvelope>;
};

export type CounselorSessionCreateNestedManyWithoutStudentInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutStudentInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutStudentInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyStudentInputEnvelope>;
};

export type CounselorSessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyUserInputEnvelope>;
};

export type CounselorSessionCreateOrConnectWithoutCounselorInput = {
  create: CounselorSessionCreateWithoutCounselorInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionCreateOrConnectWithoutCounselorScheduleInput = {
  create: CounselorSessionCreateWithoutCounselorScheduleInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionCreateOrConnectWithoutStaffInput = {
  create: CounselorSessionCreateWithoutStaffInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionCreateOrConnectWithoutStudentInput = {
  create: CounselorSessionCreateWithoutStudentInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionCreateOrConnectWithoutUserInput = {
  create: CounselorSessionCreateWithoutUserInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionCreateWithoutCounselorInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate?: InputMaybe<Scalars['DateTime']>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselorSchedule: ScheduleCreateNestedOneWithoutCounselorSessionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<StaffCreateNestedOneWithoutCounselorSessionInput>;
  state?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<StudentCreateNestedOneWithoutCounselorSessionInput>;
  timeFrom?: InputMaybe<Scalars['DateTime']>;
  timeTo?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselingSessionInput>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateWithoutCounselorScheduleInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate?: InputMaybe<Scalars['DateTime']>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselor: CounselorCreateNestedOneWithoutCounselorSessionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<StaffCreateNestedOneWithoutCounselorSessionInput>;
  state?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<StudentCreateNestedOneWithoutCounselorSessionInput>;
  timeFrom?: InputMaybe<Scalars['DateTime']>;
  timeTo?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselingSessionInput>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateWithoutStaffInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate?: InputMaybe<Scalars['DateTime']>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselor: CounselorCreateNestedOneWithoutCounselorSessionInput;
  counselorSchedule: ScheduleCreateNestedOneWithoutCounselorSessionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<StudentCreateNestedOneWithoutCounselorSessionInput>;
  timeFrom?: InputMaybe<Scalars['DateTime']>;
  timeTo?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselingSessionInput>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateWithoutStudentInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate?: InputMaybe<Scalars['DateTime']>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselor: CounselorCreateNestedOneWithoutCounselorSessionInput;
  counselorSchedule: ScheduleCreateNestedOneWithoutCounselorSessionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<StaffCreateNestedOneWithoutCounselorSessionInput>;
  state?: InputMaybe<Scalars['String']>;
  timeFrom?: InputMaybe<Scalars['DateTime']>;
  timeTo?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselingSessionInput>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateWithoutUserInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate?: InputMaybe<Scalars['DateTime']>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselor: CounselorCreateNestedOneWithoutCounselorSessionInput;
  counselorSchedule: ScheduleCreateNestedOneWithoutCounselorSessionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<StaffCreateNestedOneWithoutCounselorSessionInput>;
  state?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<StudentCreateNestedOneWithoutCounselorSessionInput>;
  timeFrom?: InputMaybe<Scalars['DateTime']>;
  timeTo?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  zipCode?: InputMaybe<Scalars['String']>;
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
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  counsellingDate?: InputMaybe<SortOrder>;
  counsellingReason?: InputMaybe<SortOrder>;
  counselor?: InputMaybe<CounselorOrderByWithRelationInput>;
  counselorId?: InputMaybe<SortOrder>;
  counselorSchedule?: InputMaybe<ScheduleOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  maritalStatus?: InputMaybe<SortOrder>;
  race?: InputMaybe<SortOrder>;
  scheduleId?: InputMaybe<SortOrder>;
  staff?: InputMaybe<StaffOrderByWithRelationInput>;
  staffId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  student?: InputMaybe<StudentOrderByWithRelationInput>;
  studentId?: InputMaybe<SortOrder>;
  timeFrom?: InputMaybe<SortOrder>;
  timeTo?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
};

export enum CounselorSessionScalarFieldEnum {
  Address = 'address',
  City = 'city',
  CounsellingDate = 'counsellingDate',
  CounsellingReason = 'counsellingReason',
  CounselorId = 'counselorId',
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Gender = 'gender',
  Id = 'id',
  LastName = 'lastName',
  MaritalStatus = 'maritalStatus',
  Race = 'race',
  ScheduleId = 'scheduleId',
  StaffId = 'staffId',
  State = 'state',
  StudentId = 'studentId',
  TimeFrom = 'timeFrom',
  TimeTo = 'timeTo',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  ZipCode = 'zipCode'
}

export type CounselorSessionScalarWhereInput = {
  AND?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  OR?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  counsellingDate?: InputMaybe<DateTimeNullableFilter>;
  counsellingReason?: InputMaybe<StringNullableFilter>;
  counselorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  maritalStatus?: InputMaybe<StringNullableFilter>;
  race?: InputMaybe<StringNullableFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  staffId?: InputMaybe<StringNullableFilter>;
  state?: InputMaybe<StringNullableFilter>;
  studentId?: InputMaybe<StringNullableFilter>;
  timeFrom?: InputMaybe<DateTimeNullableFilter>;
  timeTo?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  zipCode?: InputMaybe<StringNullableFilter>;
};

export type CounselorSessionUpdateInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counsellingDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutCounselorSessionInput>;
  counselorSchedule?: InputMaybe<ScheduleUpdateOneRequiredWithoutCounselorSessionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maritalStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  race?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutCounselorSessionInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutCounselorSessionInput>;
  timeFrom?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  timeTo?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutCounselingSessionInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateManyMutationInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counsellingDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maritalStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  race?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  timeFrom?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  timeTo?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateManyWithWhereWithoutCounselorInput = {
  data: CounselorSessionUpdateManyMutationInput;
  where: CounselorSessionScalarWhereInput;
};

export type CounselorSessionUpdateManyWithWhereWithoutCounselorScheduleInput = {
  data: CounselorSessionUpdateManyMutationInput;
  where: CounselorSessionScalarWhereInput;
};

export type CounselorSessionUpdateManyWithWhereWithoutStaffInput = {
  data: CounselorSessionUpdateManyMutationInput;
  where: CounselorSessionScalarWhereInput;
};

export type CounselorSessionUpdateManyWithWhereWithoutStudentInput = {
  data: CounselorSessionUpdateManyMutationInput;
  where: CounselorSessionScalarWhereInput;
};

export type CounselorSessionUpdateManyWithWhereWithoutUserInput = {
  data: CounselorSessionUpdateManyMutationInput;
  where: CounselorSessionScalarWhereInput;
};

export type CounselorSessionUpdateManyWithoutCounselorInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutCounselorInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutCounselorInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyCounselorInputEnvelope>;
  delete?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  set?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  update?: InputMaybe<Array<CounselorSessionUpdateWithWhereUniqueWithoutCounselorInput>>;
  updateMany?: InputMaybe<Array<CounselorSessionUpdateManyWithWhereWithoutCounselorInput>>;
  upsert?: InputMaybe<Array<CounselorSessionUpsertWithWhereUniqueWithoutCounselorInput>>;
};

export type CounselorSessionUpdateManyWithoutCounselorScheduleInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutCounselorScheduleInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutCounselorScheduleInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyCounselorScheduleInputEnvelope>;
  delete?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  set?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  update?: InputMaybe<Array<CounselorSessionUpdateWithWhereUniqueWithoutCounselorScheduleInput>>;
  updateMany?: InputMaybe<Array<CounselorSessionUpdateManyWithWhereWithoutCounselorScheduleInput>>;
  upsert?: InputMaybe<Array<CounselorSessionUpsertWithWhereUniqueWithoutCounselorScheduleInput>>;
};

export type CounselorSessionUpdateManyWithoutStaffInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutStaffInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutStaffInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyStaffInputEnvelope>;
  delete?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  set?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  update?: InputMaybe<Array<CounselorSessionUpdateWithWhereUniqueWithoutStaffInput>>;
  updateMany?: InputMaybe<Array<CounselorSessionUpdateManyWithWhereWithoutStaffInput>>;
  upsert?: InputMaybe<Array<CounselorSessionUpsertWithWhereUniqueWithoutStaffInput>>;
};

export type CounselorSessionUpdateManyWithoutStudentInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutStudentInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutStudentInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyStudentInputEnvelope>;
  delete?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  set?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  update?: InputMaybe<Array<CounselorSessionUpdateWithWhereUniqueWithoutStudentInput>>;
  updateMany?: InputMaybe<Array<CounselorSessionUpdateManyWithWhereWithoutStudentInput>>;
  upsert?: InputMaybe<Array<CounselorSessionUpsertWithWhereUniqueWithoutStudentInput>>;
};

export type CounselorSessionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  set?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  update?: InputMaybe<Array<CounselorSessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CounselorSessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CounselorSessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CounselorSessionUpdateWithWhereUniqueWithoutCounselorInput = {
  data: CounselorSessionUpdateWithoutCounselorInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionUpdateWithWhereUniqueWithoutCounselorScheduleInput = {
  data: CounselorSessionUpdateWithoutCounselorScheduleInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionUpdateWithWhereUniqueWithoutStaffInput = {
  data: CounselorSessionUpdateWithoutStaffInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionUpdateWithWhereUniqueWithoutStudentInput = {
  data: CounselorSessionUpdateWithoutStudentInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionUpdateWithWhereUniqueWithoutUserInput = {
  data: CounselorSessionUpdateWithoutUserInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionUpdateWithoutCounselorInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counsellingDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counselorSchedule?: InputMaybe<ScheduleUpdateOneRequiredWithoutCounselorSessionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maritalStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  race?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutCounselorSessionInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutCounselorSessionInput>;
  timeFrom?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  timeTo?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutCounselingSessionInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateWithoutCounselorScheduleInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counsellingDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutCounselorSessionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maritalStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  race?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutCounselorSessionInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutCounselorSessionInput>;
  timeFrom?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  timeTo?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutCounselingSessionInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateWithoutStaffInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counsellingDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutCounselorSessionInput>;
  counselorSchedule?: InputMaybe<ScheduleUpdateOneRequiredWithoutCounselorSessionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maritalStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  race?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutCounselorSessionInput>;
  timeFrom?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  timeTo?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutCounselingSessionInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateWithoutStudentInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counsellingDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutCounselorSessionInput>;
  counselorSchedule?: InputMaybe<ScheduleUpdateOneRequiredWithoutCounselorSessionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maritalStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  race?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutCounselorSessionInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  timeFrom?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  timeTo?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutCounselingSessionInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateWithoutUserInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counsellingDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutCounselorSessionInput>;
  counselorSchedule?: InputMaybe<ScheduleUpdateOneRequiredWithoutCounselorSessionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  maritalStatus?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  race?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutCounselorSessionInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutCounselorSessionInput>;
  timeFrom?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  timeTo?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CounselorSessionUpsertWithWhereUniqueWithoutCounselorInput = {
  create: CounselorSessionCreateWithoutCounselorInput;
  update: CounselorSessionUpdateWithoutCounselorInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionUpsertWithWhereUniqueWithoutCounselorScheduleInput = {
  create: CounselorSessionCreateWithoutCounselorScheduleInput;
  update: CounselorSessionUpdateWithoutCounselorScheduleInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionUpsertWithWhereUniqueWithoutStaffInput = {
  create: CounselorSessionCreateWithoutStaffInput;
  update: CounselorSessionUpdateWithoutStaffInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionUpsertWithWhereUniqueWithoutStudentInput = {
  create: CounselorSessionCreateWithoutStudentInput;
  update: CounselorSessionUpdateWithoutStudentInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionUpsertWithWhereUniqueWithoutUserInput = {
  create: CounselorSessionCreateWithoutUserInput;
  update: CounselorSessionUpdateWithoutUserInput;
  where: CounselorSessionWhereUniqueInput;
};

export type CounselorSessionWhereInput = {
  AND?: InputMaybe<Array<CounselorSessionWhereInput>>;
  NOT?: InputMaybe<Array<CounselorSessionWhereInput>>;
  OR?: InputMaybe<Array<CounselorSessionWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  counsellingDate?: InputMaybe<DateTimeNullableFilter>;
  counsellingReason?: InputMaybe<StringNullableFilter>;
  counselor?: InputMaybe<CounselorRelationFilter>;
  counselorId?: InputMaybe<StringFilter>;
  counselorSchedule?: InputMaybe<ScheduleRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  maritalStatus?: InputMaybe<StringNullableFilter>;
  race?: InputMaybe<StringNullableFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  staff?: InputMaybe<StaffRelationFilter>;
  staffId?: InputMaybe<StringNullableFilter>;
  state?: InputMaybe<StringNullableFilter>;
  student?: InputMaybe<StudentRelationFilter>;
  studentId?: InputMaybe<StringNullableFilter>;
  timeFrom?: InputMaybe<DateTimeNullableFilter>;
  timeTo?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  zipCode?: InputMaybe<StringNullableFilter>;
};

export type CounselorSessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CounselorUpdateInput = {
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutCounselorInput>;
  Schedule?: InputMaybe<ScheduleUpdateOneWithoutCounselorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expertise?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iCard?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCounselorInput>;
};

export type CounselorUpdateOneRequiredWithoutCounselorSessionInput = {
  connect?: InputMaybe<CounselorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CounselorCreateOrConnectWithoutCounselorSessionInput>;
  create?: InputMaybe<CounselorCreateWithoutCounselorSessionInput>;
  update?: InputMaybe<CounselorUpdateWithoutCounselorSessionInput>;
  upsert?: InputMaybe<CounselorUpsertWithoutCounselorSessionInput>;
};

export type CounselorUpdateOneRequiredWithoutScheduleInput = {
  connect?: InputMaybe<CounselorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CounselorCreateOrConnectWithoutScheduleInput>;
  create?: InputMaybe<CounselorCreateWithoutScheduleInput>;
  update?: InputMaybe<CounselorUpdateWithoutScheduleInput>;
  upsert?: InputMaybe<CounselorUpsertWithoutScheduleInput>;
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

export type CounselorUpdateWithoutCounselorSessionInput = {
  Schedule?: InputMaybe<ScheduleUpdateOneWithoutCounselorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expertise?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iCard?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCounselorInput>;
};

export type CounselorUpdateWithoutScheduleInput = {
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutCounselorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expertise?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iCard?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCounselorInput>;
};

export type CounselorUpdateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutCounselorInput>;
  Schedule?: InputMaybe<ScheduleUpdateOneWithoutCounselorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expertise?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iCard?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorUpsertWithoutCounselorSessionInput = {
  create: CounselorCreateWithoutCounselorSessionInput;
  update: CounselorUpdateWithoutCounselorSessionInput;
};

export type CounselorUpsertWithoutScheduleInput = {
  create: CounselorCreateWithoutScheduleInput;
  update: CounselorUpdateWithoutScheduleInput;
};

export type CounselorUpsertWithoutUserInput = {
  create: CounselorCreateWithoutUserInput;
  update: CounselorUpdateWithoutUserInput;
};

export type CounselorWhereInput = {
  AND?: InputMaybe<Array<CounselorWhereInput>>;
  CounselorSession?: InputMaybe<CounselorSessionListRelationFilter>;
  NOT?: InputMaybe<Array<CounselorWhereInput>>;
  OR?: InputMaybe<Array<CounselorWhereInput>>;
  Schedule?: InputMaybe<ScheduleRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  department?: InputMaybe<StringNullableFilter>;
  expertise?: InputMaybe<StringNullableFilter>;
  iCard?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  scheduleId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type CounselorWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CreateCounselorSessionInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  counsellingDate: Scalars['Float'];
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselor: CounselorCreateNestedOneWithoutCounselorSessionInput;
  counselorSchedule: ScheduleCreateNestedOneWithoutCounselorSessionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<StaffCreateNestedOneWithoutCounselorSessionInput>;
  state?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<StudentCreateNestedOneWithoutCounselorSessionInput>;
  timeFrom: Scalars['Float'];
  timeTo: Scalars['Float'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselingSessionInput>;
  zipCode?: InputMaybe<Scalars['String']>;
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

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
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
  createdAt: Scalars['DateTime'];
  eventDetails: Scalars['String'];
  eventImageURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type EventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventDetails: Scalars['String'];
  eventImageURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  eventDetails?: InputMaybe<SortOrder>;
  eventImageURL?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum EventScalarFieldEnum {
  CreatedAt = 'createdAt',
  EventDetails = 'eventDetails',
  EventImageUrl = 'eventImageURL',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type EventUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventImageURL?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventDetails?: InputMaybe<StringFilter>;
  eventImageURL?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Faq = {
  __typename?: 'FAQ';
  answer: Scalars['String'];
  createdAt: Scalars['DateTime'];
  icon: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FaqCreateInput = {
  answer: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  icon: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FaqOrderByWithRelationInput = {
  answer?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum FaqScalarFieldEnum {
  Answer = 'answer',
  CreatedAt = 'createdAt',
  Icon = 'icon',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type FaqUpdateInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FaqWhereInput = {
  AND?: InputMaybe<Array<FaqWhereInput>>;
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  OR?: InputMaybe<Array<FaqWhereInput>>;
  answer?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
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
};

export type Message = {
  __typename?: 'Message';
  Message: Scalars['String'];
  chat: Chat;
  chatId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  sender: User;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type MessageCreateInput = {
  Message: Scalars['String'];
  chat: ChatCreateNestedOneWithoutMessageInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  sender: UserCreateNestedOneWithoutMessageInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateManyChatInput = {
  Message: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type MessageCreateManyChatInputEnvelope = {
  data: Array<MessageCreateManyChatInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManySenderInput = {
  Message: Scalars['String'];
  chatId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateManySenderInputEnvelope = {
  data: Array<MessageCreateManySenderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateNestedManyWithoutChatInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutChatInput>>;
  createMany?: InputMaybe<MessageCreateManyChatInputEnvelope>;
};

export type MessageCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutSenderInput>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
};

export type MessageCreateOrConnectWithoutChatInput = {
  create: MessageCreateWithoutChatInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutSenderInput = {
  create: MessageCreateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutChatInput = {
  Message: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  sender: UserCreateNestedOneWithoutMessageInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateWithoutSenderInput = {
  Message: Scalars['String'];
  chat: ChatCreateNestedOneWithoutMessageInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  Message?: InputMaybe<SortOrder>;
  chat?: InputMaybe<ChatOrderByWithRelationInput>;
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sender?: InputMaybe<UserOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  Message = 'Message',
  ChatId = 'chatId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type MessageScalarWhereInput = {
  AND?: InputMaybe<Array<MessageScalarWhereInput>>;
  Message?: InputMaybe<StringFilter>;
  NOT?: InputMaybe<Array<MessageScalarWhereInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereInput>>;
  chatId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MessageUpdateInput = {
  Message?: InputMaybe<StringFieldUpdateOperationsInput>;
  chat?: InputMaybe<ChatUpdateOneRequiredWithoutMessageInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutMessageInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateManyMutationInput = {
  Message?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateManyWithWhereWithoutChatInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithWhereWithoutSenderInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutChatInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutChatInput>>;
  createMany?: InputMaybe<MessageCreateManyChatInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutChatInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutChatInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutChatInput>>;
};

export type MessageUpdateManyWithoutSenderInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutSenderInput>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutSenderInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutSenderInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutSenderInput>>;
};

export type MessageUpdateWithWhereUniqueWithoutChatInput = {
  data: MessageUpdateWithoutChatInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
  data: MessageUpdateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithoutChatInput = {
  Message?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutMessageInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateWithoutSenderInput = {
  Message?: InputMaybe<StringFieldUpdateOperationsInput>;
  chat?: InputMaybe<ChatUpdateOneRequiredWithoutMessageInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpsertWithWhereUniqueWithoutChatInput = {
  create: MessageCreateWithoutChatInput;
  update: MessageUpdateWithoutChatInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
  create: MessageCreateWithoutSenderInput;
  update: MessageUpdateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  Message?: InputMaybe<StringFilter>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  chat?: InputMaybe<ChatRelationFilter>;
  chatId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sender?: InputMaybe<UserRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
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
  createPost: Post;
  createSchedule: Schedule;
  deleteChat: Chat;
  deleteCounselor: Counselor;
  deleteCounselorSession: CounselorSession;
  deleteEvent: Event;
  deleteFaq: Faq;
  deleteMessage: Message;
  deletePost: Post;
  deleteSchedule: Schedule;
  deleteUser: User;
  findOneCounselorSession: CounselorSession;
  findOneFaq: Faq;
  findOneMessage: Message;
  findOneUser: User;
  loginUser: Auth;
  rejectUser: User;
  sendMessage: Message;
  signup: Auth;
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
  data: CreateCounselorSessionInput;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateScheduleArgs = {
  data: ScheduleCreateInput;
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


export type MutationFindOneCounselorSessionArgs = {
  where: CounselorSessionWhereUniqueInput;
};


export type MutationFindOneFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationFindOneMessageArgs = {
  where: MessageWhereUniqueInput;
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


export type MutationSendMessageArgs = {
  data: MessageCreateInput;
};


export type MutationSignupArgs = {
  data: SignupInput;
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

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
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

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableEnumGenderFieldUpdateOperationsInput = {
  set?: InputMaybe<Gender>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostCreateInput = {
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostOrderByWithRelationInput = {
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  Body = 'body',
  CreatedAt = 'createdAt',
  Id = 'id',
  Image = 'image',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type PostUpdateInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  findAllCounselorSessions: Array<CounselorSession>;
  findAllCounselors: Array<Counselor>;
  findAllEvents: Array<Event>;
  findAllFaqs: Array<Faq>;
  findAllMessages: Message;
  findAllPosts: Array<Post>;
  findAllSchedules: Array<Schedule>;
  findAllUserChats: Chat;
  findAllUsers: Array<User>;
  findChatMessages: Array<Message>;
  findOneChat: Chat;
  findOneCounselor: Counselor;
  findOneEvent: Event;
  findOnePost: Post;
  findOneSchedule: Schedule;
  me: User;
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


export type QueryFindAllUserChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryFindAllUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindChatMessagesArgs = {
  id: Scalars['String'];
};


export type QueryFindOneChatArgs = {
  where: ChatWhereUniqueInput;
};


export type QueryFindOneCounselorArgs = {
  where: CounselorWhereUniqueInput;
};


export type QueryFindOneEventArgs = {
  id: Scalars['String'];
};


export type QueryFindOnePostArgs = {
  id: Scalars['String'];
};


export type QueryFindOneScheduleArgs = {
  where: ScheduleWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  Counselor = 'COUNSELOR',
  Staff = 'STAFF',
  Student = 'STUDENT',
  User = 'USER'
}

export type Schedule = {
  __typename?: 'Schedule';
  Counselor: Counselor;
  CounselorSession?: Maybe<Array<CounselorSession>>;
  _count: ScheduleCount;
  counselorId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ScheduleCount = {
  __typename?: 'ScheduleCount';
  CounselorSession: Scalars['Int'];
};

export type ScheduleCreateInput = {
  Counselor: CounselorCreateNestedOneWithoutScheduleInput;
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutCounselorScheduleInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type ScheduleCreateNestedOneWithoutCounselorInput = {
  connect?: InputMaybe<ScheduleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScheduleCreateOrConnectWithoutCounselorInput>;
  create?: InputMaybe<ScheduleCreateWithoutCounselorInput>;
};

export type ScheduleCreateNestedOneWithoutCounselorSessionInput = {
  connect?: InputMaybe<ScheduleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScheduleCreateOrConnectWithoutCounselorSessionInput>;
  create?: InputMaybe<ScheduleCreateWithoutCounselorSessionInput>;
};

export type ScheduleCreateOrConnectWithoutCounselorInput = {
  create: ScheduleCreateWithoutCounselorInput;
  where: ScheduleWhereUniqueInput;
};

export type ScheduleCreateOrConnectWithoutCounselorSessionInput = {
  create: ScheduleCreateWithoutCounselorSessionInput;
  where: ScheduleWhereUniqueInput;
};

export type ScheduleCreateWithoutCounselorInput = {
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutCounselorScheduleInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type ScheduleCreateWithoutCounselorSessionInput = {
  Counselor: CounselorCreateNestedOneWithoutScheduleInput;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type ScheduleOrderByWithRelationInput = {
  Counselor?: InputMaybe<CounselorOrderByWithRelationInput>;
  CounselorSession?: InputMaybe<CounselorSessionOrderByRelationAggregateInput>;
  counselorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ScheduleRelationFilter = {
  is?: InputMaybe<ScheduleWhereInput>;
  isNot?: InputMaybe<ScheduleWhereInput>;
};

export enum ScheduleScalarFieldEnum {
  CounselorId = 'counselorId',
  Description = 'description',
  Id = 'id'
}

export type ScheduleUpdateInput = {
  Counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutScheduleInput>;
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutCounselorScheduleInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ScheduleUpdateOneRequiredWithoutCounselorSessionInput = {
  connect?: InputMaybe<ScheduleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScheduleCreateOrConnectWithoutCounselorSessionInput>;
  create?: InputMaybe<ScheduleCreateWithoutCounselorSessionInput>;
  update?: InputMaybe<ScheduleUpdateWithoutCounselorSessionInput>;
  upsert?: InputMaybe<ScheduleUpsertWithoutCounselorSessionInput>;
};

export type ScheduleUpdateOneWithoutCounselorInput = {
  connect?: InputMaybe<ScheduleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScheduleCreateOrConnectWithoutCounselorInput>;
  create?: InputMaybe<ScheduleCreateWithoutCounselorInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ScheduleUpdateWithoutCounselorInput>;
  upsert?: InputMaybe<ScheduleUpsertWithoutCounselorInput>;
};

export type ScheduleUpdateWithoutCounselorInput = {
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutCounselorScheduleInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ScheduleUpdateWithoutCounselorSessionInput = {
  Counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutScheduleInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ScheduleUpsertWithoutCounselorInput = {
  create: ScheduleCreateWithoutCounselorInput;
  update: ScheduleUpdateWithoutCounselorInput;
};

export type ScheduleUpsertWithoutCounselorSessionInput = {
  create: ScheduleCreateWithoutCounselorSessionInput;
  update: ScheduleUpdateWithoutCounselorSessionInput;
};

export type ScheduleWhereInput = {
  AND?: InputMaybe<Array<ScheduleWhereInput>>;
  Counselor?: InputMaybe<CounselorRelationFilter>;
  CounselorSession?: InputMaybe<CounselorSessionListRelationFilter>;
  NOT?: InputMaybe<Array<ScheduleWhereInput>>;
  OR?: InputMaybe<Array<ScheduleWhereInput>>;
  counselorId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
};

export type ScheduleWhereUniqueInput = {
  counselorId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type SignupInput = {
  accountStatus: AccountStatus;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  iCard?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Staff = {
  __typename?: 'Staff';
  CounselorSession?: Maybe<Array<CounselorSession>>;
  _count: StaffCount;
  createdAt: Scalars['DateTime'];
  faculty?: Maybe<Scalars['String']>;
  iCard: Scalars['String'];
  id: Scalars['ID'];
  staffMatrix?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type StaffCount = {
  __typename?: 'StaffCount';
  CounselorSession: Scalars['Int'];
};

export type StaffCreateNestedOneWithoutCounselorSessionInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutCounselorSessionInput>;
  create?: InputMaybe<StaffCreateWithoutCounselorSessionInput>;
};

export type StaffCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<StaffCreateWithoutUserInput>;
};

export type StaffCreateOrConnectWithoutCounselorSessionInput = {
  create: StaffCreateWithoutCounselorSessionInput;
  where: StaffWhereUniqueInput;
};

export type StaffCreateOrConnectWithoutUserInput = {
  create: StaffCreateWithoutUserInput;
  where: StaffWhereUniqueInput;
};

export type StaffCreateWithoutCounselorSessionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  faculty?: InputMaybe<Scalars['String']>;
  iCard: Scalars['String'];
  staffMatrix?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutStaffInput>;
};

export type StaffCreateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutStaffInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  faculty?: InputMaybe<Scalars['String']>;
  iCard: Scalars['String'];
  staffMatrix?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StaffOrderByWithRelationInput = {
  CounselorSession?: InputMaybe<CounselorSessionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  faculty?: InputMaybe<SortOrder>;
  iCard?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  staffMatrix?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type StaffRelationFilter = {
  is?: InputMaybe<StaffWhereInput>;
  isNot?: InputMaybe<StaffWhereInput>;
};

export type StaffUpdateOneWithoutCounselorSessionInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutCounselorSessionInput>;
  create?: InputMaybe<StaffCreateWithoutCounselorSessionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<StaffUpdateWithoutCounselorSessionInput>;
  upsert?: InputMaybe<StaffUpsertWithoutCounselorSessionInput>;
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

export type StaffUpdateWithoutCounselorSessionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  faculty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iCard?: InputMaybe<StringFieldUpdateOperationsInput>;
  staffMatrix?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStaffInput>;
};

export type StaffUpdateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutStaffInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  faculty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iCard?: InputMaybe<StringFieldUpdateOperationsInput>;
  staffMatrix?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StaffUpsertWithoutCounselorSessionInput = {
  create: StaffCreateWithoutCounselorSessionInput;
  update: StaffUpdateWithoutCounselorSessionInput;
};

export type StaffUpsertWithoutUserInput = {
  create: StaffCreateWithoutUserInput;
  update: StaffUpdateWithoutUserInput;
};

export type StaffWhereInput = {
  AND?: InputMaybe<Array<StaffWhereInput>>;
  CounselorSession?: InputMaybe<CounselorSessionListRelationFilter>;
  NOT?: InputMaybe<Array<StaffWhereInput>>;
  OR?: InputMaybe<Array<StaffWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  faculty?: InputMaybe<StringNullableFilter>;
  iCard?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  staffMatrix?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type StaffWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  staffMatrix?: InputMaybe<Scalars['String']>;
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

export type Student = {
  __typename?: 'Student';
  CounselorSession?: Maybe<Array<CounselorSession>>;
  _count: StudentCount;
  createdAt: Scalars['DateTime'];
  faculty?: Maybe<Scalars['String']>;
  iCard: Scalars['String'];
  id: Scalars['ID'];
  matrix?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type StudentCount = {
  __typename?: 'StudentCount';
  CounselorSession: Scalars['Int'];
};

export type StudentCreateNestedOneWithoutCounselorSessionInput = {
  connect?: InputMaybe<StudentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentCreateOrConnectWithoutCounselorSessionInput>;
  create?: InputMaybe<StudentCreateWithoutCounselorSessionInput>;
};

export type StudentCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<StudentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<StudentCreateWithoutUserInput>;
};

export type StudentCreateOrConnectWithoutCounselorSessionInput = {
  create: StudentCreateWithoutCounselorSessionInput;
  where: StudentWhereUniqueInput;
};

export type StudentCreateOrConnectWithoutUserInput = {
  create: StudentCreateWithoutUserInput;
  where: StudentWhereUniqueInput;
};

export type StudentCreateWithoutCounselorSessionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  faculty?: InputMaybe<Scalars['String']>;
  iCard: Scalars['String'];
  matrix?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutStudentInput>;
};

export type StudentCreateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutStudentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  faculty?: InputMaybe<Scalars['String']>;
  iCard: Scalars['String'];
  matrix?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StudentOrderByWithRelationInput = {
  CounselorSession?: InputMaybe<CounselorSessionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  faculty?: InputMaybe<SortOrder>;
  iCard?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matrix?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type StudentRelationFilter = {
  is?: InputMaybe<StudentWhereInput>;
  isNot?: InputMaybe<StudentWhereInput>;
};

export type StudentUpdateOneWithoutCounselorSessionInput = {
  connect?: InputMaybe<StudentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentCreateOrConnectWithoutCounselorSessionInput>;
  create?: InputMaybe<StudentCreateWithoutCounselorSessionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<StudentUpdateWithoutCounselorSessionInput>;
  upsert?: InputMaybe<StudentUpsertWithoutCounselorSessionInput>;
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

export type StudentUpdateWithoutCounselorSessionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  faculty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iCard?: InputMaybe<StringFieldUpdateOperationsInput>;
  matrix?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStudentInput>;
};

export type StudentUpdateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutStudentInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  faculty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iCard?: InputMaybe<StringFieldUpdateOperationsInput>;
  matrix?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUpsertWithoutCounselorSessionInput = {
  create: StudentCreateWithoutCounselorSessionInput;
  update: StudentUpdateWithoutCounselorSessionInput;
};

export type StudentUpsertWithoutUserInput = {
  create: StudentCreateWithoutUserInput;
  update: StudentUpdateWithoutUserInput;
};

export type StudentWhereInput = {
  AND?: InputMaybe<Array<StudentWhereInput>>;
  CounselorSession?: InputMaybe<CounselorSessionListRelationFilter>;
  NOT?: InputMaybe<Array<StudentWhereInput>>;
  OR?: InputMaybe<Array<StudentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  faculty?: InputMaybe<StringNullableFilter>;
  iCard?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  matrix?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type StudentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  matrix?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onChatCreations: Chat;
  onChatMessage: Message;
};


export type SubscriptionOnChatMessageArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  Chat?: Maybe<Chat>;
  Message?: Maybe<Array<Message>>;
  _count: UserCount;
  accountStatus: AccountStatus;
  admin?: Maybe<Admin>;
  chatId?: Maybe<Scalars['String']>;
  counselingSession?: Maybe<Array<CounselorSession>>;
  counselor?: Maybe<Counselor>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  mobile?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  staff?: Maybe<Staff>;
  student?: Maybe<Student>;
  updatedAt: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  Message: Scalars['Int'];
  counselingSession: Scalars['Int'];
};

export type UserCreateManyChatInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  mobile?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyChatInputEnvelope = {
  data: Array<UserCreateManyChatInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutChatInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<UserCreateWithoutChatInput>>;
  createMany?: InputMaybe<UserCreateManyChatInputEnvelope>;
};

export type UserCreateNestedOneWithoutCounselingSessionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCounselingSessionInput>;
  create?: InputMaybe<UserCreateWithoutCounselingSessionInput>;
};

export type UserCreateNestedOneWithoutCounselorInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCounselorInput>;
  create?: InputMaybe<UserCreateWithoutCounselorInput>;
};

export type UserCreateNestedOneWithoutMessageInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<UserCreateWithoutMessageInput>;
};

export type UserCreateNestedOneWithoutStaffInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStaffInput>;
  create?: InputMaybe<UserCreateWithoutStaffInput>;
};

export type UserCreateNestedOneWithoutStudentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStudentInput>;
  create?: InputMaybe<UserCreateWithoutStudentInput>;
};

export type UserCreateOrConnectWithoutChatInput = {
  create: UserCreateWithoutChatInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCounselingSessionInput = {
  create: UserCreateWithoutCounselingSessionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCounselorInput = {
  create: UserCreateWithoutCounselorInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessageInput = {
  create: UserCreateWithoutMessageInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutStaffInput = {
  create: UserCreateWithoutStaffInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutStudentInput = {
  create: UserCreateWithoutStudentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutChatInput = {
  Message?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutUserInput>;
  counselor?: InputMaybe<CounselorCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  mobile?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  staff?: InputMaybe<StaffCreateNestedOneWithoutUserInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutCounselingSessionInput = {
  Chat?: InputMaybe<ChatCreateNestedOneWithoutUsersInput>;
  Message?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselor?: InputMaybe<CounselorCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  mobile?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  staff?: InputMaybe<StaffCreateNestedOneWithoutUserInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutCounselorInput = {
  Chat?: InputMaybe<ChatCreateNestedOneWithoutUsersInput>;
  Message?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  mobile?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  staff?: InputMaybe<StaffCreateNestedOneWithoutUserInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutMessageInput = {
  Chat?: InputMaybe<ChatCreateNestedOneWithoutUsersInput>;
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutUserInput>;
  counselor?: InputMaybe<CounselorCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  mobile?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  staff?: InputMaybe<StaffCreateNestedOneWithoutUserInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutStaffInput = {
  Chat?: InputMaybe<ChatCreateNestedOneWithoutUsersInput>;
  Message?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutUserInput>;
  counselor?: InputMaybe<CounselorCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  mobile?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutStudentInput = {
  Chat?: InputMaybe<ChatCreateNestedOneWithoutUsersInput>;
  Message?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutUserInput>;
  counselor?: InputMaybe<CounselorCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  mobile?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  staff?: InputMaybe<StaffCreateNestedOneWithoutUserInput>;
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
  Chat?: InputMaybe<ChatOrderByWithRelationInput>;
  Message?: InputMaybe<MessageOrderByRelationAggregateInput>;
  accountStatus?: InputMaybe<SortOrder>;
  admin?: InputMaybe<AdminOrderByWithRelationInput>;
  chatId?: InputMaybe<SortOrder>;
  counselingSession?: InputMaybe<CounselorSessionOrderByRelationAggregateInput>;
  counselor?: InputMaybe<CounselorOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  mobile?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
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
  ChatId = 'chatId',
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Gender = 'gender',
  Id = 'id',
  LastName = 'lastName',
  Mobile = 'mobile',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  accountStatus?: InputMaybe<EnumAccountStatusFilter>;
  chatId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  mobile?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserUpdateInput = {
  Chat?: InputMaybe<ChatUpdateOneWithoutUsersInput>;
  Message?: InputMaybe<MessageUpdateManyWithoutSenderInput>;
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateManyWithoutUserInput>;
  counselor?: InputMaybe<CounselorUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutUserInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutChatInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutChatInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<UserCreateWithoutChatInput>>;
  createMany?: InputMaybe<UserCreateManyChatInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutChatInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutChatInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutChatInput>>;
};

export type UserUpdateOneRequiredWithoutCounselorInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCounselorInput>;
  create?: InputMaybe<UserCreateWithoutCounselorInput>;
  update?: InputMaybe<UserUpdateWithoutCounselorInput>;
  upsert?: InputMaybe<UserUpsertWithoutCounselorInput>;
};

export type UserUpdateOneRequiredWithoutMessageInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<UserCreateWithoutMessageInput>;
  update?: InputMaybe<UserUpdateWithoutMessageInput>;
  upsert?: InputMaybe<UserUpsertWithoutMessageInput>;
};

export type UserUpdateOneRequiredWithoutStaffInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStaffInput>;
  create?: InputMaybe<UserCreateWithoutStaffInput>;
  update?: InputMaybe<UserUpdateWithoutStaffInput>;
  upsert?: InputMaybe<UserUpsertWithoutStaffInput>;
};

export type UserUpdateOneRequiredWithoutStudentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStudentInput>;
  create?: InputMaybe<UserCreateWithoutStudentInput>;
  update?: InputMaybe<UserUpdateWithoutStudentInput>;
  upsert?: InputMaybe<UserUpsertWithoutStudentInput>;
};

export type UserUpdateOneWithoutCounselingSessionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCounselingSessionInput>;
  create?: InputMaybe<UserCreateWithoutCounselingSessionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutCounselingSessionInput>;
  upsert?: InputMaybe<UserUpsertWithoutCounselingSessionInput>;
};

export type UserUpdateWithWhereUniqueWithoutChatInput = {
  data: UserUpdateWithoutChatInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutChatInput = {
  Message?: InputMaybe<MessageUpdateManyWithoutSenderInput>;
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateManyWithoutUserInput>;
  counselor?: InputMaybe<CounselorUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutUserInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCounselingSessionInput = {
  Chat?: InputMaybe<ChatUpdateOneWithoutUsersInput>;
  Message?: InputMaybe<MessageUpdateManyWithoutSenderInput>;
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselor?: InputMaybe<CounselorUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutUserInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCounselorInput = {
  Chat?: InputMaybe<ChatUpdateOneWithoutUsersInput>;
  Message?: InputMaybe<MessageUpdateManyWithoutSenderInput>;
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutUserInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMessageInput = {
  Chat?: InputMaybe<ChatUpdateOneWithoutUsersInput>;
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateManyWithoutUserInput>;
  counselor?: InputMaybe<CounselorUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutUserInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutStaffInput = {
  Chat?: InputMaybe<ChatUpdateOneWithoutUsersInput>;
  Message?: InputMaybe<MessageUpdateManyWithoutSenderInput>;
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateManyWithoutUserInput>;
  counselor?: InputMaybe<CounselorUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutStudentInput = {
  Chat?: InputMaybe<ChatUpdateOneWithoutUsersInput>;
  Message?: InputMaybe<MessageUpdateManyWithoutSenderInput>;
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateManyWithoutUserInput>;
  counselor?: InputMaybe<CounselorUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  mobile?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutChatInput = {
  create: UserCreateWithoutChatInput;
  update: UserUpdateWithoutChatInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutCounselingSessionInput = {
  create: UserCreateWithoutCounselingSessionInput;
  update: UserUpdateWithoutCounselingSessionInput;
};

export type UserUpsertWithoutCounselorInput = {
  create: UserCreateWithoutCounselorInput;
  update: UserUpdateWithoutCounselorInput;
};

export type UserUpsertWithoutMessageInput = {
  create: UserCreateWithoutMessageInput;
  update: UserUpdateWithoutMessageInput;
};

export type UserUpsertWithoutStaffInput = {
  create: UserCreateWithoutStaffInput;
  update: UserUpdateWithoutStaffInput;
};

export type UserUpsertWithoutStudentInput = {
  create: UserCreateWithoutStudentInput;
  update: UserUpdateWithoutStudentInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Chat?: InputMaybe<ChatRelationFilter>;
  Message?: InputMaybe<MessageListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accountStatus?: InputMaybe<EnumAccountStatusFilter>;
  admin?: InputMaybe<AdminRelationFilter>;
  chatId?: InputMaybe<StringNullableFilter>;
  counselingSession?: InputMaybe<CounselorSessionListRelationFilter>;
  counselor?: InputMaybe<CounselorRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  mobile?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
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

export type LoginUserMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, role: Role, email: string, chatId?: string | null | undefined, accountStatus: AccountStatus, Chat?: { __typename?: 'Chat', id: string } | null | undefined, counselor?: { __typename?: 'Counselor', Schedule?: { __typename?: 'Schedule', id: string } | null | undefined, CounselorSession?: Array<{ __typename?: 'CounselorSession', timeFrom?: any | null | undefined, timeTo?: any | null | undefined, counsellingDate?: any | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined }> | null | undefined } | null | undefined, staff?: { __typename?: 'Staff', id: string } | null | undefined } } };

export type SignupMutationVariables = Exact<{
  data: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, role: Role, email: string, chatId?: string | null | undefined, accountStatus: AccountStatus, Chat?: { __typename?: 'Chat', id: string } | null | undefined, counselor?: { __typename?: 'Counselor', Schedule?: { __typename?: 'Schedule', id: string } | null | undefined, CounselorSession?: Array<{ __typename?: 'CounselorSession', timeFrom?: any | null | undefined, timeTo?: any | null | undefined, counsellingDate?: any | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined }> | null | undefined } | null | undefined, staff?: { __typename?: 'Staff', id: string } | null | undefined } } };

export type UserDataFragment = { __typename?: 'User', id: string, role: Role, email: string, chatId?: string | null | undefined, accountStatus: AccountStatus, Chat?: { __typename?: 'Chat', id: string } | null | undefined, counselor?: { __typename?: 'Counselor', Schedule?: { __typename?: 'Schedule', id: string } | null | undefined, CounselorSession?: Array<{ __typename?: 'CounselorSession', timeFrom?: any | null | undefined, timeTo?: any | null | undefined, counsellingDate?: any | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined }> | null | undefined } | null | undefined, staff?: { __typename?: 'Staff', id: string } | null | undefined };

export type AuthTokensFragment = { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, role: Role, email: string, chatId?: string | null | undefined, accountStatus: AccountStatus, Chat?: { __typename?: 'Chat', id: string } | null | undefined, counselor?: { __typename?: 'Counselor', Schedule?: { __typename?: 'Schedule', id: string } | null | undefined, CounselorSession?: Array<{ __typename?: 'CounselorSession', timeFrom?: any | null | undefined, timeTo?: any | null | undefined, counsellingDate?: any | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined }> | null | undefined } | null | undefined, staff?: { __typename?: 'Staff', id: string } | null | undefined } };

export type CreateChatMutationVariables = Exact<{
  data: ChatCreateInput;
}>;


export type CreateChatMutation = { __typename?: 'Mutation', createChat: { __typename?: 'Chat', id: string, chatName: string, Message?: Array<{ __typename?: 'Message', id: string, Message: string }> | null | undefined, users?: Array<{ __typename?: 'User', id: string, firstName: string, lastName: string }> | null | undefined } };

export type CreateCounselorSessionMutationVariables = Exact<{
  data: CreateCounselorSessionInput;
}>;


export type CreateCounselorSessionMutation = { __typename?: 'Mutation', createCounselorSession: { __typename?: 'CounselorSession', id: string, counsellingReason?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined, gender?: string | null | undefined, timeFrom?: any | null | undefined, timeTo?: any | null | undefined, maritalStatus?: string | null | undefined, address?: string | null | undefined, race?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zipCode?: string | null | undefined, counsellingDate?: any | null | undefined, counselor: { __typename?: 'Counselor', id: string }, user?: { __typename?: 'User', id: string, firstName: string, lastName: string } | null | undefined, counselorSchedule: { __typename?: 'Schedule', id: string, Counselor: { __typename?: 'Counselor', id: string } } } };

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

export type CreateFaqMutationVariables = Exact<{
  data: FaqCreateInput;
}>;


export type CreateFaqMutation = { __typename?: 'Mutation', createFaq: { __typename?: 'FAQ', id: string, title: string, answer: string, icon: string } };

export type SendMessageMutationVariables = Exact<{
  data: MessageCreateInput;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'Message', id: string, chatId: string, Message: string, userId: string, sender: { __typename?: 'User', id: string } } };

export type CreatePostMutationVariables = Exact<{
  data: PostCreateInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, title: string, body: string, image?: string | null | undefined } };

export type UpdatePostMutationVariables = Exact<{
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string, title: string, body: string, image?: string | null | undefined } };

export type DeletePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Post', id: string, title: string, image?: string | null | undefined, body: string } };

export type CreateScheduleMutationVariables = Exact<{
  data: ScheduleCreateInput;
}>;


export type CreateScheduleMutation = { __typename?: 'Mutation', createSchedule: { __typename?: 'Schedule', id: string, CounselorSession?: Array<{ __typename?: 'CounselorSession', id: string, user?: { __typename?: 'User', id: string } | null | undefined, counselor: { __typename?: 'Counselor', id: string } }> | null | undefined, Counselor: { __typename?: 'Counselor', id: string } } };

export type UpdateScheduleMutationVariables = Exact<{
  data: ScheduleUpdateInput;
  where: ScheduleWhereUniqueInput;
}>;


export type UpdateScheduleMutation = { __typename?: 'Mutation', updateSchedule: { __typename?: 'Schedule', id: string, CounselorSession?: Array<{ __typename?: 'CounselorSession', id: string }> | null | undefined, Counselor: { __typename?: 'Counselor', id: string } } };

export type DeleteScheduleMutationVariables = Exact<{
  where: ScheduleWhereUniqueInput;
}>;


export type DeleteScheduleMutation = { __typename?: 'Mutation', deleteSchedule: { __typename?: 'Schedule', id: string, CounselorSession?: Array<{ __typename?: 'CounselorSession', id: string }> | null | undefined, Counselor: { __typename?: 'Counselor', id: string } } };

export type RejectUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RejectUserMutation = { __typename?: 'Mutation', rejectUser: { __typename?: 'User', id: string } };

export type ApproveUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type ApproveUserMutation = { __typename?: 'Mutation', approveUser: { __typename?: 'User', id: string } };

export type OnChatMessageSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type OnChatMessageSubscription = { __typename?: 'Subscription', onChatMessage: { __typename?: 'Message', Message: string, id: string, chatId: string, sender: { __typename?: 'User', id: string } } };

export type FindChatMessagesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindChatMessagesQuery = { __typename?: 'Query', findChatMessages: Array<{ __typename?: 'Message', Message: string, id: string, chatId: string, sender: { __typename?: 'User', id: string } }> };

export type FindAllMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllMessagesQuery = { __typename?: 'Query', findAllMessages: { __typename?: 'Message', Message: string, chatId: string, sender: { __typename?: 'User', id: string } } };

export type FindOneChatQueryVariables = Exact<{
  where: ChatWhereUniqueInput;
}>;


export type FindOneChatQuery = { __typename?: 'Query', findOneChat: { __typename?: 'Chat', chatName: string, Message?: Array<{ __typename?: 'Message', id: string, Message: string }> | null | undefined, users?: Array<{ __typename?: 'User', id: string }> | null | undefined } };

export type SessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionsQuery = { __typename?: 'Query', findAllCounselorSessions: Array<{ __typename?: 'CounselorSession', id: string, counsellingReason?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined, gender?: string | null | undefined, maritalStatus?: string | null | undefined, address?: string | null | undefined, race?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zipCode?: string | null | undefined, counsellingDate?: any | null | undefined, timeFrom?: any | null | undefined, timeTo?: any | null | undefined, counselor: { __typename?: 'Counselor', id: string, user: { __typename?: 'User', firstName: string, lastName: string } }, student?: { __typename?: 'Student', id: string } | null | undefined, staff?: { __typename?: 'Staff', id: string } | null | undefined }> };

export type FindOneCounselorQueryVariables = Exact<{
  where: CounselorWhereUniqueInput;
}>;


export type FindOneCounselorQuery = { __typename?: 'Query', findOneCounselor: { __typename?: 'Counselor', id: string, department?: string | null | undefined, expertise?: string | null | undefined, createdAt: any, updatedAt: any, Schedule?: { __typename?: 'Schedule', id: string } | null | undefined, user: { __typename?: 'User', firstName: string, lastName: string, email: string }, CounselorSession?: Array<{ __typename?: 'CounselorSession', id: string, counsellingDate?: any | null | undefined }> | null | undefined } };

export type CounselorsQueryVariables = Exact<{ [key: string]: never; }>;


export type CounselorsQuery = { __typename?: 'Query', findAllCounselors: Array<{ __typename?: 'Counselor', id: string, department?: string | null | undefined, expertise?: string | null | undefined, createdAt: any, updatedAt: any, Schedule?: { __typename?: 'Schedule', id: string } | null | undefined, user: { __typename?: 'User', firstName: string, lastName: string, email: string }, CounselorSession?: Array<{ __typename?: 'CounselorSession', id: string, counsellingDate?: any | null | undefined }> | null | undefined }> };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { __typename?: 'Query', findAllEvents: Array<{ __typename?: 'Event', id: string, title: string, eventImageURL?: string | null | undefined, eventDetails: string }> };

export type EventQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type EventQuery = { __typename?: 'Query', findOneEvent: { __typename?: 'Event', id: string, title: string, eventImageURL?: string | null | undefined, eventDetails: string } };

export type FaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type FaqsQuery = { __typename?: 'Query', findAllFaqs: Array<{ __typename?: 'FAQ', id: string, title: string, answer: string, icon: string }> };

export type FindAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllPostsQuery = { __typename?: 'Query', findAllPosts: Array<{ __typename?: 'Post', id: string, title: string, body: string, image?: string | null | undefined }> };

export type PostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostQuery = { __typename?: 'Query', findOnePost: { __typename?: 'Post', id: string, title: string, body: string, image?: string | null | undefined } };

export type ScheduleQueryVariables = Exact<{
  where: ScheduleWhereUniqueInput;
}>;


export type ScheduleQuery = { __typename?: 'Query', findOneSchedule: { __typename?: 'Schedule', id: string, CounselorSession?: Array<{ __typename?: 'CounselorSession', id: string, counsellingReason?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined, gender?: string | null | undefined, maritalStatus?: string | null | undefined, address?: string | null | undefined, race?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zipCode?: string | null | undefined, timeFrom?: any | null | undefined, timeTo?: any | null | undefined, counsellingDate?: any | null | undefined, user?: { __typename?: 'User', id: string, firstName: string, lastName: string } | null | undefined, counselor: { __typename?: 'Counselor', id: string } }> | null | undefined, Counselor: { __typename?: 'Counselor', id: string } } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', findAllUsers: Array<{ __typename?: 'User', id: string, firstName: string, lastName: string, email: string, mobile?: string | null | undefined, accountStatus: AccountStatus, role: Role, counselor?: { __typename?: 'Counselor', id: string } | null | undefined, student?: { __typename?: 'Student', id: string } | null | undefined, staff?: { __typename?: 'Staff', id: string } | null | undefined }> };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, lastName: string, role: Role, firstName: string, email: string, counselor?: { __typename?: 'Counselor', scheduleId?: string | null | undefined, CounselorSession?: Array<{ __typename?: 'CounselorSession', counsellingDate?: any | null | undefined, timeFrom?: any | null | undefined, timeTo?: any | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined }> | null | undefined } | null | undefined } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, firstName: string, lastName: string, accountStatus: AccountStatus, role: Role, email: string, student?: { __typename?: 'Student', user: { __typename?: 'User', id: string, mobile?: string | null | undefined, accountStatus: AccountStatus, role: Role } } | null | undefined, staff?: { __typename?: 'Staff', user: { __typename?: 'User', mobile?: string | null | undefined, accountStatus: AccountStatus, role: Role } } | null | undefined, counselor?: { __typename?: 'Counselor', user: { __typename?: 'User', mobile?: string | null | undefined, accountStatus: AccountStatus, role: Role } } | null | undefined } };

export type CounselorQueryVariables = Exact<{ [key: string]: never; }>;


export type CounselorQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, role: Role, firstName: string, lastName: string, email: string, counselor?: { __typename?: 'Counselor', department?: string | null | undefined, expertise?: string | null | undefined, createdAt: any, updatedAt: any, Schedule?: { __typename?: 'Schedule', id: string } | null | undefined, CounselorSession?: Array<{ __typename?: 'CounselorSession', id: string, counsellingReason?: string | null | undefined, counselor: { __typename?: 'Counselor', id: string }, student?: { __typename?: 'Student', id: string } | null | undefined, staff?: { __typename?: 'Staff', id: string } | null | undefined }> | null | undefined } | null | undefined } };

export type StaffQueryVariables = Exact<{ [key: string]: never; }>;


export type StaffQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, role: Role, firstName: string, lastName: string, email: string, staff?: { __typename?: 'Staff', staffMatrix?: string | null | undefined, faculty?: string | null | undefined, createdAt: any, updatedAt: any, CounselorSession?: Array<{ __typename?: 'CounselorSession', id: string, counsellingReason?: string | null | undefined, counselor: { __typename?: 'Counselor', id: string }, student?: { __typename?: 'Student', id: string } | null | undefined, staff?: { __typename?: 'Staff', id: string } | null | undefined }> | null | undefined } | null | undefined } };

export const UserDataFragmentDoc = gql`
    fragment UserData on User {
  id
  role
  email
  chatId
  accountStatus
  Chat {
    id
  }
  counselor {
    Schedule {
      id
    }
    CounselorSession {
      timeFrom
      timeTo
      counsellingDate
      firstName
      lastName
      email
    }
  }
  staff {
    id
  }
}
    `;
export const AuthTokensFragmentDoc = gql`
    fragment AuthTokens on Auth {
  accessToken
  refreshToken
  user {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;
export const LoginUserDocument = gql`
    mutation loginUser($data: LoginInput!) {
  loginUser(data: $data) {
    ...AuthTokens
  }
}
    ${AuthTokensFragmentDoc}`;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const SignupDocument = gql`
    mutation signup($data: SignupInput!) {
  signup(data: $data) {
    ...AuthTokens
  }
}
    ${AuthTokensFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const CreateChatDocument = gql`
    mutation createChat($data: ChatCreateInput!) {
  createChat(data: $data) {
    id
    chatName
    Message {
      id
      Message
    }
    users {
      id
      firstName
      lastName
    }
  }
}
    `;
export type CreateChatMutationFn = Apollo.MutationFunction<CreateChatMutation, CreateChatMutationVariables>;

/**
 * __useCreateChatMutation__
 *
 * To run a mutation, you first call `useCreateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMutation, { data, loading, error }] = useCreateChatMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateChatMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatMutation, CreateChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatMutation, CreateChatMutationVariables>(CreateChatDocument, options);
      }
export type CreateChatMutationHookResult = ReturnType<typeof useCreateChatMutation>;
export type CreateChatMutationResult = Apollo.MutationResult<CreateChatMutation>;
export type CreateChatMutationOptions = Apollo.BaseMutationOptions<CreateChatMutation, CreateChatMutationVariables>;
export const CreateCounselorSessionDocument = gql`
    mutation createCounselorSession($data: CreateCounselorSessionInput!) {
  createCounselorSession(data: $data) {
    id
    counsellingReason
    counselor {
      id
    }
    user {
      id
      firstName
      lastName
    }
    counselorSchedule {
      id
      Counselor {
        id
      }
    }
    firstName
    lastName
    email
    gender
    timeFrom
    timeTo
    maritalStatus
    address
    race
    city
    state
    zipCode
    counsellingDate
  }
}
    `;
export type CreateCounselorSessionMutationFn = Apollo.MutationFunction<CreateCounselorSessionMutation, CreateCounselorSessionMutationVariables>;

/**
 * __useCreateCounselorSessionMutation__
 *
 * To run a mutation, you first call `useCreateCounselorSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCounselorSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCounselorSessionMutation, { data, loading, error }] = useCreateCounselorSessionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCounselorSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateCounselorSessionMutation, CreateCounselorSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCounselorSessionMutation, CreateCounselorSessionMutationVariables>(CreateCounselorSessionDocument, options);
      }
export type CreateCounselorSessionMutationHookResult = ReturnType<typeof useCreateCounselorSessionMutation>;
export type CreateCounselorSessionMutationResult = Apollo.MutationResult<CreateCounselorSessionMutation>;
export type CreateCounselorSessionMutationOptions = Apollo.BaseMutationOptions<CreateCounselorSessionMutation, CreateCounselorSessionMutationVariables>;
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
export const CreateFaqDocument = gql`
    mutation createFaq($data: FAQCreateInput!) {
  createFaq(data: $data) {
    id
    title
    answer
    icon
  }
}
    `;
export type CreateFaqMutationFn = Apollo.MutationFunction<CreateFaqMutation, CreateFaqMutationVariables>;

/**
 * __useCreateFaqMutation__
 *
 * To run a mutation, you first call `useCreateFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFaqMutation, { data, loading, error }] = useCreateFaqMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFaqMutation(baseOptions?: Apollo.MutationHookOptions<CreateFaqMutation, CreateFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFaqMutation, CreateFaqMutationVariables>(CreateFaqDocument, options);
      }
export type CreateFaqMutationHookResult = ReturnType<typeof useCreateFaqMutation>;
export type CreateFaqMutationResult = Apollo.MutationResult<CreateFaqMutation>;
export type CreateFaqMutationOptions = Apollo.BaseMutationOptions<CreateFaqMutation, CreateFaqMutationVariables>;
export const SendMessageDocument = gql`
    mutation sendMessage($data: MessageCreateInput!) {
  sendMessage(data: $data) {
    id
    sender {
      id
    }
    chatId
    Message
    userId
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($data: PostCreateInput!) {
  createPost(data: $data) {
    id
    title
    body
    image
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation updatePost($data: PostUpdateInput!, $where: PostWhereUniqueInput!) {
  updatePost(data: $data, where: $where) {
    id
    title
    body
    image
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($where: PostWhereUniqueInput!) {
  deletePost(where: $where) {
    id
    title
    image
    body
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const CreateScheduleDocument = gql`
    mutation createSchedule($data: ScheduleCreateInput!) {
  createSchedule(data: $data) {
    id
    CounselorSession {
      id
      user {
        id
      }
      counselor {
        id
      }
    }
    Counselor {
      id
    }
  }
}
    `;
export type CreateScheduleMutationFn = Apollo.MutationFunction<CreateScheduleMutation, CreateScheduleMutationVariables>;

/**
 * __useCreateScheduleMutation__
 *
 * To run a mutation, you first call `useCreateScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createScheduleMutation, { data, loading, error }] = useCreateScheduleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateScheduleMutation(baseOptions?: Apollo.MutationHookOptions<CreateScheduleMutation, CreateScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateScheduleMutation, CreateScheduleMutationVariables>(CreateScheduleDocument, options);
      }
export type CreateScheduleMutationHookResult = ReturnType<typeof useCreateScheduleMutation>;
export type CreateScheduleMutationResult = Apollo.MutationResult<CreateScheduleMutation>;
export type CreateScheduleMutationOptions = Apollo.BaseMutationOptions<CreateScheduleMutation, CreateScheduleMutationVariables>;
export const UpdateScheduleDocument = gql`
    mutation updateSchedule($data: ScheduleUpdateInput!, $where: ScheduleWhereUniqueInput!) {
  updateSchedule(data: $data, where: $where) {
    id
    CounselorSession {
      id
    }
    Counselor {
      id
    }
  }
}
    `;
export type UpdateScheduleMutationFn = Apollo.MutationFunction<UpdateScheduleMutation, UpdateScheduleMutationVariables>;

/**
 * __useUpdateScheduleMutation__
 *
 * To run a mutation, you first call `useUpdateScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScheduleMutation, { data, loading, error }] = useUpdateScheduleMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateScheduleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateScheduleMutation, UpdateScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateScheduleMutation, UpdateScheduleMutationVariables>(UpdateScheduleDocument, options);
      }
export type UpdateScheduleMutationHookResult = ReturnType<typeof useUpdateScheduleMutation>;
export type UpdateScheduleMutationResult = Apollo.MutationResult<UpdateScheduleMutation>;
export type UpdateScheduleMutationOptions = Apollo.BaseMutationOptions<UpdateScheduleMutation, UpdateScheduleMutationVariables>;
export const DeleteScheduleDocument = gql`
    mutation deleteSchedule($where: ScheduleWhereUniqueInput!) {
  deleteSchedule(where: $where) {
    id
    CounselorSession {
      id
    }
    Counselor {
      id
    }
  }
}
    `;
export type DeleteScheduleMutationFn = Apollo.MutationFunction<DeleteScheduleMutation, DeleteScheduleMutationVariables>;

/**
 * __useDeleteScheduleMutation__
 *
 * To run a mutation, you first call `useDeleteScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteScheduleMutation, { data, loading, error }] = useDeleteScheduleMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteScheduleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteScheduleMutation, DeleteScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteScheduleMutation, DeleteScheduleMutationVariables>(DeleteScheduleDocument, options);
      }
export type DeleteScheduleMutationHookResult = ReturnType<typeof useDeleteScheduleMutation>;
export type DeleteScheduleMutationResult = Apollo.MutationResult<DeleteScheduleMutation>;
export type DeleteScheduleMutationOptions = Apollo.BaseMutationOptions<DeleteScheduleMutation, DeleteScheduleMutationVariables>;
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
export const OnChatMessageDocument = gql`
    subscription onChatMessage($id: String!) {
  onChatMessage(id: $id) {
    Message
    id
    sender {
      id
    }
    chatId
  }
}
    `;

/**
 * __useOnChatMessageSubscription__
 *
 * To run a query within a React component, call `useOnChatMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnChatMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnChatMessageSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOnChatMessageSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnChatMessageSubscription, OnChatMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnChatMessageSubscription, OnChatMessageSubscriptionVariables>(OnChatMessageDocument, options);
      }
export type OnChatMessageSubscriptionHookResult = ReturnType<typeof useOnChatMessageSubscription>;
export type OnChatMessageSubscriptionResult = Apollo.SubscriptionResult<OnChatMessageSubscription>;
export const FindChatMessagesDocument = gql`
    query findChatMessages($id: String!) {
  findChatMessages(id: $id) {
    Message
    id
    sender {
      id
    }
    chatId
  }
}
    `;

/**
 * __useFindChatMessagesQuery__
 *
 * To run a query within a React component, call `useFindChatMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindChatMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindChatMessagesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindChatMessagesQuery(baseOptions: Apollo.QueryHookOptions<FindChatMessagesQuery, FindChatMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindChatMessagesQuery, FindChatMessagesQueryVariables>(FindChatMessagesDocument, options);
      }
export function useFindChatMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindChatMessagesQuery, FindChatMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindChatMessagesQuery, FindChatMessagesQueryVariables>(FindChatMessagesDocument, options);
        }
export type FindChatMessagesQueryHookResult = ReturnType<typeof useFindChatMessagesQuery>;
export type FindChatMessagesLazyQueryHookResult = ReturnType<typeof useFindChatMessagesLazyQuery>;
export type FindChatMessagesQueryResult = Apollo.QueryResult<FindChatMessagesQuery, FindChatMessagesQueryVariables>;
export const FindAllMessagesDocument = gql`
    query findAllMessages {
  findAllMessages {
    Message
    sender {
      id
    }
    chatId
  }
}
    `;

/**
 * __useFindAllMessagesQuery__
 *
 * To run a query within a React component, call `useFindAllMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllMessagesQuery(baseOptions?: Apollo.QueryHookOptions<FindAllMessagesQuery, FindAllMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllMessagesQuery, FindAllMessagesQueryVariables>(FindAllMessagesDocument, options);
      }
export function useFindAllMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllMessagesQuery, FindAllMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllMessagesQuery, FindAllMessagesQueryVariables>(FindAllMessagesDocument, options);
        }
export type FindAllMessagesQueryHookResult = ReturnType<typeof useFindAllMessagesQuery>;
export type FindAllMessagesLazyQueryHookResult = ReturnType<typeof useFindAllMessagesLazyQuery>;
export type FindAllMessagesQueryResult = Apollo.QueryResult<FindAllMessagesQuery, FindAllMessagesQueryVariables>;
export const FindOneChatDocument = gql`
    query findOneChat($where: ChatWhereUniqueInput!) {
  findOneChat(where: $where) {
    chatName
    Message {
      id
      Message
    }
    users {
      id
    }
  }
}
    `;

/**
 * __useFindOneChatQuery__
 *
 * To run a query within a React component, call `useFindOneChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneChatQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneChatQuery(baseOptions: Apollo.QueryHookOptions<FindOneChatQuery, FindOneChatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneChatQuery, FindOneChatQueryVariables>(FindOneChatDocument, options);
      }
export function useFindOneChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneChatQuery, FindOneChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneChatQuery, FindOneChatQueryVariables>(FindOneChatDocument, options);
        }
export type FindOneChatQueryHookResult = ReturnType<typeof useFindOneChatQuery>;
export type FindOneChatLazyQueryHookResult = ReturnType<typeof useFindOneChatLazyQuery>;
export type FindOneChatQueryResult = Apollo.QueryResult<FindOneChatQuery, FindOneChatQueryVariables>;
export const SessionsDocument = gql`
    query sessions {
  findAllCounselorSessions {
    id
    counsellingReason
    counselor {
      id
      user {
        firstName
        lastName
      }
    }
    student {
      id
    }
    staff {
      id
    }
    firstName
    lastName
    email
    gender
    maritalStatus
    address
    race
    city
    state
    zipCode
    counsellingDate
    timeFrom
    timeTo
  }
}
    `;

/**
 * __useSessionsQuery__
 *
 * To run a query within a React component, call `useSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionsQuery(baseOptions?: Apollo.QueryHookOptions<SessionsQuery, SessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SessionsQuery, SessionsQueryVariables>(SessionsDocument, options);
      }
export function useSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionsQuery, SessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SessionsQuery, SessionsQueryVariables>(SessionsDocument, options);
        }
export type SessionsQueryHookResult = ReturnType<typeof useSessionsQuery>;
export type SessionsLazyQueryHookResult = ReturnType<typeof useSessionsLazyQuery>;
export type SessionsQueryResult = Apollo.QueryResult<SessionsQuery, SessionsQueryVariables>;
export const FindOneCounselorDocument = gql`
    query findOneCounselor($where: CounselorWhereUniqueInput!) {
  findOneCounselor(where: $where) {
    id
    department
    expertise
    Schedule {
      id
    }
    user {
      firstName
      lastName
      email
    }
    createdAt
    updatedAt
    CounselorSession {
      id
      counsellingDate
    }
  }
}
    `;

/**
 * __useFindOneCounselorQuery__
 *
 * To run a query within a React component, call `useFindOneCounselorQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCounselorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCounselorQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneCounselorQuery(baseOptions: Apollo.QueryHookOptions<FindOneCounselorQuery, FindOneCounselorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneCounselorQuery, FindOneCounselorQueryVariables>(FindOneCounselorDocument, options);
      }
export function useFindOneCounselorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneCounselorQuery, FindOneCounselorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneCounselorQuery, FindOneCounselorQueryVariables>(FindOneCounselorDocument, options);
        }
export type FindOneCounselorQueryHookResult = ReturnType<typeof useFindOneCounselorQuery>;
export type FindOneCounselorLazyQueryHookResult = ReturnType<typeof useFindOneCounselorLazyQuery>;
export type FindOneCounselorQueryResult = Apollo.QueryResult<FindOneCounselorQuery, FindOneCounselorQueryVariables>;
export const CounselorsDocument = gql`
    query counselors {
  findAllCounselors {
    id
    department
    expertise
    Schedule {
      id
    }
    user {
      firstName
      lastName
      email
    }
    createdAt
    updatedAt
    CounselorSession {
      id
      counsellingDate
    }
  }
}
    `;

/**
 * __useCounselorsQuery__
 *
 * To run a query within a React component, call `useCounselorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCounselorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCounselorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCounselorsQuery(baseOptions?: Apollo.QueryHookOptions<CounselorsQuery, CounselorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CounselorsQuery, CounselorsQueryVariables>(CounselorsDocument, options);
      }
export function useCounselorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CounselorsQuery, CounselorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CounselorsQuery, CounselorsQueryVariables>(CounselorsDocument, options);
        }
export type CounselorsQueryHookResult = ReturnType<typeof useCounselorsQuery>;
export type CounselorsLazyQueryHookResult = ReturnType<typeof useCounselorsLazyQuery>;
export type CounselorsQueryResult = Apollo.QueryResult<CounselorsQuery, CounselorsQueryVariables>;
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
export const EventDocument = gql`
    query event($id: String!) {
  findOneEvent(id: $id) {
    id
    title
    eventImageURL
    eventDetails
  }
}
    `;

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventQuery(baseOptions: Apollo.QueryHookOptions<EventQuery, EventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, options);
      }
export function useEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, options);
        }
export type EventQueryHookResult = ReturnType<typeof useEventQuery>;
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>;
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>;
export const FaqsDocument = gql`
    query faqs {
  findAllFaqs {
    id
    title
    answer
    icon
  }
}
    `;

/**
 * __useFaqsQuery__
 *
 * To run a query within a React component, call `useFaqsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFaqsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFaqsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFaqsQuery(baseOptions?: Apollo.QueryHookOptions<FaqsQuery, FaqsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FaqsQuery, FaqsQueryVariables>(FaqsDocument, options);
      }
export function useFaqsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FaqsQuery, FaqsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FaqsQuery, FaqsQueryVariables>(FaqsDocument, options);
        }
export type FaqsQueryHookResult = ReturnType<typeof useFaqsQuery>;
export type FaqsLazyQueryHookResult = ReturnType<typeof useFaqsLazyQuery>;
export type FaqsQueryResult = Apollo.QueryResult<FaqsQuery, FaqsQueryVariables>;
export const FindAllPostsDocument = gql`
    query findAllPosts {
  findAllPosts {
    id
    title
    body
    image
  }
}
    `;

/**
 * __useFindAllPostsQuery__
 *
 * To run a query within a React component, call `useFindAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllPostsQuery, FindAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllPostsQuery, FindAllPostsQueryVariables>(FindAllPostsDocument, options);
      }
export function useFindAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllPostsQuery, FindAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllPostsQuery, FindAllPostsQueryVariables>(FindAllPostsDocument, options);
        }
export type FindAllPostsQueryHookResult = ReturnType<typeof useFindAllPostsQuery>;
export type FindAllPostsLazyQueryHookResult = ReturnType<typeof useFindAllPostsLazyQuery>;
export type FindAllPostsQueryResult = Apollo.QueryResult<FindAllPostsQuery, FindAllPostsQueryVariables>;
export const PostDocument = gql`
    query post($id: String!) {
  findOnePost(id: $id) {
    id
    title
    body
    image
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const ScheduleDocument = gql`
    query schedule($where: ScheduleWhereUniqueInput!) {
  findOneSchedule(where: $where) {
    id
    CounselorSession {
      id
      counsellingReason
      firstName
      lastName
      email
      gender
      maritalStatus
      address
      race
      city
      state
      zipCode
      timeFrom
      timeTo
      counsellingDate
      user {
        id
        firstName
        lastName
      }
      counselor {
        id
      }
    }
    Counselor {
      id
    }
  }
}
    `;

/**
 * __useScheduleQuery__
 *
 * To run a query within a React component, call `useScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScheduleQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useScheduleQuery(baseOptions: Apollo.QueryHookOptions<ScheduleQuery, ScheduleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScheduleQuery, ScheduleQueryVariables>(ScheduleDocument, options);
      }
export function useScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScheduleQuery, ScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScheduleQuery, ScheduleQueryVariables>(ScheduleDocument, options);
        }
export type ScheduleQueryHookResult = ReturnType<typeof useScheduleQuery>;
export type ScheduleLazyQueryHookResult = ReturnType<typeof useScheduleLazyQuery>;
export type ScheduleQueryResult = Apollo.QueryResult<ScheduleQuery, ScheduleQueryVariables>;
export const UsersDocument = gql`
    query users {
  findAllUsers {
    id
    firstName
    lastName
    email
    counselor {
      id
    }
    student {
      id
    }
    staff {
      id
    }
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
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    id
    lastName
    role
    firstName
    email
    counselor {
      scheduleId
      CounselorSession {
        counsellingDate
        timeFrom
        timeTo
        firstName
        lastName
        email
      }
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    firstName
    lastName
    accountStatus
    role
    email
    student {
      user {
        id
        mobile
        accountStatus
        role
      }
    }
    staff {
      user {
        mobile
        accountStatus
        role
      }
    }
    counselor {
      user {
        mobile
        accountStatus
        role
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const CounselorDocument = gql`
    query counselor {
  me {
    id
    role
    firstName
    lastName
    email
    counselor {
      department
      expertise
      Schedule {
        id
      }
      createdAt
      updatedAt
      CounselorSession {
        id
        counsellingReason
        counselor {
          id
        }
        student {
          id
        }
        staff {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useCounselorQuery__
 *
 * To run a query within a React component, call `useCounselorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCounselorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCounselorQuery({
 *   variables: {
 *   },
 * });
 */
export function useCounselorQuery(baseOptions?: Apollo.QueryHookOptions<CounselorQuery, CounselorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CounselorQuery, CounselorQueryVariables>(CounselorDocument, options);
      }
export function useCounselorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CounselorQuery, CounselorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CounselorQuery, CounselorQueryVariables>(CounselorDocument, options);
        }
export type CounselorQueryHookResult = ReturnType<typeof useCounselorQuery>;
export type CounselorLazyQueryHookResult = ReturnType<typeof useCounselorLazyQuery>;
export type CounselorQueryResult = Apollo.QueryResult<CounselorQuery, CounselorQueryVariables>;
export const StaffDocument = gql`
    query staff {
  me {
    id
    role
    firstName
    lastName
    email
    staff {
      staffMatrix
      faculty
      CounselorSession {
        id
        counsellingReason
        counselor {
          id
        }
        student {
          id
        }
        staff {
          id
        }
      }
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useStaffQuery__
 *
 * To run a query within a React component, call `useStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaffQuery({
 *   variables: {
 *   },
 * });
 */
export function useStaffQuery(baseOptions?: Apollo.QueryHookOptions<StaffQuery, StaffQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StaffQuery, StaffQueryVariables>(StaffDocument, options);
      }
export function useStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaffQuery, StaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StaffQuery, StaffQueryVariables>(StaffDocument, options);
        }
export type StaffQueryHookResult = ReturnType<typeof useStaffQuery>;
export type StaffLazyQueryHookResult = ReturnType<typeof useStaffLazyQuery>;
export type StaffQueryResult = Apollo.QueryResult<StaffQuery, StaffQueryVariables>;

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
    findChatMessages: 'findChatMessages',
    findAllMessages: 'findAllMessages',
    findOneChat: 'findOneChat',
    sessions: 'sessions',
    findOneCounselor: 'findOneCounselor',
    counselors: 'counselors',
    events: 'events',
    event: 'event',
    faqs: 'faqs',
    findAllPosts: 'findAllPosts',
    post: 'post',
    schedule: 'schedule',
    users: 'users',
    currentUser: 'currentUser',
    me: 'me',
    counselor: 'counselor',
    staff: 'staff'
  },
  Mutation: {
    loginUser: 'loginUser',
    signup: 'signup',
    createChat: 'createChat',
    createCounselorSession: 'createCounselorSession',
    createEvent: 'createEvent',
    updateEvent: 'updateEvent',
    deleteEvent: 'deleteEvent',
    createFaq: 'createFaq',
    sendMessage: 'sendMessage',
    createPost: 'createPost',
    updatePost: 'updatePost',
    deletePost: 'deletePost',
    createSchedule: 'createSchedule',
    updateSchedule: 'updateSchedule',
    deleteSchedule: 'deleteSchedule',
    rejectUser: 'rejectUser',
    approveUser: 'approveUser'
  },
  Subscription: {
    onChatMessage: 'onChatMessage'
  },
  Fragment: {
    UserData: 'UserData',
    AuthTokens: 'AuthTokens'
  }
}