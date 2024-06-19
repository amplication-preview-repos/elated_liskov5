import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VaultCreateNestedManyWithoutAccountsInput } from "./VaultCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  vaults?: VaultCreateNestedManyWithoutAccountsInput;
};
