import { toggleForm } from "./components/toggleform.js";
import { handleLogin } from "./components/login.js";
import { handleSignup } from "./components/register.js";
import { Navbar } from "./components/navbar.js";
import './index.css'

toggleForm();

handleSignup();
handleLogin();

Navbar()