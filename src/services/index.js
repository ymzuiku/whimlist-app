import ApiClient from './ApiClient';
import SyncClient from './SyncClient';

const sharedApiClient = new ApiClient();
const sharedSyncClient = new SyncClient();

export {
  ApiClient,
  SyncClient,
  sharedApiClient,
  sharedSyncClient,
};
