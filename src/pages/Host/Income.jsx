import React, { useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Income = () => {
  const [vanData, setVanData] = useState(null); 
  const [error, setError] = useState(null);
  // const [requestStatus, setRequestStatus]

  const params = useParams();

  const renderOutput = () => {

    return (
      <main className="van">
        <div className="center">
          Income
        </div>
      </main>
    );
  }

  return renderOutput();
};
// className="btn btn--orange"
export default Income;
