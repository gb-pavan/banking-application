import LoginFormFields from '../LoginFormFields'
import StakeHolders from '../StakeHolders'
import {useState} from 'react'
import './index.css'
import Cookies from 'js-cookie';

const LoginForm = (props) => {
    const {setShowBanker,setShowLogin, setBankerData, setSelectedCustomer} = props
    const [activeTab, setActiveTab] = useState("banker");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showErrorMsg, setShowErrorMsg] = useState(false);
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);      
      if(tab==='banker'){
        setShowBanker(false)
        
      }
      else{
        setShowBanker(true)
      }
    };
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const StakeHolderCredentials = {
        username,
        password,activeTab
      }
      console.log(StakeHolderCredentials)


      const response = await fetch('http://localhost:3005/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(StakeHolderCredentials),
      });

      console.log(response)

      if (response.ok){
        const data = await response.json();
        setShowLogin(false)
        console.log('received data',data)

        // Set the cookie with SameSite=None attribute
        Cookies.set('myToken', data.token, { sameSite: 'none', secure: true });
        if (activeTab === 'banker'){
          setBankerData(data.rows);
        }
        else{
          setSelectedCustomer(data.rows);
        }
      }
      else if (response.status === 401) {
        // User is not logged in, display the error message
        response.text().then(errorMessage => {
          console.log(errorMessage); 
          setErrorMsg(errorMessage); setShowErrorMsg(true)
        })}
        else if (response.status === 403) {
          // User is not logged in, display the error message
          response.text().then(errorMessage => {
            console.log(errorMessage); 
            setErrorMsg(errorMessage); setShowErrorMsg(true)
          })}
      else{
        console.log('error response',response.statusText)
      }
      
      //const data = await response.json();

      //console.log("data",typeof(data))
      
      // update state or perform any other necessary actions based on the server response
    };
  
    return (
      <div className='login-container'>
        <h1 className='bank-name'>Welcome To JilJil JigaJiga Bank</h1>
        <div className="login-form">
          <StakeHolders activeTab={activeTab} onTabClick={handleTabClick} />
          <LoginFormFields
            username={username}
            onUsernameChange={handleUsernameChange}
            password={password}
            onPasswordChange={handlePasswordChange}
            onSubmit={handleSubmit}
            activeTab={activeTab}
            errorMsg={errorMsg}
            showErrorMsg={showErrorMsg}
          />
        </div>
      </div>
      
    );
  };
  
  export default LoginForm;