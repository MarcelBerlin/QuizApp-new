let questions = [

{
    'category': 'Movies',
    'question': 'Welcher Film trägt den Titel "Erfolgreichster Film aller Zeiten"?',
    'answer_1': 'Die Verurteilten',
    'answer_2': 'Avengers: Endgame',
    'answer_3': 'Titanic',
    'answer_4': 'Avatar - Aufbruch nach Pandora',
    'right_answer': 4,

},
{
    'category': 'Movies',
    'question': 'Wie wird Jeff Bridges Charakter im Film "The Big Lebowski" von seinen Freunden genannt?',
    'answer_1': 'Donny',
    'answer_2': 'Walter',
    'answer_3': 'Dude',
    'answer_4': 'Jeffrey',
    'right_answer': 3,

},
{
    
    'category': 'Movies',
    'question': 'In welches Jahr Reisen Marty und DocBrown in Zurück in die Zukunft - Teil 1?',
    'answer_1': '1955',
    'answer_2': '1957',
    'answer_3': '1953',
    'answer_4': '1951',
    'right_answer': 1,

},
{
    'category': 'Movies',
    'question': 'Für welchen Film erhielt Leonardo DiCaprio, seinen ersten Oscar als bester Hauptdarsteller?',
    'answer_1': 'Once upon a Time in Hollywood',
    'answer_2': 'The Wolf of Wallstreet',
    'answer_3': 'Titanic',
    'answer_4': 'The Revenant',
    'right_answer': 4,
},
{
    'category': 'Movies',
    'question': 'Wie heißt das Mädchen mit telekinetischen Fähigkeiten aus Stranger Things?',
    'answer_1': 'Joyce',
    'answer_2': 'Elvi',
    'answer_3': 'Max',
    'answer_4': 'Nancy',
    'right_answer': 2,

},
{
    'category': 'Movies',
    'question': 'Welcher Regisseur war verantwortlich für die Sci-Fi Filme Arrival, Blade Runner 2049 & Dune?',
    'answer_1': 'Ridley Scott',
    'answer_2': 'James Cameron',
    'answer_3': 'Denis Villeneuve',
    'answer_4': 'Neil Bloomkamp',
    'right_answer': 3,

}
];

let rightquestions = 0;
let currentquestion = 0;
let audio_success = new Audio('./sounds/success-bell.wav');
let audio_error = new Audio('./sounds/error-sound.wav');
let audio_win = new Audio('./sounds/8-bit-win-sound-effect.wav');