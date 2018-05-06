// 请按名称排序放置
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
