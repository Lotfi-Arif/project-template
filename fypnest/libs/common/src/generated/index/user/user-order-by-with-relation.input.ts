import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StudentOrderByWithRelationInput } from '../student/student-order-by-with-relation.input';
import { StaffOrderByWithRelationInput } from '../staff/staff-order-by-with-relation.input';
import { CounselorOrderByWithRelationInput } from '../counselor/counselor-order-by-with-relation.input';
import { AdminOrderByWithRelationInput } from '../admin/admin-order-by-with-relation.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { CounselorSessionOrderByWithRelationInput } from '../counselor-session/counselor-session-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

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

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: PostOrderByRelationAggregateInput;

    @Field(() => CounselorSessionOrderByWithRelationInput, {nullable:true})
    counselingSession?: CounselorSessionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
