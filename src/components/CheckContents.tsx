import { useState } from 'react';

import { Data } from '../data/Data';

const CheckContents: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean[]>(Data.map(() => false));

  const handleChange = (index: number) => {
    setIsClicked((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className='flex flex-wrap justify-center items-center gap-2'>
      {Data.map((data, index) => (
        <div
          key={index}
          className={`p-3 w-48 ${isClicked[index] ? 'bg-gray-100' : ''}`}
        >
          <input
            type='checkbox'
            id={`checkbox-${index}`}
            className='mr-2'
            onChange={() => handleChange(index)}
          />
          <label htmlFor={`checkbox-${index}`} className='text-sm font-bold'>
            {data.name}
          </label>
          <p className='text-xs'>{data.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckContents;
