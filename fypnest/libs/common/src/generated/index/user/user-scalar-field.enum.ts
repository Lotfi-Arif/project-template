import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    password = "password",
    mobile = "mobile",
    gender = "gender",
    accountStatus = "accountStatus",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    chatId = "chatId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
