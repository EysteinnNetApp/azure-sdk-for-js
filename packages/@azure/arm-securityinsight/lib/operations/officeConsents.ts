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
import * as Models from "../models";
import * as Mappers from "../models/officeConsentsMappers";
import * as Parameters from "../models/parameters";
import { SecurityInsightsContext } from "../securityInsightsContext";

/** Class representing a OfficeConsents. */
export class OfficeConsents {
  private readonly client: SecurityInsightsContext;

  /**
   * Create a OfficeConsents.
   * @param {SecurityInsightsContext} client Reference to the service client.
   */
  constructor(client: SecurityInsightsContext) {
    this.client = client;
  }

  /**
   * Gets all office365 consents.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.OfficeConsentsListResponse>
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.OfficeConsentsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, callback: msRest.ServiceCallback<Models.OfficeConsentList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OfficeConsentList>): void;
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OfficeConsentList>, callback?: msRest.ServiceCallback<Models.OfficeConsentList>): Promise<Models.OfficeConsentsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OfficeConsentsListResponse>;
  }

  /**
   * Gets an office365 consent.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param consentId consent ID
   * @param [options] The optional parameters
   * @returns Promise<Models.OfficeConsentsGetResponse>
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, consentId: string, options?: msRest.RequestOptionsBase): Promise<Models.OfficeConsentsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param consentId consent ID
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, consentId: string, callback: msRest.ServiceCallback<Models.OfficeConsent>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param consentId consent ID
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, consentId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OfficeConsent>): void;
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, consentId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OfficeConsent>, callback?: msRest.ServiceCallback<Models.OfficeConsent>): Promise<Models.OfficeConsentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        consentId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OfficeConsentsGetResponse>;
  }

  /**
   * Delete the office365 consent.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param consentId consent ID
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, consentId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param consentId consent ID
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, consentId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param consentId consent ID
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, consentId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, consentId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        consentId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets all office365 consents.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OfficeConsentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OfficeConsentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OfficeConsentList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OfficeConsentList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OfficeConsentList>, callback?: msRest.ServiceCallback<Models.OfficeConsentList>): Promise<Models.OfficeConsentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.OfficeConsentsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/officeConsents",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OfficeConsentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/officeConsents/{consentId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.consentId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OfficeConsent
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/officeConsents/{consentId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.consentId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
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
      bodyMapper: Mappers.OfficeConsentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
