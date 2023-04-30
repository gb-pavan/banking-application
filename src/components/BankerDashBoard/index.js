import './index.css'
import CustomerList from '../CustomerList'

const BankerDashBoard = ({bankerData,showLogin}) => {     
  console.log("bankerData",bankerData)
  const isAfterLogin = !showLogin
  console.log("isAfterLogin",isAfterLogin)
      return (
        <div className='banker-dashboard'>
          <h1>Customer List</h1>
          <CustomerList customers={bankerData} isAfterLogin={isAfterLogin} />
        </div>
      );
  }



export default BankerDashBoard;