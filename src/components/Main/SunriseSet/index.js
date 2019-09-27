import React, {useState, useEffect} from 'react';
import './style.css'
import '../accordion-style.css'
import * as api from '../PrayerTime/api.js';
import {Accordion, AccordionItem, AccordionItemHeading,AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';

export const SunriseSet = () => {
  const [suntime, setSunTime] = useState(null);

  useEffect(() => {
    api.getTimeSchedule().then(details => setSunTime(details));
  }, []);

  if (!suntime) {
    return "Loading";
  }

  return(
    <>
    <div className = "sunrise-set">
    <Accordion allowZeroExpanded="true">
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                      Sunrise & Sunset Time
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <dl>
                    <dt>Today's Date : </dt>
                    <dd>{suntime.data.date.gregorian.date}</dd>
                    <dt>Weekday : </dt>
                    <dd>{suntime.data.date.gregorian.weekday.en}</dd>
                    <dt>Sunrise Time : </dt>
                    <dd>{suntime.data.timings.Sunrise}</dd>
                    <dt>Sunset Time : </dt>
                    <dd>{suntime.data.timings.Sunset}</dd>
                  </dl>
              </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        </div>
    </>
  )
}
