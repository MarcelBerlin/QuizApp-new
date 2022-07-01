let filterCategory = [];
let rightquestions = 0;
let currentquestion = 0;

let audio_success = new Audio('./sounds/success-bell.wav');
let audio_error = new Audio('./sounds/error-sound.wav');
let audio_win = new Audio('./sounds/win.wav');


// Option #1 #############


function initMovies() {
    document.getElementById('main-container-start').classList.add('d-none');
    document.getElementById('main-container').classList.remove('d-none');
    let movie = questions.filter(questions => questions.category === 'Filme');
    filterCategory.push(movie);    
    document.getElementById('allquestions').innerHTML = filterCategory[0].length;
    showQuestion();
}

function initMusic() {
    document.getElementById('main-container-start').classList.add('d-none');
    document.getElementById('main-container').classList.remove('d-none');
    let music = questions.filter(questions => questions.category === 'Musik');
    filterCategory.push(music);    
    document.getElementById('allquestions').innerHTML = filterCategory[0].length;
    showQuestion();
}

function initHardware() {
    document.getElementById('main-container-start').classList.add('d-none');
    document.getElementById('main-container').classList.remove('d-none');
    let hardware = questions.filter(questions => questions.category === 'Hardware');
    filterCategory.push(hardware);    
    document.getElementById('allquestions').innerHTML = filterCategory[0].length;
    showQuestion();
}


// Option #2 ###############

function initQuestion(category) {
    let category = questions.filter(questions => questions.category === 'Filme');
    filterCategory.push(category);
    document.getElementById('allquestions').innerHTML = filterCategory[0].length;
    showQuestion();
}






function showQuestion() {
    if (gameIsOver()) {
        progressBarInPercent();
        showEndScreen();
        audio_win.play();
    } else {
        progressBarInPercent();
        furtherQuestions();
    }
}

function answer(selection) { // Die Variable "selection" wurde bereits im HTML Code (index.html) für jede Frage einzeln definiert. Bsp: answer_1; answer_2 usw. 
    let question = filterCategory[0][currentquestion];  // Die Variable "question" bezieht sich nun auf unser Array "questions" an "0"ter Stelle. Durch "currentquestion" haben wir das bereits global definiert.
    selquestionnumber = selection.slice(-1);  // Mit der funktion .slice(-1) können wir uns auf die letzte Stelle des Strings fokussieren und ignorieren alles, was davor steht. Bsp: answer_1 - alles bis auf die Zahl 1 wird einfach ignoriert.
    let idOfRightAnswer = `answer_${question['right_answer']}`; // um der Variable nun die Zahl der korrekten Antwort zuzuweisen, vergeben wir unter Anführung der diagonalen Anführungszeichen `` den Wert answer_${question['right_answer']} - Da wir in unserem JSON Array ja jeweils immer eine Nummer für die richtige Antwort hinterlegt haben.

    if (chooseRightAnswer(question)) {
        greenIndicator(selection);
        document.getElementById('button-1').disabled = true;
        document.getElementById('button-2').disabled = true;
        document.getElementById('button-3').disabled = true;
        document.getElementById('button-4').disabled = true;
    } else {
        redIndicator(selection, idOfRightAnswer);
        document.getElementById('button-1').disabled = true;
        document.getElementById('button-2').disabled = true;
        document.getElementById('button-3').disabled = true;
        document.getElementById('button-4').disabled = true;
    }
    document.getElementById('next-button').disabled = false; // Der "Nächste Frage" Button wird bis zu einer Auswahl deaktiviert.
}


function nextQuestion() {
    currentquestion++; // mit dem Zusatz "++" wird die Variable currentquestion, welche in der Database bereits auf "0" definiert wurde, immer um den Faktor 1 erhöht. Somit wird im JSON Array nun die Stelle 1 aufgerufen - danach Stelle 2 usw.
    document.getElementById('next-button').disabled = true;
    showQuestion(); // Funktion showQuestion() generiert dann die Frage und Antworten. Daher müssen wir diese hier auch wieder aufrufen.
    resetAnswer();
}

function furtherQuestions() {
    let question = filterCategory[0][currentquestion];
    document.getElementById('actualquestion').innerHTML = currentquestion + 1; // Damit die aktuellen Fragen auch richtig gezählt werden, müssen wir diese zeile implementieren.
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function resetAnswer() { // Damit bei der nächsten Frage die Farben der Balken resettet werden
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function chooseRightAnswer(question) { // Hier stellen wir dann die gewählte Antwort mit der "richtigen Antwort" ins Verhältnis. Ist der Wert identisch - liegen wir RICHTIG!
    let rightAnswer = selquestionnumber == question['right_answer'];
    return rightAnswer;
}

function greenIndicator(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success'); // Wenn die Auswahl richtig ist, wird die "übergeordnete CSS Klasse" (parentNode) durch "bg-success" mit der Farbe GRÜN hinterlegt
    rightquestions++; // Bei einer richtigen Antwort, wird die Anzahl der korrekten Antworten um 1 addiert - durch das ++
    audio_success.play();
}

function redIndicator(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger'); // Wenn die Auswahl falsch war, erscheint die übergeordnete Klasse in der Farbe ROT.
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // Gleichzeitig wird damit die richtige Antwort als GRÜN hervorgehoben.  
    audio_error.play();
}


function gameIsOver() { // Sobald die letzte Frage im Array erreicht ist
    let endOfQuestion = currentquestion >= filterCategory[0].length;
    return endOfQuestion;
}

function showEndScreen() { // Umschalten der Header nach der letzten Frage
    document.getElementById('card-body').classList.add('d-none');
    document.getElementById('card-body-end').classList.remove('d-none');
    endDetails();
}

function endDetails() { // template für die Details auf dem Endscreen
    document.getElementById('amount-questions').innerHTML = filterCategory[0].length;
    document.getElementById('amount-right-questions').innerHTML = rightquestions;
    document.getElementById('card-header-img').src = './img/trophy.png';

}

function restartQuiz() {    // Zum Neustarten des Quiz, werden einfach die Elemente wieder zurückgesetzt und die bestenden Variablen nochmal auf 0 gesetzt.
    document.getElementById('card-header-img').src = './img/card-bg.jpg';
    document.getElementById('card-body-end').classList.add('d-none');
    document.getElementById('card-body').classList.remove('d-none');
    rightquestions = 0;
    currentquestion = 0;
    showQuestion();
}

function progressBarInPercent() {
    let percent = currentquestion / filterCategory[0].length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}



