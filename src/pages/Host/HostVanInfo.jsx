import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanInfo = () => {
  const [currentVan] = useOutletContext();
  const { name, type, description } = currentVan;
  return (
    <div className="host-van__description">
      <p>
        <span className="host-van__description-subtitile">Name: </span>
        {name}
      </p>
      <p>
        <span className="host-van__description-subtitile">Category: </span>
        {type}</p>
      <p>
        <span className="host-van__description-subtitile">Description: </span>
        {description}
      </p>
      <p>
        <span className="host-van__description-subtitile">Visibility: </span>
        Public
      </p>
    </div>
  );
};
// className="btn btn--orange"
export default HostVanInfo;
