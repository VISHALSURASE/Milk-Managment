/** @format */

import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from '../../Store/services/auth-service';
import { dashboardApi } from '../services/dashboard-services';
// import { farmerApi } from '../services/farmer-services';
// import { collectorApi } from '../services/collector-services';
// import { milkCollectionApi } from '../services/milk-collection-services';
// import { paymentApi } from '../services/payment-services';

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,
//   [farmerApi.reducerPath]: farmerApi.reducer,
//   [collectorApi.reducerPath]: collectorApi.reducer,
//   [milkCollectionApi.reducerPath]: milkCollectionApi.reducer,
//   [paymentApi.reducerPath]: paymentApi.reducer,
});


