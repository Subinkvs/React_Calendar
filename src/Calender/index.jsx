import { CalenderHead,SevenColGrid,Wrapper, HeadDay, StyledDay, CalenderBody } from "./styled"
import { MONTHS, DAYS } from "./conts"
import { areDatesTheSame, getDateObj, getDaysInMonth, getSortedDays, range } from "./utilis"
import { useState } from "react"

export const Calender = ({startingDate}) =>{
    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth())
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear())
    const DAYSINMONTH = getDaysInMonth(currentMonth, currentYear)

    return(
        <Wrapper>
        <CalenderHead>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <p>{MONTHS[currentMonth]} {currentYear}</p>
        <ion-icon name="arrow-forward-outline"></ion-icon>
        </CalenderHead>
        <SevenColGrid>
            {getSortedDays(currentMonth, currentYear).map((day) => (
                <HeadDay>{day}</HeadDay>
            ))}

        </SevenColGrid>
            <CalenderBody fourCol = {DAYSINMONTH === 28}>
                {range(DAYSINMONTH).map((day) => (
                    <StyledDay
                    active = {areDatesTheSame(
                        new Date(),
                        getDateObj(day, currentMonth, currentYear)
                    )}
                    >{day}</StyledDay>
                    ))}
            </CalenderBody>
       
        </Wrapper>
    )
}