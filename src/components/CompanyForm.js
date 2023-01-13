import React, { useState } from "react";
import {
  Grid,
  InputLabel,
  Paper,
  Select,
  TextField,
  MenuItem,
  Button,
  Link,
} from "@mui/material";
import LoginIcon from "../assets/login.png";
import { Stack } from "@mui/system";

const btns = ["1-20", "21-50", "51-200", "201-500", "500+"];

const CompanyForm = () => {
  const [selectIndustry, setSelectIndustry] = useState("");
  const [selectedCompanySize, setSelectedCompanySize] = useState("51-200");

  const handleChange = (e) => {
    setSelectIndustry(e.target.value);
  };

  const formStyle = {
    height: "70vh",
    width: 378,
    margin: "auto",
  };
  const linkStyle = {
    color: "#545454",
    fontWeight: 400,
    cursor: "pointer",
    textDecoration: "none",
  };
  return (
    <Grid>
      <Paper elevation={0} style={formStyle}>
        <Grid align="center">
          <img src={LoginIcon} alt="LoginIcon" />
          <h2 style={{ fontWeight: 500, color: "#212121", fontSize: 26 }}>
            It’s a delight to have you onboard
          </h2>
          <p
            style={{
              fontWeight: 400,
              color: "#545454",
              fontSize: 14,
              fontStyle: "normal",
              marginBottom: "24px",
            }}
          >
            Help us know you better.
            <br />
            (This is how we optimize Wobot as per your business needs)
          </p>
          <TextField
            style={{ color: "#545454", fontSize: 14, fontWeight: 500 }}
            label="Company name"
            placeholder="e.g. Example Inc."
            size="small"
            fullWidth
          />
        </Grid>
        <Grid marginTop={3}>
          <InputLabel
            style={{ color: "#545454", fontSize: 14, fontWeight: 500 }}
            id="industry"
          >
            Industry
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={selectIndustry}
            onChange={handleChange}
            label="Select Industry"
            size="small"
            fullWidth
            required
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={10}>Amazon</MenuItem>
            <MenuItem value={20}>Microsoft</MenuItem>
            <MenuItem value={30}>Telsa</MenuItem>
          </Select>
        </Grid>
        <p style={{ fontWeight: 500, color: "#545454", fontSize: 14 }}>
          Company size
        </p>

        <Grid container columnGap={"8px"}>
          {btns.map((item) => (
            <Button
              key={item}
              sx={{ borderRadius: "2px", padding: "4px 8px" }}
              disableElevation
              variant={item === selectedCompanySize ? "contained" : "outline"}
              size="small"
              onClick={() => setSelectedCompanySize(item)}
            >
              {item}
            </Button>
          ))}
        </Grid>
        <Stack marginTop={5}>
          <Button
            disableElevation
            variant="contained"
            size="medium"
            sx={{ textTransform: "capitalize" }}
          >
            get started
          </Button>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            columnGap={"10px"}
            sx={{ marginTop: "160px" }}
          >
            <Link variant="text" style={linkStyle}>
              Terms of use
            </Link>
            <span
              style={{ height: 14, width: 1.35, backgroundColor: "#545454" }}
            />
            <Link variant="text" style={linkStyle}>
              Privacy policy
            </Link>
          </Grid>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default CompanyForm;
