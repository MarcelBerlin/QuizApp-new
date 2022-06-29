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

},
{
    'category': 'Musik',
    'question': 'Welche Metal Band hat eine deutsche Herkunft?',
    'answer_1': 'Scorpions',
    'answer_2': 'Iron Maiden',
    'answer_3': 'Metallica',
    'answer_4': 'Megadeth',
    'right_answer': 1,

},
{
    'category': 'Musik',
    'question': 'Welche Taktart wird beim klassischen Walzer verwendet?',
    'answer_1': '2/4 Takt',
    'answer_2': '4/4 Takt',
    'answer_3': '6/4 Takt',
    'answer_4': '3/4 Takt',
    'right_answer': 4,

},
{
    'category': 'Musik',
    'question': 'Was ist ein Quintenzirkel?',
    'answer_1': 'Eine Notenart',
    'answer_2': 'Skala von aufeinander abgestimmten Tönen',
    'answer_3': 'Zubehör für ein Blasinstrument',
    'answer_4': 'Bezeichnung für eine Wiederholung',
    'right_answer': 2,

},
{
    'category': 'Musik',
    'question': 'Welche deutsche Punkrock Band stammt aus Düsseldorf?',
    'answer_1': 'Die Ärzte',
    'answer_2': 'Die Toten Hosen',
    'answer_3': 'Kraftklub',
    'answer_4': 'Beatsteaks',
    'right_answer': 2,

},
{
    'category': 'Musik',
    'question': 'Wie wird in der elektronischen Musik eine Melodie erzeugt?',
    'answer_1': 'Vocoder',
    'answer_2': 'Saturator',
    'answer_3': 'Synthesizer',
    'answer_4': 'Compressor',
    'right_answer': 3,

},
{
    'category': 'Musik',
    'question': 'In welcher Musikrichtung werden häufig "Claps" eingesetzt?',
    'answer_1': 'Elektronisch',
    'answer_2': 'Klassisch',
    'answer_3': 'Pop',
    'answer_4': 'Rock',
    'right_answer': 1,

},
];

let movie = questions.filter(questions => questions.category === 'Movies');
let music = questions.filter(questions => questions.category === 'Musik');
console.log(music);
console.log(movie);

let rightquestions = 0;
let currentquestion = 0;
let audio_success = new Audio('./sounds/success-bell.wav');
let audio_error = new Audio('./sounds/error-sound.wav');
let audio_win = new Audio('./sounds/8-bit-win-sound-effect.wav');