import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
  alertTitleClasses,
} from "@mui/material";

import { useState, useContext } from "react";

import { authenticateSignUp, Login } from "../service/api";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Component = styled(Box)`
  height: 70vh;
  width: 50vw;
  display: flex;
`;

const Image = styled(Box)`
  background: #2874f0;
  width: 40%;
  padding: 45px 35px;
  color: #fff;
`;

const FormWrapper = styled(Box)`
  width: 60%;
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin-top: 20px;
  }
`;

const validateEmail = async (email) => {};

const LoginDialog = ({ open, setOpen }) => {
  const { accountCont, setAccountCont } = useContext(AppContext);

  const signupInitial = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const loginInitial = {
    email: "",
    password: "",
  };

  const [account, setAccount] = useState("login");

  const [signup, setSignup] = useState(signupInitial);

  const [login, setLogin] = useState(loginInitial);

  const handleClose = () => {
    setOpen(false);
    setAccount("login");
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    return passwordRegex.test(password);
  };

 const signUpUser = async () => {

  if (!validatePassword(signup.password)) {

    toast.error(
      "Password must contain uppercase, lowercase, number and special character"
    );

    return;
  }

  const response = await authenticateSignUp(signup);

  if (!response) return;

  if (!response.success) {

    toast.error(response.message);

    return;
  }

  setAccountCont(signup.firstname);

  toast.success(response.message);

  handleClose();
};

const userLogin = async () => {

    const response = await Login(login);

    if (!response) return;

    if (!response.success) {

    toast.error(response.message);

    return;
}

    setAccountCont(response.user.firstname);

    toast.success(response.message);

    handleClose();
};

  return (
    <Dialog open={open} onClose={handleClose} maxWidth={false}>
      <Component>
        
        {account === "login" ? (
          <Image>
            <Typography variant="h5">Login</Typography>

            <Typography style={{ marginTop: 20 }}>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Image>
        ) : (
          <Image>
            <Typography variant="h5">SignUp</Typography>

            <Typography style={{ marginTop: 20 }}>
              Well Looks like you're new here!!
            </Typography>
          </Image>
        )}

        
        {account === "login" ? (
          <FormWrapper>
            <TextField
              type="email"
              variant="standard"
              name="email"
              label="Enter Email / Phone Number"
              onChange={(e) => {
                setLogin({
                  ...login,
                  [e.target.name]: e.target.value,
                });
              }}
            />

            <TextField
              variant="standard"
              label="Enter Password"
              type="password"
              name="password"
              helperText={
                login.password.length < 8 ? "Minimum 8 characters" : ""
              }
              onChange={(e) => {
                setLogin({
                  ...login,
                  [e.target.name]: e.target.value,
                });
              }}
            />

            <Typography
              style={{
                fontSize: 12,
                color: "#878787",
              }}
            >
              By continuing, you agree to Flipkart Terms & Conditions
            </Typography>

            <Button
              variant="contained"
              onClick={userLogin}
              style={{ background: "#fb641b" }}
            >
              Login
            </Button>

            <Typography style={{ textAlign: "center" }}>OR</Typography>

            <Button variant="outlined">Request OTP</Button>

            <Typography
              style={{
                textAlign: "center",
                fontSize: 14,
                cursor: "pointer",
                color: "#2874f0",
              }}
              onClick={() => {
                setAccount("signup");
              }}
            >
              New to Flipkart? Create an account
            </Typography>
          </FormWrapper>
        ) : (
          <FormWrapper>
            <TextField
              variant="standard"
              name="firstname"
              label="Enter first name"
              onChange={(e) => {
                setSignup({
                  ...signup,
                  [e.target.name]: e.target.value,
                });
              }}
            />

            <TextField
              variant="standard"
              name="lastname"
              label="Enter last name"
              onChange={(e) => {
                setSignup({
                  ...signup,
                  [e.target.name]: e.target.value,
                });
              }}
            />

            <TextField
              type="email"
              variant="standard"
              name="email"
              label="Enter Email / Phone Number"
              onChange={(e) => {
                setSignup({
                  ...signup,
                  [e.target.name]: e.target.value,
                });
              }}
            />

            <TextField
              variant="standard"
              label="Enter Password"
              type="password"
              name="password"
              helperText={
                signup.password.length < 8 ? "Minimum 8 characters" : ""
              }
              onChange={(e) => {
                setSignup({
                  ...signup,
                  [e.target.name]: e.target.value,
                });
              }}
            />

            <Button
              variant="contained"
              style={{ background: "#fb641b" }}
              onClick={signUpUser}
            >
              SignUp
            </Button>

            <Typography
              onClick={() => setAccount("login")}
              style={{
                cursor: "pointer",
                color: "#2874f0",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Already have an account?
            </Typography>
          </FormWrapper>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
