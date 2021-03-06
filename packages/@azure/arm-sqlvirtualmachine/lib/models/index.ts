/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing PrivateIPAddress.
 * A private IP address bound to the availability group listener.
 *
 */
export interface PrivateIPAddress {
  /**
   * @member {string} [ipAddress] Private IP address bound to the availability
   * group listener.
   */
  ipAddress?: string;
  /**
   * @member {string} [subnetResourceId] Subnet used to include private IP.
   */
  subnetResourceId?: string;
}

/**
 * @interface
 * An interface representing LoadBalancerConfiguration.
 * A load balancer configuration for an availability group listener.
 *
 */
export interface LoadBalancerConfiguration {
  /**
   * @member {PrivateIPAddress} [privateIpAddress] Private IP address.
   */
  privateIpAddress?: PrivateIPAddress;
  /**
   * @member {string} [publicIpAddressResourceId] Resource id of the public IP.
   */
  publicIpAddressResourceId?: string;
  /**
   * @member {string} [loadBalancerResourceId] Resource id of the load
   * balancer.
   */
  loadBalancerResourceId?: string;
  /**
   * @member {number} [probePort] Probe port.
   */
  probePort?: number;
  /**
   * @member {string[]} [sqlVirtualMachineInstances] List of the SQL virtual
   * machine instance resource id's that are enrolled into the availability
   * group listener.
   */
  sqlVirtualMachineInstances?: string[];
}

/**
 * @interface
 * An interface representing Resource.
 * ARM resource.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
}

/**
 * @interface
 * An interface representing ProxyResource.
 * ARM proxy resource.
 *
 * @extends Resource
 */
export interface ProxyResource extends Resource {
}

/**
 * @interface
 * An interface representing AvailabilityGroupListener.
 * A SQL Server availability group listener.
 *
 * @extends ProxyResource
 */
export interface AvailabilityGroupListener extends ProxyResource {
  /**
   * @member {string} [provisioningState] Provisioning state to track the aysnc
   * operation status.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
  /**
   * @member {string} [availabilityGroupName] Name of the availability group.
   */
  availabilityGroupName?: string;
  /**
   * @member {LoadBalancerConfiguration[]} [loadBalancerConfigurations] List of
   * load balancer configurations for an availability group listener.
   */
  loadBalancerConfigurations?: LoadBalancerConfiguration[];
  /**
   * @member {boolean} [createDefaultAvailabilityGroupIfNotExist] Create a
   * default availability group if it does not exist.
   */
  createDefaultAvailabilityGroupIfNotExist?: boolean;
  /**
   * @member {number} [port] Listener port.
   */
  port?: number;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * Display metadata associated with the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] The localized friendly form of the resource
   * provider name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: string;
  /**
   * @member {string} [resource] The localized friendly form of the resource
   * type related to this action/operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resource?: string;
  /**
   * @member {string} [operation] The localized friendly name for the
   * operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operation?: string;
  /**
   * @member {string} [description] The localized friendly description for the
   * operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly description?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * SQL REST API operation definition.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] The name of the operation being performed on this
   * particular object.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {OperationDisplay} [display] The localized display information for
   * this particular operation / action.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly display?: OperationDisplay;
  /**
   * @member {OperationOrigin} [origin] The intended executor of the operation.
   * Possible values include: 'user', 'system'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly origin?: OperationOrigin;
  /**
   * @member {{ [propertyName: string]: any }} [properties] Additional
   * descriptions for the operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly properties?: { [propertyName: string]: any };
}

/**
 * @interface
 * An interface representing WsfcDomainProfile.
 * Active Directory account details to operate Windows Server Failover Cluster.
 *
 */
export interface WsfcDomainProfile {
  /**
   * @member {string} [domainFqdn] Fully qualified name of the domain.
   */
  domainFqdn?: string;
  /**
   * @member {string} [ouPath] Organizational Unit path in which the nodes and
   * cluster will be present.
   */
  ouPath?: string;
  /**
   * @member {string} [clusterBootstrapAccount] Account name used for creating
   * cluster (at minimum needs permissions to 'Create Computer Objects' in
   * domain).
   */
  clusterBootstrapAccount?: string;
  /**
   * @member {string} [clusterOperatorAccount] Account name used for operating
   * cluster i.e. will be part of administrators group on all the participating
   * virtual machines in the cluster.
   */
  clusterOperatorAccount?: string;
  /**
   * @member {string} [sqlServiceAccount] Account name under which SQL service
   * will run on all participating SQL virtual machines in the cluster.
   */
  sqlServiceAccount?: string;
  /**
   * @member {string} [fileShareWitnessPath] Optional path for fileshare
   * witness.
   */
  fileShareWitnessPath?: string;
  /**
   * @member {string} [storageAccountUrl] Fully qualified ARM resource id of
   * the witness storage account.
   */
  storageAccountUrl?: string;
  /**
   * @member {string} [storageAccountPrimaryKey] Primary key of the witness
   * storage account.
   */
  storageAccountPrimaryKey?: string;
}

/**
 * @interface
 * An interface representing TrackedResource.
 * ARM tracked top level resource.
 *
 * @extends Resource
 */
export interface TrackedResource extends Resource {
  /**
   * @member {string} location Resource location.
   */
  location: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing SqlVirtualMachineGroup.
 * A SQL virtual machine group.
 *
 * @extends TrackedResource
 */
export interface SqlVirtualMachineGroup extends TrackedResource {
  /**
   * @member {string} [provisioningState] Provisioning state to track the aysnc
   * operation status.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
  /**
   * @member {string} [sqlImageOffer] SQL image offer. Examples may include
   * SQL2016-WS2016, SQL2017-WS2016.
   */
  sqlImageOffer?: string;
  /**
   * @member {SqlVmGroupImageSku} [sqlImageSku] SQL image sku. Possible values
   * include: 'Developer', 'Enterprise'
   */
  sqlImageSku?: SqlVmGroupImageSku;
  /**
   * @member {ScaleType} [scaleType] Scale type. Possible values include: 'HA'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly scaleType?: ScaleType;
  /**
   * @member {ClusterManagerType} [clusterManagerType] Type of cluster manager:
   * Windows Server Failover Cluster (WSFC), implied by the scale type of the
   * group and the OS type. Possible values include: 'WSFC'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly clusterManagerType?: ClusterManagerType;
  /**
   * @member {ClusterConfiguration} [clusterConfiguration] Cluster type.
   * Possible values include: 'Domainful'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly clusterConfiguration?: ClusterConfiguration;
  /**
   * @member {WsfcDomainProfile} [wsfcDomainProfile] Cluster Active Directory
   * domain profile.
   */
  wsfcDomainProfile?: WsfcDomainProfile;
}

/**
 * @interface
 * An interface representing SqlVirtualMachineGroupUpdate.
 * An update to a SQL virtual machine group.
 *
 */
export interface SqlVirtualMachineGroupUpdate {
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ResourceIdentity.
 * Azure Active Directory identity configuration for a resource.
 *
 */
export interface ResourceIdentity {
  /**
   * @member {string} [principalId] The Azure Active Directory principal id.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly principalId?: string;
  /**
   * @member {IdentityType} [type] The identity type. Set this to
   * 'SystemAssigned' in order to automatically create and assign an Azure
   * Active Directory principal for the resource. Possible values include:
   * 'SystemAssigned'
   */
  type?: IdentityType;
  /**
   * @member {string} [tenantId] The Azure Active Directory tenant id.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly tenantId?: string;
}

/**
 * @interface
 * An interface representing WsfcDomainCredentials.
 * Domain credentials for setting up Windows Server Failover Cluster for SQL
 * availability group.
 *
 */
export interface WsfcDomainCredentials {
  /**
   * @member {string} [clusterBootstrapAccountPassword] Cluster bootstrap
   * account password.
   */
  clusterBootstrapAccountPassword?: string;
  /**
   * @member {string} [clusterOperatorAccountPassword] Cluster operator account
   * password.
   */
  clusterOperatorAccountPassword?: string;
  /**
   * @member {string} [sqlServiceAccountPassword] SQL service account password.
   */
  sqlServiceAccountPassword?: string;
}

/**
 * @interface
 * An interface representing AutoPatchingSettings.
 * Set a patching window during which Windows and SQL patches will be applied.
 *
 */
export interface AutoPatchingSettings {
  /**
   * @member {boolean} [enable] Enable or disable autopatching on SQL virtual
   * machine.
   */
  enable?: boolean;
  /**
   * @member {DayOfWeek} [dayOfWeek] Day of week to apply the patch on.
   * Possible values include: 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
   * 'Friday', 'Saturday', 'Sunday'
   */
  dayOfWeek?: DayOfWeek;
  /**
   * @member {number} [maintenanceWindowStartingHour] Hour of the day when
   * patching is initiated. Local VM time.
   */
  maintenanceWindowStartingHour?: number;
  /**
   * @member {number} [maintenanceWindowDuration] Duration of patching.
   */
  maintenanceWindowDuration?: number;
}

/**
 * @interface
 * An interface representing AutoBackupSettings.
 * Configure backups for databases in your SQL virtual machine.
 *
 */
export interface AutoBackupSettings {
  /**
   * @member {boolean} [enable] Enable or disable autobackup on SQL virtual
   * machine.
   */
  enable?: boolean;
  /**
   * @member {boolean} [enableEncryption] Enable or disable encryption for
   * backup on SQL virtual machine.
   */
  enableEncryption?: boolean;
  /**
   * @member {number} [retentionPeriod] Retention period of backup: 1-30 days.
   */
  retentionPeriod?: number;
  /**
   * @member {string} [storageAccountUrl] Storage account url where backup will
   * be taken to.
   */
  storageAccountUrl?: string;
  /**
   * @member {string} [storageAccessKey] Storage account key where backup will
   * be taken to.
   */
  storageAccessKey?: string;
  /**
   * @member {string} [password] Password for encryption on backup.
   */
  password?: string;
  /**
   * @member {boolean} [backupSystemDbs] Include or exclude system databases
   * from auto backup.
   */
  backupSystemDbs?: boolean;
  /**
   * @member {BackupScheduleType} [backupScheduleType] Backup schedule type.
   * Possible values include: 'Manual', 'Automated'
   */
  backupScheduleType?: BackupScheduleType;
  /**
   * @member {FullBackupFrequencyType} [fullBackupFrequency] Frequency of full
   * backups. In both cases, full backups begin during the next scheduled time
   * window. Possible values include: 'Daily', 'Weekly'
   */
  fullBackupFrequency?: FullBackupFrequencyType;
  /**
   * @member {number} [fullBackupStartTime] Start time of a given day during
   * which full backups can take place. 0-23 hours.
   */
  fullBackupStartTime?: number;
  /**
   * @member {number} [fullBackupWindowHours] Duration of the time window of a
   * given day during which full backups can take place. 1-23 hours.
   */
  fullBackupWindowHours?: number;
  /**
   * @member {number} [logBackupFrequency] Frequency of log backups. 5-60
   * minutes.
   */
  logBackupFrequency?: number;
}

/**
 * @interface
 * An interface representing KeyVaultCredentialSettings.
 * Configure your SQL virtual machine to be able to connect to the Azure Key
 * Vault service.
 *
 */
export interface KeyVaultCredentialSettings {
  /**
   * @member {boolean} [enable] Enable or disable key vault credential setting.
   */
  enable?: boolean;
  /**
   * @member {string} [credentialName] Credential name.
   */
  credentialName?: string;
  /**
   * @member {string} [azureKeyVaultUrl] Azure Key Vault url.
   */
  azureKeyVaultUrl?: string;
  /**
   * @member {string} [servicePrincipalName] Service principal name to access
   * key vault.
   */
  servicePrincipalName?: string;
  /**
   * @member {string} [servicePrincipalSecret] Service principal name secret to
   * access key vault.
   */
  servicePrincipalSecret?: string;
}

/**
 * @interface
 * An interface representing SqlConnectivityUpdateSettings.
 * Set the access level and network port settings for SQL Server.
 *
 */
export interface SqlConnectivityUpdateSettings {
  /**
   * @member {ConnectivityType} [connectivityType] SQL Server connectivity
   * option. Possible values include: 'LOCAL', 'PRIVATE', 'PUBLIC'
   */
  connectivityType?: ConnectivityType;
  /**
   * @member {number} [port] SQL Server port.
   */
  port?: number;
  /**
   * @member {string} [sqlAuthUpdateUserName] SQL Server sysadmin login to
   * create.
   */
  sqlAuthUpdateUserName?: string;
  /**
   * @member {string} [sqlAuthUpdatePassword] SQL Server sysadmin login
   * password.
   */
  sqlAuthUpdatePassword?: string;
}

/**
 * @interface
 * An interface representing SqlWorkloadTypeUpdateSettings.
 * Set workload type to optimize storage for SQL Server.
 *
 */
export interface SqlWorkloadTypeUpdateSettings {
  /**
   * @member {SqlWorkloadType} [sqlWorkloadType] SQL Server workload type.
   * Possible values include: 'GENERAL', 'OLTP', 'DW'
   */
  sqlWorkloadType?: SqlWorkloadType;
}

/**
 * @interface
 * An interface representing SqlStorageUpdateSettings.
 * Set disk storage settings for SQL Server.
 *
 */
export interface SqlStorageUpdateSettings {
  /**
   * @member {number} [diskCount] Virtual machine disk count.
   */
  diskCount?: number;
  /**
   * @member {DiskConfigurationType} [diskConfigurationType] Disk configuration
   * to apply to SQL Server. Possible values include: 'NEW', 'EXTEND', 'ADD'
   */
  diskConfigurationType?: DiskConfigurationType;
  /**
   * @member {number} [startingDeviceId] Device id of the first disk to be
   * updated.
   */
  startingDeviceId?: number;
}

/**
 * @interface
 * An interface representing AdditionalFeaturesServerConfigurations.
 * Additional SQL Server feature settings.
 *
 */
export interface AdditionalFeaturesServerConfigurations {
  /**
   * @member {boolean} [isRServicesEnabled] Enable or disable R services (SQL
   * 2016 onwards).
   */
  isRServicesEnabled?: boolean;
}

/**
 * @interface
 * An interface representing ServerConfigurationsManagementSettings.
 * Set the connectivity, storage and workload settings.
 *
 */
export interface ServerConfigurationsManagementSettings {
  /**
   * @member {SqlConnectivityUpdateSettings} [sqlConnectivityUpdateSettings]
   * SQL connectivity type settings.
   */
  sqlConnectivityUpdateSettings?: SqlConnectivityUpdateSettings;
  /**
   * @member {SqlWorkloadTypeUpdateSettings} [sqlWorkloadTypeUpdateSettings]
   * SQL workload type settings.
   */
  sqlWorkloadTypeUpdateSettings?: SqlWorkloadTypeUpdateSettings;
  /**
   * @member {SqlStorageUpdateSettings} [sqlStorageUpdateSettings] SQL storage
   * update settings.
   */
  sqlStorageUpdateSettings?: SqlStorageUpdateSettings;
  /**
   * @member {AdditionalFeaturesServerConfigurations}
   * [additionalFeaturesServerConfigurations] Additional SQL feature settings.
   */
  additionalFeaturesServerConfigurations?: AdditionalFeaturesServerConfigurations;
}

/**
 * @interface
 * An interface representing SqlVirtualMachine.
 * A SQL virtual machine.
 *
 * @extends TrackedResource
 */
export interface SqlVirtualMachine extends TrackedResource {
  /**
   * @member {ResourceIdentity} [identity] Azure Active Directory identity of
   * the server.
   */
  identity?: ResourceIdentity;
  /**
   * @member {string} [virtualMachineResourceId] ARM Resource id of underlying
   * virtual machine created from SQL marketplace image.
   */
  virtualMachineResourceId?: string;
  /**
   * @member {string} [provisioningState] Provisioning state to track the aysnc
   * operation status.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
  /**
   * @member {string} [sqlImageOffer] SQL image offer. Examples include
   * SQL2016-WS2016, SQL2017-WS2016.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly sqlImageOffer?: string;
  /**
   * @member {SqlServerLicenseType} [sqlServerLicenseType] SQL Server license
   * type. Possible values include: 'PAYG', 'AHUB'
   */
  sqlServerLicenseType?: SqlServerLicenseType;
  /**
   * @member {SqlImageSku} [sqlImageSku] SQL image sku. Possible values
   * include: 'Developer', 'Express', 'Standard', 'Enterprise', 'Web'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly sqlImageSku?: SqlImageSku;
  /**
   * @member {string} [sqlVirtualMachineGroupResourceId] ARM resource id of the
   * SQL virtual machine group this SQL virtual machine is or will be part of.
   */
  sqlVirtualMachineGroupResourceId?: string;
  /**
   * @member {WsfcDomainCredentials} [wsfcDomainCredentials] Domain credentials
   * for setting up Windows Server Failover Cluster for SQL availability group.
   */
  wsfcDomainCredentials?: WsfcDomainCredentials;
  /**
   * @member {AutoPatchingSettings} [autoPatchingSettings] Auto patching
   * settings for applying critical security updates to SQL virtual machine.
   */
  autoPatchingSettings?: AutoPatchingSettings;
  /**
   * @member {AutoBackupSettings} [autoBackupSettings] Auto backup settings for
   * SQL Server.
   */
  autoBackupSettings?: AutoBackupSettings;
  /**
   * @member {KeyVaultCredentialSettings} [keyVaultCredentialSettings] Key
   * vault credential settings.
   */
  keyVaultCredentialSettings?: KeyVaultCredentialSettings;
  /**
   * @member {ServerConfigurationsManagementSettings}
   * [serverConfigurationsManagementSettings] SQL Server configuration
   * management settings.
   */
  serverConfigurationsManagementSettings?: ServerConfigurationsManagementSettings;
}

/**
 * @interface
 * An interface representing SqlVirtualMachineUpdate.
 * An update to a SQL virtual machine.
 *
 */
export interface SqlVirtualMachineUpdate {
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing SqlVirtualMachinesGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface SqlVirtualMachinesGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [expand] The child resources to include in the response.
   */
  expand?: string;
}

/**
 * @interface
 * An interface representing SqlVirtualMachineManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface SqlVirtualMachineManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the AvailabilityGroupListenerListResult.
 * A list of availability group listeners.
 *
 * @extends Array<AvailabilityGroupListener>
 */
export interface AvailabilityGroupListenerListResult extends Array<AvailabilityGroupListener> {
  /**
   * @member {string} [nextLink] Link to retrieve next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list SQL operations.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] Link to retrieve next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the SqlVirtualMachineGroupListResult.
 * A list of SQL virtual machine groups.
 *
 * @extends Array<SqlVirtualMachineGroup>
 */
export interface SqlVirtualMachineGroupListResult extends Array<SqlVirtualMachineGroup> {
  /**
   * @member {string} [nextLink] Link to retrieve next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the SqlVirtualMachineListResult.
 * A list of SQL virtual machines.
 *
 * @extends Array<SqlVirtualMachine>
 */
export interface SqlVirtualMachineListResult extends Array<SqlVirtualMachine> {
  /**
   * @member {string} [nextLink] Link to retrieve next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for OperationOrigin.
 * Possible values include: 'user', 'system'
 * @readonly
 * @enum {string}
 */
export type OperationOrigin = 'user' | 'system';

/**
 * Defines values for SqlVmGroupImageSku.
 * Possible values include: 'Developer', 'Enterprise'
 * @readonly
 * @enum {string}
 */
export type SqlVmGroupImageSku = 'Developer' | 'Enterprise';

/**
 * Defines values for ScaleType.
 * Possible values include: 'HA'
 * @readonly
 * @enum {string}
 */
export type ScaleType = 'HA';

/**
 * Defines values for ClusterManagerType.
 * Possible values include: 'WSFC'
 * @readonly
 * @enum {string}
 */
export type ClusterManagerType = 'WSFC';

/**
 * Defines values for ClusterConfiguration.
 * Possible values include: 'Domainful'
 * @readonly
 * @enum {string}
 */
export type ClusterConfiguration = 'Domainful';

/**
 * Defines values for IdentityType.
 * Possible values include: 'SystemAssigned'
 * @readonly
 * @enum {string}
 */
export type IdentityType = 'SystemAssigned';

/**
 * Defines values for SqlServerLicenseType.
 * Possible values include: 'PAYG', 'AHUB'
 * @readonly
 * @enum {string}
 */
export type SqlServerLicenseType = 'PAYG' | 'AHUB';

/**
 * Defines values for SqlImageSku.
 * Possible values include: 'Developer', 'Express', 'Standard', 'Enterprise', 'Web'
 * @readonly
 * @enum {string}
 */
export type SqlImageSku = 'Developer' | 'Express' | 'Standard' | 'Enterprise' | 'Web';

/**
 * Defines values for DayOfWeek.
 * Possible values include: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
 * 'Sunday'
 * @readonly
 * @enum {string}
 */
export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

/**
 * Defines values for BackupScheduleType.
 * Possible values include: 'Manual', 'Automated'
 * @readonly
 * @enum {string}
 */
export type BackupScheduleType = 'Manual' | 'Automated';

/**
 * Defines values for FullBackupFrequencyType.
 * Possible values include: 'Daily', 'Weekly'
 * @readonly
 * @enum {string}
 */
export type FullBackupFrequencyType = 'Daily' | 'Weekly';

/**
 * Defines values for ConnectivityType.
 * Possible values include: 'LOCAL', 'PRIVATE', 'PUBLIC'
 * @readonly
 * @enum {string}
 */
export type ConnectivityType = 'LOCAL' | 'PRIVATE' | 'PUBLIC';

/**
 * Defines values for SqlWorkloadType.
 * Possible values include: 'GENERAL', 'OLTP', 'DW'
 * @readonly
 * @enum {string}
 */
export type SqlWorkloadType = 'GENERAL' | 'OLTP' | 'DW';

/**
 * Defines values for DiskConfigurationType.
 * Possible values include: 'NEW', 'EXTEND', 'ADD'
 * @readonly
 * @enum {string}
 */
export type DiskConfigurationType = 'NEW' | 'EXTEND' | 'ADD';

/**
 * Contains response data for the get operation.
 */
export type AvailabilityGroupListenersGetResponse = AvailabilityGroupListener & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailabilityGroupListener;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type AvailabilityGroupListenersCreateOrUpdateResponse = AvailabilityGroupListener & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailabilityGroupListener;
    };
};

/**
 * Contains response data for the listByGroup operation.
 */
export type AvailabilityGroupListenersListByGroupResponse = AvailabilityGroupListenerListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailabilityGroupListenerListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type AvailabilityGroupListenersBeginCreateOrUpdateResponse = AvailabilityGroupListener & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailabilityGroupListener;
    };
};

/**
 * Contains response data for the listByGroupNext operation.
 */
export type AvailabilityGroupListenersListByGroupNextResponse = AvailabilityGroupListenerListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailabilityGroupListenerListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SqlVirtualMachineGroupsGetResponse = SqlVirtualMachineGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroup;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type SqlVirtualMachineGroupsCreateOrUpdateResponse = SqlVirtualMachineGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroup;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SqlVirtualMachineGroupsUpdateResponse = SqlVirtualMachineGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroup;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type SqlVirtualMachineGroupsListByResourceGroupResponse = SqlVirtualMachineGroupListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroupListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SqlVirtualMachineGroupsListResponse = SqlVirtualMachineGroupListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroupListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type SqlVirtualMachineGroupsBeginCreateOrUpdateResponse = SqlVirtualMachineGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroup;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type SqlVirtualMachineGroupsBeginUpdateResponse = SqlVirtualMachineGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroup;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type SqlVirtualMachineGroupsListByResourceGroupNextResponse = SqlVirtualMachineGroupListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroupListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SqlVirtualMachineGroupsListNextResponse = SqlVirtualMachineGroupListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineGroupListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SqlVirtualMachinesGetResponse = SqlVirtualMachine & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachine;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type SqlVirtualMachinesCreateOrUpdateResponse = SqlVirtualMachine & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachine;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SqlVirtualMachinesUpdateResponse = SqlVirtualMachine & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachine;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type SqlVirtualMachinesListByResourceGroupResponse = SqlVirtualMachineListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SqlVirtualMachinesListResponse = SqlVirtualMachineListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type SqlVirtualMachinesBeginCreateOrUpdateResponse = SqlVirtualMachine & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachine;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type SqlVirtualMachinesBeginUpdateResponse = SqlVirtualMachine & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachine;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type SqlVirtualMachinesListByResourceGroupNextResponse = SqlVirtualMachineListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SqlVirtualMachinesListNextResponse = SqlVirtualMachineListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SqlVirtualMachineListResult;
    };
};
