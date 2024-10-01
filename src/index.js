import * as React from "react";
import { render } from "react-dom";
import Dashboard from "./components/dashboard";

import {
  NoneResponse,
  OKResponse,
  NotFoundResponse,
  InternalErrorResponse,
  Blocked,
  NoResponse,
  InternalError,
  BlockedbyCloudflare,
  FailedRequest,
  ServerError,
  InvalidDomain,
  PageScanInterrupted,
  PageTimeout,
  PageScanAborted,
  NonLicensedDomain,
  AccessDenied,
  Redirected,
} from "./ResponseComponent";
import Home from "./routes/Home";

<Dashboard />;

<Routes>
  <Route path="/" element={<Dashboard />}>
    {/* Nested routes for server responses */}
    <Route path="status/none" element={<NoneResponse />} />
    <Route path="status/ok" element={<OKResponse />} />
    <Route path="status/not-found" element={<NotFoundResponse />} />
    <Route path="status/internal-error" element={<InternalErrorResponse />} />
    <Route path="status/blocked" element={<Blocked />} />
    <Route path="status/no-response" element={<NoResponse />} />
    <Route
      path="status/blocked-by-cloudflare"
      element={<BlockedbyCloudflare />}
    />
    <Route path="status/failed-request" element={<FailedRequest />} />
    <Route path="status/server-error" element={<ServerError />} />
    <Route path="status/invalid-domain" element={<InvalidDomain />} />
    <Route
      path="status/page-scan-interrupted"
      element={<PageScanInterrupted />}
    />
    <Route path="status/page-timeout" element={<PageTimeout />} />
    <Route path="status/page-scan-aborted" element={<PageScanAborted />} />
    <Route path="status/non-licensed-domain" element={<NonLicensedDomain />} />
  </Route>
  <Route path="status/access-denied" element={<AccessDenied />} />
  <Route path="status/redirected" element={<Redirected />} />
</Routes>;
