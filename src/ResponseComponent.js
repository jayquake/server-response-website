import React from "react";
import FetchStatusComponent from "../components/FetchStatuses";

export const NoneResponse = () => <FetchStatusComponent path="" />;
export const OKResponse = () => <FetchStatusComponent path=""/>;
export const NotFoundResponse = () => <FetchStatusComponent path=""/>;
export const InternalErrorResponse = () => (
<FetchStatusComponent path=""/>);
export const Blocked = () => <FetchStatusComponent path=""/>;
export const NoResponse = () => <FetchStatusComponent path="" />;
export const InternalError = () => <FetchStatusComponent path=""/>;
export const BlockedbyCloudflare = () => (
  <FetchStatusComponent path=""/>
);
export const FailedRequest = () => <FetchStatusComponent path=""/>;
export const ServerError = () => <FetchStatusComponent path=""/>;
export const InvalidDomain = () => <FetchStatusComponent path=""/>;
export const PageScanInterrupted = () => (
  <FetchStatusComponent path=""/>
);
export const PageTimeout = () => <FetchStatusComponent path=""/>;
export const PageScanAborted = () => <FetchStatusComponent path=""/>;
export const NonLicensedDomain = () => <FetchStatusComponent path=""/>;
export const AccessDenied = () => <FetchStatusComponent path=""/>;
export const Redirected = () => <FetchStatusComponent path=""/>;
