let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1928 brachte den Städten des Landes Aufbruch und Modernisierung, doch auf dem abgelegenen Hof schien die Zeit in einer tiefen, grauen Starre zu verharren. Claire war nun dreiundzwanzig Jahre alt. Die Weltpolitik, die fernen Ideologien und das laute Treiben der neuen Zeit drangen nicht durch die dicken Mauern ihres Zuhauses; ihre gesamte Existenz blieb radikal auf die Familie begrenzt. An einem späten Sonntagabend, als das ganze Haus endlich schlief, stand sie allein in ihrer winzigen Dachkammer. Sie hielt eine kleine, flackernde Kerze in der Hand und blickte in den blinden, von feuchten Flecken zerfressenen Fleck des alten Wandspiegels. Sie suchte nach dem Mädchen von einst, doch sie fand es nicht mehr. Ihre jüngeren Geschwister wuchsen heran, wurden flügge und nahmen Claires unendliche Fürsorge, das tägliche Kochen, Waschen und Flicken längst als naturgegebene Selbstverständlichkeit hin. Niemand fragte, wie es in ihr aussah. Claires Gesicht im Spiegel wirkte älter, die Augen tief liegend und von einer chronischen Erschöpfung umschattet. Die Farben ihrer inneren Welt waren fast vollständig verblasst. Anstatt zu malen, unterschied sie in ihrem von Pflichten diktierten Alltag nur noch das Grau der Ofenasche vom Weiß der kochenden Wäsche. Sie war innerlich ausgebrannt, eine Gefangene des eigenen Funktionierens. Diese totale Unterdrückung ihrer Lebenskraft forderte in den Nächten ihren grausamen Tribut. Kaum löschte sie die Kerze und schloss die Augen, brachen die Albträume über sie herein. Sie fand sich im Schlaf regelreißt in einem sterilen, unendlich weißen Raum wieder. Der Boden, die Wände, alles gleißte in einem unbarmherzigen Licht. Ihre eigenen Hände waren über und über mit dunklem, frischem Blut bedeckt. Überall um sie herum lagen kranke, leidende Menschen auf dem Boden, die weinten und mit flehenden Stimmen nach ihr riefen. Claire wollte helfen, sie wollte Wunden verbinden und das Fieber senken, wie sie es sich als Kind immer erträumt hatte, doch in den Träumen waren ihre Arme wie aus Blei, ihre Finger gelähmt. Sie konnte sich nicht bewegen. Sie musste stumm zusehen, wie das Leben um sie herum verrann. Mit einem erstickten Schrei und einem heftig klopfenden Herzen schreckte sie mitten in der Nacht aus dem Schlaf hoch. Der Schweiß stand ihr auf der Stirn, und in der Dunkelheit der Kammer hielt sie zitternd ihre Hände vor das Gesicht, um sich zu vergewissern, dass kein Blut an ihnen klebte. Eine bleierne, lähmende Müdigkeit lag auf ihren Gliedern, noch bevor der Tag überhaupt begonnen hatte. Als im Morgengrauen der erste Hahn krähte, stand Claire bereits wieder am kalten Herd. Sie strich sich die Haare aus dem Gesicht, maskierte ihre Zerrissenheit mit einem matten, duldenden Lächeln und funktionierte weiter für den Vater und die Geschwister. Das Gefühl, lebendig begraben zu sein und ihre eigene Kindheit und Jugend auf dem Altar der Pflicht geopfert zu haben, wurde zu ihrem ständigen, lautlosen Begleiter bei jedem schweren Gang zum Viehstall.";
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
