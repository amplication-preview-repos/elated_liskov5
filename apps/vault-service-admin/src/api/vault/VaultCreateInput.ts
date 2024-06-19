import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { VaultItemCreateNestedManyWithoutVaultsInput } from "./VaultItemCreateNestedManyWithoutVaultsInput";

export type VaultCreateInput = {
  account?: AccountWhereUniqueInput | null;
  name?: string | null;
  sharedWith?: Array<"Option1">;
  vaultItems?: VaultItemCreateNestedManyWithoutVaultsInput;
};
