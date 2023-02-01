import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       refetchOnWindowFocus: false, //automatically requests fresh data in the background if user leaves the app and returns to stale data
       refetchOnReconnect: false, //if true, refetch on mount if the data is stale.
       retry: false, //failed queries will retry infinitely.
       staleTime: 5*60*1000 // the time in milliseconds after data is considered stale. Defaults to 0
     },
   },
 });

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   // <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>
   // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
