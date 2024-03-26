import { CalenderHead,SevenColGrid,Wrapper, HeadDay, StyledDay, CalenderBody, StyledEvent } from "./styled"
import { MONTHS, DAYS } from "./conts"
import { areDatesTheSame, getDateObj, getDaysInMonth, getRandomDarkColor, getSortedDays, range } from "./utilis"
import { useState } from "react"

export const Calender = ({startingDate, eventsArr, addEvent}) =>{
    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth())
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear())
    const DAYSINMONTH = getDaysInMonth(currentMonth, currentYear)

    const nextMonth = () => {
        if( currentMonth < 11) {
            setCurrentMonth( (prev) => prev + 1);
        }
        else{
            setCurrentMonth(0);
            setCurrentYear( (prev) => prev + 1)
        }
    };
    const prevMonth = () => {
        if( currentMonth > 0){
            setCurrentMonth((prev) => prev - 1)
        }
        else{
            setCurrentMonth(11)
            setCurrentYear((prev) => prev - 1)
        }
    };

    const onAddEvent = (date) => {
        addEvent(date, getRandomDarkColor());

    }

    return(
        <Wrapper>
        <CalenderHead>
        <ion-icon onClick={prevMonth}  name="arrow-back-outline"></ion-icon>
        <p>{MONTHS[currentMonth]} {currentYear}</p>
        <ion-icon onClick={nextMonth} name="arrow-forward-outline"></ion-icon>
        </CalenderHead>
        <SevenColGrid>
            {getSortedDays(currentMonth, currentYear).map((day) => (
                <HeadDay>{day}</HeadDay>
            ))}

        </SevenColGrid>
            <CalenderBody fourCol = {DAYSINMONTH === 28}>
                {range(DAYSINMONTH).map((day) => (
                    <StyledDay
                    onClick={() => onAddEvent(getDateObj(day, currentMonth, currentYear))}
                    active = {areDatesTheSame(
                        new Date(),
                        getDateObj(day, currentMonth, currentYear)
                    )}
                    ><p>{day}</p>
                    {eventsArr.map(
                        (ev) =>
                        areDatesTheSame(
                            getDateObj(day, currentMonth, currentYear), ev.date)
                            && <StyledEvent>{ev.title}</StyledEvent>)}
                    </StyledDay>
                    ))}
            </CalenderBody>
       
        </Wrapper>
    )
}