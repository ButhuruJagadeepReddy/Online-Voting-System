var number_of_radio=document.querySelectorAll(".alarm").length;
var array=[];
var n;






for(var i=0;i<number_of_radio;i++)
{
document.querySelectorAll(".alarm")[i].addEventListener("click",function(){
  radio_Pressed=this.value;
  makealert(radio_Pressed);
  makeanimation(radio_Pressed);

  array.push(radio_Pressed);
  n=array.length;
  if(n>=2){
    if(array[(n-1)]!==array[(n-2)]){
      var h=document.querySelector("."+array[n-2]).classList.remove("pressed");
    }
  }

});
}



function makealert(key){
  switch (key) {
    case "BJP":
         alert('You Elected BJP.If you are sure then click on OK and click on Vote Now/If you want change the response then click on ok and then change the response.');
    break;
    case "congress":
         alert('You Elected Congress.If you are sure then click on OK and click on Vote Now/If you want change the response then click on ok and then change the response.');
    break;
    case "AAP":
         alert('You Elected AAP.If you are sure then click on OK and click on Vote Now/If you want change the response then click on ok and then change the response.');
    break;
    default:console.log(expression);
  }
}





document.querySelector(".btn").addEventListener("click",function(){
  alert('your response will be submitted if you click on ok');
})




function makeanimation(character){
  var activeKey=document.querySelector("."+character);
  activeKey.classList.add("pressed");
}
