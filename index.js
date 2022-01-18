
console.log("askdjfkjdks")
const quizData=[{
question:"The Rath Yatra at Puri is celebrated in honour of which Hindu diety?",
a:"Ram",
b:"shiva",
c:"vishnu",
d:"jagnath",
correct:"d"


},
{
question:"Which day is observed as the World Standards Day?",
a:"june 26",
b:"oct 14",
c:"2 dec",
d:"15 nov ",
correct:"b"
},
{
    question:"The Indian National Calendar is based on",
    a:"christian era",
    b:"saka era",
    c:"vikram era",
    d:"hijji era",
    correct:"b"
},
{question:"Who composed the famous song Sare Jhan Se Achha?",
a:"Bankim Chandra Chatterjee",
b:"Jaidev ",
c:"Mohammad Iqbal",
d:"Rabindra Nath Tagore",
correct:"c",

},
{question:"Which of the followiing is a folk dance of India?",
a:"Kathakali",
b:"Mohiniattam",
c:"Garba",
d:"Manipuri",   
correct: "c"

}
 ]
  

 const quiz = document.getElementById("quiz");  
 const answerElements = document.querySelectorAll(".answer");  
 const questionElement = document.getElementById("question");  
 const a_text = document.getElementById("a_text");  
 const b_text = document.getElementById("b_text");  
 const c_text = document.getElementById("c_text");  
 const d_text = document.getElementById("d_text");  
 const submitButton = document.getElementById("submit");  
 let currentQuiz = 0;  
 let score = 0;  
 const deselectAnswers = () => {  
  answerElements.forEach((answer) => (answer.checked = false));  
 };  
 const getSelected = () => {  
  let answer;  
  
  
    answerElements.forEach((answerElement) => {  
      if (answerElement.checked) answer = answerElement.id;  
     });

     return answer

  
    
 };  
 const loadQuiz = () => {  
  deselectAnswers();  
  const currentQuizData = quizData[currentQuiz];  
  questionElement.innerText = currentQuizData.question;  
  a_text.innerText = currentQuizData.a;  
  b_text.innerText = currentQuizData.b;  
  c_text.innerText = currentQuizData.c;  
  d_text.innerText = currentQuizData.d;  
 };  
 loadQuiz();  
 submitButton.addEventListener("click", () => {  
  const answer = getSelected(); 
   
  if (answer) {  
   if (answer === quizData[currentQuiz].correct) score++;  
   currentQuiz++;  
   if (currentQuiz < quizData.length) loadQuiz();  
   else {  
    quiz.innerHTML = `  
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
       <button onclick="history.go(0)">Play Again</button>  
     `
   }  
  }  
 });  
