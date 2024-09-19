//export a function
export const sum = (x, y) => {
  const sum = x + y;
  return sum; //passing some value
};
export const removeDuplicates = (arr) => {
  const duplicatesarr = [];
  //array eke index chec krnna loop ekk liyanna
  /* dupplicated check karaddi, mulin krnn ona,
Deela thiyena array eka loop karala,
e index ekata adala value eka,
api use karapu array ekema anik than wala thinwad kiyala chek krno
ehm anith than wala thiyeno nam,
eka aray eken ayin karann ona
naththm,
eka ehemmam thiyanna arrya eke
*/

  for (let i = 0; i < arr.length; i++) {
    //eliyata agnnwa value eka
    const val = arr[i];
    for (let y = 0; y < arr.length; y++) {
      const valy = arr[y];
      if (val == valy) {
        console.log('same');
      } else {
        if (!duplicatesarr.includes(val)) {
          duplicatesarr.push(val);
        }
      }
    }
  }
  console.log(duplicatesarr);
  return duplicatesarr;
};
