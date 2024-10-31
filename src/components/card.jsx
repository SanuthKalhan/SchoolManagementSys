import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
  return (
    <div className="relative w-64 h-80 bg-white border rounded-lg  overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl" onClick={props.onClick}>
      <div className="absolute top-0 left-0 right-0 w-52 h-52 bg-gradient-to-r from-green-400 to-blue-500 rounded-br-full"></div>
      <div
        className="absolute top-0 left-0 right-0 w-48 h-48 bg-white rounded-br-full z-0"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-tl-full z-0">
        <FontAwesomeIcon icon={faChevronRight} className="text-white ml-5 mt-4" />
      </div>

      <h3 className="text-center text-xl font-semibold mb-4 mt-56 text-gray-500">
        {props.title}
      </h3>
    </div>
  );
};

export default Card;
