import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VaultItemService } from "./vaultItem.service";
import { VaultItemControllerBase } from "./base/vaultItem.controller.base";

@swagger.ApiTags("vaultItems")
@common.Controller("vaultItems")
export class VaultItemController extends VaultItemControllerBase {
  constructor(
    protected readonly service: VaultItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
