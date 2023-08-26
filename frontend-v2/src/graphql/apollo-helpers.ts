import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ChatKeySpecifier = ('_count' | 'createdAt' | 'id' | 'media' | 'messages' | 'updatedAt' | 'user1' | 'user2' | 'userId1' | 'userId2' | ChatKeySpecifier)[];
export type ChatFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user1?: FieldPolicy<any> | FieldReadFunction<any>,
	user2?: FieldPolicy<any> | FieldReadFunction<any>,
	userId1?: FieldPolicy<any> | FieldReadFunction<any>,
	userId2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatCountKeySpecifier = ('media' | 'messages' | ChatCountKeySpecifier)[];
export type ChatCountFieldPolicy = {
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseKeySpecifier = ('_count' | 'createdAt' | 'description' | 'enrollments' | 'id' | 'media' | 'name' | 'teacher' | 'teacherId' | 'updatedAt' | CourseKeySpecifier)[];
export type CourseFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	enrollments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	teacher?: FieldPolicy<any> | FieldReadFunction<any>,
	teacherId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseCountKeySpecifier = ('enrollments' | 'media' | CourseCountKeySpecifier)[];
export type CourseCountFieldPolicy = {
	enrollments?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseEnrollmentKeySpecifier = ('course' | 'courseId' | 'createdAt' | 'id' | 'updatedAt' | 'user' | 'userId' | CourseEnrollmentKeySpecifier)[];
export type CourseEnrollmentFieldPolicy = {
	course?: FieldPolicy<any> | FieldReadFunction<any>,
	courseId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaKeySpecifier = ('Chat' | 'chatId' | 'course' | 'courseId' | 'createdAt' | 'id' | 'type' | 'updatedAt' | 'url' | MediaKeySpecifier)[];
export type MediaFieldPolicy = {
	Chat?: FieldPolicy<any> | FieldReadFunction<any>,
	chatId?: FieldPolicy<any> | FieldReadFunction<any>,
	course?: FieldPolicy<any> | FieldReadFunction<any>,
	courseId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageKeySpecifier = ('chat' | 'chatId' | 'content' | 'createdAt' | 'id' | 'sender' | 'senderId' | 'updatedAt' | MessageKeySpecifier)[];
export type MessageFieldPolicy = {
	chat?: FieldPolicy<any> | FieldReadFunction<any>,
	chatId?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	senderId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createChat' | 'createCourse' | 'createCourseEnrollment' | 'createUser' | 'deleteChat' | 'deleteCourse' | 'deleteCourseEnrollment' | 'deleteUser' | 'login' | 'register' | 'updateCourse' | 'updateCourseEnrollment' | 'updateUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createChat?: FieldPolicy<any> | FieldReadFunction<any>,
	createCourse?: FieldPolicy<any> | FieldReadFunction<any>,
	createCourseEnrollment?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteChat?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCourse?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCourseEnrollment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCourse?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCourseEnrollment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('chat' | 'chats' | 'courseEnrollment' | 'courseEnrollments' | 'getCourseById' | 'getCourses' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	chat?: FieldPolicy<any> | FieldReadFunction<any>,
	chats?: FieldPolicy<any> | FieldReadFunction<any>,
	courseEnrollment?: FieldPolicy<any> | FieldReadFunction<any>,
	courseEnrollments?: FieldPolicy<any> | FieldReadFunction<any>,
	getCourseById?: FieldPolicy<any> | FieldReadFunction<any>,
	getCourses?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('Course' | '_count' | 'chatsAsUser1' | 'chatsAsUser2' | 'courses' | 'createdAt' | 'email' | 'firstName' | 'id' | 'lastName' | 'messages' | 'password' | 'role' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	Course?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	chatsAsUser1?: FieldPolicy<any> | FieldReadFunction<any>,
	chatsAsUser2?: FieldPolicy<any> | FieldReadFunction<any>,
	courses?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountKeySpecifier = ('Course' | 'chatsAsUser1' | 'chatsAsUser2' | 'courses' | 'messages' | UserCountKeySpecifier)[];
export type UserCountFieldPolicy = {
	Course?: FieldPolicy<any> | FieldReadFunction<any>,
	chatsAsUser1?: FieldPolicy<any> | FieldReadFunction<any>,
	chatsAsUser2?: FieldPolicy<any> | FieldReadFunction<any>,
	courses?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Chat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatKeySpecifier | (() => undefined | ChatKeySpecifier),
		fields?: ChatFieldPolicy,
	},
	ChatCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatCountKeySpecifier | (() => undefined | ChatCountKeySpecifier),
		fields?: ChatCountFieldPolicy,
	},
	Course?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseKeySpecifier | (() => undefined | CourseKeySpecifier),
		fields?: CourseFieldPolicy,
	},
	CourseCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseCountKeySpecifier | (() => undefined | CourseCountKeySpecifier),
		fields?: CourseCountFieldPolicy,
	},
	CourseEnrollment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseEnrollmentKeySpecifier | (() => undefined | CourseEnrollmentKeySpecifier),
		fields?: CourseEnrollmentFieldPolicy,
	},
	Media?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaKeySpecifier | (() => undefined | MediaKeySpecifier),
		fields?: MediaFieldPolicy,
	},
	Message?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageKeySpecifier | (() => undefined | MessageKeySpecifier),
		fields?: MessageFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
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