const questions = [
    {
        question: "What does OOP mean in programming?",
        optionA: "Object-Oriented Programming",
        optionB: "Data Objective Programming",
        optionC: "Block Oriented Programming",
        optionD: "OPO",
        correctOption: "optionA" ,
    },

    {
        question: "What are basic concepts of OOP?",
        optionA: "Encapsulation, Class, Object, Abstraction",
        optionB: "Inheritance, Class, Abstraction, Function",
        optionC: "Encapsulation, Inheritance, Polymorphism, Abstraction",
        optionD: "Encapsulation, Class, Polymorphism, Abstraction",
        correctOption: "optionC"
    },

    {
        question: "High Cohesion is always accompanied by:",
        optionA: "Polymorphism",
        optionB: "Low Coupling",
        optionC: "Inheritance",
        optionD: "Encapsulation",
        correctOption: "optionB"
    },

    {
        question: "Which of the following attributes should be encapsulated? person: { name: String, age: Number, date_of-birth: Date, nationality: String }",
        optionA: "name",
        optionB: "age",
        optionC: "date_of-birth",
        optionD: "nationality",
        correctOption: "optionC"
    },

    {
        question: "Which of the following statements is not true of Javascript?",
        optionA: "Javascript is case sensitive",
        optionB: "Javascript is a highly typed language",
        optionC: "In Javascript it is necessary to end the lines with a semicolon [;]",
        optionD: "do-while is an iteration statement in Javascript",
        correctOption: "optionB"
    },

    {
        question: "What is the output of the following line of code? [4,3,2].map(n=>n*n);?",
        optionA: "Returns an array with the square of given one of the numbers",
        optionB: "Error does not have correct syntax",
        optionC: "Returns the multiplication of all elements",
        optionD: "Returns an array of one element with the multiplication of all elements",
        correctOption: "optionA"
    },

    {
        question: "In OOP it refers to the fact that a new class is created from an existing class.",
        optionA: "Polymorphism",
        optionB: "Inheritance",
        optionC: "Abstraction",
        optionD: "Encapsulation",
        correctOption: "optionB"
    },

    {
        question: "In OOP it refers to the fact that a new class is created from two or more base classes.",
        optionA: "Hierarchical Inheritance",
        optionB: "Polymorphism",
        optionC: "Encapsulation",
        optionD: " Multiple Inheritance",
        correctOption: "optionD"
    },

    {
        question: "What is the correct option about Polymorphism in OOP?",
        optionA: "Cannot be applied to both functions and data types.",
        optionB: "Promotes component reuse",
        optionC: "It is the ability of the objects of a class to respond its invocation.",
        optionD: "It is the ability to supply data to the code",
        correctOption: "optionC"
    },

    {
        question: "How do you declare a constructor in Javascript?",
        optionA: "A method with the name of the class",
        optionB: "A method with the constructor keyword",
        optionC: "A method with the class name plus the constructor keyword.",
        optionD: "A method with the name of the class without parameters",
        correctOption: "optionB"
    },

    {
        question: "What is the method to detect that a promise was rejected?",
        optionA: "catch",
        optionB: "default",
        optionC: "try",
        optionD: "overview",
        correctOption: "optionA"
    },

   {    
        question: "AND, NOT, OR, etc., are OPERATORS….",
        optionA: "Logical",
        optionB: "Relational",
        optionC: "Arithmetic",
        optionD: "Conditioning",
        correctOption: "optionA"
   },

   {    
        question: "The following symbols “>, <, =, >=, <=, <>, etc.”, are examples of OPERATORS.",
        optionA: "Logical",
        optionB: "Arithmetic",
        optionC: "Relational",
        optionD: "Conditional Structures",
        correctOption: "optionC"
    },

    {    
        question: "Variable that allows you to save a value that increases or decreases in a non-constant amount. Ex. Sale = Sale + value of the Sale ",
        optionA: "Counter",
        optionB: "Operator",
        optionC: "Invoice",
        optionD: "Accumulator",
        correctOption: "optionD"
    },

    {    
        question: "It is a variable destined to connect different values that are INCREASING or DECREASING a value constantly.",
        optionA: "Counter",
        optionB: "Operator",
        optionC: "Accumulator",
        optionD: "Variable",
        correctOption: "optionA"
    },
    {    
        question: "What is the software?",
        optionA: "Who operates the calculations of the computer",
        optionB: "Set of programs that manage and control the operation of the computer",
        optionC: "It is everything that can be touched and therefore performs operations",
        optionD: "It allows to protect from viruses and makes the computer work properly.",
        correctOption: "optionB"
    },

    {    
        question: "What is an algorithm?",
        optionA: "Also called Logarithm and is used in mathematical calculations",
        optionB: "It's everything you can't touch about the computer",
        optionC: "It is a sequence of logical steps",
        optionD: "It is a way to solve computer problems",
        correctOption: "optionC"
    },

    {    
        question: "What are the logical operators for?",
        optionA: "Define, Write, Read",
        optionB: "Integer, Real, Text",
        optionC: "Are used to combine two Boolean values and return a true, false, or null result.",
        optionD: "C=a+b;",
        correctOption: "optionC"
    },

    {    
        question: "A constant is a data that?",
        optionA: "Check that the program is well done, and works constantly",
        optionB: "Run all program constantly",
        optionC: "check that the program that has been typed conforms to the syntactic rules.",
        optionD: "Does not change during the execution of the program for example pi=3.1416",
        correctOption: "optionD"
    },

    {    
        question: "The operator % in programming",
        optionA: "Allows you to obtain the discount percentage",
        optionB: "Calculate the quotient of a division",
        optionC: "Determines if a division is by zero",
        optionD: "Get the remainder of a division",
        correctOption: "optionD"
    },

    {    
        question: "Are the tools for algorithm design?",
        optionA: "If (condition) then…. End yes",
        optionB: "Pseudocode, Flowcharts.",
        optionC: "Logic, Study",
        optionD: "Define, Read, Write",
        correctOption: "optionB"
    },

    {    
        question: "What is Object Oriented Programming?",
        optionA: "It is a programming paradigm that starts from the concept of objects",
        optionB: "It is a programming paradigm aimed at improving the clarity",
        optionC: "It is a programming paradigm that starts from the concept of classes",
        optionD: " It is a programming paradigm that consists of dividing a program into modules",
        correctOption: "optionA"
    },

    {    
        question: " What is the difference between a class and an object?",
        optionA: " A class is a template for creating objects, and an object is an instance of a class.",
        optionB: " A class is a template for creating objects, and an object is a class.",
        optionC: " A class is an instance of an object, and an object is a class.",
        optionD: " A class is an instance of an object, and an object is an instance of a class.",
        correctOption: "optionA"
    },

    {    
        question: "What is Public Encapsulation?",
        optionA: "  It is a way to hide the implementation details of a class from other objects.",
        optionB: "  At this level they can only access methods or attributes in the same class.",
        optionC: "  It is a way to hide the implementation details of a class from other objects.",
        optionD: "  Everyone can access the data or methods of a class that is defined with this level. ",
        correctOption: "optionD"
    },

    {    
        question: "What is Protected Encapsulation?",
        optionA: "They are not publicly accessible and are only accessible within their class",
        optionB: "Everyone can access the data or methods of a class that is defined with this level.",
        optionC: "At this level they can only access methods or attributes if they are in the same class.",
        correctOption: "optionA"
    },

    {    
        question: "What is Private Encapsulation?",
        optionA: "They are not publicly accessible and are only accessible their subclasses.",
        optionB: "Everyone can access the data or methods of a class that is defined with this level. ",
        optionC: "At this level they can only access methods or attributes if they are in the same class",
        correctOption: "optionC"
    },

    {    
        question: "What are Interfaces?",
        optionA: "It is the means by which the user can communicate with a machine, equipment, computer",
        optionB: "They define what a class that implements it should do, but not how it will do it. ",
        optionC: "It is a computer program that acts as a user interface, using a set of images and graphic",
        optionD: "It is a computer program",
        correctOption: "optionB"
    },

    {    
        question: "What is a Class in Object-Oriented Programming?",
        optionA: "They allow you to abstract the data and its associated operations",
        optionB: "A class is a template to a predefined model",
        optionC: "A group of elements in an assembly that has common characteristics.",
        OptionD: "A class is a template for creating objects",
        correctOption: "optionA"
    },

    {    
        question: "What is inheritance?",
        optionA: "It's part of a class. It has its own state, behavior and definition.",
        optionB: "It is the concept with which it is clarified that one class divides.",
        optionC: "It is the assignment of a value that is given to a subclass.",
        optionD: "It is the concept with which it is clarified that one class divides.",
        correctOption: "optionB"
    },

    {    
        question: "What is the Object in Object-Oriented Programming?",
        optionA: "It is the assignment of a value that is given to a subclass",
        optionB: "It is the concept with which it is clarified",
        optionC: "It's part of a class. It has its own state, behavior and definition.",
        optionD: "It is the concept with which it is clarified that one class divides",
        correctOption: "optionC"
    },

    {    
        question: "What is a virtual feature?",
        optionA: "It is the technique used by compilers and that instructs you to enter the entire body",
        optionB: "It is the 'friend' of a class that is allowed to enter public, protected or private data",
        optionC: "It is a function part of a class and its function can be removed in its derived class.  ",
        correctOption: "optionC"
    },

    {    
        question: "What is event-oriented programming?",
        optionA: "Event-driven programming is the foundation of what we call the user interface",
        optionB: "Programming is the process used to create some type of application or software",
        optionC: "Is a programming paradigm",
        optionD: "It is a mathematical technique that allows solving problems of maximization or minimization",
        correctOption: "optionA"
    },

    {    
        question: "What are the paradigms of event-oriented programming?",
        optionA: "It is a programming paradigm in which the structure and execution of programs ",
        optionB: "Actions on the programme",
        optionC: "Click on a button. Double-click on the name of a file to open it.",
        optionD: "When the user interacts with the interface",
        correctOption: "optionA"
    },

    {    
        question: "What are events in a graphical interface?",
        optionA: "When the user interacts with the interface, and for example presses a button",
        optionB: "Events, like anything else, are represented as instances or objects of some kind.",
        optionC: "Event auditing analyzes the before, during, and after the action to be certified.",
        optionD: "An event is the notification that a graphic element makes when the user interacts with it.",
        correctOption: "optionA"
    },

    {    
        question: "What is an event auditor?",
        optionA: "Event auditing analyzes the before, during, and after the action to be certified",
        optionB: "An event is the notification that a graphic element makes when the user interacts with it.",
        optionC: "Event-driven programming is a programming paradigm ",
        optionD: "An event is any previously organized event that brings together a certain number of people ",
        correctOption: "optionA"
    },

    {    
        question: "What are the characteristics of event-oriented programming?",
        optionA: "Event dependency, Service-oriented.",
        optionB: "Buttons, views",
        optionC: "Source code ",
        optionD: "User interface",
        correctOption: "optionA"
    },

    {    
        question: "What are the disadvantages of event-oriented programming?",
        optionA: "Complex control flow, does not replace structured programming",
        optionB: "Developing an event-driven application increases the complexity of system design",
        optionC: "Traditional programming methodologies are still essential to writing the program in general",
        optionD: "The flexibility of event-oriented programming, which is its indisputable advantage",
        correctOption: "optionA"
    },

    {    
        question: "Which of the following is not an event-oriented language?",
        optionA: "JavaScript",
        optionB: "Visual C++",
        optionC: "MM#",
        optionD: "AS3",
        correctOption: "optionD"
    },

    {    
        question: "What is defined as object-oriented, prototype-based, imperative, weakly typed, and dynamic?",
        optionA: "Nesc",
        optionB: "MM#",
        optionC: "JavaScript",
        optionD: "Lexicon",
        correctOption: "optionD"
    },

    {    
        question: "What is defined as visual basic.NET?",
        optionA: "An object-oriented programming language that can be considered an evolution of Visual Basic ",
        optionB: "Events allows you to interact with the user at any time during execution.",
        optionC: "A programming paradigm in which both the structure and execution of programs ",
        optionD: "A programming language that is used to create applications for the Windows operating system",
        correctOption: "optionA"
    },
];

let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    while (shuffledQuestions.length <= 19) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })
   
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 19) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 20) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}