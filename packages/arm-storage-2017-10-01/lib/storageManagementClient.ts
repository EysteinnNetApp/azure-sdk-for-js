/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { StorageManagementClientContext } from "./storageManagementClientContext";


class StorageManagementClient extends StorageManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  skus: operations.Skus;
  storageAccounts: operations.StorageAccounts;
  usage: operations.UsageOperations;

  /**
   * Initializes a new instance of the StorageManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.StorageManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.skus = new operations.Skus(this);
    this.storageAccounts = new operations.StorageAccounts(this);
    this.usage = new operations.UsageOperations(this);
  }
}

// Operation Specifications

export {
  StorageManagementClient,
  StorageManagementClientContext,
  Models as StorageManagementModels,
  Mappers as StorageManagementMappers
};
export * from "./operations";
