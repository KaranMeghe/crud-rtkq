/** @format */

import React from 'react';
import { STUDENT } from '../../store/models/student.model';

interface CardProps {
  student: STUDENT;
}

const Card: React.FC<CardProps> = ({ student }) => {
  return (
    <>
      <div className='card mb-3 p-4'>
        <div className='card-body'>
          <h5 className='card-title'>{student.studentName}</h5>
          <p className='card-text'>{student.email}</p>
        </div>

        <div className='d-flex gap-4'>
          <button type='button' className='btn btn-primary'>
            Edit
          </button>

          <button type='button' className='btn btn-danger'>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
