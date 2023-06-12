import React from 'react';
import { Link } from 'react-router-dom';

function Next({ to }: { to: string }) {
  return (
    <div>
      <Link to={to}>
        <i className='fa-sharp fa-solid fa-chevron-right fa-2x'></i>
      </Link>
    </div>
  );
}

export default Next;
