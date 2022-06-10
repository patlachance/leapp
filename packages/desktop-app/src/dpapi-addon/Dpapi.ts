/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { IMsalEncryptionService } from "@noovolari/leapp-core/interfaces/i-msal-encryption-service";
import * as bindings from "bindings";

export const dpApi: IMsalEncryptionService = bindings({
  bindings: "dpapi",
  userDefinedTries: [["module_root", "node_modules", "build", "Release", "bindings"]],
});

export default dpApi;
