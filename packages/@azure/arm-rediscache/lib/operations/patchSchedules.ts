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
import * as Mappers from "../models/patchSchedulesMappers";
import * as Parameters from "../models/parameters";
import { RedisManagementClientContext } from "../redisManagementClientContext";

/** Class representing a PatchSchedules. */
export class PatchSchedules {
  private readonly client: RedisManagementClientContext;

  /**
   * Create a PatchSchedules.
   * @param {RedisManagementClientContext} client Reference to the service client.
   */
  constructor(client: RedisManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all patch schedules in the specified redis cache (there is only one).
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param [options] The optional parameters
   * @returns Promise<Models.PatchSchedulesListByRedisResourceResponse>
   */
  listByRedisResource(resourceGroupName: string, cacheName: string, options?: msRest.RequestOptionsBase): Promise<Models.PatchSchedulesListByRedisResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param callback The callback
   */
  listByRedisResource(resourceGroupName: string, cacheName: string, callback: msRest.ServiceCallback<Models.RedisPatchScheduleListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByRedisResource(resourceGroupName: string, cacheName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisPatchScheduleListResult>): void;
  listByRedisResource(resourceGroupName: string, cacheName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisPatchScheduleListResult>): Promise<Models.PatchSchedulesListByRedisResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cacheName,
        options
      },
      listByRedisResourceOperationSpec,
      callback) as Promise<Models.PatchSchedulesListByRedisResourceResponse>;
  }

  /**
   * Create or replace the patching schedule for Redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param scheduleEntries List of patch schedules for a Redis cache.
   * @param [options] The optional parameters
   * @returns Promise<Models.PatchSchedulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, name: string, scheduleEntries: Models.ScheduleEntry[], options?: msRest.RequestOptionsBase): Promise<Models.PatchSchedulesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param scheduleEntries List of patch schedules for a Redis cache.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, name: string, scheduleEntries: Models.ScheduleEntry[], callback: msRest.ServiceCallback<Models.RedisPatchSchedule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param scheduleEntries List of patch schedules for a Redis cache.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, name: string, scheduleEntries: Models.ScheduleEntry[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisPatchSchedule>): void;
  createOrUpdate(resourceGroupName: string, name: string, scheduleEntries: Models.ScheduleEntry[], options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisPatchSchedule>): Promise<Models.PatchSchedulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        scheduleEntries,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.PatchSchedulesCreateOrUpdateResponse>;
  }

  /**
   * Deletes the patching schedule of a redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the patching schedule of a redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param [options] The optional parameters
   * @returns Promise<Models.PatchSchedulesGetResponse>
   */
  get(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.PatchSchedulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param callback The callback
   */
  get(resourceGroupName: string, name: string, callback: msRest.ServiceCallback<Models.RedisPatchSchedule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisPatchSchedule>): void;
  get(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisPatchSchedule>): Promise<Models.PatchSchedulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PatchSchedulesGetResponse>;
  }

  /**
   * Gets all patch schedules in the specified redis cache (there is only one).
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PatchSchedulesListByRedisResourceNextResponse>
   */
  listByRedisResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PatchSchedulesListByRedisResourceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByRedisResourceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RedisPatchScheduleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByRedisResourceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisPatchScheduleListResult>): void;
  listByRedisResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisPatchScheduleListResult>): Promise<Models.PatchSchedulesListByRedisResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByRedisResourceNextOperationSpec,
      callback) as Promise<Models.PatchSchedulesListByRedisResourceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByRedisResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/patchSchedules",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RedisPatchScheduleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.defaultParameter,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      scheduleEntries: "scheduleEntries"
    },
    mapper: {
      ...Mappers.RedisPatchSchedule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RedisPatchSchedule
    },
    201: {
      bodyMapper: Mappers.RedisPatchSchedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.defaultParameter,
    Parameters.subscriptionId
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

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.defaultParameter,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RedisPatchSchedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByRedisResourceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RedisPatchScheduleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};