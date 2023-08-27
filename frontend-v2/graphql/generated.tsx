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

export type Chat = {
  __typename?: 'Chat';
  _count: ChatCount;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  media: Maybe<Array<Media>>;
  messages: Maybe<Array<Message>>;
  updatedAt: Scalars['DateTime']['output'];
  user1: User;
  user2: User;
  userId1: Scalars['String']['output'];
  userId2: Scalars['String']['output'];
};

export type ChatCount = {
  __typename?: 'ChatCount';
  media: Scalars['Int']['output'];
  messages: Scalars['Int']['output'];
};

export type ChatCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaCreateNestedManyWithoutChatInput>;
  messages: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user1: UserCreateNestedOneWithoutChatsAsUser1Input;
  user2: UserCreateNestedOneWithoutChatsAsUser2Input;
};

export type ChatCreateManyUser1Input = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  userId2: Scalars['String']['input'];
};

export type ChatCreateManyUser1InputEnvelope = {
  data: Array<ChatCreateManyUser1Input>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatCreateManyUser2Input = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  userId1: Scalars['String']['input'];
};

export type ChatCreateManyUser2InputEnvelope = {
  data: Array<ChatCreateManyUser2Input>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatCreateNestedManyWithoutUser1Input = {
  connect: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ChatCreateOrConnectWithoutUser1Input>>;
  create: InputMaybe<Array<ChatCreateWithoutUser1Input>>;
  createMany: InputMaybe<ChatCreateManyUser1InputEnvelope>;
};

export type ChatCreateNestedManyWithoutUser2Input = {
  connect: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ChatCreateOrConnectWithoutUser2Input>>;
  create: InputMaybe<Array<ChatCreateWithoutUser2Input>>;
  createMany: InputMaybe<ChatCreateManyUser2InputEnvelope>;
};

export type ChatCreateNestedOneWithoutMediaInput = {
  connect: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate: InputMaybe<ChatCreateOrConnectWithoutMediaInput>;
  create: InputMaybe<ChatCreateWithoutMediaInput>;
};

export type ChatCreateNestedOneWithoutMessagesInput = {
  connect: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate: InputMaybe<ChatCreateOrConnectWithoutMessagesInput>;
  create: InputMaybe<ChatCreateWithoutMessagesInput>;
};

export type ChatCreateOrConnectWithoutMediaInput = {
  create: ChatCreateWithoutMediaInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutMessagesInput = {
  create: ChatCreateWithoutMessagesInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutUser1Input = {
  create: ChatCreateWithoutUser1Input;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutUser2Input = {
  create: ChatCreateWithoutUser2Input;
  where: ChatWhereUniqueInput;
};

export type ChatCreateWithoutMediaInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  messages: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user1: UserCreateNestedOneWithoutChatsAsUser1Input;
  user2: UserCreateNestedOneWithoutChatsAsUser2Input;
};

export type ChatCreateWithoutMessagesInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaCreateNestedManyWithoutChatInput>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user1: UserCreateNestedOneWithoutChatsAsUser1Input;
  user2: UserCreateNestedOneWithoutChatsAsUser2Input;
};

export type ChatCreateWithoutUser1Input = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaCreateNestedManyWithoutChatInput>;
  messages: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user2: UserCreateNestedOneWithoutChatsAsUser2Input;
};

export type ChatCreateWithoutUser2Input = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaCreateNestedManyWithoutChatInput>;
  messages: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user1: UserCreateNestedOneWithoutChatsAsUser1Input;
};

export type ChatListRelationFilter = {
  every: InputMaybe<ChatWhereInput>;
  none: InputMaybe<ChatWhereInput>;
  some: InputMaybe<ChatWhereInput>;
};

export type ChatNullableRelationFilter = {
  is: InputMaybe<ChatWhereInput>;
  isNot: InputMaybe<ChatWhereInput>;
};

export type ChatRelationFilter = {
  is: InputMaybe<ChatWhereInput>;
  isNot: InputMaybe<ChatWhereInput>;
};

export type ChatScalarWhereInput = {
  AND: InputMaybe<Array<ChatScalarWhereInput>>;
  NOT: InputMaybe<Array<ChatScalarWhereInput>>;
  OR: InputMaybe<Array<ChatScalarWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId1: InputMaybe<StringFilter>;
  userId2: InputMaybe<StringFilter>;
};

export type ChatUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatUpdateManyWithWhereWithoutUser1Input = {
  data: ChatUpdateManyMutationInput;
  where: ChatScalarWhereInput;
};

export type ChatUpdateManyWithWhereWithoutUser2Input = {
  data: ChatUpdateManyMutationInput;
  where: ChatScalarWhereInput;
};

export type ChatUpdateManyWithoutUser1NestedInput = {
  connect: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ChatCreateOrConnectWithoutUser1Input>>;
  create: InputMaybe<Array<ChatCreateWithoutUser1Input>>;
  createMany: InputMaybe<ChatCreateManyUser1InputEnvelope>;
  delete: InputMaybe<Array<ChatWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<ChatScalarWhereInput>>;
  disconnect: InputMaybe<Array<ChatWhereUniqueInput>>;
  set: InputMaybe<Array<ChatWhereUniqueInput>>;
  update: InputMaybe<Array<ChatUpdateWithWhereUniqueWithoutUser1Input>>;
  updateMany: InputMaybe<Array<ChatUpdateManyWithWhereWithoutUser1Input>>;
  upsert: InputMaybe<Array<ChatUpsertWithWhereUniqueWithoutUser1Input>>;
};

export type ChatUpdateManyWithoutUser2NestedInput = {
  connect: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ChatCreateOrConnectWithoutUser2Input>>;
  create: InputMaybe<Array<ChatCreateWithoutUser2Input>>;
  createMany: InputMaybe<ChatCreateManyUser2InputEnvelope>;
  delete: InputMaybe<Array<ChatWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<ChatScalarWhereInput>>;
  disconnect: InputMaybe<Array<ChatWhereUniqueInput>>;
  set: InputMaybe<Array<ChatWhereUniqueInput>>;
  update: InputMaybe<Array<ChatUpdateWithWhereUniqueWithoutUser2Input>>;
  updateMany: InputMaybe<Array<ChatUpdateManyWithWhereWithoutUser2Input>>;
  upsert: InputMaybe<Array<ChatUpsertWithWhereUniqueWithoutUser2Input>>;
};

export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
  connect: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate: InputMaybe<ChatCreateOrConnectWithoutMessagesInput>;
  create: InputMaybe<ChatCreateWithoutMessagesInput>;
  update: InputMaybe<ChatUpdateToOneWithWhereWithoutMessagesInput>;
  upsert: InputMaybe<ChatUpsertWithoutMessagesInput>;
};

export type ChatUpdateOneWithoutMediaNestedInput = {
  connect: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate: InputMaybe<ChatCreateOrConnectWithoutMediaInput>;
  create: InputMaybe<ChatCreateWithoutMediaInput>;
  delete: InputMaybe<ChatWhereInput>;
  disconnect: InputMaybe<ChatWhereInput>;
  update: InputMaybe<ChatUpdateToOneWithWhereWithoutMediaInput>;
  upsert: InputMaybe<ChatUpsertWithoutMediaInput>;
};

export type ChatUpdateToOneWithWhereWithoutMediaInput = {
  data: ChatUpdateWithoutMediaInput;
  where: InputMaybe<ChatWhereInput>;
};

export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
  data: ChatUpdateWithoutMessagesInput;
  where: InputMaybe<ChatWhereInput>;
};

export type ChatUpdateWithWhereUniqueWithoutUser1Input = {
  data: ChatUpdateWithoutUser1Input;
  where: ChatWhereUniqueInput;
};

export type ChatUpdateWithWhereUniqueWithoutUser2Input = {
  data: ChatUpdateWithoutUser2Input;
  where: ChatWhereUniqueInput;
};

export type ChatUpdateWithoutMediaInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  messages: InputMaybe<MessageUpdateManyWithoutChatNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user1: InputMaybe<UserUpdateOneRequiredWithoutChatsAsUser1NestedInput>;
  user2: InputMaybe<UserUpdateOneRequiredWithoutChatsAsUser2NestedInput>;
};

export type ChatUpdateWithoutMessagesInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  media: InputMaybe<MediaUpdateManyWithoutChatNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user1: InputMaybe<UserUpdateOneRequiredWithoutChatsAsUser1NestedInput>;
  user2: InputMaybe<UserUpdateOneRequiredWithoutChatsAsUser2NestedInput>;
};

export type ChatUpdateWithoutUser1Input = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  media: InputMaybe<MediaUpdateManyWithoutChatNestedInput>;
  messages: InputMaybe<MessageUpdateManyWithoutChatNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user2: InputMaybe<UserUpdateOneRequiredWithoutChatsAsUser2NestedInput>;
};

export type ChatUpdateWithoutUser2Input = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  media: InputMaybe<MediaUpdateManyWithoutChatNestedInput>;
  messages: InputMaybe<MessageUpdateManyWithoutChatNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user1: InputMaybe<UserUpdateOneRequiredWithoutChatsAsUser1NestedInput>;
};

export type ChatUpsertWithWhereUniqueWithoutUser1Input = {
  create: ChatCreateWithoutUser1Input;
  update: ChatUpdateWithoutUser1Input;
  where: ChatWhereUniqueInput;
};

export type ChatUpsertWithWhereUniqueWithoutUser2Input = {
  create: ChatCreateWithoutUser2Input;
  update: ChatUpdateWithoutUser2Input;
  where: ChatWhereUniqueInput;
};

export type ChatUpsertWithoutMediaInput = {
  create: ChatCreateWithoutMediaInput;
  update: ChatUpdateWithoutMediaInput;
  where: InputMaybe<ChatWhereInput>;
};

export type ChatUpsertWithoutMessagesInput = {
  create: ChatCreateWithoutMessagesInput;
  update: ChatUpdateWithoutMessagesInput;
  where: InputMaybe<ChatWhereInput>;
};

export type ChatUserId1UserId2CompoundUniqueInput = {
  userId1: Scalars['String']['input'];
  userId2: Scalars['String']['input'];
};

export type ChatWhereInput = {
  AND: InputMaybe<Array<ChatWhereInput>>;
  NOT: InputMaybe<Array<ChatWhereInput>>;
  OR: InputMaybe<Array<ChatWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  media: InputMaybe<MediaListRelationFilter>;
  messages: InputMaybe<MessageListRelationFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user1: InputMaybe<UserRelationFilter>;
  user2: InputMaybe<UserRelationFilter>;
  userId1: InputMaybe<StringFilter>;
  userId2: InputMaybe<StringFilter>;
};

export type ChatWhereUniqueInput = {
  AND: InputMaybe<Array<ChatWhereInput>>;
  NOT: InputMaybe<Array<ChatWhereInput>>;
  OR: InputMaybe<Array<ChatWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaListRelationFilter>;
  messages: InputMaybe<MessageListRelationFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user1: InputMaybe<UserRelationFilter>;
  user2: InputMaybe<UserRelationFilter>;
  userId1: InputMaybe<StringFilter>;
  userId1_userId2: InputMaybe<ChatUserId1UserId2CompoundUniqueInput>;
  userId2: InputMaybe<StringFilter>;
};

export type Course = {
  __typename?: 'Course';
  _count: CourseCount;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  enrollments: Maybe<Array<CourseEnrollment>>;
  id: Scalars['ID']['output'];
  media: Maybe<Array<Media>>;
  name: Scalars['String']['output'];
  teacher: User;
  teacherId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CourseCount = {
  __typename?: 'CourseCount';
  enrollments: Scalars['Int']['output'];
  media: Scalars['Int']['output'];
};

export type CourseCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  enrollments: InputMaybe<CourseEnrollmentCreateNestedManyWithoutCourseInput>;
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaCreateNestedManyWithoutCourseInput>;
  name: Scalars['String']['input'];
  teacher: UserCreateNestedOneWithoutCourseInput;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CourseCreateManyTeacherInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CourseCreateManyTeacherInputEnvelope = {
  data: Array<CourseCreateManyTeacherInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseCreateNestedManyWithoutTeacherInput = {
  connect: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CourseCreateOrConnectWithoutTeacherInput>>;
  create: InputMaybe<Array<CourseCreateWithoutTeacherInput>>;
  createMany: InputMaybe<CourseCreateManyTeacherInputEnvelope>;
};

export type CourseCreateNestedOneWithoutEnrollmentsInput = {
  connect: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate: InputMaybe<CourseCreateOrConnectWithoutEnrollmentsInput>;
  create: InputMaybe<CourseCreateWithoutEnrollmentsInput>;
};

export type CourseCreateNestedOneWithoutMediaInput = {
  connect: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate: InputMaybe<CourseCreateOrConnectWithoutMediaInput>;
  create: InputMaybe<CourseCreateWithoutMediaInput>;
};

export type CourseCreateOrConnectWithoutEnrollmentsInput = {
  create: CourseCreateWithoutEnrollmentsInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutMediaInput = {
  create: CourseCreateWithoutMediaInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutTeacherInput = {
  create: CourseCreateWithoutTeacherInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateWithoutEnrollmentsInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaCreateNestedManyWithoutCourseInput>;
  name: Scalars['String']['input'];
  teacher: UserCreateNestedOneWithoutCourseInput;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CourseCreateWithoutMediaInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  enrollments: InputMaybe<CourseEnrollmentCreateNestedManyWithoutCourseInput>;
  id: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  teacher: UserCreateNestedOneWithoutCourseInput;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CourseCreateWithoutTeacherInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  enrollments: InputMaybe<CourseEnrollmentCreateNestedManyWithoutCourseInput>;
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaCreateNestedManyWithoutCourseInput>;
  name: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CourseEnrollment = {
  __typename?: 'CourseEnrollment';
  course: Course;
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CourseEnrollmentCourseIdUserIdCompoundUniqueInput = {
  courseId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CourseEnrollmentCreateInput = {
  course: CourseCreateNestedOneWithoutEnrollmentsInput;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCoursesInput;
};

export type CourseEnrollmentCreateManyCourseInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type CourseEnrollmentCreateManyCourseInputEnvelope = {
  data: Array<CourseEnrollmentCreateManyCourseInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseEnrollmentCreateManyUserInput = {
  courseId: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CourseEnrollmentCreateManyUserInputEnvelope = {
  data: Array<CourseEnrollmentCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseEnrollmentCreateNestedManyWithoutCourseInput = {
  connect: InputMaybe<Array<CourseEnrollmentWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CourseEnrollmentCreateOrConnectWithoutCourseInput>>;
  create: InputMaybe<Array<CourseEnrollmentCreateWithoutCourseInput>>;
  createMany: InputMaybe<CourseEnrollmentCreateManyCourseInputEnvelope>;
};

export type CourseEnrollmentCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<CourseEnrollmentWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CourseEnrollmentCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<CourseEnrollmentCreateWithoutUserInput>>;
  createMany: InputMaybe<CourseEnrollmentCreateManyUserInputEnvelope>;
};

export type CourseEnrollmentCreateOrConnectWithoutCourseInput = {
  create: CourseEnrollmentCreateWithoutCourseInput;
  where: CourseEnrollmentWhereUniqueInput;
};

export type CourseEnrollmentCreateOrConnectWithoutUserInput = {
  create: CourseEnrollmentCreateWithoutUserInput;
  where: CourseEnrollmentWhereUniqueInput;
};

export type CourseEnrollmentCreateWithoutCourseInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCoursesInput;
};

export type CourseEnrollmentCreateWithoutUserInput = {
  course: CourseCreateNestedOneWithoutEnrollmentsInput;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CourseEnrollmentListRelationFilter = {
  every: InputMaybe<CourseEnrollmentWhereInput>;
  none: InputMaybe<CourseEnrollmentWhereInput>;
  some: InputMaybe<CourseEnrollmentWhereInput>;
};

export type CourseEnrollmentScalarWhereInput = {
  AND: InputMaybe<Array<CourseEnrollmentScalarWhereInput>>;
  NOT: InputMaybe<Array<CourseEnrollmentScalarWhereInput>>;
  OR: InputMaybe<Array<CourseEnrollmentScalarWhereInput>>;
  courseId: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export type CourseEnrollmentUpdateInput = {
  course: InputMaybe<CourseUpdateOneRequiredWithoutEnrollmentsNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutCoursesNestedInput>;
};

export type CourseEnrollmentUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseEnrollmentUpdateManyWithWhereWithoutCourseInput = {
  data: CourseEnrollmentUpdateManyMutationInput;
  where: CourseEnrollmentScalarWhereInput;
};

export type CourseEnrollmentUpdateManyWithWhereWithoutUserInput = {
  data: CourseEnrollmentUpdateManyMutationInput;
  where: CourseEnrollmentScalarWhereInput;
};

export type CourseEnrollmentUpdateManyWithoutCourseNestedInput = {
  connect: InputMaybe<Array<CourseEnrollmentWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CourseEnrollmentCreateOrConnectWithoutCourseInput>>;
  create: InputMaybe<Array<CourseEnrollmentCreateWithoutCourseInput>>;
  createMany: InputMaybe<CourseEnrollmentCreateManyCourseInputEnvelope>;
  delete: InputMaybe<Array<CourseEnrollmentWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<CourseEnrollmentScalarWhereInput>>;
  disconnect: InputMaybe<Array<CourseEnrollmentWhereUniqueInput>>;
  set: InputMaybe<Array<CourseEnrollmentWhereUniqueInput>>;
  update: InputMaybe<Array<CourseEnrollmentUpdateWithWhereUniqueWithoutCourseInput>>;
  updateMany: InputMaybe<Array<CourseEnrollmentUpdateManyWithWhereWithoutCourseInput>>;
  upsert: InputMaybe<Array<CourseEnrollmentUpsertWithWhereUniqueWithoutCourseInput>>;
};

export type CourseEnrollmentUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<CourseEnrollmentWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CourseEnrollmentCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<CourseEnrollmentCreateWithoutUserInput>>;
  createMany: InputMaybe<CourseEnrollmentCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<CourseEnrollmentWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<CourseEnrollmentScalarWhereInput>>;
  disconnect: InputMaybe<Array<CourseEnrollmentWhereUniqueInput>>;
  set: InputMaybe<Array<CourseEnrollmentWhereUniqueInput>>;
  update: InputMaybe<Array<CourseEnrollmentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<CourseEnrollmentUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<CourseEnrollmentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CourseEnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
  data: CourseEnrollmentUpdateWithoutCourseInput;
  where: CourseEnrollmentWhereUniqueInput;
};

export type CourseEnrollmentUpdateWithWhereUniqueWithoutUserInput = {
  data: CourseEnrollmentUpdateWithoutUserInput;
  where: CourseEnrollmentWhereUniqueInput;
};

export type CourseEnrollmentUpdateWithoutCourseInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutCoursesNestedInput>;
};

export type CourseEnrollmentUpdateWithoutUserInput = {
  course: InputMaybe<CourseUpdateOneRequiredWithoutEnrollmentsNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseEnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
  create: CourseEnrollmentCreateWithoutCourseInput;
  update: CourseEnrollmentUpdateWithoutCourseInput;
  where: CourseEnrollmentWhereUniqueInput;
};

export type CourseEnrollmentUpsertWithWhereUniqueWithoutUserInput = {
  create: CourseEnrollmentCreateWithoutUserInput;
  update: CourseEnrollmentUpdateWithoutUserInput;
  where: CourseEnrollmentWhereUniqueInput;
};

export type CourseEnrollmentWhereInput = {
  AND: InputMaybe<Array<CourseEnrollmentWhereInput>>;
  NOT: InputMaybe<Array<CourseEnrollmentWhereInput>>;
  OR: InputMaybe<Array<CourseEnrollmentWhereInput>>;
  course: InputMaybe<CourseRelationFilter>;
  courseId: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type CourseEnrollmentWhereUniqueInput = {
  AND: InputMaybe<Array<CourseEnrollmentWhereInput>>;
  NOT: InputMaybe<Array<CourseEnrollmentWhereInput>>;
  OR: InputMaybe<Array<CourseEnrollmentWhereInput>>;
  course: InputMaybe<CourseRelationFilter>;
  courseId: InputMaybe<StringFilter>;
  courseId_userId: InputMaybe<CourseEnrollmentCourseIdUserIdCompoundUniqueInput>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type CourseListRelationFilter = {
  every: InputMaybe<CourseWhereInput>;
  none: InputMaybe<CourseWhereInput>;
  some: InputMaybe<CourseWhereInput>;
};

export type CourseRelationFilter = {
  is: InputMaybe<CourseWhereInput>;
  isNot: InputMaybe<CourseWhereInput>;
};

export type CourseScalarWhereInput = {
  AND: InputMaybe<Array<CourseScalarWhereInput>>;
  NOT: InputMaybe<Array<CourseScalarWhereInput>>;
  OR: InputMaybe<Array<CourseScalarWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  description: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  teacherId: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type CourseUpdateInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  enrollments: InputMaybe<CourseEnrollmentUpdateManyWithoutCourseNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  media: InputMaybe<MediaUpdateManyWithoutCourseNestedInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  teacher: InputMaybe<UserUpdateOneRequiredWithoutCourseNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpdateManyWithWhereWithoutTeacherInput = {
  data: CourseUpdateManyMutationInput;
  where: CourseScalarWhereInput;
};

export type CourseUpdateManyWithoutTeacherNestedInput = {
  connect: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CourseCreateOrConnectWithoutTeacherInput>>;
  create: InputMaybe<Array<CourseCreateWithoutTeacherInput>>;
  createMany: InputMaybe<CourseCreateManyTeacherInputEnvelope>;
  delete: InputMaybe<Array<CourseWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<CourseScalarWhereInput>>;
  disconnect: InputMaybe<Array<CourseWhereUniqueInput>>;
  set: InputMaybe<Array<CourseWhereUniqueInput>>;
  update: InputMaybe<Array<CourseUpdateWithWhereUniqueWithoutTeacherInput>>;
  updateMany: InputMaybe<Array<CourseUpdateManyWithWhereWithoutTeacherInput>>;
  upsert: InputMaybe<Array<CourseUpsertWithWhereUniqueWithoutTeacherInput>>;
};

export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
  connect: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate: InputMaybe<CourseCreateOrConnectWithoutEnrollmentsInput>;
  create: InputMaybe<CourseCreateWithoutEnrollmentsInput>;
  update: InputMaybe<CourseUpdateToOneWithWhereWithoutEnrollmentsInput>;
  upsert: InputMaybe<CourseUpsertWithoutEnrollmentsInput>;
};

export type CourseUpdateOneRequiredWithoutMediaNestedInput = {
  connect: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate: InputMaybe<CourseCreateOrConnectWithoutMediaInput>;
  create: InputMaybe<CourseCreateWithoutMediaInput>;
  update: InputMaybe<CourseUpdateToOneWithWhereWithoutMediaInput>;
  upsert: InputMaybe<CourseUpsertWithoutMediaInput>;
};

export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
  data: CourseUpdateWithoutEnrollmentsInput;
  where: InputMaybe<CourseWhereInput>;
};

export type CourseUpdateToOneWithWhereWithoutMediaInput = {
  data: CourseUpdateWithoutMediaInput;
  where: InputMaybe<CourseWhereInput>;
};

export type CourseUpdateWithWhereUniqueWithoutTeacherInput = {
  data: CourseUpdateWithoutTeacherInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpdateWithoutEnrollmentsInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  media: InputMaybe<MediaUpdateManyWithoutCourseNestedInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  teacher: InputMaybe<UserUpdateOneRequiredWithoutCourseNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpdateWithoutMediaInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  enrollments: InputMaybe<CourseEnrollmentUpdateManyWithoutCourseNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  teacher: InputMaybe<UserUpdateOneRequiredWithoutCourseNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpdateWithoutTeacherInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  enrollments: InputMaybe<CourseEnrollmentUpdateManyWithoutCourseNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  media: InputMaybe<MediaUpdateManyWithoutCourseNestedInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpsertWithWhereUniqueWithoutTeacherInput = {
  create: CourseCreateWithoutTeacherInput;
  update: CourseUpdateWithoutTeacherInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpsertWithoutEnrollmentsInput = {
  create: CourseCreateWithoutEnrollmentsInput;
  update: CourseUpdateWithoutEnrollmentsInput;
  where: InputMaybe<CourseWhereInput>;
};

export type CourseUpsertWithoutMediaInput = {
  create: CourseCreateWithoutMediaInput;
  update: CourseUpdateWithoutMediaInput;
  where: InputMaybe<CourseWhereInput>;
};

export type CourseWhereInput = {
  AND: InputMaybe<Array<CourseWhereInput>>;
  NOT: InputMaybe<Array<CourseWhereInput>>;
  OR: InputMaybe<Array<CourseWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  description: InputMaybe<StringFilter>;
  enrollments: InputMaybe<CourseEnrollmentListRelationFilter>;
  id: InputMaybe<StringFilter>;
  media: InputMaybe<MediaListRelationFilter>;
  name: InputMaybe<StringFilter>;
  teacher: InputMaybe<UserRelationFilter>;
  teacherId: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type CourseWhereUniqueInput = {
  AND: InputMaybe<Array<CourseWhereInput>>;
  NOT: InputMaybe<Array<CourseWhereInput>>;
  OR: InputMaybe<Array<CourseWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  description: InputMaybe<StringFilter>;
  enrollments: InputMaybe<CourseEnrollmentListRelationFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  media: InputMaybe<MediaListRelationFilter>;
  name: InputMaybe<StringFilter>;
  teacher: InputMaybe<UserRelationFilter>;
  teacherId: InputMaybe<StringFilter>;
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

export type EnumMediaTypeFieldUpdateOperationsInput = {
  set: InputMaybe<MediaType>;
};

export type EnumMediaTypeFilter = {
  equals: InputMaybe<MediaType>;
  in: InputMaybe<Array<MediaType>>;
  not: InputMaybe<NestedEnumMediaTypeFilter>;
  notIn: InputMaybe<Array<MediaType>>;
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

export type Media = {
  __typename?: 'Media';
  Chat: Maybe<Chat>;
  chatId: Maybe<Scalars['String']['output']>;
  course: Course;
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  type: MediaType;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type MediaCreateManyChatInput = {
  courseId: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  type: MediaType;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type MediaCreateManyChatInputEnvelope = {
  data: Array<MediaCreateManyChatInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaCreateManyCourseInput = {
  chatId: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  type: MediaType;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type MediaCreateManyCourseInputEnvelope = {
  data: Array<MediaCreateManyCourseInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaCreateNestedManyWithoutChatInput = {
  connect: InputMaybe<Array<MediaWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MediaCreateOrConnectWithoutChatInput>>;
  create: InputMaybe<Array<MediaCreateWithoutChatInput>>;
  createMany: InputMaybe<MediaCreateManyChatInputEnvelope>;
};

export type MediaCreateNestedManyWithoutCourseInput = {
  connect: InputMaybe<Array<MediaWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MediaCreateOrConnectWithoutCourseInput>>;
  create: InputMaybe<Array<MediaCreateWithoutCourseInput>>;
  createMany: InputMaybe<MediaCreateManyCourseInputEnvelope>;
};

export type MediaCreateOrConnectWithoutChatInput = {
  create: MediaCreateWithoutChatInput;
  where: MediaWhereUniqueInput;
};

export type MediaCreateOrConnectWithoutCourseInput = {
  create: MediaCreateWithoutCourseInput;
  where: MediaWhereUniqueInput;
};

export type MediaCreateWithoutChatInput = {
  course: CourseCreateNestedOneWithoutMediaInput;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  type: MediaType;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type MediaCreateWithoutCourseInput = {
  Chat: InputMaybe<ChatCreateNestedOneWithoutMediaInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
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

export type MediaScalarWhereInput = {
  AND: InputMaybe<Array<MediaScalarWhereInput>>;
  NOT: InputMaybe<Array<MediaScalarWhereInput>>;
  OR: InputMaybe<Array<MediaScalarWhereInput>>;
  chatId: InputMaybe<StringNullableFilter>;
  courseId: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  type: InputMaybe<EnumMediaTypeFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  url: InputMaybe<StringFilter>;
};

export enum MediaType {
  AUDIO = 'AUDIO',
  DOCUMENT = 'DOCUMENT',
  IMAGE = 'IMAGE',
  OTHER = 'OTHER',
  VIDEO = 'VIDEO'
}

export type MediaUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  type: InputMaybe<EnumMediaTypeFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateManyWithWhereWithoutChatInput = {
  data: MediaUpdateManyMutationInput;
  where: MediaScalarWhereInput;
};

export type MediaUpdateManyWithWhereWithoutCourseInput = {
  data: MediaUpdateManyMutationInput;
  where: MediaScalarWhereInput;
};

export type MediaUpdateManyWithoutChatNestedInput = {
  connect: InputMaybe<Array<MediaWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MediaCreateOrConnectWithoutChatInput>>;
  create: InputMaybe<Array<MediaCreateWithoutChatInput>>;
  createMany: InputMaybe<MediaCreateManyChatInputEnvelope>;
  delete: InputMaybe<Array<MediaWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<MediaScalarWhereInput>>;
  disconnect: InputMaybe<Array<MediaWhereUniqueInput>>;
  set: InputMaybe<Array<MediaWhereUniqueInput>>;
  update: InputMaybe<Array<MediaUpdateWithWhereUniqueWithoutChatInput>>;
  updateMany: InputMaybe<Array<MediaUpdateManyWithWhereWithoutChatInput>>;
  upsert: InputMaybe<Array<MediaUpsertWithWhereUniqueWithoutChatInput>>;
};

export type MediaUpdateManyWithoutCourseNestedInput = {
  connect: InputMaybe<Array<MediaWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MediaCreateOrConnectWithoutCourseInput>>;
  create: InputMaybe<Array<MediaCreateWithoutCourseInput>>;
  createMany: InputMaybe<MediaCreateManyCourseInputEnvelope>;
  delete: InputMaybe<Array<MediaWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<MediaScalarWhereInput>>;
  disconnect: InputMaybe<Array<MediaWhereUniqueInput>>;
  set: InputMaybe<Array<MediaWhereUniqueInput>>;
  update: InputMaybe<Array<MediaUpdateWithWhereUniqueWithoutCourseInput>>;
  updateMany: InputMaybe<Array<MediaUpdateManyWithWhereWithoutCourseInput>>;
  upsert: InputMaybe<Array<MediaUpsertWithWhereUniqueWithoutCourseInput>>;
};

export type MediaUpdateWithWhereUniqueWithoutChatInput = {
  data: MediaUpdateWithoutChatInput;
  where: MediaWhereUniqueInput;
};

export type MediaUpdateWithWhereUniqueWithoutCourseInput = {
  data: MediaUpdateWithoutCourseInput;
  where: MediaWhereUniqueInput;
};

export type MediaUpdateWithoutChatInput = {
  course: InputMaybe<CourseUpdateOneRequiredWithoutMediaNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  type: InputMaybe<EnumMediaTypeFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateWithoutCourseInput = {
  Chat: InputMaybe<ChatUpdateOneWithoutMediaNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  type: InputMaybe<EnumMediaTypeFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpsertWithWhereUniqueWithoutChatInput = {
  create: MediaCreateWithoutChatInput;
  update: MediaUpdateWithoutChatInput;
  where: MediaWhereUniqueInput;
};

export type MediaUpsertWithWhereUniqueWithoutCourseInput = {
  create: MediaCreateWithoutCourseInput;
  update: MediaUpdateWithoutCourseInput;
  where: MediaWhereUniqueInput;
};

export type MediaWhereInput = {
  AND: InputMaybe<Array<MediaWhereInput>>;
  Chat: InputMaybe<ChatNullableRelationFilter>;
  NOT: InputMaybe<Array<MediaWhereInput>>;
  OR: InputMaybe<Array<MediaWhereInput>>;
  chatId: InputMaybe<StringNullableFilter>;
  course: InputMaybe<CourseRelationFilter>;
  courseId: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  type: InputMaybe<EnumMediaTypeFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  url: InputMaybe<StringFilter>;
};

export type MediaWhereUniqueInput = {
  AND: InputMaybe<Array<MediaWhereInput>>;
  Chat: InputMaybe<ChatNullableRelationFilter>;
  NOT: InputMaybe<Array<MediaWhereInput>>;
  OR: InputMaybe<Array<MediaWhereInput>>;
  chatId: InputMaybe<StringNullableFilter>;
  course: InputMaybe<CourseRelationFilter>;
  courseId: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<EnumMediaTypeFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  url: InputMaybe<StringFilter>;
};

export type Message = {
  __typename?: 'Message';
  chat: Chat;
  chatId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  sender: User;
  senderId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MessageCreateManyChatInput = {
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  senderId: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageCreateManyChatInputEnvelope = {
  data: Array<MessageCreateManyChatInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type MessageCreateManySenderInput = {
  chatId: Scalars['String']['input'];
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageCreateManySenderInputEnvelope = {
  data: Array<MessageCreateManySenderInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']['input']>;
};

export type MessageCreateNestedManyWithoutChatInput = {
  connect: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MessageCreateOrConnectWithoutChatInput>>;
  create: InputMaybe<Array<MessageCreateWithoutChatInput>>;
  createMany: InputMaybe<MessageCreateManyChatInputEnvelope>;
};

export type MessageCreateNestedManyWithoutSenderInput = {
  connect: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MessageCreateOrConnectWithoutSenderInput>>;
  create: InputMaybe<Array<MessageCreateWithoutSenderInput>>;
  createMany: InputMaybe<MessageCreateManySenderInputEnvelope>;
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
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  sender: UserCreateNestedOneWithoutMessagesInput;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageCreateWithoutSenderInput = {
  chat: ChatCreateNestedOneWithoutMessagesInput;
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageListRelationFilter = {
  every: InputMaybe<MessageWhereInput>;
  none: InputMaybe<MessageWhereInput>;
  some: InputMaybe<MessageWhereInput>;
};

export type MessageScalarWhereInput = {
  AND: InputMaybe<Array<MessageScalarWhereInput>>;
  NOT: InputMaybe<Array<MessageScalarWhereInput>>;
  OR: InputMaybe<Array<MessageScalarWhereInput>>;
  chatId: InputMaybe<StringFilter>;
  content: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  senderId: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type MessageUpdateManyMutationInput = {
  content: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateManyWithWhereWithoutChatInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithWhereWithoutSenderInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutChatNestedInput = {
  connect: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MessageCreateOrConnectWithoutChatInput>>;
  create: InputMaybe<Array<MessageCreateWithoutChatInput>>;
  createMany: InputMaybe<MessageCreateManyChatInputEnvelope>;
  delete: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect: InputMaybe<Array<MessageWhereUniqueInput>>;
  set: InputMaybe<Array<MessageWhereUniqueInput>>;
  update: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutChatInput>>;
  updateMany: InputMaybe<Array<MessageUpdateManyWithWhereWithoutChatInput>>;
  upsert: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutChatInput>>;
};

export type MessageUpdateManyWithoutSenderNestedInput = {
  connect: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MessageCreateOrConnectWithoutSenderInput>>;
  create: InputMaybe<Array<MessageCreateWithoutSenderInput>>;
  createMany: InputMaybe<MessageCreateManySenderInputEnvelope>;
  delete: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect: InputMaybe<Array<MessageWhereUniqueInput>>;
  set: InputMaybe<Array<MessageWhereUniqueInput>>;
  update: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutSenderInput>>;
  updateMany: InputMaybe<Array<MessageUpdateManyWithWhereWithoutSenderInput>>;
  upsert: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutSenderInput>>;
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
  content: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  sender: InputMaybe<UserUpdateOneRequiredWithoutMessagesNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateWithoutSenderInput = {
  chat: InputMaybe<ChatUpdateOneRequiredWithoutMessagesNestedInput>;
  content: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  AND: InputMaybe<Array<MessageWhereInput>>;
  NOT: InputMaybe<Array<MessageWhereInput>>;
  OR: InputMaybe<Array<MessageWhereInput>>;
  chat: InputMaybe<ChatRelationFilter>;
  chatId: InputMaybe<StringFilter>;
  content: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  sender: InputMaybe<UserRelationFilter>;
  senderId: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type MessageWhereUniqueInput = {
  AND: InputMaybe<Array<MessageWhereInput>>;
  NOT: InputMaybe<Array<MessageWhereInput>>;
  OR: InputMaybe<Array<MessageWhereInput>>;
  chat: InputMaybe<ChatRelationFilter>;
  chatId: InputMaybe<StringFilter>;
  content: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  sender: InputMaybe<UserRelationFilter>;
  senderId: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createChat: Chat;
  createCourse: Course;
  createCourseEnrollment: CourseEnrollment;
  createMessage: Message;
  createStudent: User;
  createTeacher: User;
  createUser: User;
  deleteChat: Chat;
  deleteCourse: Course;
  deleteCourseEnrollment: CourseEnrollment;
  deleteMessage: Message;
  deleteStudent: User;
  deleteTeacher: User;
  deleteUser: User;
  login: Scalars['String']['output'];
  register: User;
  updateCourse: Course;
  updateCourseEnrollment: CourseEnrollment;
  updateMessage: Message;
  updateStudent: User;
  updateTeacher: User;
  updateUser: User;
};


export type MutationCreateChatArgs = {
  data: ChatCreateInput;
};


export type MutationCreateCourseArgs = {
  data: CourseCreateInput;
};


export type MutationCreateCourseEnrollmentArgs = {
  data: CourseEnrollmentCreateInput;
};


export type MutationCreateMessageArgs = {
  chatId: Scalars['String']['input'];
  content: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
};


export type MutationCreateStudentArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateTeacherArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationDeleteChatArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCourseEnrollmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTeacherArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  data: UserCreateInput;
};


export type MutationUpdateCourseArgs = {
  data: CourseUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateCourseEnrollmentArgs = {
  data: CourseEnrollmentUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateMessageArgs = {
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationUpdateStudentArgs = {
  data: UserUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateTeacherArgs = {
  data: UserUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  id: Scalars['String']['input'];
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

export type NestedEnumMediaTypeFilter = {
  equals: InputMaybe<MediaType>;
  in: InputMaybe<Array<MediaType>>;
  not: InputMaybe<NestedEnumMediaTypeFilter>;
  notIn: InputMaybe<Array<MediaType>>;
};

export type NestedEnumUserRoleFilter = {
  equals: InputMaybe<UserRole>;
  in: InputMaybe<Array<UserRole>>;
  not: InputMaybe<NestedEnumUserRoleFilter>;
  notIn: InputMaybe<Array<UserRole>>;
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

export type NullableStringFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  chat: Chat;
  chats: Array<Chat>;
  courseEnrollment: Maybe<CourseEnrollment>;
  courseEnrollments: Array<CourseEnrollment>;
  getCourseById: Maybe<Course>;
  getCourses: Array<Course>;
  message: Message;
  messages: Array<Message>;
  student: Maybe<User>;
  students: Array<User>;
  teacher: Maybe<User>;
  teachers: Array<User>;
  user: Maybe<User>;
  users: Array<User>;
};


export type QueryChatArgs = {
  id: Scalars['String']['input'];
};


export type QueryChatsArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryCourseEnrollmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryCourseEnrollmentsArgs = {
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCourseByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCoursesArgs = {
  skip: InputMaybe<Scalars['Int']['input']>;
  take: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMessageArgs = {
  id: Scalars['String']['input'];
};


export type QueryStudentArgs = {
  id: Scalars['String']['input'];
};


export type QueryStudentsArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryTeacherArgs = {
  id: Scalars['String']['input'];
};


export type QueryTeachersArgs = {
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

export type User = {
  __typename?: 'User';
  Course: Maybe<Array<Course>>;
  _count: UserCount;
  chatsAsUser1: Maybe<Array<Chat>>;
  chatsAsUser2: Maybe<Array<Chat>>;
  courses: Maybe<Array<CourseEnrollment>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName: Maybe<Scalars['String']['output']>;
  messages: Maybe<Array<Message>>;
  password: Scalars['String']['output'];
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  Course: Scalars['Int']['output'];
  chatsAsUser1: Scalars['Int']['output'];
  chatsAsUser2: Scalars['Int']['output'];
  courses: Scalars['Int']['output'];
  messages: Scalars['Int']['output'];
};

export type UserCreateInput = {
  Course: InputMaybe<CourseCreateNestedManyWithoutTeacherInput>;
  chatsAsUser1: InputMaybe<ChatCreateNestedManyWithoutUser1Input>;
  chatsAsUser2: InputMaybe<ChatCreateNestedManyWithoutUser2Input>;
  courses: InputMaybe<CourseEnrollmentCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  messages: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  password: Scalars['String']['input'];
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedOneWithoutChatsAsUser1Input = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutChatsAsUser1Input>;
  create: InputMaybe<UserCreateWithoutChatsAsUser1Input>;
};

export type UserCreateNestedOneWithoutChatsAsUser2Input = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutChatsAsUser2Input>;
  create: InputMaybe<UserCreateWithoutChatsAsUser2Input>;
};

export type UserCreateNestedOneWithoutCourseInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutCourseInput>;
  create: InputMaybe<UserCreateWithoutCourseInput>;
};

export type UserCreateNestedOneWithoutCoursesInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutCoursesInput>;
  create: InputMaybe<UserCreateWithoutCoursesInput>;
};

export type UserCreateNestedOneWithoutMessagesInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create: InputMaybe<UserCreateWithoutMessagesInput>;
};

export type UserCreateOrConnectWithoutChatsAsUser1Input = {
  create: UserCreateWithoutChatsAsUser1Input;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChatsAsUser2Input = {
  create: UserCreateWithoutChatsAsUser2Input;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCourseInput = {
  create: UserCreateWithoutCourseInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCoursesInput = {
  create: UserCreateWithoutCoursesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutChatsAsUser1Input = {
  Course: InputMaybe<CourseCreateNestedManyWithoutTeacherInput>;
  chatsAsUser2: InputMaybe<ChatCreateNestedManyWithoutUser2Input>;
  courses: InputMaybe<CourseEnrollmentCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  messages: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  password: Scalars['String']['input'];
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutChatsAsUser2Input = {
  Course: InputMaybe<CourseCreateNestedManyWithoutTeacherInput>;
  chatsAsUser1: InputMaybe<ChatCreateNestedManyWithoutUser1Input>;
  courses: InputMaybe<CourseEnrollmentCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  messages: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  password: Scalars['String']['input'];
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutCourseInput = {
  chatsAsUser1: InputMaybe<ChatCreateNestedManyWithoutUser1Input>;
  chatsAsUser2: InputMaybe<ChatCreateNestedManyWithoutUser2Input>;
  courses: InputMaybe<CourseEnrollmentCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  messages: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  password: Scalars['String']['input'];
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutCoursesInput = {
  Course: InputMaybe<CourseCreateNestedManyWithoutTeacherInput>;
  chatsAsUser1: InputMaybe<ChatCreateNestedManyWithoutUser1Input>;
  chatsAsUser2: InputMaybe<ChatCreateNestedManyWithoutUser2Input>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  messages: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  password: Scalars['String']['input'];
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutMessagesInput = {
  Course: InputMaybe<CourseCreateNestedManyWithoutTeacherInput>;
  chatsAsUser1: InputMaybe<ChatCreateNestedManyWithoutUser1Input>;
  chatsAsUser2: InputMaybe<ChatCreateNestedManyWithoutUser2Input>;
  courses: InputMaybe<CourseEnrollmentCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role: InputMaybe<UserRole>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserRelationFilter = {
  is: InputMaybe<UserWhereInput>;
  isNot: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  USER = 'USER'
}

export type UserUpdateInput = {
  Course: InputMaybe<CourseUpdateManyWithoutTeacherNestedInput>;
  chatsAsUser1: InputMaybe<ChatUpdateManyWithoutUser1NestedInput>;
  chatsAsUser2: InputMaybe<ChatUpdateManyWithoutUser2NestedInput>;
  courses: InputMaybe<CourseEnrollmentUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutChatsAsUser1NestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutChatsAsUser1Input>;
  create: InputMaybe<UserCreateWithoutChatsAsUser1Input>;
  update: InputMaybe<UserUpdateToOneWithWhereWithoutChatsAsUser1Input>;
  upsert: InputMaybe<UserUpsertWithoutChatsAsUser1Input>;
};

export type UserUpdateOneRequiredWithoutChatsAsUser2NestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutChatsAsUser2Input>;
  create: InputMaybe<UserCreateWithoutChatsAsUser2Input>;
  update: InputMaybe<UserUpdateToOneWithWhereWithoutChatsAsUser2Input>;
  upsert: InputMaybe<UserUpsertWithoutChatsAsUser2Input>;
};

export type UserUpdateOneRequiredWithoutCourseNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutCourseInput>;
  create: InputMaybe<UserCreateWithoutCourseInput>;
  update: InputMaybe<UserUpdateToOneWithWhereWithoutCourseInput>;
  upsert: InputMaybe<UserUpsertWithoutCourseInput>;
};

export type UserUpdateOneRequiredWithoutCoursesNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutCoursesInput>;
  create: InputMaybe<UserCreateWithoutCoursesInput>;
  update: InputMaybe<UserUpdateToOneWithWhereWithoutCoursesInput>;
  upsert: InputMaybe<UserUpsertWithoutCoursesInput>;
};

export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create: InputMaybe<UserCreateWithoutMessagesInput>;
  update: InputMaybe<UserUpdateToOneWithWhereWithoutMessagesInput>;
  upsert: InputMaybe<UserUpsertWithoutMessagesInput>;
};

export type UserUpdateToOneWithWhereWithoutChatsAsUser1Input = {
  data: UserUpdateWithoutChatsAsUser1Input;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChatsAsUser2Input = {
  data: UserUpdateWithoutChatsAsUser2Input;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCourseInput = {
  data: UserUpdateWithoutCourseInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCoursesInput = {
  data: UserUpdateWithoutCoursesInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutMessagesInput = {
  data: UserUpdateWithoutMessagesInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutChatsAsUser1Input = {
  Course: InputMaybe<CourseUpdateManyWithoutTeacherNestedInput>;
  chatsAsUser2: InputMaybe<ChatUpdateManyWithoutUser2NestedInput>;
  courses: InputMaybe<CourseEnrollmentUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChatsAsUser2Input = {
  Course: InputMaybe<CourseUpdateManyWithoutTeacherNestedInput>;
  chatsAsUser1: InputMaybe<ChatUpdateManyWithoutUser1NestedInput>;
  courses: InputMaybe<CourseEnrollmentUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCourseInput = {
  chatsAsUser1: InputMaybe<ChatUpdateManyWithoutUser1NestedInput>;
  chatsAsUser2: InputMaybe<ChatUpdateManyWithoutUser2NestedInput>;
  courses: InputMaybe<CourseEnrollmentUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCoursesInput = {
  Course: InputMaybe<CourseUpdateManyWithoutTeacherNestedInput>;
  chatsAsUser1: InputMaybe<ChatUpdateManyWithoutUser1NestedInput>;
  chatsAsUser2: InputMaybe<ChatUpdateManyWithoutUser2NestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMessagesInput = {
  Course: InputMaybe<CourseUpdateManyWithoutTeacherNestedInput>;
  chatsAsUser1: InputMaybe<ChatUpdateManyWithoutUser1NestedInput>;
  chatsAsUser2: InputMaybe<ChatUpdateManyWithoutUser2NestedInput>;
  courses: InputMaybe<CourseEnrollmentUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  role: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutChatsAsUser1Input = {
  create: UserCreateWithoutChatsAsUser1Input;
  update: UserUpdateWithoutChatsAsUser1Input;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChatsAsUser2Input = {
  create: UserCreateWithoutChatsAsUser2Input;
  update: UserUpdateWithoutChatsAsUser2Input;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCourseInput = {
  create: UserCreateWithoutCourseInput;
  update: UserUpdateWithoutCourseInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCoursesInput = {
  create: UserCreateWithoutCoursesInput;
  update: UserUpdateWithoutCoursesInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  update: UserUpdateWithoutMessagesInput;
  where: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND: InputMaybe<Array<UserWhereInput>>;
  Course: InputMaybe<CourseListRelationFilter>;
  NOT: InputMaybe<Array<UserWhereInput>>;
  OR: InputMaybe<Array<UserWhereInput>>;
  chatsAsUser1: InputMaybe<ChatListRelationFilter>;
  chatsAsUser2: InputMaybe<ChatListRelationFilter>;
  courses: InputMaybe<CourseEnrollmentListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  email: InputMaybe<StringFilter>;
  firstName: InputMaybe<StringNullableFilter>;
  id: InputMaybe<StringFilter>;
  lastName: InputMaybe<StringNullableFilter>;
  messages: InputMaybe<MessageListRelationFilter>;
  password: InputMaybe<StringFilter>;
  role: InputMaybe<EnumUserRoleFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND: InputMaybe<Array<UserWhereInput>>;
  Course: InputMaybe<CourseListRelationFilter>;
  NOT: InputMaybe<Array<UserWhereInput>>;
  OR: InputMaybe<Array<UserWhereInput>>;
  chatsAsUser1: InputMaybe<ChatListRelationFilter>;
  chatsAsUser2: InputMaybe<ChatListRelationFilter>;
  courses: InputMaybe<CourseEnrollmentListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  email: InputMaybe<Scalars['String']['input']>;
  firstName: InputMaybe<StringNullableFilter>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<StringNullableFilter>;
  messages: InputMaybe<MessageListRelationFilter>;
  password: InputMaybe<StringFilter>;
  role: InputMaybe<EnumUserRoleFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
};

export type RegisterMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type CreateChatMutationVariables = Exact<{
  data: ChatCreateInput;
}>;


export type CreateChatMutation = { __typename?: 'Mutation', createChat: { __typename?: 'Chat', id: string, userId1: string, userId2: string, createdAt: any, updatedAt: any } };

export type DeleteChatMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteChatMutation = { __typename?: 'Mutation', deleteChat: { __typename?: 'Chat', id: string, userId1: string, userId2: string, createdAt: any, updatedAt: any } };

export type CreateCourseEnrollmentMutationVariables = Exact<{
  data: CourseEnrollmentCreateInput;
}>;


export type CreateCourseEnrollmentMutation = { __typename?: 'Mutation', createCourseEnrollment: { __typename?: 'CourseEnrollment', id: string, courseId: string, userId: string, createdAt: any } };

export type UpdateCourseEnrollmentMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: CourseEnrollmentUpdateInput;
}>;


export type UpdateCourseEnrollmentMutation = { __typename?: 'Mutation', updateCourseEnrollment: { __typename?: 'CourseEnrollment', id: string, courseId: string, userId: string, createdAt: any } };

export type DeleteCourseEnrollmentMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCourseEnrollmentMutation = { __typename?: 'Mutation', deleteCourseEnrollment: { __typename?: 'CourseEnrollment', id: string, courseId: string, userId: string, createdAt: any } };

export type CreateCourseMutationVariables = Exact<{
  data: CourseCreateInput;
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'Course', id: string, name: string, description: string, teacherId: string, createdAt: any, updatedAt: any } };

export type UpdateCourseMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: CourseUpdateInput;
}>;


export type UpdateCourseMutation = { __typename?: 'Mutation', updateCourse: { __typename?: 'Course', id: string, name: string, description: string, teacherId: string, createdAt: any, updatedAt: any } };

export type DeleteCourseMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCourseMutation = { __typename?: 'Mutation', deleteCourse: { __typename?: 'Course', id: string, name: string, description: string, teacherId: string, createdAt: any, updatedAt: any } };

export type CreateMessageMutationVariables = Exact<{
  content: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
  chatId: Scalars['String']['input'];
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: string, content: string, senderId: string, chatId: string, createdAt: any } };

export type UpdateMessageMutationVariables = Exact<{
  id: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type UpdateMessageMutation = { __typename?: 'Mutation', updateMessage: { __typename?: 'Message', id: string, content: string, senderId: string, chatId: string, createdAt: any } };

export type DeleteMessageMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteMessageMutation = { __typename?: 'Mutation', deleteMessage: { __typename?: 'Message', id: string, content: string, senderId: string, chatId: string, createdAt: any } };

export type CreateStudentMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', createStudent: { __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any } };

export type UpdateStudentMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: UserUpdateInput;
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateStudent: { __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any } };

export type DeleteStudentMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteStudentMutation = { __typename?: 'Mutation', deleteStudent: { __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any } };

export type CreateTeacherMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
}>;


export type CreateTeacherMutation = { __typename?: 'Mutation', createTeacher: { __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole } };

export type UpdateTeacherMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: UserUpdateInput;
}>;


export type UpdateTeacherMutation = { __typename?: 'Mutation', updateTeacher: { __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any } };

export type DeleteTeacherMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteTeacherMutation = { __typename?: 'Mutation', deleteTeacher: { __typename?: 'User', id: string, email: string, role: UserRole } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, email: string, role: UserRole } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: string, email: string, role: UserRole } };

export type ChatsQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type ChatsQuery = { __typename?: 'Query', chats: Array<{ __typename?: 'Chat', id: string, userId1: string, userId2: string, createdAt: any, updatedAt: any }> };

export type ChatQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ChatQuery = { __typename?: 'Query', chat: { __typename?: 'Chat', id: string, userId1: string, userId2: string, createdAt: any, updatedAt: any } };

export type CourseEnrollmentsQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type CourseEnrollmentsQuery = { __typename?: 'Query', courseEnrollments: Array<{ __typename?: 'CourseEnrollment', id: string, courseId: string, userId: string, createdAt: any }> };

export type CourseEnrollmentQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CourseEnrollmentQuery = { __typename?: 'Query', courseEnrollment: { __typename?: 'CourseEnrollment', id: string, courseId: string, userId: string, createdAt: any } | undefined | null };

export type GetCourseByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCourseByIdQuery = { __typename?: 'Query', getCourseById: { __typename?: 'Course', id: string, name: string, description: string, teacherId: string, createdAt: any, updatedAt: any } | undefined | null };

export type GetCoursesQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type GetCoursesQuery = { __typename?: 'Query', getCourses: Array<{ __typename?: 'Course', id: string, name: string, description: string, teacherId: string, createdAt: any, updatedAt: any }> };

export type GetMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: string, content: string, senderId: string, chatId: string, createdAt: any }> };

export type MessageQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type MessageQuery = { __typename?: 'Query', message: { __typename?: 'Message', id: string, content: string, senderId: string, chatId: string, createdAt: any } };

export type StudentQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type StudentQuery = { __typename?: 'Query', student: { __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any } | undefined | null };

export type StudentsQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type StudentsQuery = { __typename?: 'Query', students: Array<{ __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any }> };

export type GetTeacherQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetTeacherQuery = { __typename?: 'Query', teacher: { __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any } | undefined | null };

export type GetTeachersQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type GetTeachersQuery = { __typename?: 'Query', teachers: Array<{ __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any } | undefined | null };

export type GetUsersQueryVariables = Exact<{
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
}>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, firstName: string | undefined | null, lastName: string | undefined | null, role: UserRole, createdAt: any, updatedAt: any }> };


export const RegisterDocument = gql`
    mutation register($data: UserCreateInput!) {
  register(data: $data) {
    id
    email
    firstName
    lastName
    role
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
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password)
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
export const CreateChatDocument = gql`
    mutation createChat($data: ChatCreateInput!) {
  createChat(data: $data) {
    id
    userId1
    userId2
    createdAt
    updatedAt
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
export const DeleteChatDocument = gql`
    mutation deleteChat($id: String!) {
  deleteChat(id: $id) {
    id
    userId1
    userId2
    createdAt
    updatedAt
  }
}
    `;
export type DeleteChatMutationFn = Apollo.MutationFunction<DeleteChatMutation, DeleteChatMutationVariables>;

/**
 * __useDeleteChatMutation__
 *
 * To run a mutation, you first call `useDeleteChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteChatMutation, { data, loading, error }] = useDeleteChatMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteChatMutation(baseOptions?: Apollo.MutationHookOptions<DeleteChatMutation, DeleteChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteChatMutation, DeleteChatMutationVariables>(DeleteChatDocument, options);
      }
export type DeleteChatMutationHookResult = ReturnType<typeof useDeleteChatMutation>;
export type DeleteChatMutationResult = Apollo.MutationResult<DeleteChatMutation>;
export type DeleteChatMutationOptions = Apollo.BaseMutationOptions<DeleteChatMutation, DeleteChatMutationVariables>;
export const CreateCourseEnrollmentDocument = gql`
    mutation createCourseEnrollment($data: CourseEnrollmentCreateInput!) {
  createCourseEnrollment(data: $data) {
    id
    courseId
    userId
    createdAt
  }
}
    `;
export type CreateCourseEnrollmentMutationFn = Apollo.MutationFunction<CreateCourseEnrollmentMutation, CreateCourseEnrollmentMutationVariables>;

/**
 * __useCreateCourseEnrollmentMutation__
 *
 * To run a mutation, you first call `useCreateCourseEnrollmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseEnrollmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseEnrollmentMutation, { data, loading, error }] = useCreateCourseEnrollmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCourseEnrollmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseEnrollmentMutation, CreateCourseEnrollmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseEnrollmentMutation, CreateCourseEnrollmentMutationVariables>(CreateCourseEnrollmentDocument, options);
      }
export type CreateCourseEnrollmentMutationHookResult = ReturnType<typeof useCreateCourseEnrollmentMutation>;
export type CreateCourseEnrollmentMutationResult = Apollo.MutationResult<CreateCourseEnrollmentMutation>;
export type CreateCourseEnrollmentMutationOptions = Apollo.BaseMutationOptions<CreateCourseEnrollmentMutation, CreateCourseEnrollmentMutationVariables>;
export const UpdateCourseEnrollmentDocument = gql`
    mutation updateCourseEnrollment($id: String!, $data: CourseEnrollmentUpdateInput!) {
  updateCourseEnrollment(id: $id, data: $data) {
    id
    courseId
    userId
    createdAt
  }
}
    `;
export type UpdateCourseEnrollmentMutationFn = Apollo.MutationFunction<UpdateCourseEnrollmentMutation, UpdateCourseEnrollmentMutationVariables>;

/**
 * __useUpdateCourseEnrollmentMutation__
 *
 * To run a mutation, you first call `useUpdateCourseEnrollmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseEnrollmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseEnrollmentMutation, { data, loading, error }] = useUpdateCourseEnrollmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCourseEnrollmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCourseEnrollmentMutation, UpdateCourseEnrollmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCourseEnrollmentMutation, UpdateCourseEnrollmentMutationVariables>(UpdateCourseEnrollmentDocument, options);
      }
export type UpdateCourseEnrollmentMutationHookResult = ReturnType<typeof useUpdateCourseEnrollmentMutation>;
export type UpdateCourseEnrollmentMutationResult = Apollo.MutationResult<UpdateCourseEnrollmentMutation>;
export type UpdateCourseEnrollmentMutationOptions = Apollo.BaseMutationOptions<UpdateCourseEnrollmentMutation, UpdateCourseEnrollmentMutationVariables>;
export const DeleteCourseEnrollmentDocument = gql`
    mutation deleteCourseEnrollment($id: String!) {
  deleteCourseEnrollment(id: $id) {
    id
    courseId
    userId
    createdAt
  }
}
    `;
export type DeleteCourseEnrollmentMutationFn = Apollo.MutationFunction<DeleteCourseEnrollmentMutation, DeleteCourseEnrollmentMutationVariables>;

/**
 * __useDeleteCourseEnrollmentMutation__
 *
 * To run a mutation, you first call `useDeleteCourseEnrollmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseEnrollmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCourseEnrollmentMutation, { data, loading, error }] = useDeleteCourseEnrollmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCourseEnrollmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCourseEnrollmentMutation, DeleteCourseEnrollmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCourseEnrollmentMutation, DeleteCourseEnrollmentMutationVariables>(DeleteCourseEnrollmentDocument, options);
      }
export type DeleteCourseEnrollmentMutationHookResult = ReturnType<typeof useDeleteCourseEnrollmentMutation>;
export type DeleteCourseEnrollmentMutationResult = Apollo.MutationResult<DeleteCourseEnrollmentMutation>;
export type DeleteCourseEnrollmentMutationOptions = Apollo.BaseMutationOptions<DeleteCourseEnrollmentMutation, DeleteCourseEnrollmentMutationVariables>;
export const CreateCourseDocument = gql`
    mutation createCourse($data: CourseCreateInput!) {
  createCourse(data: $data) {
    id
    name
    description
    teacherId
    createdAt
    updatedAt
  }
}
    `;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;
export const UpdateCourseDocument = gql`
    mutation updateCourse($id: String!, $data: CourseUpdateInput!) {
  updateCourse(id: $id, data: $data) {
    id
    name
    description
    teacherId
    createdAt
    updatedAt
  }
}
    `;
export type UpdateCourseMutationFn = Apollo.MutationFunction<UpdateCourseMutation, UpdateCourseMutationVariables>;

/**
 * __useUpdateCourseMutation__
 *
 * To run a mutation, you first call `useUpdateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseMutation, { data, loading, error }] = useUpdateCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCourseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCourseMutation, UpdateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCourseMutation, UpdateCourseMutationVariables>(UpdateCourseDocument, options);
      }
export type UpdateCourseMutationHookResult = ReturnType<typeof useUpdateCourseMutation>;
export type UpdateCourseMutationResult = Apollo.MutationResult<UpdateCourseMutation>;
export type UpdateCourseMutationOptions = Apollo.BaseMutationOptions<UpdateCourseMutation, UpdateCourseMutationVariables>;
export const DeleteCourseDocument = gql`
    mutation deleteCourse($id: String!) {
  deleteCourse(id: $id) {
    id
    name
    description
    teacherId
    createdAt
    updatedAt
  }
}
    `;
export type DeleteCourseMutationFn = Apollo.MutationFunction<DeleteCourseMutation, DeleteCourseMutationVariables>;

/**
 * __useDeleteCourseMutation__
 *
 * To run a mutation, you first call `useDeleteCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCourseMutation, { data, loading, error }] = useDeleteCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCourseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCourseMutation, DeleteCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCourseMutation, DeleteCourseMutationVariables>(DeleteCourseDocument, options);
      }
export type DeleteCourseMutationHookResult = ReturnType<typeof useDeleteCourseMutation>;
export type DeleteCourseMutationResult = Apollo.MutationResult<DeleteCourseMutation>;
export type DeleteCourseMutationOptions = Apollo.BaseMutationOptions<DeleteCourseMutation, DeleteCourseMutationVariables>;
export const CreateMessageDocument = gql`
    mutation createMessage($content: String!, $senderId: String!, $chatId: String!) {
  createMessage(content: $content, senderId: $senderId, chatId: $chatId) {
    id
    content
    senderId
    chatId
    createdAt
  }
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      content: // value for 'content'
 *      senderId: // value for 'senderId'
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const UpdateMessageDocument = gql`
    mutation updateMessage($id: String!, $content: String!) {
  updateMessage(id: $id, content: $content) {
    id
    content
    senderId
    chatId
    createdAt
  }
}
    `;
export type UpdateMessageMutationFn = Apollo.MutationFunction<UpdateMessageMutation, UpdateMessageMutationVariables>;

/**
 * __useUpdateMessageMutation__
 *
 * To run a mutation, you first call `useUpdateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMessageMutation, { data, loading, error }] = useUpdateMessageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateMessageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMessageMutation, UpdateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMessageMutation, UpdateMessageMutationVariables>(UpdateMessageDocument, options);
      }
export type UpdateMessageMutationHookResult = ReturnType<typeof useUpdateMessageMutation>;
export type UpdateMessageMutationResult = Apollo.MutationResult<UpdateMessageMutation>;
export type UpdateMessageMutationOptions = Apollo.BaseMutationOptions<UpdateMessageMutation, UpdateMessageMutationVariables>;
export const DeleteMessageDocument = gql`
    mutation deleteMessage($id: String!) {
  deleteMessage(id: $id) {
    id
    content
    senderId
    chatId
    createdAt
  }
}
    `;
export type DeleteMessageMutationFn = Apollo.MutationFunction<DeleteMessageMutation, DeleteMessageMutationVariables>;

/**
 * __useDeleteMessageMutation__
 *
 * To run a mutation, you first call `useDeleteMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMessageMutation, { data, loading, error }] = useDeleteMessageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMessageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMessageMutation, DeleteMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMessageMutation, DeleteMessageMutationVariables>(DeleteMessageDocument, options);
      }
export type DeleteMessageMutationHookResult = ReturnType<typeof useDeleteMessageMutation>;
export type DeleteMessageMutationResult = Apollo.MutationResult<DeleteMessageMutation>;
export type DeleteMessageMutationOptions = Apollo.BaseMutationOptions<DeleteMessageMutation, DeleteMessageMutationVariables>;
export const CreateStudentDocument = gql`
    mutation createStudent($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  createStudent(
    email: $email
    password: $password
    firstName: $firstName
    lastName: $lastName
  ) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
}
    `;
export type CreateStudentMutationFn = Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>;

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useCreateStudentMutation(baseOptions?: Apollo.MutationHookOptions<CreateStudentMutation, CreateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
      }
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutation>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables>;
export const UpdateStudentDocument = gql`
    mutation updateStudent($id: String!, $data: UserUpdateInput!) {
  updateStudent(id: $id, data: $data) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
}
    `;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;
export const DeleteStudentDocument = gql`
    mutation deleteStudent($id: String!) {
  deleteStudent(id: $id) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
}
    `;
export type DeleteStudentMutationFn = Apollo.MutationFunction<DeleteStudentMutation, DeleteStudentMutationVariables>;

/**
 * __useDeleteStudentMutation__
 *
 * To run a mutation, you first call `useDeleteStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStudentMutation, { data, loading, error }] = useDeleteStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStudentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStudentMutation, DeleteStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStudentMutation, DeleteStudentMutationVariables>(DeleteStudentDocument, options);
      }
export type DeleteStudentMutationHookResult = ReturnType<typeof useDeleteStudentMutation>;
export type DeleteStudentMutationResult = Apollo.MutationResult<DeleteStudentMutation>;
export type DeleteStudentMutationOptions = Apollo.BaseMutationOptions<DeleteStudentMutation, DeleteStudentMutationVariables>;
export const CreateTeacherDocument = gql`
    mutation CreateTeacher($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  createTeacher(
    email: $email
    password: $password
    firstName: $firstName
    lastName: $lastName
  ) {
    id
    email
    firstName
    lastName
    role
  }
}
    `;
export type CreateTeacherMutationFn = Apollo.MutationFunction<CreateTeacherMutation, CreateTeacherMutationVariables>;

/**
 * __useCreateTeacherMutation__
 *
 * To run a mutation, you first call `useCreateTeacherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeacherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeacherMutation, { data, loading, error }] = useCreateTeacherMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useCreateTeacherMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeacherMutation, CreateTeacherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeacherMutation, CreateTeacherMutationVariables>(CreateTeacherDocument, options);
      }
export type CreateTeacherMutationHookResult = ReturnType<typeof useCreateTeacherMutation>;
export type CreateTeacherMutationResult = Apollo.MutationResult<CreateTeacherMutation>;
export type CreateTeacherMutationOptions = Apollo.BaseMutationOptions<CreateTeacherMutation, CreateTeacherMutationVariables>;
export const UpdateTeacherDocument = gql`
    mutation UpdateTeacher($id: String!, $data: UserUpdateInput!) {
  updateTeacher(id: $id, data: $data) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
}
    `;
export type UpdateTeacherMutationFn = Apollo.MutationFunction<UpdateTeacherMutation, UpdateTeacherMutationVariables>;

/**
 * __useUpdateTeacherMutation__
 *
 * To run a mutation, you first call `useUpdateTeacherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTeacherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTeacherMutation, { data, loading, error }] = useUpdateTeacherMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTeacherMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTeacherMutation, UpdateTeacherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTeacherMutation, UpdateTeacherMutationVariables>(UpdateTeacherDocument, options);
      }
export type UpdateTeacherMutationHookResult = ReturnType<typeof useUpdateTeacherMutation>;
export type UpdateTeacherMutationResult = Apollo.MutationResult<UpdateTeacherMutation>;
export type UpdateTeacherMutationOptions = Apollo.BaseMutationOptions<UpdateTeacherMutation, UpdateTeacherMutationVariables>;
export const DeleteTeacherDocument = gql`
    mutation DeleteTeacher($id: String!) {
  deleteTeacher(id: $id) {
    id
    email
    role
  }
}
    `;
export type DeleteTeacherMutationFn = Apollo.MutationFunction<DeleteTeacherMutation, DeleteTeacherMutationVariables>;

/**
 * __useDeleteTeacherMutation__
 *
 * To run a mutation, you first call `useDeleteTeacherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTeacherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTeacherMutation, { data, loading, error }] = useDeleteTeacherMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTeacherMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTeacherMutation, DeleteTeacherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTeacherMutation, DeleteTeacherMutationVariables>(DeleteTeacherDocument, options);
      }
export type DeleteTeacherMutationHookResult = ReturnType<typeof useDeleteTeacherMutation>;
export type DeleteTeacherMutationResult = Apollo.MutationResult<DeleteTeacherMutation>;
export type DeleteTeacherMutationOptions = Apollo.BaseMutationOptions<DeleteTeacherMutation, DeleteTeacherMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $password: String!) {
  createUser(email: $email, password: $password) {
    id
    email
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
 *      email: // value for 'email'
 *      password: // value for 'password'
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
    mutation UpdateUser($id: String!, $data: UserUpdateInput!) {
  updateUser(id: $id, data: $data) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
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
 *      id: // value for 'id'
 *      data: // value for 'data'
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
    email
    role
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
export const ChatsDocument = gql`
    query chats($skip: Int!, $take: Int!) {
  chats(skip: $skip, take: $take) {
    id
    userId1
    userId2
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useChatsQuery__
 *
 * To run a query within a React component, call `useChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useChatsQuery(baseOptions: Apollo.QueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, options);
      }
export function useChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, options);
        }
export type ChatsQueryHookResult = ReturnType<typeof useChatsQuery>;
export type ChatsLazyQueryHookResult = ReturnType<typeof useChatsLazyQuery>;
export type ChatsQueryResult = Apollo.QueryResult<ChatsQuery, ChatsQueryVariables>;
export const ChatDocument = gql`
    query chat($id: String!) {
  chat(id: $id) {
    id
    userId1
    userId2
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useChatQuery__
 *
 * To run a query within a React component, call `useChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChatQuery(baseOptions: Apollo.QueryHookOptions<ChatQuery, ChatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatQuery, ChatQueryVariables>(ChatDocument, options);
      }
export function useChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatQuery, ChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatQuery, ChatQueryVariables>(ChatDocument, options);
        }
export type ChatQueryHookResult = ReturnType<typeof useChatQuery>;
export type ChatLazyQueryHookResult = ReturnType<typeof useChatLazyQuery>;
export type ChatQueryResult = Apollo.QueryResult<ChatQuery, ChatQueryVariables>;
export const CourseEnrollmentsDocument = gql`
    query courseEnrollments($skip: Int!, $take: Int!) {
  courseEnrollments(skip: $skip, take: $take) {
    id
    courseId
    userId
    createdAt
  }
}
    `;

/**
 * __useCourseEnrollmentsQuery__
 *
 * To run a query within a React component, call `useCourseEnrollmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseEnrollmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseEnrollmentsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useCourseEnrollmentsQuery(baseOptions: Apollo.QueryHookOptions<CourseEnrollmentsQuery, CourseEnrollmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseEnrollmentsQuery, CourseEnrollmentsQueryVariables>(CourseEnrollmentsDocument, options);
      }
export function useCourseEnrollmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseEnrollmentsQuery, CourseEnrollmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseEnrollmentsQuery, CourseEnrollmentsQueryVariables>(CourseEnrollmentsDocument, options);
        }
export type CourseEnrollmentsQueryHookResult = ReturnType<typeof useCourseEnrollmentsQuery>;
export type CourseEnrollmentsLazyQueryHookResult = ReturnType<typeof useCourseEnrollmentsLazyQuery>;
export type CourseEnrollmentsQueryResult = Apollo.QueryResult<CourseEnrollmentsQuery, CourseEnrollmentsQueryVariables>;
export const CourseEnrollmentDocument = gql`
    query courseEnrollment($id: String!) {
  courseEnrollment(id: $id) {
    id
    courseId
    userId
    createdAt
  }
}
    `;

/**
 * __useCourseEnrollmentQuery__
 *
 * To run a query within a React component, call `useCourseEnrollmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseEnrollmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseEnrollmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCourseEnrollmentQuery(baseOptions: Apollo.QueryHookOptions<CourseEnrollmentQuery, CourseEnrollmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseEnrollmentQuery, CourseEnrollmentQueryVariables>(CourseEnrollmentDocument, options);
      }
export function useCourseEnrollmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseEnrollmentQuery, CourseEnrollmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseEnrollmentQuery, CourseEnrollmentQueryVariables>(CourseEnrollmentDocument, options);
        }
export type CourseEnrollmentQueryHookResult = ReturnType<typeof useCourseEnrollmentQuery>;
export type CourseEnrollmentLazyQueryHookResult = ReturnType<typeof useCourseEnrollmentLazyQuery>;
export type CourseEnrollmentQueryResult = Apollo.QueryResult<CourseEnrollmentQuery, CourseEnrollmentQueryVariables>;
export const GetCourseByIdDocument = gql`
    query getCourseById($id: String!) {
  getCourseById(id: $id) {
    id
    name
    description
    teacherId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetCourseByIdQuery__
 *
 * To run a query within a React component, call `useGetCourseByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCourseByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCourseByIdQuery, GetCourseByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCourseByIdQuery, GetCourseByIdQueryVariables>(GetCourseByIdDocument, options);
      }
export function useGetCourseByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCourseByIdQuery, GetCourseByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCourseByIdQuery, GetCourseByIdQueryVariables>(GetCourseByIdDocument, options);
        }
export type GetCourseByIdQueryHookResult = ReturnType<typeof useGetCourseByIdQuery>;
export type GetCourseByIdLazyQueryHookResult = ReturnType<typeof useGetCourseByIdLazyQuery>;
export type GetCourseByIdQueryResult = Apollo.QueryResult<GetCourseByIdQuery, GetCourseByIdQueryVariables>;
export const GetCoursesDocument = gql`
    query getCourses($skip: Int!, $take: Int!) {
  getCourses(skip: $skip, take: $take) {
    id
    name
    description
    teacherId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetCoursesQuery__
 *
 * To run a query within a React component, call `useGetCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetCoursesQuery(baseOptions: Apollo.QueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options);
      }
export function useGetCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options);
        }
export type GetCoursesQueryHookResult = ReturnType<typeof useGetCoursesQuery>;
export type GetCoursesLazyQueryHookResult = ReturnType<typeof useGetCoursesLazyQuery>;
export type GetCoursesQueryResult = Apollo.QueryResult<GetCoursesQuery, GetCoursesQueryVariables>;
export const GetMessagesDocument = gql`
    query getMessages {
  messages {
    id
    content
    senderId
    chatId
    createdAt
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions?: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const MessageDocument = gql`
    query message($id: String!) {
  message(id: $id) {
    id
    content
    senderId
    chatId
    createdAt
  }
}
    `;

/**
 * __useMessageQuery__
 *
 * To run a query within a React component, call `useMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMessageQuery(baseOptions: Apollo.QueryHookOptions<MessageQuery, MessageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessageQuery, MessageQueryVariables>(MessageDocument, options);
      }
export function useMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessageQuery, MessageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessageQuery, MessageQueryVariables>(MessageDocument, options);
        }
export type MessageQueryHookResult = ReturnType<typeof useMessageQuery>;
export type MessageLazyQueryHookResult = ReturnType<typeof useMessageLazyQuery>;
export type MessageQueryResult = Apollo.QueryResult<MessageQuery, MessageQueryVariables>;
export const StudentDocument = gql`
    query student($id: String!) {
  student(id: $id) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useStudentQuery__
 *
 * To run a query within a React component, call `useStudentQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStudentQuery(baseOptions: Apollo.QueryHookOptions<StudentQuery, StudentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentQuery, StudentQueryVariables>(StudentDocument, options);
      }
export function useStudentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentQuery, StudentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentQuery, StudentQueryVariables>(StudentDocument, options);
        }
export type StudentQueryHookResult = ReturnType<typeof useStudentQuery>;
export type StudentLazyQueryHookResult = ReturnType<typeof useStudentLazyQuery>;
export type StudentQueryResult = Apollo.QueryResult<StudentQuery, StudentQueryVariables>;
export const StudentsDocument = gql`
    query students($skip: Int!, $take: Int!) {
  students(skip: $skip, take: $take) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useStudentsQuery__
 *
 * To run a query within a React component, call `useStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useStudentsQuery(baseOptions: Apollo.QueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, options);
      }
export function useStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, options);
        }
export type StudentsQueryHookResult = ReturnType<typeof useStudentsQuery>;
export type StudentsLazyQueryHookResult = ReturnType<typeof useStudentsLazyQuery>;
export type StudentsQueryResult = Apollo.QueryResult<StudentsQuery, StudentsQueryVariables>;
export const GetTeacherDocument = gql`
    query GetTeacher($id: String!) {
  teacher(id: $id) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetTeacherQuery__
 *
 * To run a query within a React component, call `useGetTeacherQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeacherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeacherQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTeacherQuery(baseOptions: Apollo.QueryHookOptions<GetTeacherQuery, GetTeacherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeacherQuery, GetTeacherQueryVariables>(GetTeacherDocument, options);
      }
export function useGetTeacherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeacherQuery, GetTeacherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeacherQuery, GetTeacherQueryVariables>(GetTeacherDocument, options);
        }
export type GetTeacherQueryHookResult = ReturnType<typeof useGetTeacherQuery>;
export type GetTeacherLazyQueryHookResult = ReturnType<typeof useGetTeacherLazyQuery>;
export type GetTeacherQueryResult = Apollo.QueryResult<GetTeacherQuery, GetTeacherQueryVariables>;
export const GetTeachersDocument = gql`
    query GetTeachers($skip: Int!, $take: Int!) {
  teachers(skip: $skip, take: $take) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetTeachersQuery__
 *
 * To run a query within a React component, call `useGetTeachersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeachersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeachersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetTeachersQuery(baseOptions: Apollo.QueryHookOptions<GetTeachersQuery, GetTeachersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeachersQuery, GetTeachersQueryVariables>(GetTeachersDocument, options);
      }
export function useGetTeachersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeachersQuery, GetTeachersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeachersQuery, GetTeachersQueryVariables>(GetTeachersDocument, options);
        }
export type GetTeachersQueryHookResult = ReturnType<typeof useGetTeachersQuery>;
export type GetTeachersLazyQueryHookResult = ReturnType<typeof useGetTeachersLazyQuery>;
export type GetTeachersQueryResult = Apollo.QueryResult<GetTeachersQuery, GetTeachersQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: String!) {
  user(id: $id) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($skip: Int!, $take: Int!) {
  users(skip: $skip, take: $take) {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;