let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1933 zog über das Land, doch in Claires Welt zählten weder die großen politischen Umbrüche noch die fernen Parolen. Für sie blieb das Leben ein unbarmherziger Kosmos, der nur aus dem Rhythmus der harten Arbeit und familiärer Aufopferung bestand. Ihr jüngster Bruder, der Junge, für dessen Leben die Mutter einst mit dem eigenen bezahlt hatte, packte in diesem Sommer seine Sachen. Er verließ den Hof, um in der Stadt sein Glück zu suchen. Als er durch die Pforte ging, tat er das, ohne auch nur ein einziges Wort des Dankes an die Schwester zu richten, die ihm die Mutter ersetzt, seine Wunden gepflegt und ihre eigene Jugend für ihn geopfert hatte. Claire stand am Hoftor und sah ihm stumm nach, während der Staub der Landstraße sich langsam legte. Eine tiefe, eisige Bitterkeit fraß sich in diesem Moment in ihr Herz. Der Vater wurde von Monat zu Monat älter; seine Knochen knarren inzwischen wie das morsche Gebälk des alten Hauses, wenn er sich morgens von der Bettkante erhob. Die Last der schweren Feldarbeit lag nun fast vollständig auf Claires Schultern. Mit einer instinktiven, fast schmerzhaften Präzision versorgte sie seine offenen Wunden mit selbstgemachten Kräutersalben. Sie tat es fehlerfrei, doch die Wärme von einst war aus ihren Handgriffen gewichen. Ihre kreative Seele, die geistig so fit und belesen war, brach sich nur noch selten Bahn. Manchmal, wenn die Dunkelheit über das Tal hereinbrach und die Arbeit im Stall getan war, saß sie mit den jüngsten Dorfkindern auf den Stufen der Scheune. Dann erzählte sie ihnen Märchen, doch es waren keine Geschichten mehr von strahlenden Helden. Sie erzählte mit leiser, eindringlicher Stimme von gefangenen Prinzessinnen, die in tiefen, finsteren Türmen saßen und deren Schreie von den dicken Mauern verschluckt wurden, bis sie vergaßen, wer sie einmal gewesen waren. Die Kinder lauschten andächtig, ohne zu ahnen, dass Claire von sich selbst sprach. Sie spürte mit jedem vergehenden Tag, dass sie ihre eigene Jugend auf dem Altar der familiären Pflicht bedingungslos geopfert hatte. Das Gefühl, von den eigenen Geschwistern und dem Schicksal schamlos ausgenutzt worden zu sein, vergiftete langsam ihre Gedanken. Jeder Tag fühlte sich an wie ein endloser, ermüdender Marsch durch tiefen, zähen Schlamm, bei dem das Ziel längst im Nebel verloren gegangen war. Sie funktionierte wie ein Uhrwerk, doch die lebendige, farbenfrohe Claire von einst schien hinter einer Mauer aus stummem Groll und seelischem Schmerz verkümmert zu sein.";
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
