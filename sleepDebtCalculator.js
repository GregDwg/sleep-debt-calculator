const getSleepHours = day => {
  switch (day) {
  case 'monday':
  return 8
  break;
  case 'tuesday':
  return 8
  break;
  case 'wednesday':
  return 8
  break;
  case 'thursday':
  return 1
  break;
  case 'friday':
  return 1
  break;
  case 'saturday':
  return 8
  break;
  case 'sunday':
  return 8
  break;
  }
};


const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());


const getidealSleepHours = () => {
  const idealHours = 8; 
  return idealHours* 7;
}

console.log(getidealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours =  getidealSleepHours();
  
  
  if (actualSleepHours === idealSleepHours) {
    console.log("The user get the perfect amount of sleep")
  } else if (actualSleepHours < idealSleepHours) {
    console.log("The user doesn't sleep enough");
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. He should get some rest.')
  } else {
    console.log("The user sleep more than needed")
  }
}

calculateSleepDebt()



 
