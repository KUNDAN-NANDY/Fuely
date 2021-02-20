  import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Offline, Online, Detector} from "react-detect-offline";


  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';

  function Off(){
    const notify = () => toast("Wow so easy !");

    return (
      <div>
        {notify}
      </div>
    );
  }
export default Off;