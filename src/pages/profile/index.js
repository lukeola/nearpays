import "./profile.scss";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table.jsx";
import Axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";







const Single = () => {

  const [profile, setProfile] = useState([])

useEffect(()=>{
  const userProfile = async () => {
    try{
      const res = await Axios.get("http://localhost:3001/user")
      setProfile(res.data)
    }catch(err){
    console.log(err)
  }
}
userProfile()
},[])
  return (
    <div className="single">
    {profile.map(details=>(
      <div className="singleContainer" key={details.id}>
        <div className="top">
          <div className="left">
            <div className="editButton"><Link to={`/update/${details.id}`}>Edit</Link></div>
            <h1 className="title">Information</h1>
            <div className="item">
            
                
                 {details.image &&   <img
                src={details.image}
                alt=""
                className="itemImg"
              />}
            
              <div className="details">
            
                <h1 className="itemTitle">{details.fullname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{details.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{details.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  {details.address}
                  </span>
                </div>
                {/* <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Single;
