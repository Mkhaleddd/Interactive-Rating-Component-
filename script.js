
 const buttons =document.querySelectorAll(".num")
 const  question=document.querySelector('.rating')
 const  answer=document.querySelector('.message')
 const  RatingAgainBtn=document.getElementById("again")
 const submitBtn=document.getElementById('submit')
 const  rate=document.querySelector(".answer")


 submitBtn.addEventListener('click', function(e){

    //Remove default form submit behaviour.
    e.preventDefault();
    show(answer);
    hide(question);
    
 })
RatingAgainBtn.addEventListener('click', function(e){

    //Remove default form submit behaviour.
    e.preventDefault();
    show(question);
    hide(answer);
})  
 
buttons.forEach((button) => {
  
   if (!button.nodeValue) {
    button.addEventListener("click",()=>
  rate.innerHTML=button.innerHTML
 
  )  
   } return  rate.innerHTML=" null "; 
 
})


 function show(element) {
     element.classList.remove("hide");
 }
  function hide(element) {
     element.classList.add("hide");
    
  }   


