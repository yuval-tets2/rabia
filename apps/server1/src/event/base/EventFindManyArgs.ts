/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventWhereInput } from "./EventWhereInput";
import { Type } from "class-transformer";
import { EventOrderByInput } from "./EventOrderByInput";

@ArgsType()
class EventFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EventWhereInput,
  })
  @Field(() => EventWhereInput, { nullable: true })
  @Type(() => EventWhereInput)
  where?: EventWhereInput;

  @ApiProperty({
    required: false,
    type: [EventOrderByInput],
  })
  @Field(() => [EventOrderByInput], { nullable: true })
  @Type(() => EventOrderByInput)
  orderBy?: Array<EventOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EventFindManyArgs as EventFindManyArgs };
