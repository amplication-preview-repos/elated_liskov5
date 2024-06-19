import { SortOrder } from "../../util/SortOrder";

export type VaultItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  vaultId?: SortOrder;
};
