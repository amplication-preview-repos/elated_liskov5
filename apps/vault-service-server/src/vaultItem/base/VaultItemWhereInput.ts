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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { EnumVaultItemTypeField } from "./EnumVaultItemTypeField";
import { VaultWhereUniqueInput } from "../../vault/base/VaultWhereUniqueInput";

@InputType()
class VaultItemWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumVaultItemTypeField,
  })
  @IsEnum(EnumVaultItemTypeField)
  @IsOptional()
  @Field(() => EnumVaultItemTypeField, {
    nullable: true,
  })
  typeField?: "Option1";

  @ApiProperty({
    required: false,
    type: () => VaultWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VaultWhereUniqueInput)
  @IsOptional()
  @Field(() => VaultWhereUniqueInput, {
    nullable: true,
  })
  vault?: VaultWhereUniqueInput;
}

export { VaultItemWhereInput as VaultItemWhereInput };