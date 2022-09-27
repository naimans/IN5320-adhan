## 

ADHAN, also written as AZAAN/AZAN is a react mini-project to show users today's prayer times.

I divided the Main part into three div.

## first div (Quote generator)

In this div a random ayat from the Qur'an will generate.
api used: https://api.alquran.cloud/ayah/
Also a button from @dhis2/ui-core is used.

## second div (Sunrise and sunset time)

This div display today's date and weekday along with the time sunrise and sunset in Oslo.

## third div (Prayer schedule)

This div show today's five time prayer schedules in Oslo .

For both second and third div I used "http://api.aladhan.com/v1/timingsByCity?city=Oslo&country=Norway&method=3" api to get the sunrise/sunset time and prayer schedule.
and also use Accordion from npm "react-accessible-accordion" package.


UiO-git: https://github.uio.no/naimans/adhan
