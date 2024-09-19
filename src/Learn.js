import React, { useEffect, useState } from 'react';
import { sum, removeDuplicates } from './utills/utill';

const Learn = () => {
  const x = 10;
  const y = 20;
  const [duparray, setDuparray] = useState([]);

  useEffect(() => {
    sum(x, y);

    setDuparray(removeDuplicates([1, 5, 3, 1, 8, 5]));
  }, []);

  /*
    useEffect(()=>{ },[])
    useMemo(()=>{ },[])
    useCallback(()=>{ },[])
*/
  const changeName = () => {
    document.getElementById('name').innerText = 'Nethmee';
    //innerText -  returns all text
    //innrHTML - returns only html element
  };
  return (
    <div>
      <div>
        {/*duplicates checking code*/}
        Sum is {x + y}
        {/*      array eke thiyena eka eka index ekata adla value tik gannwa */}
        {duparray.map((item) => (
          <li>{item}</li>
        ))}
      </div>
      <div>
        hi I'm <p id="name">name</p>
        <button onClick={changeName}>Change name</button>
      </div>
      <div></div>
    </div>
  );
};

export default Learn;
