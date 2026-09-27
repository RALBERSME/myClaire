let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die Luft im großen Lazarett der Stadt stand schwer und dick. Sie schmeckte nach dem scharfen, beißenden Geruch von Lysol, nach dem süßlichen Atem von Wundbrand und dem nackten, metallischen Duft von frischem Blut. Es war das Jahr 1942. Claire, mittlerweile sechsunddreißig Jahre alt, stand inmitten eines endlosen Meeres aus weißen Eisenbetten, die hastig in der umfunktionierten Turnhalle einer Schule aufgestellt worden waren. Draußen peitschte der Herbstregen gegen die hohen Fenster, drinnen herrschte das dumpfe, vielstimmige Echo des Schmerzes. Gerade war wieder ein Lazarettzug von der Ostfront eingetroffen. Die Verwundeten, junge Männer, die oft kaum älter waren als Claires jüngste Brüder damals, lagen dicht an dicht auf den Decken. Einige schrien im Fieberwahn nach ihren Müttern, andere starrten mit hohlen, brennenden Augen stumpf an die Decke, unfähig zu begreifen, was mit ihren Körpern geschehen war. Claire bewegte sich zwischen den Betten wie eine Maschine. Ihre Handgriffe saßen perfekt. Die unerbittliche, harte Plackerei auf dem väterlichen Hof, die schweren Jahre, in denen sie gelernt hatte, trotz extremster körperlicher Erschöpfung einfach weiterzufunktionieren, wurden in dieser Hölle zu ihrer größten Waffe. Wo jüngere Schwestern beim Anblick zerfetzter Gliedmaßen bleich wurden oder weinend den Raum verließen, blieb Claires Gesicht eine unbewegliche Maske. Sie wusch Wunden aus, assistierte bei Amputationen und reichte den Chirurgen die Instrumente, ohne mit der Wimper zu zucken. Schwester Claire, mehr Verbandszeug an Tisch drei! Rasch!, rief eine Stimme durch den Saal. Bin unterwegs, antwortete sie flach. Ihre Stimme klang tonlos, bar jeder Melodie. Als sie den Verbandswagen an ein Bett schob, auf dem ein junger Soldat mit einem völlig verbundenen Gesicht lag, hielt sie für einen Bruchteil einer Sekunde inne. Der Junge zitterte am ganzen Leib. Seine gesunden Hände krallten sich so fest in das raue Laken, dass seine Knöchel weiß hervortraten, genau so, wie Claire sich einst als neunjähriges Mädchen am hölzernen Bettpfosten ihrer sterbenden Mutter festgekrallt hatte. Schwester, bitte, wimmerte der Soldat durch die blutbefleckte Gaze. Lassen Sie mich nicht allein. Es ist so dunkel. Ich sehe nichts mehr. Ein heftiger, eisiger Stich fuhr Claire durch die Brust. In ihrem Inneren bäumte sich etwas auf, eine Welle von tiefem, schmerzhaftem Mitgefühl, die sie unterdrücken musste. Sie spürte, wie ihr Herz, das sie zum Schutz vor dem unendlichen Leid der letzten Monate mühsam in Eis gelegt hatte, für einen Moment gefährlich ins Wanken geriet. Wenn sie jetzt nachgab, wenn sie die Tränen zuließ und den Schmerz an sich herantreten ließ, würde sie diese Schicht nicht überstehen. Sie würde zusammenbrechen, genau wie die anderen. Sie holte tief Atem, straffte die Schultern und drückte das Gefühl mit aller Gewalt tief in ihr Unbewusstes zurück. Ihr Gesicht wurde wieder zu der steinernen, professionellen Maske der duldenden Heilerin. Ruhig liegen bleiben, Soldat, sagte sie mit einer kühlen, distanzierten Festigkeit, während ihre Hände mit chirurgischer Präzision den nächsten Verband anlegten. Der Arzt kommt gleich. Ich muss weiter. Sie wandte sich ab und ging zum nächsten Bett, ohne den Jungen noch einmal anzusehen. Doch während ihre Füße sie mechanisch weitertrugen, spürte Claire einen dumpfen, quälenden Schmerz in ihrer eigenen Seele. Sie merkte, wie sie innerlich langsam versteinerte. Um die Grausamkeit des Krieges zu überleben, spaltete sie genau jene Wärme, jene tiefe Empathie und Kreativität ab, die sie als Kind ausgezeichnet hatten. Sie funktionierte perfekt, sie half, sie rettete Leben, doch der Preis dafür war eine unheimliche, innere Kälte, die sich wie Reif über ihr Herz legte.";
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
