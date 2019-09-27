import React from 'react';
//import { Route} from 'react-router-dom';
import './style.css';
import {QuoteGen} from './QuoteGen'
import {PrayerTime} from './PrayerTime'
import {SunriseSet} from './SunriseSet'

export const Main = () => {
    return (
        <>
          <div className="site-content">
            <div className="site-subconent">
              <QuoteGen/>
            </div>
            <div className="site-subconent">
              <SunriseSet/>
            </div>
            <div className="site-subconent">
              <PrayerTime/>
            </div>
          </div>
        </>
    )
}

//  <div className="quote-gen"><QuoteGen/></div>
//<Route path="/" exact component={QuoteGen} />
