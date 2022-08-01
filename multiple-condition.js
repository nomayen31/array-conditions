var isGraduated = false;
var salary = 71000;
var car = 0;
// if (isGraduated == true) {
//     console.log('ay biya kormu tore');
// }
// else{
//     console.log('tor kopale biya nai');

// & & & &
// }

// if (isGraduated == true && salary >50000 ) {
//     console.log('ay biya kormu tore');
//  }
//  else{
//     console.log('biya nai tor koplae');
//  }

// if (isGraduated == true && salary >50000 && car >=1 ) {
//     console.log('ay biya kormu tore');
//  }
//  else{
//     console.log('biya nai tor koplae');
//  }

if (isGraduated === true || salary > 50000 || car >= 1) {
    console.log('eso prem kori');
}

if (isGraduated === true && salary > 50000  || car >=1 ) {
    console.log('prem korbo');
}
if (isGraduated === true && car >=1  || salary > 50000  ) {
    console.log('prem korbo tmr shate');
}
else{
    console.log('tmr frnd er mobile number daw');
}