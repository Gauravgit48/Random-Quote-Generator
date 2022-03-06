const quoteText=document.querySelector(".quote");
const quoteBtn=document.querySelector("button");
const authorName=document.querySelector(".author .name");
soundBtn=document.querySelector(".sound");
copyBtn=document.querySelector(".copy");
twitterBtn=document.querySelector(".twitter");
 
 //random quote function
 function randomquote(){
     quoteBtn.classList.add("loading"); //adding new class in button
     quoteBtn.innerText="Loading Quote...."; // set here inner button loading text
     //fetching random quotes from the API and prasing it into javscript object
     fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
         quoteText.innerText=result.content;//showing api random quote result
         authorName.innerText=result.author;//author name
         quoteBtn.innerText="New Quote";
         quoteBtn.classList.remove("loading");
     });

 }

 soundBtn.addEventListener("click",()=>{
     // the SpeechSynthesisUtterance is a web API that represents a speech request
     let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
     speechSynthesis.speak(utterance)//speak method of speechSynthesis speaks the utternance

 });

 copyBtn.addEventListener("click",()=>{
         //copying the quote text on copyBtn click
         // writeText() property writes the specified text string to the system clipboard
        navigator.clipboard.writeText(quoteText.innerText)
 });

 twitterBtn.addEventListener("click",()=>{
     let twitterurl=`https://twitter.com/random${quoteText.innerText}`;
     window.open(twitterurl,"_blank"); //opening a new twitter tab passing quote in the url 

 });



 quoteBtn.addEventListener("click",randomquote);
 