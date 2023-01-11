document.getElementById("inputvalue").addEventListener("click",function(){
   const changeValue1= document.getElementById("name1").value;
   document.getElementById("name").value=changeValue1
   const changeValue2= document.getElementById("city1").value;
   document.getElementById("city").value=changeValue2
   
  if (changeValue1 == 0) {
    document.getElementById("name").textContent;
  } else {
    document.getElementById("name1").value = changeValue1;
  }

  if (changeValue2 == 0) {
    document.getElementById("city").textContent;
  } else {
    document.getElementById("city1").value = changeValue2;
  }
})