<template>
    <div>
      <!-- Header -->
      <nav class="navbar">
        <ul>
          <li>
            <a href="#" @click.prevent="goHome">Home</a>
          </li>
          <li>
            <a href="#" @click.prevent="logIn">Log In</a>
          </li>
        </ul>
      </nav>
  
      <main class="main-content">
        <slot></slot>
      </main>
  
      <!-- Footer -->
      <div class="footer-content">
        <p class="footer-text">This work is protected by international laws | C 2021 | thomas-veillard.fr</p>
      </div>
    </div>
  </template>
  

  <style scoped>
  .navbar {
    background-color: #42b983;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
  
  li {
    display: inline;
  }
  
  a {
    color: white;
    text-decoration: none;
    padding: 10px 25px;
    font-size: 18px;
  }
  
  a:hover {
    background-color: #2c8a65;
    border-radius: 5px;
  }
  

  .main-content {
    padding: 20px;
    min-height: calc(100vh - 150px); 
  }
  

  .footer-content {
    padding: 10px;
    color: azure;
    background-color: black;
  }
  
  .footer-text {
    display: grid;
    justify-items: center;
  }
  </style>
  