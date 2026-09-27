let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das rhythmische, mechanische Piepen des Herzmonitors im Intensivzimmer wurde von Minute zu Minute langsamer, ein mattes Echo des vergehenden Lebens. Die Dunkelheit des Novemberabends drückte gegen die Fensterscheiben des Krankenhauses, und drinnen hielt die sterile, weiße Stille den Raum gefangen. Paula saß unverändert auf ihrem Stuhl, den Kopf schwer an das Bettgestell gelehnt, ihre Finger noch immer krampfhaft um Claires kalte Hand geschlossen. Sie betete stumm, die Lippen bewegten sich ohne Ton. Inmitten dieser bleiernen Atmosphäre geschah es. Ohne das leiseste Geräusch, ohne das Klicken einer Klinke, öffnete sich die schwere, weiße Tür des Sterbezimmers. Ein strahlendes, unendlich warmes und goldenes Licht flutete den Raum. Es war kein grelles, schmerzhaftes Licht, sondern es verströmte die behagliche Wärme eines Sommertages, an dem das Korn reif auf den Feldern steht. Mit diesem Licht zog ein Duft in das Zimmer, der die klinische Schärfe von Desinfektionsmitteln augenblicklich vertrieb: Es roch nach frischem Heu, nach Sommerwind und dem süßen Atem von Wildblumen. Aus dem Herzen dieses goldenen Scheins trat eine Gestalt hervor. Sie bewegte sich schwebend, völlig losgelöst von der Schwere der Erde. Es war eine Frau. Sie trug ein schlichtes, helles Gewand, und ihr Antlitz war von einer makellosen, unversehrten Schönheit. Claire, die im Dämmerzustand zwischen den Welten schwebte, öffnete im Geist die Augen. Ein heftiger, unbeschreiblicher Strom der Erkenntnis durchfuhr sie. Vor ihr stand ihre Mutter. Sie sah genauso aus wie an jenem schicksalhaften Julitag im Jahr 1914, bevor das Blut das Leben aus ihr herausgesaugt hatte. Sie war zweiundzwanzig Jahre alt, jung, voller Kraft und ohne jede Spur von jener irdischen Last, die sie damals ins Grab gezogen hatte. In ihren Augen lag ein tiefes, unendliches Leuchten, das nur aus vollkommener Liebe und ewigem Frieden speisen konnte. Die Mutter trat an das Bett heran. Sie blickte auf ihre gealterte, fünfundsiebzigjährige Tochter herab, deren Haare silberweiß auf dem Kissen lagen. In diesem Blick lag kein Vorwurf über die vergangenen sechsundsechzig Jahre der Trennung, sondern ein tiefes, mütterliches Verstehen. Sie breitet die Arme weit aus. Claire spürte, wie sich ihre Seele aus der engen, schmerzenden Hülle ihres sterbenden Körpers löste. Als die Mutter sich tief zu ihr herabbeugte, sie in die Arme schloss und fest an ihr Herz drückte, brach in Claires Inneren der letzte, tiefste Damm. Es war eine Umarmung, die über sechs Jahrzehnte hinweg ersehnt worden war. Jede Nacht, in der das neunjährige Mädchen stumm an der Wiege gesungen hatte, jede Träne, die sie unterdrücken musste, um für die Geschwister stark zu sein, und die lebenslange, heimliche Trauer, alles wurde in dieser einen, kosmischen Berührung augenblicklich geheilt. Ich habe dich gesehen, meine geliebte Claire, flüsterte die Mutter mit einer Stimme, die wie das sanfte Rauschen reifer Kornfelder im Wind klang. Ihre Hand strich zärtlich über Claires silbernes Haar. Ich habe jedes deiner Opfer gesehen. Ich habe gesehen, wie du deine eigene Kindheit auf dem Altar der Familie begraben hast, um meine Pflichten zu erfüllen. Und ich habe gesehen, wie großartig du geworden bist. Du hast Leben gerettet, du hast Wunden geheilt, du hast dein Werk vollbracht. Die Mutter lächelte, und eine unendliche Sanftheit lag in ihren Worten. Nun ist es genug, mein Kind. Du musst nicht mehr funktionieren. Du musst nicht mehr schwer tragen. Ich bin gekommen, um dich endlich, endlich nach Hause zu holen. Ein unbeschreibliches, überirdisches Glück durchflutete Claire. Die chronische Sehnsucht, die ihr gesamtes irdisches Dasein wie ein unsichtbarer Motor angetrieben und zugleich gequält hatte, war mit einem Schlag erloschen. Sie war erlöst. Das geopferte Kind war in den Mutterschoß zurückgekehrt, und die Seele der Heilerin war bereit, den letzten Schritt in die absolute Freiheit zu gehen. ";
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
