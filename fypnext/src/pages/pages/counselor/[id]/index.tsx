import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { startOfWeek, endOfWeek, getDay, startOfDay, endOfDay, add, format, addHours, getHours, getTime } from 'date-fns'
import momentTZ from 'moment-timezone';

export const Counselor = () => {

    const router = useRouter()
    const { id, isRefetch } = router.query
    const [country, setCountry] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
    const [startDay, setStartDay] = useState(startOfWeek(Date.now(), { weekStartsOn: 1 }))
    const [endDay, setEndDay] = useState(endOfWeek(Date.now(), { weekStartsOn: 1 }))
    useEffect(() => {


        const countryDate = momentTZ.tz(startDay, country)
        console.log('country:', countryDate);
        setStartDay(startOfWeek(countryDate.toDate(), { weekStartsOn: 1 }))
        setEndDay(endOfWeek(countryDate.toDate(), { weekStartsOn: 1 }))

    }, [country])


    return (
        <></>
    );
}