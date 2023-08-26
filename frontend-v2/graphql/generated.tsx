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
  createUser: User;
  deleteChat: Chat;
  deleteCourse: Course;
  deleteCourseEnrollment: CourseEnrollment;
  deleteUser: User;
  login: Scalars['String']['output'];
  register: User;
  updateCourse: Course;
  updateCourseEnrollment: CourseEnrollment;
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
  TEACHER = 'TEACHER'
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

export type UserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string } | undefined | null };


export const UserDocument = gql`
    query user($id: String!) {
  user(id: $id) {
    id
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;