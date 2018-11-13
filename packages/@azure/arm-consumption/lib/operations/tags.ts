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
import * as Models from "../models";
import * as Mappers from "../models/tagsMappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClientContext } from "../consumptionManagementClientContext";

/** Class representing a Tags. */
export class Tags {
  private readonly client: ConsumptionManagementClientContext;

  /**
   * Create a Tags.
   * @param {ConsumptionManagementClientContext} client Reference to the service client.
   */
  constructor(client: ConsumptionManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all available tag keys for a billing account.
   * @param billingAccountId BillingAccount ID
   * @param [options] The optional parameters
   * @returns Promise<Models.TagsGetResponse>
   */
  get(billingAccountId: string, options?: msRest.RequestOptionsBase): Promise<Models.TagsGetResponse>;
  /**
   * @param billingAccountId BillingAccount ID
   * @param callback The callback
   */
  get(billingAccountId: string, callback: msRest.ServiceCallback<Models.TagsResult>): void;
  /**
   * @param billingAccountId BillingAccount ID
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TagsResult>): void;
  get(billingAccountId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TagsResult>, callback?: msRest.ServiceCallback<Models.TagsResult>): Promise<Models.TagsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TagsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.CostManagement/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/tags",
  urlParameters: [
    Parameters.billingAccountId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TagsResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
