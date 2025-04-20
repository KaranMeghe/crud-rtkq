/** @format */

import { Card } from '../index';
import { useFetchStudentsQuery } from '../../store/apis/studentApi';

const CardContainer = () => {
  const { data, isLoading, isError, isSuccess } = useFetchStudentsQuery();

  return (
    <div className='container'>
      <h2 className='my-4'>Read Operation</h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something Went Wrong...</p>}
      <div className='row'>
        {isSuccess &&
          data?.map((student) => (
            <div key={student.id} className='col-md-4 mb-3'>
              <Card student={student} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
