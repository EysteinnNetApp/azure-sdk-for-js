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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualNetworkOperationsMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a VirtualNetworkOperations. */
export class VirtualNetworkOperations {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a VirtualNetworkOperations.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List virtual networks.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkListResponse>
   */
  list(resourceGroupName: string, labName: string, options?: Models.VirtualNetworkListOptionalParams): Promise<Models.VirtualNetworkListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, options: Models.VirtualNetworkListOptionalParams, callback: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): void;
  list(resourceGroupName: string, labName: string, options?: Models.VirtualNetworkListOptionalParams | msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): Promise<Models.VirtualNetworkListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualNetworkListResponse>;
  }

  /**
   * Get virtual network.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkGetResourceResponse>
   */
  getResource(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGetResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param callback The callback
   */
  getResource(resourceGroupName: string, labName: string, name: string, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param options The optional parameters
   * @param callback The callback
   */
  getResource(resourceGroupName: string, labName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  getResource(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetwork>, callback?: msRest.ServiceCallback<Models.VirtualNetwork>): Promise<Models.VirtualNetworkGetResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        options
      },
      getResourceOperationSpec,
      callback) as Promise<Models.VirtualNetworkGetResourceResponse>;
  }

  /**
   * Create or replace an existing virtual network. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param virtualNetwork
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkCreateOrUpdateResourceResponse>
   */
  createOrUpdateResource(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetwork, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkCreateOrUpdateResourceResponse> {
    return this.beginCreateOrUpdateResource(resourceGroupName,labName,name,virtualNetwork,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualNetworkCreateOrUpdateResourceResponse>;
  }

  /**
   * Delete virtual network. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteResource(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteResource(resourceGroupName,labName,name,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Modify properties of virtual networks.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param virtualNetwork
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkPatchResourceResponse>
   */
  patchResource(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetwork, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkPatchResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param virtualNetwork
   * @param callback The callback
   */
  patchResource(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetwork, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param virtualNetwork
   * @param options The optional parameters
   * @param callback The callback
   */
  patchResource(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetwork, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  patchResource(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetwork, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetwork>, callback?: msRest.ServiceCallback<Models.VirtualNetwork>): Promise<Models.VirtualNetworkPatchResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        virtualNetwork,
        options
      },
      patchResourceOperationSpec,
      callback) as Promise<Models.VirtualNetworkPatchResourceResponse>;
  }

  /**
   * Create or replace an existing virtual network. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param virtualNetwork
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdateResource(resourceGroupName: string, labName: string, name: string, virtualNetwork: Models.VirtualNetwork, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        name,
        virtualNetwork,
        options
      },
      beginCreateOrUpdateResourceOperationSpec,
      options);
  }

  /**
   * Delete virtual network. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the virtual network.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteResource(resourceGroupName: string, labName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        name,
        options
      },
      beginDeleteResourceOperationSpec,
      options);
  }

  /**
   * List virtual networks.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationVirtualNetwork>): Promise<Models.VirtualNetworkListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualNetworkListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.orderBy,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationVirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const patchResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "virtualNetwork",
    mapper: {
      ...Mappers.VirtualNetwork,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "virtualNetwork",
    mapper: {
      ...Mappers.VirtualNetwork,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
    },
    201: {
      bodyMapper: Mappers.VirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationVirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
