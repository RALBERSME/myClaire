let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die Stadt empfing Claire mit einem permanenten, nervösen Rauschen. Das Jahr 1940 hatte die Straßen in ein Meer aus feldgrauen Uniformen, Verdunkelungsblenden und hastenden Menschen verwandelt, doch Claire blieb von den fernen Fronten unberührt. Ihre gesamte Existenz war auf die weißen, nach Karbol und Bohnerwachs riechenden Flure der städtischen Klinik geschrumpft. Sie war nun fünfunddreißig Jahre alt. Während ihre jungen Mitschülerinnen, Mädchen, die ihre Töchter hätten sein können, nach dem Unterricht von Tanzabenden und Liebesbriefen tuschelten, saß Claire allein in ihrer spärlich möblierten Mansardenkammer. Auf ihrem wackligen Holztisch brannte eine kleine Karbidlampe. Ihr Lichtkegel fiel auf dicke, schwere Bände der Anatomie und der Arzneimittellehre. Claire las. Sie verschlang die lateinischen Fachbegriffe, zeichnete die feinen Verästelungen des menschlichen Nervensystems nach und prägte sich die Dosierungen von Herzglykosiden ein, als hing ihr eigenes Leben davon ab. Ihre über Jahrzehnte hinweg unterdrückte geistige Fitness, ihr messerscharfer Verstand und ihre Belesenheit brachen sich nun mit einer fast beängstigenden, hungrigen Energie Bahn. Es war, als gälte es, ein Vierteljahrhundert verlorener Zeit im Zeitraffer nachzuholen. Manchmal, wenn die Müdigkeit nach einer sechzehnstündigen Schicht auf der Station ihre Lider schwer werden ließ, legte sie den Kopf auf das offene Buch. In diesen Momenten holte sie Paulas Briefe hervor, die wie ein Rettungsanker auf ihrem Nachttisch lagen. Du lernst nicht nur für die Prüfungen, Claire, stand da in Paulas klarer, schwungvoller Schrift geschrieben. Du lernst für die Menschen, die bald niemanden mehr haben werden außer dir. Lass dich von der Strenge der Ärzte nicht beugen. Du weißt bereits, wie man Leben hütet. Jetzt gibst du dem Ganzen nur einen wissenschaftlichen Namen. Ich schicke dir ein paar getrocknete Blüten aus dem Pfarrgarten. Riech daran, wenn die Stadt zu grau wird. Claire strich mit dem Daumen über die gepresste Kamillenblüte im Brief. Ein leises Lächeln stahl sich auf ihr Gesicht. Paula schickte ihr nicht nur Worte, sondern regelmäßig kleine Päckchen mit mageren Lebensmittelrationen, die sie sich im Dorf vom Munde abgespart hatte, um Claires Ausbildung finanziell und physisch abzusichern. Am nächsten Morgen stand Claire wieder im hellen Untersuchungszimmer. Der leitende Oberarzt, ein strenger Mann mit preußischer Disziplin, prüfte die Schülerinnen am Krankenbett eines alten Mannes, der an schwerer Atemnot litt. Die jungen Mädchen drucksten herum, suchten nach den richtigen lateinischen Begriffen und starrten verlegen auf ihre Schuhspitzen. Nun?, herrschte der Oberarzt in die Runde. Weiß es denn keine von den Damen? Was ist die erste Maßnahme bei einem drohenden Lungenödem? Claire trat einen Schritt vor. Ihre Hände waren ruhig, die Haltung aufrecht. Oberkörper hochlagern, Herr Oberarzt. Dem Patienten das Atmen erleichtern, beengende Kleidung öffnen und unverzüglich für die Zufuhr von Sauerstoff sorgen, während die kardiale Entlastung vorbereitet wird. Der Arzt zog die Augenbrauen hoch. Er blickte über den Rand seiner Brille hinweg auf Claires reifes, von Lebenserfahrung gezeichnetes Gesicht. Ein langes, prüfendes Schweigen entstand, in dem die anderen Schülerinnen neidische Blicke mit ihr wechselten. Schließlich nickte der Arzt langsam. Sehr gut. Schwester Claire. Sie haben nicht nur gelernt, Sie haben verstanden. Machen Sie weiter so. Als der Arzt weiterging, spürte Claire eine tiefe, heiße Welle des Stolzes durch ihren Körper schießen. Es war kein hochmütiger Stolz, sondern eine tiefe, intellektuelle Genugtuung, die sie in ihrem bisherigen Leben noch nie empfunden hatte. Ihre Hände formten sich zu Werkzeugen der Präzision. Sie dienten nicht mehr dem Überleben des väterlichen Hofes oder dem Abwasch für undankbare Geschwister, sie dienten der Heilung von Menschen. Jede bestandene Zwischenprüfung, jedes lobende Wort der Oberschwester fühlte sich an wie ein später, triumphaler Sieg über das Schicksal, das sie einst für immer an den bäuerlichen Herd hatte ketten wollen.";
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
