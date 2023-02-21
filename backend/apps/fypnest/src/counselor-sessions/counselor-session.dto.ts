import { CounselorSessionCreateInput } from "@app/common/generated/index/counselor-session/counselor-session-create.input";
import { Field, InputType, OmitType, ArgsType } from "@nestjs/graphql";

@InputType()
export class CreateCounselorSessionInput extends OmitType(CounselorSessionCreateInput, ["timeFrom", "timeTo", "counsellingDate"]) {
    @Field()
    timeFrom: number;

    @Field()
    timeTo: number;
    @Field()
    counsellingDate: number;
}

@ArgsType()
export class CreateCounselorSessionArguments {
    @Field(() => CreateCounselorSessionInput)
    data: CreateCounselorSessionInput
} 
