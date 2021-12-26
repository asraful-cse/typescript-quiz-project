window.onload = function () {
	show(0);
};

/* Questions array */
let questions = [
	{
		id: 1,
		question: "In ReactJS, props can be used to pass",
		answer: "C) Both of above",
		options: [
			"A) Properties to the component",
			"B) Event handler to component",
			"C) Both of above",
			"D) None of above",
		],
	},
	{
		id: 2,
		question: "componentDidMount lifecycle method is called when____",
		answer: "A) Component is created for the first time",
		options: [
			"A) Component is created for the first time",
			"B) Component is updated",
			"C) Both of above",
			"D) None of above",
		],
	},
	{
		id: 3,
		question: "For controlled components in react",
		answer: "B) Source of truth is component state",
		options: [
			"A) Source of truth is DOM",
			"B) Source of truth is component state",
			"C) Source of truth can be anything",
			"D) None of above",
		],
	},
	{
		id: 4,
		question: "What are two ways data gets handled in react?",
		answer: "A) state and props",
		options: [
			"A) state and props",
			"B) services & components",
			"C) state & services",
			"D) state & component",
		],
	},
	{
		id: 5,
		question: "JSX is acronym for ",
		answer: "B) JavaScript eXtension",
		options: [
			"A) Java Server eXtension",
			"B) JavaScript eXtension",
			"C) Java Script Extender",
			"D) None of above",
		],
	},
];

function submitForm(e) {
	e.preventDefault();
	let name = document.forms["welcome_form"]["name"].value;
	/* -------------storage name -------------*/
	sessionStorage.setItem("name", name);
	console.log(name);
	location.href = "quiz.html";
}

let question_count = 0;
let point = 0;

function next() {
	let user_answer = document.querySelector("li.option.active").innerHTML;
	console.log(user_answer);
	// check answer by the user----------------
	if (user_answer == questions[question_count].answer) {
		console.log("right answer");
		point = point + 10; //point += 10;
		sessionStorage.setItem("points", point);
	} else {
		console.log("wrong answer");
	}

	// last result when length null end-part----------
	if (question_count == questions.length - 1) {
		sessionStorage.setItem(
			"time",
			`${minutes} minutes and ${seconds}  seconds`
		);
		clearInterval(mytime);
		location.href = "end.html";
		return;
	}
	question_count++;
	show(question_count);
}

function show(count) {
	let question = document.getElementById("questions");

	// question.innerHTML = "<h4>" + questions[count].question + "</h4>";
	question.innerHTML = `
    <h2>Q.${question_count + 1} ${questions[count].question}</h2>
    <ul class="option_group"> 
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>              
   </ul>
   `;
	toggleActive();
}

function toggleActive() {
	let option = document.querySelectorAll("li.option");

	for (let i = 0; i < option.length; i++) {
		option[i].onclick = function () {
			for (let j = 0; j < option.length; j++) {
				if (option[j].classList.contains("active")) {
					option[j].classList.remove("active");
				}
			}
			option[i].classList.add("active");
		};
	}
}
