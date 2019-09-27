import React, {useEffect, useState} from 'react';
import {Accordion, AccordionItem, AccordionItemHeading,AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import './style.css';
import '../accordion-style.css'
import * as api from './api';

export const PrayerTime = () => {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    api.getTimeSchedule().then(details => setSchedule(details));
  }, []);

  if (!schedule) {
    return "Loading";
  }
  //console.log(schedule);

  return (
    <>
      <div className = "prayer-time">
      <Accordion allowZeroExpanded="true">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Prayer Time
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <dl>
                    <dt>Fajr : </dt>
                    <dd>{schedule.data.timings.Fajr}</dd>
                    <dt>Dhuhr : </dt>
                    <dd>{schedule.data.timings.Dhuhr}</dd>
                    <dt>Asr : </dt>
                    <dd>{schedule.data.timings.Asr}</dd>
                    <dt>Maghrib : </dt>
                    <dd>{schedule.data.timings.Maghrib}</dd>
                    <dt>Isha : </dt>
                    <dd>{schedule.data.timings.Isha}</dd>
                  </dl>
                </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
      </div>
    </>
  )
}
