let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Wind, der durch die offenen Fensterläden in die Wohnstube drang, trug den schweren, süßen Duft von reifem Korn mit sich. Es war Juli, die Hitze stand wie eine Wand über den Feldern des Tals, und draußen drehten sich die schweren Ähren träge im Abendlicht. Doch hier drinnen, im Halbdunkel der hölzernen Kammer, roch der Sommer nach etwas anderem. Er roch nach Schweiß, nach kaltem Essigwasser und dem dichten, metallischen Atem von frischem Blut. Claire stand am Fußende des großen Eichenbettes. Ihre kleinen Finger, die eben noch ein Buch gehalten hatten, krallten sich so fest in das raue, ungehobelte Holz des Bettpfostens, dass die Splitter schmerzhaft unter ihre Nägel drangen. Sie spürte den Schmerz nicht. Ihre Augen waren weit geöffnet, starr und gläsern, fixiert auf das Laken, das sich langsam, aber unaufhaltsam dunkelrot färbte. Auf dem Bett lag die Mutter. Sie war erst zweiundzwanzig Jahre alt, doch ihr Gesicht wirkte im fahlen Licht der Petroleumlampe wächsern und verbraucht, als hätte das Leben sie im Zeitraffer ausgesaugt. Sie atmete flach. Jeder Atemzug war ein leises, rasselndes Pfeifen, das im krassen Gegensatz zu den gellenden, fordernden Schreien stand, die aus der hölzernen Wiege neben dem Ofen drangen. Das siebte Kind. Ein Junge, laut und kräftig, der sich mit aller Macht in eine Welt hineinschrie, aus der seine Mutter gerade lautlos verschwand. Anna, flüsterte der Vater. Er saß am schweren Küchentisch, nur wenige Schritte vom Bett entfernt. Ein Mann von einundfünfzig Jahren, dessen Gesicht von den Furchen der Feldarbeit und der unerbittlichen Sonne tiefer gezeichnet war als die Rinde der alten Hofeiche. Seine großen, schwieligen Hände, die sonst Pflug und Sense mit absoluter Gewissheit führten, lagen vollkommen kraftlos auf der Tischplatte. Sie zitterten. Als die Hebamme mit hängenden Schultern vom Bett zurücktrat und das blutige Tuch in den Eimer fallen ließ, brach der Vater stumm in sich zusammen. Er legte die Stirn auf das rohe Holz des Tisches, die Schultern bebten, doch es kam kein Ton aus seiner Kehle. Die schiere, unbarmherzige Last der Zukunft schien ihn mit einem einzigen Schlag zu erdrücken. Claire sah von ihrem Vater zu ihren eigenen Händen. Sie betrachtete die schmalen, zitternden Finger, auf denen noch ein blauer Tintenfleck vom gestrigen Schultag zu sehen war. Sie war neun Jahre alt. Sie liebte die Geschichten von Prinzessinnen, die feinen Linien, die sie mit Kohle auf Packpapier zeichnete, und das weiche Klingen der französischen Worte, die sie heimlich im Schulbuch las. Doch während sie auf ihre Finger starrte, passierte etwas Seltsames. Es war, als würde eine unsichtbare, kalte Hand in ihre Brust greifen und die Leichtigkeit, das Träumerische, die ganze unbeschwerte Kindheit mit einem rauen Ruck aus ihrem Körper reißen. Zurück blieb eine seltsame, schmerzhafte Taubheit. Das Weinen des Säuglings wurde schriller, fast anklagend. Keines der anderen sechs Geschwister, die verängstigt in der Dachkammer kauerten, wagte es, herunterzukommen. Claire löste die Finger vom Bettpfosten. Sie ging nicht zum Vater, sie ging auch nicht mehr zu der stillgewordenen Frau auf dem Bett. Ihre Füße bewegten sich wie von selbst, gesteuert von einem eisernen Müssen, das keinen Raum für Tränen ließ. Sie trat an die Wiege. Sie schluckte das brennende Weinen, das ihr die Kehle zuschnüren wollte, mit aller Gewalt hinunter und zwang ihr kleines Herz zur Ruhe. Sie beugte sich über das Neugeborene, legte die noch viel zu kleine Hand auf die unruhige Brust des Kindes und begann zu singen. Ihre Stimme war anfangs brüchig, dünn und zittrig, doch mit jedem Takt des alten Wiegenliedes wurde sie fester. Sie sang gegen die Stille des Todes an, gegen das stumme Schluchzen des Vaters und gegen das eigene Verderben. In dieser Nacht, als der Mond kalt über dem reifen Korn stand, band sich Claire die Schürze ihrer Mutter um. Sie übernahm nicht nur die Küche, die Wäsche und die Aufsicht über die sechs weinenden Kinder, sie übernahm das Leben einer erwachsenen Frau und begrub das kleine Mädchen, das sie am Morgen noch gewesen war.";
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
