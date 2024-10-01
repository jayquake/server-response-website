import * as React from "react";
import HttpIcon from "@mui/icons-material/Http"; // OK, Redirected, etc.
import ErrorIcon from "@mui/icons-material/Error"; // NotFound, InternalError, etc.
import BlockIcon from "@mui/icons-material/Block"; // Blocked, AccessDenied, etc.
import CloudOffIcon from "@mui/icons-material/CloudOff"; // BlockedByCloudflare, etc.
import TimeoutIcon from "@mui/icons-material/TimerOff"; // PageTimeout, etc.
import CustomNavLink from "./customNavLink"; // Ensure this is the correct path

export const mainListItems = (
  <React.Fragment>
    <CustomNavLink to="/status/none" label="None" icon={HttpIcon} />
    <CustomNavLink to="/status/ok" label="OK" icon={HttpIcon} />
    <CustomNavLink to="/status/redirected" label="Redirected" icon={HttpIcon} />
    <CustomNavLink to="/status/not-found" label="Not Found" icon={ErrorIcon} />
    <CustomNavLink to="/status/blocked" label="Blocked" icon={BlockIcon} />
    <CustomNavLink
      to="/status/no-response"
      label="No Response"
      icon={CloudOffIcon}
    />
    <CustomNavLink
      to="/status/internal-error"
      label="Internal Error"
      icon={ErrorIcon}
    />
    <CustomNavLink
      to="/status/access-denied"
      label="Access Denied"
      icon={BlockIcon}
    />
    <CustomNavLink
      to="/status/blocked-by-cloudflare"
      label="Blocked by Cloudflare"
      icon={CloudOffIcon}
    />
    <CustomNavLink
      to="/status/failed-request"
      label="Failed Request"
      icon={ErrorIcon}
    />
    <CustomNavLink
      to="/status/server-error"
      label="Server Error"
      icon={ErrorIcon}
    />
    <CustomNavLink
      to="/status/invalid-domain"
      label="Invalid Domain"
      icon={BlockIcon}
    />
    <CustomNavLink
      to="/status/page-scan-interrupted"
      label="Page Scan Interrupted"
      icon={TimeoutIcon}
    />
    <CustomNavLink
      to="/status/page-timeout"
      label="Page Timeout"
      icon={TimeoutIcon}
    />
    <CustomNavLink
      to="/status/page-scan-aborted"
      label="Page Scan Aborted"
      icon={TimeoutIcon}
    />

    <CustomNavLink
      to="https://www.google.com/"
      label="Non Licensed Domain"
      icon={BlockIcon}
    />
  </React.Fragment>
);
