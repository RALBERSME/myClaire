let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1970 legte sich wie ein milder, goldener Oktobermorgen über das Tal. Die Blätter der alten Buchen am Waldrand hatten sich in ein tiefes Rostrot und brennendes Orange gefärbt, und der Duft von feuchtem Holz und reifem Herbstlaub stand in der kühlen Luft. Claire und Paula hatten die Landarztpraxis und den Dienst im Pfarrhaus im vergangenen Sommer endgültig an jüngere Nachfolger übergeben. Nun lebten die beiden gealterten Frauen, deren Haare mittlerweile vollkommen silberweiß schimmerten, gemeinsam in einem kleinen, gemütlichen Fachwerkhaus am Rande des Waldes, weit weg vom Trubel des Dorfes. Es war ein Haus voller Leben, Geschichte und gesammelter Erinnerungen. Die Wände waren bis unter die Decke mit Claires Landschaftsbildern geschmückt, und in den Regalen stapelten sich medizinische Fachbücher neben alten französischen Gedichtbänden und den theologischen Schriften Paulas. Sie verbrachten die Tage in einem friedlichen, selbstgewählten Rhythmus. Sie saßen oft stundenlang auf der sonnenbeschiedenen Holzbank im Garten, tranken Tee, beobachteten die Vögel und reflektierten in tiefen, langen Gesprächen die schmerzhaften und wunderschönen Wendepunkte ihres langen Daseins. Doch der Herbst des Lebens brachte auch seine Lasten. Paula, die zeitlebens die unermüdliche Antreiberin und die emotionale Stütze gewesen war, hatte im Alter mit einer schweren, fortschreitenden Rheumaerkrankung zu kämpfen. Ihre einst so flinken, tatkräftigen Hände waren deformiert und schmerzten bei jeder Bewegung; an manchen Tagen fiel ihr selbst das Halten einer Teetasse schwer. „Es ist eine seltsame Ironie des Schicksals, nicht wahr, Claire?“, sagte Paula an einem kühlen Abend. Sie saß in ihrem Ohrensessel am knisternden Kachelofen, eine Decke über den Knien. Ihre Stimme war brüchiger geworden, doch ihre Augen besaßen noch immer denselben hellen, ungezähmten Funken wie damals am Ostseestrand. Sie blickte auf ihre geschwollenen Finger. Mein ganzes Leben lang habe ich die Menschen im Dorf bewegt, bin von Hof zu Hof gerannt. Und jetzt wollen meine eigenen Beine und Hände nicht mehr gehorchen. Claire trat leise an den Sessel heran. Sie hielt eine Schale mit einer selbst hergestellten, wärmenden Kräutersalbe in den Händen. Sie kniete sich vor Paula nieder, nahm die deformierte Hand ihrer besten Freundin mit einer unendlichen, zärtlichen Behutsamkeit in ihre eigenen Hände und begann, die schmerzenden Glieder langsam und gleichmäßig zu salben. Du hast dich eben zu viel für andere verausgabt, meine liebe Paula, flüsterte Claire, während sie die Salbe mit sanftem Druck einrieb. Ihre Hände, die im Laufe ihres Lebens so viel gelernt und gehalten hatten, waren dabei vollkommen ruhig und strahlten eine tiefe, heilende Wärme aus. Jetzt ist es an der Zeit, dass du dir die Pflege schenken lässt, die du so vielen Menschen gegeben hast. Lass mich das für dich tun. Paula blickte auf Claires silbernes Haar herab, und eine Träne der Rührung stahl sich in ihre Augen. Sie legte ihre andere, freie Hand schwer auf Claires Schulter. Weißt du noch, Claire, 1939 im Pfarrgarten? Als du mich anschreien wolltest, weil ich dir das Stipendium auf den Tisch gelegt habe? Claire lachte leise, ein reifes, warmes Lachen. Ich habe dich in diesem Moment gehasst, Paula. Ich hatte solche Angst. Ich dachte, du willst mir mein einziges, kleines Glück mit Heinrich rauben. Sie hielt in der Bewegung inne und sah Paula direkt in die Augen. Erst viel später habe ich begriffen, dass unsere Begegnung damals kein Zufall war. Es war die schicksalhafte Rettung meiner Seele. Du hast mich vor dem sicheren Untergang bewahrt. Und du rettest mich jetzt jeden Tag vor der Bitterkeit des Alters, erwiderte Paula sanft. Wir haben den Kreis geschlossen, Claire. Wir haben alle Hürden dieser dunklen Epoche gemeistert. Sie saßen noch lange so da, während das Feuer im Ofen ein gemütliches Licht an die Wände warf. Es gab keine ungesagten Worte mehr zwischen ihnen, keine alten Schuldgefühle oder Abhängigkeiten. Ihre Beziehung war im Laufe der Jahrzehnte zu einer reinen, geläuterten Caritas geworden, einer unverbrüchlichen Frauenfreundschaft, die auf absoluter Augenhöhe ruhte. Die tiefe Dankbarkeit füreinander lag wie ein milder, goldener Abendhauch über ihrem gemeinsamen Ruhestand im kleinen Haus am Waldrand, bereit für alles, was das Schicksal noch für sie bereithalten sollte.";
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
