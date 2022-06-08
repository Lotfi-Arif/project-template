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
  CounselorSession?: Maybe<Array<CounselorSession>>;
  Schedule?: Maybe<Array<Scalars['String']>>;
  _count: CounselorCount;
  createdAt: Scalars['DateTime'];
  department: Scalars['String'];
  expertise: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type CounselorCount = {
  __typename?: 'CounselorCount';
  CounselorSession: Scalars['Int'];
};

export type CounselorCreateInput = {
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutCounselorInput>;
  Schedule?: InputMaybe<CounselorCreateScheduleInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  department: Scalars['String'];
  expertise: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselorInput>;
};

export type CounselorCreateNestedOneWithoutCounselorSessionInput = {
  connect?: InputMaybe<CounselorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CounselorCreateOrConnectWithoutCounselorSessionInput>;
  create?: InputMaybe<CounselorCreateWithoutCounselorSessionInput>;
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

export type CounselorCreateOrConnectWithoutUserInput = {
  create: CounselorCreateWithoutUserInput;
  where: CounselorWhereUniqueInput;
};

export type CounselorCreateScheduleInput = {
  set: Array<Scalars['String']>;
};

export type CounselorCreateWithoutCounselorSessionInput = {
  Schedule?: InputMaybe<CounselorCreateScheduleInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  department: Scalars['String'];
  expertise: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCounselorInput>;
};

export type CounselorCreateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutCounselorInput>;
  Schedule?: InputMaybe<CounselorCreateScheduleInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  department: Scalars['String'];
  expertise: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CounselorOrderByWithRelationInput = {
  CounselorSession?: InputMaybe<CounselorSessionOrderByRelationAggregateInput>;
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
  User?: Maybe<User>;
  counsellingReason?: Maybe<Scalars['String']>;
  counselor: Counselor;
  counselorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  staff?: Maybe<Staff>;
  staffId?: Maybe<Scalars['String']>;
  student?: Maybe<Student>;
  studentId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['String']>;
};

export type CounselorSessionCreateInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutCounselingSessionInput>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselor: CounselorCreateNestedOneWithoutCounselorSessionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<StaffCreateNestedOneWithoutCounselorSessionInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutCounselorSessionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CounselorSessionCreateManyCounselorInput = {
  counsellingReason?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  staffId?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateManyCounselorInputEnvelope = {
  data: Array<CounselorSessionCreateManyCounselorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CounselorSessionCreateManyStaffInput = {
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateManyStaffInputEnvelope = {
  data: Array<CounselorSessionCreateManyStaffInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CounselorSessionCreateManyStudentInput = {
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  staffId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type CounselorSessionCreateManyStudentInputEnvelope = {
  data: Array<CounselorSessionCreateManyStudentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CounselorSessionCreateNestedManyWithoutCounselorInput = {
  connect?: InputMaybe<Array<CounselorSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CounselorSessionCreateOrConnectWithoutCounselorInput>>;
  create?: InputMaybe<Array<CounselorSessionCreateWithoutCounselorInput>>;
  createMany?: InputMaybe<CounselorSessionCreateManyCounselorInputEnvelope>;
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

export type CounselorSessionCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<CounselorSessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CounselorSessionCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CounselorSessionCreateWithoutUserInput>;
};

export type CounselorSessionCreateOrConnectWithoutCounselorInput = {
  create: CounselorSessionCreateWithoutCounselorInput;
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
  User?: InputMaybe<UserCreateNestedOneWithoutCounselingSessionInput>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<StaffCreateNestedOneWithoutCounselorSessionInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutCounselorSessionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CounselorSessionCreateWithoutStaffInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutCounselingSessionInput>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselor: CounselorCreateNestedOneWithoutCounselorSessionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  student?: InputMaybe<StudentCreateNestedOneWithoutCounselorSessionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CounselorSessionCreateWithoutStudentInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutCounselingSessionInput>;
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselor: CounselorCreateNestedOneWithoutCounselorSessionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<StaffCreateNestedOneWithoutCounselorSessionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CounselorSessionCreateWithoutUserInput = {
  counsellingReason?: InputMaybe<Scalars['String']>;
  counselor: CounselorCreateNestedOneWithoutCounselorSessionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<StaffCreateNestedOneWithoutCounselorSessionInput>;
  student?: InputMaybe<StudentCreateNestedOneWithoutCounselorSessionInput>;
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
  User?: InputMaybe<UserOrderByWithRelationInput>;
  counsellingReason?: InputMaybe<SortOrder>;
  counselor?: InputMaybe<CounselorOrderByWithRelationInput>;
  counselorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  staff?: InputMaybe<StaffOrderByWithRelationInput>;
  staffId?: InputMaybe<SortOrder>;
  student?: InputMaybe<StudentOrderByWithRelationInput>;
  studentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CounselorSessionRelationFilter = {
  is?: InputMaybe<CounselorSessionWhereInput>;
  isNot?: InputMaybe<CounselorSessionWhereInput>;
};

export enum CounselorSessionScalarFieldEnum {
  CounsellingReason = 'counsellingReason',
  CounselorId = 'counselorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  StaffId = 'staffId',
  StudentId = 'studentId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CounselorSessionScalarWhereInput = {
  AND?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  OR?: InputMaybe<Array<CounselorSessionScalarWhereInput>>;
  counsellingReason?: InputMaybe<StringNullableFilter>;
  counselorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  staffId?: InputMaybe<StringNullableFilter>;
  studentId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type CounselorSessionUpdateInput = {
  User?: InputMaybe<UserUpdateOneWithoutCounselingSessionInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutCounselorSessionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutCounselorSessionInput>;
  student?: InputMaybe<StudentUpdateOneWithoutCounselorSessionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateManyMutationInput = {
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateManyWithWhereWithoutCounselorInput = {
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

export type CounselorSessionUpdateOneWithoutUserInput = {
  connect?: InputMaybe<CounselorSessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CounselorSessionCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CounselorSessionCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CounselorSessionUpdateWithoutUserInput>;
  upsert?: InputMaybe<CounselorSessionUpsertWithoutUserInput>;
};

export type CounselorSessionUpdateWithWhereUniqueWithoutCounselorInput = {
  data: CounselorSessionUpdateWithoutCounselorInput;
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

export type CounselorSessionUpdateWithoutCounselorInput = {
  User?: InputMaybe<UserUpdateOneWithoutCounselingSessionInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutCounselorSessionInput>;
  student?: InputMaybe<StudentUpdateOneWithoutCounselorSessionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateWithoutStaffInput = {
  User?: InputMaybe<UserUpdateOneWithoutCounselingSessionInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutCounselorSessionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutCounselorSessionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateWithoutStudentInput = {
  User?: InputMaybe<UserUpdateOneWithoutCounselingSessionInput>;
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutCounselorSessionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutCounselorSessionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorSessionUpdateWithoutUserInput = {
  counsellingReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  counselor?: InputMaybe<CounselorUpdateOneRequiredWithoutCounselorSessionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneWithoutCounselorSessionInput>;
  student?: InputMaybe<StudentUpdateOneWithoutCounselorSessionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorSessionUpsertWithWhereUniqueWithoutCounselorInput = {
  create: CounselorSessionCreateWithoutCounselorInput;
  update: CounselorSessionUpdateWithoutCounselorInput;
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

export type CounselorSessionUpsertWithoutUserInput = {
  create: CounselorSessionCreateWithoutUserInput;
  update: CounselorSessionUpdateWithoutUserInput;
};

export type CounselorSessionWhereInput = {
  AND?: InputMaybe<Array<CounselorSessionWhereInput>>;
  NOT?: InputMaybe<Array<CounselorSessionWhereInput>>;
  OR?: InputMaybe<Array<CounselorSessionWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  counsellingReason?: InputMaybe<StringNullableFilter>;
  counselor?: InputMaybe<CounselorRelationFilter>;
  counselorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  staff?: InputMaybe<StaffRelationFilter>;
  staffId?: InputMaybe<StringNullableFilter>;
  student?: InputMaybe<StudentRelationFilter>;
  studentId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type CounselorSessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type CounselorUpdateInput = {
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutCounselorInput>;
  Schedule?: InputMaybe<CounselorUpdateScheduleInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<StringFieldUpdateOperationsInput>;
  expertise?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type CounselorUpdateWithoutCounselorSessionInput = {
  Schedule?: InputMaybe<CounselorUpdateScheduleInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<StringFieldUpdateOperationsInput>;
  expertise?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCounselorInput>;
};

export type CounselorUpdateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutCounselorInput>;
  Schedule?: InputMaybe<CounselorUpdateScheduleInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  department?: InputMaybe<StringFieldUpdateOperationsInput>;
  expertise?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CounselorUpsertWithoutCounselorSessionInput = {
  create: CounselorCreateWithoutCounselorSessionInput;
  update: CounselorUpdateWithoutCounselorSessionInput;
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
  findAllCounselorSessions: Array<CounselorSession>;
  findAllCounselors: Counselor;
  findAllEvents: Array<Event>;
  findAllFaqs: Array<Faq>;
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
  Staff = 'STAFF',
  Student = 'STUDENT',
  User = 'USER'
}

export type Schedule = {
  __typename?: 'Schedule';
  days: Scalars['DateTime'];
  id: Scalars['ID'];
  timeFrom: Scalars['DateTime'];
  timeTo: Scalars['DateTime'];
};

export type ScheduleCreateInput = {
  days: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  timeFrom: Scalars['DateTime'];
  timeTo: Scalars['DateTime'];
};

export type ScheduleOrderByWithRelationInput = {
  days?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timeFrom?: InputMaybe<SortOrder>;
  timeTo?: InputMaybe<SortOrder>;
};

export enum ScheduleScalarFieldEnum {
  Days = 'days',
  Id = 'id',
  TimeFrom = 'timeFrom',
  TimeTo = 'timeTo'
}

export type ScheduleUpdateInput = {
  days?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  timeFrom?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  timeTo?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScheduleWhereInput = {
  AND?: InputMaybe<Array<ScheduleWhereInput>>;
  NOT?: InputMaybe<Array<ScheduleWhereInput>>;
  OR?: InputMaybe<Array<ScheduleWhereInput>>;
  days?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  timeFrom?: InputMaybe<DateTimeFilter>;
  timeTo?: InputMaybe<DateTimeFilter>;
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
  CounselorSession?: Maybe<Array<CounselorSession>>;
  _count: StaffCount;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  faculty: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  staffId: Scalars['String'];
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
  email: Scalars['String'];
  faculty: Scalars['String'];
  password: Scalars['String'];
  staffId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutStaffInput>;
};

export type StaffCreateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutStaffInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  faculty: Scalars['String'];
  password: Scalars['String'];
  staffId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StaffOrderByWithRelationInput = {
  CounselorSession?: InputMaybe<CounselorSessionOrderByRelationAggregateInput>;
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
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  faculty?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  staffId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStaffInput>;
};

export type StaffUpdateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutStaffInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  faculty?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  staffId?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  CounselorSession?: Maybe<Array<CounselorSession>>;
  _count: StudentCount;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  faculty: Scalars['String'];
  id: Scalars['ID'];
  matrix: Scalars['String'];
  password: Scalars['String'];
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
  email: Scalars['String'];
  faculty: Scalars['String'];
  matrix: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutStudentInput>;
};

export type StudentCreateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionCreateNestedManyWithoutStudentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  faculty: Scalars['String'];
  matrix: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StudentOrderByWithRelationInput = {
  CounselorSession?: InputMaybe<CounselorSessionOrderByRelationAggregateInput>;
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
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  faculty?: InputMaybe<StringFieldUpdateOperationsInput>;
  matrix?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStudentInput>;
};

export type StudentUpdateWithoutUserInput = {
  CounselorSession?: InputMaybe<CounselorSessionUpdateManyWithoutStudentInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  faculty?: InputMaybe<StringFieldUpdateOperationsInput>;
  matrix?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  counselingSession?: Maybe<CounselorSession>;
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
  posts: Scalars['Int'];
};

export type UserCreateInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedOneWithoutUserInput>;
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

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
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

export type UserCreateOrConnectWithoutStaffInput = {
  create: UserCreateWithoutStaffInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutStudentInput = {
  create: UserCreateWithoutStudentInput;
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
  counselingSession?: InputMaybe<CounselorSessionCreateNestedOneWithoutUserInput>;
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
  counselingSession?: InputMaybe<CounselorSessionCreateNestedOneWithoutUserInput>;
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

export type UserCreateWithoutStaffInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedOneWithoutUserInput>;
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
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutStudentInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionCreateNestedOneWithoutUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserOrderByWithRelationInput = {
  accountStatus?: InputMaybe<SortOrder>;
  admin?: InputMaybe<AdminOrderByWithRelationInput>;
  counselingSession?: InputMaybe<CounselorSessionOrderByWithRelationInput>;
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

export type UserUpdateInput = {
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateOneWithoutUserInput>;
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
  counselingSession?: InputMaybe<CounselorSessionUpdateOneWithoutUserInput>;
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
  counselingSession?: InputMaybe<CounselorSessionUpdateOneWithoutUserInput>;
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

export type UserUpdateWithoutStaffInput = {
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateOneWithoutUserInput>;
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
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutStudentInput = {
  accountStatus?: InputMaybe<EnumAccountStatusFieldUpdateOperationsInput>;
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  counselingSession?: InputMaybe<CounselorSessionUpdateOneWithoutUserInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCounselingSessionInput = {
  create: UserCreateWithoutCounselingSessionInput;
  update: UserUpdateWithoutCounselingSessionInput;
};

export type UserUpsertWithoutCounselorInput = {
  create: UserCreateWithoutCounselorInput;
  update: UserUpdateWithoutCounselorInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
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
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accountStatus?: InputMaybe<EnumAccountStatusFilter>;
  admin?: InputMaybe<AdminRelationFilter>;
  counselingSession?: InputMaybe<CounselorSessionRelationFilter>;
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

export type CreateFaqMutationVariables = Exact<{
  data: FaqCreateInput;
}>;


export type CreateFaqMutation = { __typename?: 'Mutation', createFaq: { __typename?: 'FAQ', id: string, title: string, answer: string, icon: string } };

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

export type FaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type FaqsQuery = { __typename?: 'Query', findAllFaqs: Array<{ __typename?: 'FAQ', id: string, title: string, answer: string, icon: string }> };

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
    faqs: 'faqs',
    users: 'users'
  },
  Mutation: {
    login: 'login',
    createEvent: 'createEvent',
    updateEvent: 'updateEvent',
    deleteEvent: 'deleteEvent',
    createFaq: 'createFaq',
    createUser: 'createUser',
    rejectUser: 'rejectUser',
    approveUser: 'approveUser'
  }
}