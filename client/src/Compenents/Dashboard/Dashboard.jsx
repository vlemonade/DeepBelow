import React from 'react'
import '../../App.css'


const Dashboard = () => {
  return (
    <div className="Dashboard ">
      <div className="NavBar">
        
        <a href="/">Logout</a>

      </div>

      <div className="rightUserBox">

      <div className="userProfile">
        <div className="userBackgroundPic">
        
        </div>
        <div className="userProfilePic">
        
        </div>
      </div>

      <div className="userTimeline">

        <div className="flexbox">
          <div className="notif1">

          </div>

          <div className="notif2">

          </div>
        </div>
     
      </div>
      </div>
         
    </div>
  )
}

export default Dashboard
