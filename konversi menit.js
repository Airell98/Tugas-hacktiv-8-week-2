function konversiMenit(menit) {
    var a = menit / 60;
    var b = menit % 60 < 10 ? '0' : "";
    var c = menit % 60;
    var total = ~~(a) + ':' + b + c;
return total;

  }
  
  
  console.log(konversiMenit(63)); 
  console.log(konversiMenit(124)); 
  console.log(konversiMenit(53)); 
  console.log(konversiMenit(88)); 
  console.log(konversiMenit(120)); 

  





