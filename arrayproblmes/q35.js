// Given a list of dates, find the second most recent date.

const dateArray = [
    new Date('2022-09-10'),
    new Date('2021-12-25'),
    new Date('2022-05-15'),
    new Date('2021-08-30'),
    new Date('2023-03-20'),
  ]

  const recentDate = (arr)=>{
    let mostrecentDate = new Date(0)
    let secondrecentDate = new Date(0)
    for(const date of arr){
        if(date > mostrecentDate){
            secondrecentDate = mostrecentDate
            mostrecentDate = date
        }
        if(date < mostrecentDate && date > secondrecentDate){
            secondrecentDate = date
        }
    }

    return secondrecentDate
  }
  

  const result = recentDate(dateArray)

  console.log(result)