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
import * as Mappers from "../models/applicationGatewaysMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ApplicationGateways. */
export class ApplicationGateways {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ApplicationGateways.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified application gateway.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, applicationGatewayName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified application gateway.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, applicationGatewayName: string): Promise<Models.ApplicationGatewaysGetResponse>;
  get(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysGetResponse>;
  get(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<Models.ApplicationGateway>): void;
  get(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGateway>): void;
  get(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationGateway>): Promise<Models.ApplicationGatewaysGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationGatewayName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApplicationGatewaysGetResponse>;
  }


  /**
   * Creates or updates the specified application gateway.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {ApplicationGateway} parameters Parameters supplied to the create or update application
   * gateway operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, applicationGatewayName, parameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApplicationGatewaysCreateOrUpdateResponse>;
  }


  /**
   * Updates the specified application gateway tags.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {TagsObject} parameters Parameters supplied to update application gateway tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  updateTags(resourceGroupName: string, applicationGatewayName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName, applicationGatewayName, parameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApplicationGatewaysUpdateTagsResponse>;
  }

  /**
   * Lists all application gateways in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string): Promise<Models.ApplicationGatewaysListResponse>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysListResponse>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): Promise<Models.ApplicationGatewaysListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ApplicationGatewaysListResponse>;
  }

  /**
   * Gets all the application gateways in a subscription.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAll(): Promise<Models.ApplicationGatewaysListAllResponse>;
  listAll(options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysListAllResponse>;
  listAll(callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
  listAll(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): Promise<Models.ApplicationGatewaysListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.ApplicationGatewaysListAllResponse>;
  }


  /**
   * Starts the specified application gateway.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  start(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName, applicationGatewayName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }


  /**
   * Stops the specified application gateway in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  stop(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName, applicationGatewayName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }


  /**
   * Gets the backend health of the specified application gateway in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {ApplicationGatewaysBackendHealthOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  backendHealth(resourceGroupName: string, applicationGatewayName: string, options?: Models.ApplicationGatewaysBackendHealthOptionalParams): Promise<Models.ApplicationGatewaysBackendHealthResponse> {
    return this.beginBackendHealth(resourceGroupName, applicationGatewayName, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApplicationGatewaysBackendHealthResponse>;
  }

  /**
   * Lists all available web application firewall rule sets.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAvailableWafRuleSets(): Promise<Models.ApplicationGatewaysListAvailableWafRuleSetsResponse>;
  listAvailableWafRuleSets(options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysListAvailableWafRuleSetsResponse>;
  listAvailableWafRuleSets(callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableWafRuleSetsResult>): void;
  listAvailableWafRuleSets(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableWafRuleSetsResult>): void;
  listAvailableWafRuleSets(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationGatewayAvailableWafRuleSetsResult>): Promise<Models.ApplicationGatewaysListAvailableWafRuleSetsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAvailableWafRuleSetsOperationSpec,
      callback) as Promise<Models.ApplicationGatewaysListAvailableWafRuleSetsResponse>;
  }

  /**
   * Lists available Ssl options for configuring Ssl policy.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAvailableSslOptions(): Promise<Models.ApplicationGatewaysListAvailableSslOptionsResponse>;
  listAvailableSslOptions(options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysListAvailableSslOptionsResponse>;
  listAvailableSslOptions(callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslOptions>): void;
  listAvailableSslOptions(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslOptions>): void;
  listAvailableSslOptions(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslOptions>): Promise<Models.ApplicationGatewaysListAvailableSslOptionsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAvailableSslOptionsOperationSpec,
      callback) as Promise<Models.ApplicationGatewaysListAvailableSslOptionsResponse>;
  }

  /**
   * Lists all SSL predefined policies for configuring Ssl policy.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAvailableSslPredefinedPolicies(): Promise<Models.ApplicationGatewaysListAvailableSslPredefinedPoliciesResponse>;
  listAvailableSslPredefinedPolicies(options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysListAvailableSslPredefinedPoliciesResponse>;
  listAvailableSslPredefinedPolicies(callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslPredefinedPolicies>): void;
  listAvailableSslPredefinedPolicies(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslPredefinedPolicies>): void;
  listAvailableSslPredefinedPolicies(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslPredefinedPolicies>): Promise<Models.ApplicationGatewaysListAvailableSslPredefinedPoliciesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAvailableSslPredefinedPoliciesOperationSpec,
      callback) as Promise<Models.ApplicationGatewaysListAvailableSslPredefinedPoliciesResponse>;
  }

  /**
   * Gets Ssl predefined policy with the specified policy name.
   *
   * @param {string} predefinedPolicyName Name of Ssl predefined policy.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getSslPredefinedPolicy(predefinedPolicyName: string): Promise<Models.ApplicationGatewaysGetSslPredefinedPolicyResponse>;
  getSslPredefinedPolicy(predefinedPolicyName: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysGetSslPredefinedPolicyResponse>;
  getSslPredefinedPolicy(predefinedPolicyName: string, callback: msRest.ServiceCallback<Models.ApplicationGatewaySslPredefinedPolicy>): void;
  getSslPredefinedPolicy(predefinedPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewaySslPredefinedPolicy>): void;
  getSslPredefinedPolicy(predefinedPolicyName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationGatewaySslPredefinedPolicy>): Promise<Models.ApplicationGatewaysGetSslPredefinedPolicyResponse> {
    return this.client.sendOperationRequest(
      {
        predefinedPolicyName,
        options
      },
      getSslPredefinedPolicyOperationSpec,
      callback) as Promise<Models.ApplicationGatewaysGetSslPredefinedPolicyResponse>;
  }

  /**
   * Deletes the specified application gateway.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applicationGatewayName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates the specified application gateway.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {ApplicationGateway} parameters Parameters supplied to the create or update application
   * gateway operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: Models.ApplicationGateway, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applicationGatewayName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates the specified application gateway tags.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {TagsObject} parameters Parameters supplied to update application gateway tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginUpdateTags(resourceGroupName: string, applicationGatewayName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applicationGatewayName,
        parameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * Starts the specified application gateway.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginStart(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applicationGatewayName,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Stops the specified application gateway in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginStop(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applicationGatewayName,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * Gets the backend health of the specified application gateway in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} applicationGatewayName The name of the application gateway.
   *
   * @param {ApplicationGatewaysBeginBackendHealthOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginBackendHealth(resourceGroupName: string, applicationGatewayName: string, options?: Models.ApplicationGatewaysBeginBackendHealthOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applicationGatewayName,
        options
      },
      beginBackendHealthOperationSpec,
      options);
  }

  /**
   * Lists all application gateways in a resource group.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listNext(nextPageLink: string): Promise<Models.ApplicationGatewaysListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): Promise<Models.ApplicationGatewaysListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ApplicationGatewaysListNextResponse>;
  }

  /**
   * Gets all the application gateways in a subscription.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAllNext(nextPageLink: string): Promise<Models.ApplicationGatewaysListAllNextResponse>;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysListAllNextResponse>;
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationGatewayListResult>): Promise<Models.ApplicationGatewaysListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.ApplicationGatewaysListAllNextResponse>;
  }

  /**
   * Lists all SSL predefined policies for configuring Ssl policy.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAvailableSslPredefinedPoliciesNext(nextPageLink: string): Promise<Models.ApplicationGatewaysListAvailableSslPredefinedPoliciesNextResponse>;
  listAvailableSslPredefinedPoliciesNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewaysListAvailableSslPredefinedPoliciesNextResponse>;
  listAvailableSslPredefinedPoliciesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslPredefinedPolicies>): void;
  listAvailableSslPredefinedPoliciesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslPredefinedPolicies>): void;
  listAvailableSslPredefinedPoliciesNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationGatewayAvailableSslPredefinedPolicies>): Promise<Models.ApplicationGatewaysListAvailableSslPredefinedPoliciesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAvailableSslPredefinedPoliciesNextOperationSpec,
      callback) as Promise<Models.ApplicationGatewaysListAvailableSslPredefinedPoliciesNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
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
      bodyMapper: Mappers.ApplicationGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.ApplicationGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGateways",
  urlParameters: [
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
      bodyMapper: Mappers.ApplicationGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAvailableWafRuleSetsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableWafRuleSets",
  urlParameters: [
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
      bodyMapper: Mappers.ApplicationGatewayAvailableWafRuleSetsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAvailableSslOptionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default",
  urlParameters: [
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
      bodyMapper: Mappers.ApplicationGatewayAvailableSslOptions
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAvailableSslPredefinedPoliciesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default/predefinedPolicies",
  urlParameters: [
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
      bodyMapper: Mappers.ApplicationGatewayAvailableSslPredefinedPolicies
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getSslPredefinedPolicyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default/predefinedPolicies/{predefinedPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.predefinedPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewaySslPredefinedPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApplicationGateway,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGateway
    },
    201: {
      bodyMapper: Mappers.ApplicationGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/start",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
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
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/stop",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
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
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginBackendHealthOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/backendhealth",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayBackendHealth
    },
    202: {},
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
      bodyMapper: Mappers.ApplicationGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ApplicationGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAvailableSslPredefinedPoliciesNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ApplicationGatewayAvailableSslPredefinedPolicies
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};