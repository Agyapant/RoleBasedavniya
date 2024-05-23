import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { LockOutlined } from "@mui/icons-material";
  import { useState } from "react";
  import { Link} from "react-router-dom";
  import {useNavigate} from 'react-router-dom'; 
  import './Register.css';
  const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error ,setError] = useState<string | null>(null);
    const navigate = useNavigate();
  
    const handleRegister = (e:React.FormEvent) => {
        e.preventDefault();
        const user={email , name, password};
        const users = JSON.parse(localStorage.getItem('users')||'[]');

        if(users.some((u:any)=> u.email === email)){
            setError("User Already Exist");
        }
        else{
            users.push(user);
            console.log(users, "register");
            
            localStorage.setItem('users',JSON.stringify(users));
            navigate('/login')
        }
    };
    const isFormValid= name && email && password
    return (
      <>
        <Container maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              mt: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
              <LockOutlined />
            </Avatar>
            <Typography variant="h5">Register</Typography>
            {error && <Typography variant="h5">{error}</Typography>}
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                 
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleRegister}
                disabled={!isFormValid}
              >
                Register
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item className="register-link">
                  <Link to="/login">Already have an account? Login</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </>
    );
  };
  
  export default Register;