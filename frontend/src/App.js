// import logo from './logo.svg';
import './App.css';
// import React from 'react';
import Home from './components/Home';//.jsx';
import UserInfo from './components/UserInfo';//.jsx';
import { Routes, Route } from 'react-router-dom';
import { useLogoutFunction, useRedirectFunctions, withAuthInfo } from '@propelauth/react';

const App = withAuthInfo(({isLoggedIn}) => {
  const logoutFn = useLogoutFunction()
  const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();
    
  if (isLoggedIn) {
    return <div>
        <p>The User is logged in</p>
        <button onClick={() => logoutFn(true)}>
            Click here to log out
        </button>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/user_info" element={<UserInfo/>}/>
        </Routes>
    </div>
  } 
  else {
      return <div>
          To get started, please log in as test user.
          <br/>
          <button onClick={() => redirectToSignupPage()}>
              Sign up
          </button>
          <button onClick={() => redirectToLoginPage()}>
              Log in
          </button>
      </div>
  }
})

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
