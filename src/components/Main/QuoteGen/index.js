import React, {useState, useEffect} from 'react';
import {Button} from '@dhis2/ui-core'
import './style.css'
import * as api from './api';


export const QuoteGen = () => {
  const [text, setText] = useState(null);
  //const [sendReq, setSendReq] = useState(false);

  const getAyat = () => {
    api.getAyat().then(details => setText(details));
    //console.log(text);
  }

  useEffect(() => {
      getAyat();
  }, []);

  if (!text) {
    return <Spinner />;
  }

  return (
    <>
      <div className = "quote-gen">
            <div className = "mediumSize"><p>"{text.data.text}"</p></div>
            <div className = "smallSize"><p>{text.data.surah.englishName} : {text.data.surah.numberOfAyahs} </p></div>
            <Button className="number-button" onClick={getAyat}>New Ayat</Button>
      </div>
    </>
  )
}

function Spinner() {
  return (
    <div className="spinner" aria-label="Please wait">
      😇
    </div>
  );
}
