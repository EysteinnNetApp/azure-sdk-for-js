/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ErrorDetail: msRest.CompositeMapper = {
  serializedName: "ErrorDetail",
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      }
    }
  }
};

export const ErrorResponseWrapper: msRest.CompositeMapper = {
  serializedName: "ErrorResponseWrapper",
  type: {
    name: "Composite",
    className: "ErrorResponseWrapper",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const StorageAccountProperties: msRest.CompositeMapper = {
  serializedName: "StorageAccountProperties",
  type: {
    name: "Composite",
    className: "StorageAccountProperties",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryProperties: msRest.CompositeMapper = {
  serializedName: "ContainerRegistryProperties",
  type: {
    name: "Composite",
    className: "ContainerRegistryProperties",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServicePrincipalProperties: msRest.CompositeMapper = {
  serializedName: "ServicePrincipalProperties",
  type: {
    name: "Composite",
    className: "ServicePrincipalProperties",
    modelProperties: {
      clientId: {
        required: true,
        serializedName: "clientId",
        type: {
          name: "String"
        }
      },
      secret: {
        required: true,
        serializedName: "secret",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KubernetesClusterProperties: msRest.CompositeMapper = {
  serializedName: "Kubernetes",
  type: {
    name: "Composite",
    className: "KubernetesClusterProperties",
    modelProperties: {
      servicePrincipal: {
        serializedName: "servicePrincipal",
        type: {
          name: "Composite",
          className: "ServicePrincipalProperties"
        }
      }
    }
  }
};

export const SystemService: msRest.CompositeMapper = {
  serializedName: "SystemService",
  type: {
    name: "Composite",
    className: "SystemService",
    modelProperties: {
      systemServiceType: {
        required: true,
        serializedName: "systemServiceType",
        type: {
          name: "String"
        }
      },
      publicIpAddress: {
        readOnly: true,
        serializedName: "publicIpAddress",
        type: {
          name: "String"
        }
      },
      version: {
        readOnly: true,
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AcsClusterProperties: msRest.CompositeMapper = {
  serializedName: "AcsClusterProperties",
  type: {
    name: "Composite",
    className: "AcsClusterProperties",
    modelProperties: {
      clusterFqdn: {
        readOnly: true,
        serializedName: "clusterFqdn",
        type: {
          name: "String"
        }
      },
      orchestratorType: {
        required: true,
        serializedName: "orchestratorType",
        type: {
          name: "String"
        }
      },
      orchestratorProperties: {
        serializedName: "orchestratorProperties",
        type: {
          name: "Composite",
          className: "KubernetesClusterProperties"
        }
      },
      systemServices: {
        serializedName: "systemServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SystemService"
            }
          }
        }
      },
      masterCount: {
        serializedName: "masterCount",
        defaultValue: 1,
        constraints: {
          InclusiveMaximum: 5,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      agentCount: {
        serializedName: "agentCount",
        defaultValue: 2,
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      agentVmSize: {
        serializedName: "agentVmSize",
        defaultValue: 'Standard_D3_v2',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppInsightsProperties: msRest.CompositeMapper = {
  serializedName: "AppInsightsProperties",
  type: {
    name: "Composite",
    className: "AppInsightsProperties",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SslConfiguration: msRest.CompositeMapper = {
  serializedName: "SslConfiguration",
  type: {
    name: "Composite",
    className: "SslConfiguration",
    modelProperties: {
      status: {
        serializedName: "status",
        defaultValue: 'Enabled',
        type: {
          name: "String"
        }
      },
      cert: {
        serializedName: "cert",
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      cname: {
        serializedName: "cname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceAuthConfiguration: msRest.CompositeMapper = {
  serializedName: "ServiceAuthConfiguration",
  type: {
    name: "Composite",
    className: "ServiceAuthConfiguration",
    modelProperties: {
      primaryAuthKeyHash: {
        required: true,
        serializedName: "primaryAuthKeyHash",
        type: {
          name: "String"
        }
      },
      secondaryAuthKeyHash: {
        required: true,
        serializedName: "secondaryAuthKeyHash",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AutoScaleConfiguration: msRest.CompositeMapper = {
  serializedName: "AutoScaleConfiguration",
  type: {
    name: "Composite",
    className: "AutoScaleConfiguration",
    modelProperties: {
      status: {
        serializedName: "status",
        defaultValue: 'Disabled',
        type: {
          name: "String"
        }
      },
      minReplicas: {
        serializedName: "minReplicas",
        defaultValue: 1,
        constraints: {
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      maxReplicas: {
        serializedName: "maxReplicas",
        defaultValue: 100,
        constraints: {
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      targetUtilization: {
        serializedName: "targetUtilization",
        type: {
          name: "Number"
        }
      },
      refreshPeriodInSeconds: {
        serializedName: "refreshPeriodInSeconds",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GlobalServiceConfiguration: msRest.CompositeMapper = {
  serializedName: "GlobalServiceConfiguration",
  type: {
    name: "Composite",
    className: "GlobalServiceConfiguration",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      ssl: {
        serializedName: "ssl",
        type: {
          name: "Composite",
          className: "SslConfiguration"
        }
      },
      serviceAuth: {
        serializedName: "serviceAuth",
        type: {
          name: "Composite",
          className: "ServiceAuthConfiguration"
        }
      },
      autoScale: {
        serializedName: "autoScale",
        type: {
          name: "Composite",
          className: "AutoScaleConfiguration"
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const OperationalizationClusterProperties: msRest.CompositeMapper = {
  serializedName: "OperationalizationClusterProperties",
  type: {
    name: "Composite",
    className: "OperationalizationClusterProperties",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      createdOn: {
        readOnly: true,
        serializedName: "createdOn",
        type: {
          name: "DateTime"
        }
      },
      modifiedOn: {
        readOnly: true,
        serializedName: "modifiedOn",
        type: {
          name: "DateTime"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      provisioningErrors: {
        readOnly: true,
        serializedName: "provisioningErrors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponseWrapper"
            }
          }
        }
      },
      clusterType: {
        required: true,
        serializedName: "clusterType",
        type: {
          name: "String"
        }
      },
      storageAccount: {
        serializedName: "storageAccount",
        type: {
          name: "Composite",
          className: "StorageAccountProperties"
        }
      },
      containerRegistry: {
        serializedName: "containerRegistry",
        type: {
          name: "Composite",
          className: "ContainerRegistryProperties"
        }
      },
      containerService: {
        serializedName: "containerService",
        type: {
          name: "Composite",
          className: "AcsClusterProperties"
        }
      },
      appInsights: {
        serializedName: "appInsights",
        type: {
          name: "Composite",
          className: "AppInsightsProperties"
        }
      },
      globalServiceConfiguration: {
        serializedName: "globalServiceConfiguration",
        type: {
          name: "Composite",
          className: "GlobalServiceConfiguration",
          additionalProperties: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const OperationalizationCluster: msRest.CompositeMapper = {
  serializedName: "OperationalizationCluster",
  type: {
    name: "Composite",
    className: "OperationalizationCluster",
    modelProperties: {
      ...Resource.type.modelProperties,
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      createdOn: {
        readOnly: true,
        serializedName: "properties.createdOn",
        type: {
          name: "DateTime"
        }
      },
      modifiedOn: {
        readOnly: true,
        serializedName: "properties.modifiedOn",
        type: {
          name: "DateTime"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      provisioningErrors: {
        readOnly: true,
        serializedName: "properties.provisioningErrors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponseWrapper"
            }
          }
        }
      },
      clusterType: {
        required: true,
        serializedName: "properties.clusterType",
        type: {
          name: "String"
        }
      },
      storageAccount: {
        serializedName: "properties.storageAccount",
        type: {
          name: "Composite",
          className: "StorageAccountProperties"
        }
      },
      containerRegistry: {
        serializedName: "properties.containerRegistry",
        type: {
          name: "Composite",
          className: "ContainerRegistryProperties"
        }
      },
      containerService: {
        serializedName: "properties.containerService",
        type: {
          name: "Composite",
          className: "AcsClusterProperties"
        }
      },
      appInsights: {
        serializedName: "properties.appInsights",
        type: {
          name: "Composite",
          className: "AppInsightsProperties"
        }
      },
      globalServiceConfiguration: {
        serializedName: "properties.globalServiceConfiguration",
        type: {
          name: "Composite",
          className: "GlobalServiceConfiguration",
          additionalProperties: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const OperationalizationClusterUpdateParameters: msRest.CompositeMapper = {
  serializedName: "OperationalizationClusterUpdateParameters",
  type: {
    name: "Composite",
    className: "OperationalizationClusterUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const StorageAccountCredentials: msRest.CompositeMapper = {
  serializedName: "StorageAccountCredentials",
  type: {
    name: "Composite",
    className: "StorageAccountCredentials",
    modelProperties: {
      resourceId: {
        readOnly: true,
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      },
      primaryKey: {
        readOnly: true,
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        readOnly: true,
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerRegistryCredentials: msRest.CompositeMapper = {
  serializedName: "ContainerRegistryCredentials",
  type: {
    name: "Composite",
    className: "ContainerRegistryCredentials",
    modelProperties: {
      loginServer: {
        readOnly: true,
        serializedName: "loginServer",
        type: {
          name: "String"
        }
      },
      password: {
        readOnly: true,
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      password2: {
        readOnly: true,
        serializedName: "password2",
        type: {
          name: "String"
        }
      },
      username: {
        readOnly: true,
        serializedName: "username",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerServiceCredentials: msRest.CompositeMapper = {
  serializedName: "ContainerServiceCredentials",
  type: {
    name: "Composite",
    className: "ContainerServiceCredentials",
    modelProperties: {
      acsKubeConfig: {
        readOnly: true,
        serializedName: "acsKubeConfig",
        type: {
          name: "String"
        }
      },
      servicePrincipalConfiguration: {
        readOnly: true,
        serializedName: "servicePrincipalConfiguration",
        type: {
          name: "Composite",
          className: "ServicePrincipalProperties"
        }
      },
      imagePullSecretName: {
        readOnly: true,
        serializedName: "imagePullSecretName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppInsightsCredentials: msRest.CompositeMapper = {
  serializedName: "AppInsightsCredentials",
  type: {
    name: "Composite",
    className: "AppInsightsCredentials",
    modelProperties: {
      appId: {
        serializedName: "appId",
        type: {
          name: "String"
        }
      },
      instrumentationKey: {
        serializedName: "instrumentationKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationalizationClusterCredentials: msRest.CompositeMapper = {
  serializedName: "OperationalizationClusterCredentials",
  type: {
    name: "Composite",
    className: "OperationalizationClusterCredentials",
    modelProperties: {
      storageAccount: {
        serializedName: "storageAccount",
        type: {
          name: "Composite",
          className: "StorageAccountCredentials"
        }
      },
      containerRegistry: {
        serializedName: "containerRegistry",
        type: {
          name: "Composite",
          className: "ContainerRegistryCredentials"
        }
      },
      containerService: {
        serializedName: "containerService",
        type: {
          name: "Composite",
          className: "ContainerServiceCredentials"
        }
      },
      appInsights: {
        serializedName: "appInsights",
        type: {
          name: "Composite",
          className: "AppInsightsCredentials"
        }
      },
      serviceAuthConfiguration: {
        serializedName: "serviceAuthConfiguration",
        type: {
          name: "Composite",
          className: "ServiceAuthConfiguration"
        }
      },
      sslConfiguration: {
        serializedName: "sslConfiguration",
        type: {
          name: "Composite",
          className: "SslConfiguration"
        }
      }
    }
  }
};

export const CheckSystemServicesUpdatesAvailableResponse: msRest.CompositeMapper = {
  serializedName: "CheckSystemServicesUpdatesAvailableResponse",
  type: {
    name: "Composite",
    className: "CheckSystemServicesUpdatesAvailableResponse",
    modelProperties: {
      updatesAvailable: {
        readOnly: true,
        serializedName: "updatesAvailable",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateSystemServicesResponse: msRest.CompositeMapper = {
  serializedName: "UpdateSystemServicesResponse",
  type: {
    name: "Composite",
    className: "UpdateSystemServicesResponse",
    modelProperties: {
      updateStatus: {
        readOnly: true,
        serializedName: "updateStatus",
        type: {
          name: "String"
        }
      },
      updateStartedOn: {
        readOnly: true,
        serializedName: "updateStartedOn",
        type: {
          name: "DateTime"
        }
      },
      updateCompletedOn: {
        readOnly: true,
        serializedName: "updateCompletedOn",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ResourceOperationDisplay: msRest.CompositeMapper = {
  serializedName: "ResourceOperation_display",
  type: {
    name: "Composite",
    className: "ResourceOperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceOperation: msRest.CompositeMapper = {
  serializedName: "ResourceOperation",
  type: {
    name: "Composite",
    className: "ResourceOperation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "ResourceOperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvailableOperations: msRest.CompositeMapper = {
  serializedName: "AvailableOperations",
  type: {
    name: "Composite",
    className: "AvailableOperations",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceOperation"
            }
          }
        }
      }
    }
  }
};

export const OperationalizationClustersDeleteHeaders: msRest.CompositeMapper = {
  serializedName: "operationalizationclusters-delete-headers",
  type: {
    name: "Composite",
    className: "OperationalizationClustersDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationalizationClustersUpdateSystemServicesHeaders: msRest.CompositeMapper = {
  serializedName: "operationalizationclusters-updatesystemservices-headers",
  type: {
    name: "Composite",
    className: "OperationalizationClustersUpdateSystemServicesHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PaginatedOperationalizationClustersList: msRest.CompositeMapper = {
  serializedName: "PaginatedOperationalizationClustersList",
  type: {
    name: "Composite",
    className: "PaginatedOperationalizationClustersList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationalizationCluster"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};