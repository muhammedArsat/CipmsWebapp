
import {  Button, Card, CardContent,TextField, Typography } from "@mui/material"

import LoginLogo from '../assets/loginLogo.svg';
import GoogleLogo from '../assets/google.svg'

const Login = () => {

 
  return (
    <div className="flex justify-center items-center min-h-svh p-2 ">
      <Typography className="fixed top-0 left-0 p-2" variant="h2">CIPMS</Typography>
      <Card className="p-2 flex flex-col gap-2" variant="elevation" sx={{ maxWidth: 405 }} >
        <Typography variant="h4" className="text-center font-paragraph">
          Login Here
        </Typography>
        <Typography variant="subtitle1" className="text-center">
          Sign in to get latest updates about the internship in your college
        </Typography>
        <CardContent className="flex flex-col gap-3">
          <TextField placeholder="example@gmail.com" label="Email" fullWidth variant="outlined" ></TextField>
          <TextField placeholder="min 6 characters" label="Password" fullWidth variant="outlined" type="password" ></TextField>
          <Button fullWidth variant="contained" size="large">Login</Button>
          <Typography className="text-center" variant="subtitle2">Or</Typography>

          <Button variant="outlined" size="large">
            
            <span className="flex items-center gap-3">
              <img src={GoogleLogo} alt="" className="w-7 h-7" />
              Sign in with google
            </span>
          </Button>
        
        </CardContent>
      </Card>

      <span>
        <img src={LoginLogo} alt="Loginlogo" className=" lg:fixed -bottom-20 object-contain "/>
      </span>
    </div>
  )
}

export default Login
