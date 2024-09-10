import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link, navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import GavelTwoToneIcon from "@mui/icons-material/GavelTwoTone";
import VerifiedUserTwoToneIcon from "@mui/icons-material/VerifiedUserTwoTone";
import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => (document.title = props.title), []);
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Typography m="auto" variant="overline" gutterBottom>
                  Server Response Testing
                </Typography>
              </Paper>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography m="auto" variant="overline">
              <h3>Use Cases:</h3>
            </Typography>
            <Divider sx={{ mb: 2 }}></Divider>

            <Typography align="justify" variant="overline">
              Server response testing plays a crucial role in ensuring the
              resilience and reliability of web applications. By simulating
              various server-side scenarios, developers and testers can:
              <ul>
                <li>
                  Identify and address potential issues before they impact
                  end-users, enhancing the overall user experience.
                </li>
                <li>
                  Ensure that the application behaves as expected under
                  different conditions, including success, error, and edge
                  cases.
                </li>
                <li>
                  Test the application's error handling capabilities to verify
                  that appropriate error messages are displayed to users.
                </li>
                <li>
                  Assess the performance and stability of the application under
                  various server load conditions.
                </li>
                <li>
                  Enhance security by testing how the application responds to
                  unauthorized access attempts or other malicious activities.
                </li>
              </ul>
              This comprehensive approach to server response testing helps in
              building more robust, user-friendly, and secure web applications.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}></Grid>
      </Grid>
    </>
  );
}
