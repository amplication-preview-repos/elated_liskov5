import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VaultWhereUniqueInput } from "../vault/VaultWhereUniqueInput";

export type VaultItemWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
  vault?: VaultWhereUniqueInput;
};
