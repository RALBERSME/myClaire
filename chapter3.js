let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1923 lähmte das Land mit einer unsichtbaren, fressenden Angst. Die Zeitungen schrieben von Milliarden und Billionen für ein einziges Stück Brot, und in den Städten hungerten die Menschen, während das Geld in den Händen wertlos zerfiel. Doch auf dem abgelegenen Hof der Familie zählte die Währung der Natur: Schweiß, Ernteertrag und das unerbittliche Diktat der Jahreszeiten. Claire war nun achtzehn Jahre alt. Die Träume ihrer frühen Jugend waren unter einer dicken Schicht aus Ruß und Pflichterfüllung begraben, und ihr Körper hatte die kantige, zähe Gestalt einer Frau angenommen, die zu früh zu schwer gehoben hatte. Es war ein später Novemberabend. Draußen peitschte ein eisiger Regen gegen die Fensterscheiben der Wohnstube, und der Wind heulte im Schornstein wie ein gefangenes Tier. Claire stand am großen Holzzuber in der Küche. Ihre Ärmel waren bis über die Ellbogen hochgekrempelt, und ihre Hände, einst schmal und geschickt, waren vom stundenlangen Scheuern im eiskalten Brunnenwasser rissig, rot und an den Knöcheln tief aufgesprungen. Jeder Griff an das raue Leinen der Arbeitskleidung brannte wie Feuer. Sie spürte es kaum noch; die Taubheit in ihrer Seele hatte längst auf ihren Körper übergegriffen. Durch die geschlossene Küchentür drang das gedämpfte, rhythmische Wummern einer Bassgeige vom Dorfkrug herüber. Es war Kirchweih. Die Dorfjugend, Mädchen in ihrem Alter, die keine sieben Geschwister zu versorgen hatten, und junge Männer mit lachenden Gesichtern, traf sich dort zum Tanzen. Sie trugen ihre besten Kleider, tranken den billigen, sauren Wein und vergaßen für ein paar Stunden die Sorgen der Inflation. Claire hielt in ihrer Bewegung inne. Sie drückte das nasse Laken aus, trat langsam an das beschlagene Küchenfenster und wischte mit dem Ärmel einen kleinen Kreis in das Kondenzwasser der Scheibe. In der Ferne tanzten die Lichter des Dorfkrugs im Nebel. Ein Stechen fuhr ihr durch die Brust, so heftig, dass sie kurz den Atem anhielt. Sie schloss die Augen. Für einen winzigen, verbotenen Moment bewegte sie ihre Füße auf den kalten, ausgetretenen Eichendielen der Küche. Ein Schritt vor, einer zur Seite, ein Wiegen im Dreivierteltakt. Sie summte eine leise, französische Melodie, die ihr aus einem fast vergessenen Traum in den Sinn kam, und stellte sich vor, wie es wäre, ein leichtes Kleid zu tragen und sich im Kreis zu drehen, bis ihr schwindelig wurde. Claire? Die tiefe, brüchige Stimme ihres Vaters zerschnitt die Illusion wie ein Messer. Claire fuhr herum, die Wangen augenblicklich heiß vor Scham, als hätte man sie bei einem Verbrechen ertappt. Der Vater saß in seinem Ohrensessel am Ofen. Seine Beine waren von der Gicht gezeichnet, die Haare vollkommen grau. Er sah sie an, ein langer, stummer Blick voller tiefer, fast demütiger Dankbarkeit. Er sagte nichts, er tadelte sie nicht, doch genau diese schweigende Anerkennung legte sich wie eine bleierne Last auf Claires Schultern. Es war eine goldene Kette. Der Vater hatte nie wieder geheiratet, er hatte keine fremde Frau an den Herd geholt, die sie schlecht behandelt hätte. Dafür war Claire ihm unendlich dankbar. Doch der Preis für diese Dankbarkeit war ihr eigenes Leben. Der Teig für das Morgenbrot muss noch geknetet werden, Claire, sagte er leise und wandte den Blick ab. Ja, Vater. Ich bin gleich fertig, antwortete sie. Ihre Stimme klang flach, bar jener Melodie, die eben noch durch die Küche geschwebt war. Sie trat zurück an den Tisch, griff mit beiden Händen in den schweren, klebrigen Roggenteig und drückte ihn mit aller Kraft nieder. Jedes Stoßen und Kneten war ein stummer Schrei gegen das Karussell des Alltags, das sich Tag für Tag, Jahr für Jahr unerbittlich weiterdrehte, ohne sie jemals von der Stelle zu bewegen. Der bittere Nebel der Resignation senkte sich tiefer in ihr Herz, und die Sehnsucht nach einem farbigen, freien Leben wandelte sich in einen chronischen, dumpfen Schmerz, der sie fortan auch im Schlaf nicht mehr verließ.";
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
