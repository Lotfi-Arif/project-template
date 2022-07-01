import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StudentOrderByWithRelationInput } from '../student/student-order-by-with-relation.input';
import { StaffOrderByWithRelationInput } from '../staff/staff-order-by-with-relation.input';
import { CounselorOrderByWithRelationInput } from '../counselor/counselor-order-by-with-relation.input';
import { AdminOrderByWithRelationInput } from '../admin/admin-order-by-with-relation.input';
import { CounselorSessionOrderByRelationAggregateInput } from '../counselor-session/counselor-session-order-by-relation-aggregate.input';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { ChatOrderByWithRelationInput } from '../chat/chat-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => StudentOrderByWithRelationInput, {nullable:true})
    student?: StudentOrderByWithRelationInput;

    @Field(() => StaffOrderByWithRelationInput, {nullable:true})
    staff?: StaffOrderByWithRelationInput;

    @Field(() => CounselorOrderByWithRelationInput, {nullable:true})
    counselor?: CounselorOrderByWithRelationInput;

    @Field(() => AdminOrderByWithRelationInput, {nullable:true})
    admin?: AdminOrderByWithRelationInput;

    @Field(() => CounselorSessionOrderByRelationAggregateInput, {nullable:true})
    counselingSession?: CounselorSessionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    Message?: MessageOrderByRelationAggregateInput;

    @Field(() => ChatOrderByWithRelationInput, {nullable:true})
    Chat?: ChatOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    chatId?: keyof typeof SortOrder;
}
