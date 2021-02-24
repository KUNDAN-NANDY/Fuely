import React, {useEffect, useState} from "react";
import axios from "axios";

function State (props) {
    const [statesData,setStatesData] = useState([]);
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
  return(
    <>
   <div className="state_grid">
     <div className="available_state"> Available State's
     </div>
    <div className="grid-container">
    {statesData.map ((item,index) => {
        return (
     <div key="index" className="grid-item">
       <h4>{item.title}</h4>
     </div>
          );
      })}
      <div className="grid-item">
         <h4>Others</h4>
      </div>
    </div>
   </div>
    </>
    );
}
export default State;