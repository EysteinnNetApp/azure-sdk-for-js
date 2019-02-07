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
import { DevTestLabsClientContext } from "./devTestLabsClientContext";


class DevTestLabsClient extends DevTestLabsClientContext {
  // Operation groups
  lab: operations.LabOperations;
  artifactSource: operations.ArtifactSourceOperations;
  artifact: operations.ArtifactOperations;
  costInsight: operations.CostInsightOperations;
  cost: operations.CostOperations;
  customImage: operations.CustomImageOperations;
  formula: operations.FormulaOperations;
  galleryImage: operations.GalleryImageOperations;
  policySet: operations.PolicySet;
  policy: operations.PolicyOperations;
  schedule: operations.ScheduleOperations;
  virtualMachine: operations.VirtualMachine;
  virtualNetwork: operations.VirtualNetworkOperations;

  /**
   * Initializes a new instance of the DevTestLabsClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.DevTestLabsClientOptions) {
    super(credentials, subscriptionId, options);
    this.lab = new operations.LabOperations(this);
    this.artifactSource = new operations.ArtifactSourceOperations(this);
    this.artifact = new operations.ArtifactOperations(this);
    this.costInsight = new operations.CostInsightOperations(this);
    this.cost = new operations.CostOperations(this);
    this.customImage = new operations.CustomImageOperations(this);
    this.formula = new operations.FormulaOperations(this);
    this.galleryImage = new operations.GalleryImageOperations(this);
    this.policySet = new operations.PolicySet(this);
    this.policy = new operations.PolicyOperations(this);
    this.schedule = new operations.ScheduleOperations(this);
    this.virtualMachine = new operations.VirtualMachine(this);
    this.virtualNetwork = new operations.VirtualNetworkOperations(this);
  }
}

// Operation Specifications

export {
  DevTestLabsClient,
  DevTestLabsClientContext,
  Models as DevTestLabsModels,
  Mappers as DevTestLabsMappers
};
export * from "./operations";
