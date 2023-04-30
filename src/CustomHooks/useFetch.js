import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';



const useFetch = (url, method, isAfterLogin, bodyData) => {

  const [fetchedData, setFetchedData] = useState([])
  console.log("you are in")
  console.log('selectedCustomer bodyData', bodyData)
  console.log("url,method,isAfterLogin,webToken", url, method, isAfterLogin)
  const webToken = Cookies.get('myToken');
  console.log("webToken before sending", webToken)

  let bodyObject = {};
  if (typeof (bodyData) === 'object') {
    bodyObject = { ...bodyData };
  }
  else {
    bodyObject = { 'customerAccountNumber': bodyData };
  }

  console.log('checking correct or not bodyObject', bodyObject);

  useEffect(() => {
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + webToken
      },
      body: JSON.stringify(bodyObject),
    }).then(res => res.json()).then(jsonData => setFetchedData(jsonData))

  }, []);
  return fetchedData;
}

export default useFetch;
