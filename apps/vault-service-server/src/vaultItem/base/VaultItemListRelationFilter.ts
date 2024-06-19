/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VaultItemWhereInput } from "./VaultItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VaultItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VaultItemWhereInput,
  })
  @ValidateNested()
  @Type(() => VaultItemWhereInput)
  @IsOptional()
  @Field(() => VaultItemWhereInput, {
    nullable: true,
  })
  every?: VaultItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => VaultItemWhereInput,
  })
  @ValidateNested()
  @Type(() => VaultItemWhereInput)
  @IsOptional()
  @Field(() => VaultItemWhereInput, {
    nullable: true,
  })
  some?: VaultItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => VaultItemWhereInput,
  })
  @ValidateNested()
  @Type(() => VaultItemWhereInput)
  @IsOptional()
  @Field(() => VaultItemWhereInput, {
    nullable: true,
  })
  none?: VaultItemWhereInput;
}
export { VaultItemListRelationFilter as VaultItemListRelationFilter };