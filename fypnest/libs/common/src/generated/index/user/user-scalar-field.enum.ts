import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    firstName = "firstName",
    lastName = "lastName",
    mobile = "mobile",
    gender = "gender",
    accountStatus = "accountStatus",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    chatId = "chatId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
