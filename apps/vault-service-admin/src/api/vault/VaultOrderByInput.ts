import { SortOrder } from "../../util/SortOrder";

export type VaultOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  sharedWith?: SortOrder;
  updatedAt?: SortOrder;
};
