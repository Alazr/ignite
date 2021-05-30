
const date = new Date()

const getCurrentMonth = ()=>{
    const month = date.getMonth() + 1
    if(month < 10){
        return `0${month}`
    }else{
        return month
    }
}
const getCurrentDay = ()=>{
    const day = date.getDate()
    if(day < 10){
        return `0${day}`
    }else{
        return day
    }
}


const currentYear = date.getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`



export default {
  currentDate,
  lastYear,
  nextYear
}