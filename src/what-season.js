let time = new Date("2020, 12, 31");
function getSeason(time) {
  let month = time.getMonth();
  switch (month) {
    case 1:
      console.log("Winter");
      break;
    case 2:
      console.log("Winter");
      break;
    case 3:
      console.log("Spring");
      break;
    case 4:
      console.log("Spring");
      break;
    case 5:
      console.log("Spring");
      break;
    case 6:
      console.log("Summer");
      break;
    case 7:
      console.log("Summer");
      break;
    case 8:
      console.log("Summer");
      break;
    case 9:
      console.log("Autumn");
      break;
    case 10:
      console.log("Autumn");
      break;
    case 11:
      console.log("Autumn");
      break;
    case 12:
      console.log("Winter");
      break;
    default:
      console.log("Invalid date!");
  }
}
console.log(getSeason(time));
