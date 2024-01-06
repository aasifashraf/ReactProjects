const review  =[
    {
        id: 1,
        img:"images/1-intro-photo-final.jpg",
        job: "Writer",
        author: "Jhon",
        details: "It introduces an element of randomness into your test data, helping you reveal unique insights"
       } ,
   {
    id: 1,
    img:"/images/profile 2.webp",
    job: "programmer",
    author: "Anmol",
    details: "The Text Line Shuffler is an online utility that reshuffles the lines of text within a given block to rearrange content in a random, innovative order. It introduces an element of randomness into your test data, helping you reveal unique insights"
   } , 

   {
    id: 2,
    img:"/images/profile 3.jpg",
    job: "Driver",
    author: "Latif",
    details: "As testers, our goal is to simulate real-world scenarios and potential user interactions as much as possible. The Shuffle Text Line Tool aids this by introducing randomness and unpredictability into your testing data. By shuffling"
   },  
   {
    id: 3,
    img:"/images/profile 4.jpeg",
    job: "Teacher",
    author: "Aamir",
    details: "For developers, the Shuffle Text Lines tool offers a creative approach to generating test data. By shuffling text lines, you can assess how algorithms respond to varying inputs, uncovering potential vulnerabilities and edge cases."
   },  
   {
    id: 1,
    img:"/images/profile 5.jpg",
    job: "Tester",
    author: "Sam",
    details: "Testers can leverage the Shuffle Text Lines tool to create dynamic and diverse test scenarios. It assists in unearthing unforeseen bugs or issues that might arise from different text configurations, ensuring the robustness of applications"
   }  
]

let img = document.querySelector(".profile")
let job = document.querySelector(".jobtitile")
let id = document.querySelector(".id")
let author = document.querySelector(".author")
let details = document.querySelector(".details")

let prev = document.querySelector(".prev")
let  next= document.querySelector(".next")
let  random= document.querySelector(".randombutton")

let currentItem = 0

function items () {
    const item = review[currentItem]; 
    // id.textContent =item.id
    img.src = item.img;
    job.textContent = item.job;
    author.textContent = item.author;
    details.textContent = item.details;
}

window.addEventListener("DOMContentLoaded",function () {
    items ();
});

next.addEventListener("click", function(){
    currentItem++
    if(currentItem > review.length - 1){
        currentItem = 0;
        
    };
    items ()
});

prev.addEventListener("click", function(){
    currentItem--
    if(currentItem < 0){
        currentItem = review.length - 1;
        
    };
    items ()
});

random.addEventListener("click", function(){
   currentItem = Math.floor(Math.random() * review.length)
   console.log(currentItem);
   items();

});