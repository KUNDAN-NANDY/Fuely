import React, {useEffect, useState, Suspense} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


function States (props) {
  const [statesData,setStatesData] = useState([]);
  
    //Load all states
  useEffect(() => {
    async function getStatesData() {
      const data = await axios.get(
        "https://api.cretic.co.in/api/states"
      );
      var modifiedData = Object.keys(data.data).map((key) => {
        return {
          id: data.data[key],
          title: data.data[key].split("-").join(" "),
        };
      });
      setStatesData(modifiedData);
    }

    getStatesData();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    return (
    <>
     <h2>States</h2>
    <div class="container">
     {statesData.map ((item,index) => {
        return (
          <div key="index" class="states_card">
            <div class="row">
             <div class="col">
              <Link style={{ color: '#FFF' }} className="states_title" to={"/state/"+item.id}><h4 className="states_title">{item.title}</h4></Link>
             </div>
            </div>
          </div>
          );
      })}
    </div>
    </>
    );
}
export default States;