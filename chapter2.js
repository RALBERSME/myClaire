let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die Nachmittagssonne des Jahres 1919 warf lange, schräge Schatten durch die Sprossenfenster der Dorfvolksschule. An den Wänden hingen vergilbte Landkarten, deren Grenzen der große Krieg im Außen längst hinweggefegt hatte. Claire saß in der hintersten Reihe. Ihre Finger strichen ein letztes Mal über das glatte, von unzähligen Schülergenerationen eingekerbte Holz der Schulbank. Sie war nun vierzehn Jahre alt. Während um sie herum das laute Stühlerücken der Mitschüler einsetzte, die johlend in die Freiheit der Jugend stürmten, blieb Claire sitzen. In ihrer Brust brannte ein stummer, heftiger Schmerz. Vorne am Pult stand Herr Kramer, der alte Lehrer. Er ordnete seine Papiere mit langsamen, bedächtigen Bewegungen, bevor er den Blick hob und Claire ansah. In seinen Augen lag kein Vorwurf, sondern eine tiefe, traurige Resignation. Er kannte ihre Aufsätze. Er wusste, mit welcher Leichtigkeit sie die schwierigen französischen Vokabeln behielt, die er ihr manchmal heimlich nach dem Unterricht zeigte, und er hatte die anatomischen Skizzen gesehen, die sie mit feiner Kohle an den Rand ihrer Rechenhefte gezeichnet hatte. Claire war sein klügstes Mädchen. Sie hatte den Geist einer Forscherin, den Traum, eines Tages Medizin zu studieren, Krankheiten zu verstehen und Leben zu retten. Es ist Zeit, Claire, sagte der Lehrer leise. Seine Stimme hallte wider im leeren Klassenraum. Er trat auf sie zu und reichte ihr das Entlassungszeugnis. Ein einfaches Stück Papier, das für sie das offizielle Ende aller Hoffnungen bedeutete. Gott segne deinen Weg. Dein Vater braucht dich auf dem Hof. Die Familie, sie geht vor. Claire nickte stumm. Sie konnte nicht sprechen, weil die Tränen wie ein dicker Kloß in ihrer Kehle steckten. Sie nahm das Papier, packte ihre wenigen Habseligkeiten zusammen und verließ das Schulhaus, ohne sich noch einmal umzusehen. Der Weg zurück zum Hof fühlte sich an wie der Gang zum Schafott. Der Wind blies kühl über die Stoppelfelder, und am Horizont zog der Rauch der abendlichen Küchenfeuer auf. Ihr Zuhause. Ein Ort, der für sie schon lange kein Raum der Geborgenheit mehr war, sondern eine unerbittliche Maschinerie, die ständig nach ihrer Arbeitskraft verlangte. Als sie die Haustür öffnete, schlug ihr der vertraute, drückende Geruch von kaltem Ruß, saurem Schmalz und feuchter Wäsche entgegen. Aus der Stube drang das unruhige Jammern der jüngeren Geschwister. Ihr Bruder, der Junge, dessen Geburt die Mutter das Leben gekostet hatte, rannte mit schmutzigen Knien an ihr vorbei und zerrte an ihrer Jacke. Claire, ich habe Hunger! Wo bleibt das Abendbrot? Sie antwortete nicht. Wie in Trance stieg sie die knarrenden Holzstufen hinauf bis unter das Dach, dorthin, wo in einer dunklen Ecke ihre alte Holzkiste stand. Claire öffnete den Deckel. Drinnen lagen ihre Schätze: ein zerfleddertes Buch mit französischen Erzählungen, ein Kasten mit vertrockneten Aquarellfarben und Dutzende Blätter Packpapier, auf denen sie Märchengestalten und die Knochenstrukturen von Händen gezeichnet hatte. Es waren die Relikte eines Lebens, das ihr nie gehören sollte. Mit zitternden Händen legte sie das Abschlusszeugnis ganz obenauf. Sie strich noch einmal über das Papier, dann schloss sie den schweren Deckel der Kiste. Das dumpfe Klacken des Holzverschlusses klang in ihren Ohren wie das Zuschlagen einer Gefängnistür. Jedes abgelegte Buch, jeder weggesperrte Traum fühlte sich an wie ein zentnerschwerer Stein, der sich auf ihre junge Seele legte, um das Feuer ihrer Intelligenz und ihrer Kreativität für immer zu ersticken. Sie schob die Kiste tief unter das morsche Gebälk des Dachbodens, dorthin, wo kein Lichtstrahl sie je treffen würde. Als sie die Treppe wieder hinunterging, band sie sich mit mechanischen Griffen die grobe, verwaschene Schürze ihrer Mutter um den Leib. Sie zog die Bänder im Rücken fest, atmete den Geruch des Hofes ein und trat an den brennenden Herd. Die Kindheit war endgültig vorbei. Von diesem Tag an gab es keine Bücher mehr, keine französischen Worte und keine Farben, es gab nur noch den hungernden Haushalt und das ewige Funktionieren.";
  utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();

  const maleVoiceNames = [
    "Microsoft Stefan",
    "Microsoft Christoph",
    "Google deutsch",
    "Yannick",
    "Markus",
  ];

  let selectedVoice = voices.find(
    (voice) =>
      voice.lang.startsWith("de") &&
      maleVoiceNames.some((name) => voice.name.includes(name)),
  );

  if (!selectedVoice) {
    selectedVoice = voices.find((voice) => voice.lang.startsWith("de"));
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.pitch = 0.75;
  utterance.rate = 0.88;

  window.speechSynthesis.speak(utterance);
}

function stoppeVorlesen() {
  window.speechSynthesis.cancel();
}

if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = () =>
    window.speechSynthesis.getVoices();
}
