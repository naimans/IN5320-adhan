## 

ADHAN, also written as AZAAN/AZAN is a react mini-project to show user today's prayer schedule.

I divided the Main part into three div.

## first div (Quote generator)

In this div a random ayat from the Qur'an will generate.
api used: https://api.alquran.cloud/ayah/
Also used a button from @dhis2/ui-core

## second div (Sunrise and sunset time)

Here I show Oslo's today's date and weekday with sunrise and sunset time.

## third div (Prayer schedule)

This div will show Oslo's today's five time prayer schedule.

For both second and third div I used "http://api.aladhan.com/v1/timingsByCity?city=Oslo&country=Norway&method=3" api to get the sunrise/sunset time and prayer schedule.
and also use Accordion from npm "react-accessible-accordion" package.


UiO-git: https://github.uio.no/naimans/adhan
