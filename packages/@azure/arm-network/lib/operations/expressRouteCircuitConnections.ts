/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/expressRouteCircuitConnectionsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ExpressRouteCircuitConnections. */
export class ExpressRouteCircuitConnections {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ExpressRouteCircuitConnections.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified Express Route Circuit Connection from the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param connectionName The name of the express route circuit connection.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,circuitName,peeringName,connectionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified Express Route Circuit Connection from the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param connectionName The name of the express route circuit connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitConnectionsGetResponse>
   */
  get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitConnectionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param connectionName The name of the express route circuit connection.
   * @param callback The callback
   */
  get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param connectionName The name of the express route circuit connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): void;
  get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitConnection>): Promise<Models.ExpressRouteCircuitConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        connectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitConnectionsGetResponse>;
  }

  /**
   * Creates or updates a Express Route Circuit Connection in the specified express route circuits.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param connectionName The name of the express route circuit connection.
   * @param expressRouteCircuitConnectionParameters Parameters supplied to the create or update
   * express route circuit connection operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitConnectionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitConnectionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,circuitName,peeringName,connectionName,expressRouteCircuitConnectionParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCircuitConnectionsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the specified Express Route Circuit Connection from the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param connectionName The name of the express route circuit connection.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        connectionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a Express Route Circuit Connection in the specified express route circuits.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param connectionName The name of the express route circuit connection.
   * @param expressRouteCircuitConnectionParameters Parameters supplied to the create or update
   * express route circuit connection operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: Models.ExpressRouteCircuitConnection, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        connectionName,
        expressRouteCircuitConnectionParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/connections/{connectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.peeringName,
    Parameters.connectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuitConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/connections/{connectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.peeringName,
    Parameters.connectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/connections/{connectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.peeringName,
    Parameters.connectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "expressRouteCircuitConnectionParameters",
    mapper: {
      ...Mappers.ExpressRouteCircuitConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuitConnection
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCircuitConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
