/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { ContainerRegistryManagementClientContext } from "./containerRegistryManagementClientContext";


class ContainerRegistryManagementClient extends ContainerRegistryManagementClientContext {
  // Operation groups
  registries: operations.Registries;
  operations: operations.Operations;
  replications: operations.Replications;
  webhooks: operations.Webhooks;
  runs: operations.Runs;
  tasks: operations.Tasks;

  /**
   * Initializes a new instance of the ContainerRegistryManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The Microsoft Azure subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ContainerRegistryManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.registries = new operations.Registries(this);
    this.operations = new operations.Operations(this);
    this.replications = new operations.Replications(this);
    this.webhooks = new operations.Webhooks(this);
    this.runs = new operations.Runs(this);
    this.tasks = new operations.Tasks(this);
  }
}

// Operation Specifications

export {
  ContainerRegistryManagementClient,
  ContainerRegistryManagementClientContext,
  Models as ContainerRegistryManagementModels,
  Mappers as ContainerRegistryManagementMappers
};
export * from "./operations";
