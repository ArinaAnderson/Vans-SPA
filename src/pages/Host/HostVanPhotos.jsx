import React, { useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

const HostVanPhotos = ({ currentVan, setCurrentVan}) => {
  const [error, setError] = useState(null);
  const [requetStatus, setRequestStatus] = useState('idle');

  const params = useParams();
  console.log(currentVan);

  useEffect(() => {
    if (currentVan) {
      return;
    }

    setError(null);
    setRequestStatus('loading');

    axios.get(`/api/host/vans/${params.id}`)
      .then((response) => response.data)
      .then((payload) => {
        setRequestStatus('success');
        setCurrentVan(payload.vans);
      })
      .catch((e) => {
        setError(e);
        setRequestStatus('failure');
      })
  }, []);

  const renderOutput = () => {
    if (requetStatus === 'failure') {
      return <h2>{`Error ${error.message}, please, try again...`}</h2>; 
    }

    if (requetStatus === 'loading') {
      return (<h2>Loading...</h2>);
    }

    if (currentVan === null) {
      return (<h2>Loading...</h2>);
    }

    const { type, name, id, imageUrl, description, price } = currentVan;

    return (
      <div className="host-van__photos">
        <img alt="" src={imageUrl} />
      </div>
    );
  };

  return renderOutput();
};
// className="btn btn--orange"
export default HostVanPhotos;
