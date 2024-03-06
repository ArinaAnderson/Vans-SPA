import React, { useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Dashboard = () => {
  const [vanData, setVanData] = useState(null); 
  const [error, setError] = useState(null);
  // const [requestStatus, setRequestStatus]

  const params = useParams();

  const renderOutput = () => {


    return (
      <main className="van">
        <div className="center">
          Dashboard
        </div>
      </main>
    );
  }

  return renderOutput();
};
// className="btn btn--orange"
export default Dashboard;
