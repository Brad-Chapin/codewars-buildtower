function buildTower (nFloors) {
  let tower = [];
  let cFloor = 1;
  for (let i = 0; i < nFloors; i ++) {
    let newFloor = "";
    let spaces = ((2 * nFloors) - (2 * cFloor))/2;
    let stars = (((2 * nFloors) -1) - (spaces * 2));
    for (let j = 0; j < spaces; j++){
      newFloor +=" ";
    }
    for (let k = 0; k < stars; k++) {
      newFloor += "*";
    }
    for (let h = 0; h < spaces; h ++) {
      newFloor += " ";
    }
    tower.push(newFloor);
    cFloor++;
  }
  return tower;
}

console.log(buildTower(1));


// '     *     ', //10  spaces on 1
// '    ***    ', //8 spaces 2
// '   *****   ',//6 spaces on 3
// '  *******  ', //4 spaces on 4
// ' ********* ',//2 spaces on 5
// '***********' //therefore each floor, f, will have 2n - 2f spaces

//each successive floor has +2 *'s, and adds 2 spaces to the previous floor
//therefore, the nth floor will have 2n-1 *'s'

// spaces ==  ((2 * nFloors) - (2 * cFloor))/2
//nth stars == ((2 * n) -1), stars ==
