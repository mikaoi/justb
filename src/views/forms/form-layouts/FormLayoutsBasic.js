// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Avatar } from "@mui/material";
import logo from "../../../styles/images/logo.svg"


// ** Icons Imports
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";
import { height } from "@mui/system";

const FormLayoutsBasic = () => {
  // ** States
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const [confirmPassValues, setConfirmPassValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleConfirmPassChange = (prop) => (event) => {
    setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({
      ...confirmPassValues,
      showPassword: !confirmPassValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  


  return (
    <Card style={{ border: "none", boxShadow: "none", height: "100%", minHeight: '100%' }}>
      <Grid container spacing={0}>
      <a href="https://movewithjustb.com/">
          <Avatar
            src={logo}
            sx={{
              height: { xs: "50px", "3xl": "55px" },
              width: "auto",
              position: "absolute",
              top: "16px",
              left: "16px",
            }}
          />
        </a>
      </Grid>
      <Typography
        sx={{ alignContent: "center", textAlign: "center", fontSize: "34px" }}
      >
        justb
      </Typography>
      <CardHeader
        title="Register your personal account"
        titleTypographyProps={{
          variant: "h4",
          alignContent: "center",
          textAlign: "center",
          color: "#31476E",
        }}
      />
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Username" placeholder="mwilson12" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                placeholder="carterleonard@gmail.com"
                helperText="You can use letters, numbers & periods"
              />
            </Grid>

            <Grid item xs={6}>
              <InputLabel
                sx={{ pb: 2 }}
                id="demo-simple-select-filled-label"
              >
                Who are you?
              </InputLabel>
              <Select
                label="Age"
                defaultValue="10"
                id='demo-simple-select-filled'
                labelId="demo-simple-select-filled-label"
                
              >
                <MenuItem value="Age">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Student</MenuItem>
                <MenuItem value={20}>Parent</MenuItem>
                <MenuItem value={30}>Therapist</MenuItem>
                <MenuItem value={40}>Teacher</MenuItem>
                <MenuItem value={50}>Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <InputLabel
                sx={{ pb: 2 }}
                id="demo-simple-select-outlined-autoWidth-label"
              >
                How old is the child?
              </InputLabel>
              <TextField
                type="number"
                label="age"
                id="form-props-number"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl sx={{ flexWrap: 'wrap', flexDirection: 'row' }}>
      <RadioGroup name='simple-radio'  aria-label='simple-radio'>
        <Typography>Does the child (children) have a learning difference (e.g. Autism or ADHD)?</Typography>
        <FormControlLabel value='checked' control={<Radio />} label='Yes' />
        <FormControlLabel value='unchecked' control={<Radio />} label='No' />
      </RadioGroup>
      </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="form-layouts-basic-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  label="Password"
                  value={values.password}
                  id="form-layouts-basic-password"
                  onChange={handleChange("password")}
                  type={values.showPassword ? "text" : "password"}
                  aria-describedby="form-layouts-basic-password-helper"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label="toggle password visibility"
                      >
                        {values.showPassword ? (
                          <EyeOutline />
                        ) : (
                          <EyeOffOutline />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="form-layouts-basic-password-helper">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="form-layouts-confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  label="Confirm Password"
                  value={confirmPassValues.password}
                  id="form-layouts-confirm-password"
                  onChange={handleConfirmPassChange("password")}
                  aria-describedby="form-layouts-confirm-password-helper"
                  type={confirmPassValues.showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickConfirmPassShow}
                        onMouseDown={handleMouseDownPassword}
                        aria-label="toggle password visibility"
                      >
                        {confirmPassValues.showPassword ? (
                          <EyeOutline />
                        ) : (
                          <EyeOffOutline />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="form-layouts-confirm-password-helper">
                  Make sure to type the same password as above
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button type="submit" variant="contained" size="large" sx={{
                  borderRadius: '50px'
                }}>
                  Get Started!
                </Button>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ mr: 2 }}>
                    Already have an account?
                  </Typography>
                  <Link href="/" onClick={(e) => e.preventDefault()}>
                    Log in
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormLayoutsBasic;
