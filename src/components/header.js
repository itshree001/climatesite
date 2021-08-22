import React from 'react';
import Login, { LoginForm } from './LoginForm';

const Header=() =>{
    return(
       
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>

<div class="login">

<LoginForm>Login</LoginForm>
</div>
</div>
    )
}

export default Header