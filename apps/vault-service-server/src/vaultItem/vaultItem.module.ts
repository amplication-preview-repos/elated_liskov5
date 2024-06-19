import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VaultItemModuleBase } from "./base/vaultItem.module.base";
import { VaultItemService } from "./vaultItem.service";
import { VaultItemController } from "./vaultItem.controller";
import { VaultItemResolver } from "./vaultItem.resolver";

@Module({
  imports: [VaultItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [VaultItemController],
  providers: [VaultItemService, VaultItemResolver],
  exports: [VaultItemService],
})
export class VaultItemModule {}
