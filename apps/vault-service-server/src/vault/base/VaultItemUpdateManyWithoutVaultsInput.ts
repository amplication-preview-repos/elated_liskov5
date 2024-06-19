/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VaultItemWhereUniqueInput } from "../../vaultItem/base/VaultItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VaultItemUpdateManyWithoutVaultsInput {
  @Field(() => [VaultItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VaultItemWhereUniqueInput],
  })
  connect?: Array<VaultItemWhereUniqueInput>;

  @Field(() => [VaultItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VaultItemWhereUniqueInput],
  })
  disconnect?: Array<VaultItemWhereUniqueInput>;

  @Field(() => [VaultItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VaultItemWhereUniqueInput],
  })
  set?: Array<VaultItemWhereUniqueInput>;
}

export { VaultItemUpdateManyWithoutVaultsInput as VaultItemUpdateManyWithoutVaultsInput };