import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VaultItemListRelationFilter } from "../vaultItem/VaultItemListRelationFilter";

export type VaultWhereInput = {
  account?: AccountWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  vaultItems?: VaultItemListRelationFilter;
};
