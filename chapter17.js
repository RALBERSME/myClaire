let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die Universitätsstadt empfing Claire im Winter 1947 mit eisigen Temperaturen und dem harten Kontrast einer zerstörten, aber geistig brodelnden Welt. Die Hörsäle der medizinischen Fakultät waren kaum beheizt; der Atem der Studenten stand als feiner, weißer Nebel in der Luft. Claire saß meist in den mittleren Reihen, eingewickelt in einen schweren, abgewetzten Wollmantel. Mit ihren einundvierzig Jahren und den ersten grauen Strähnen im Haar fiel sie unter den Kommilitonen sofort auf. Die meisten von ihnen waren junge Männer und Frauen, die gerade erst die Schule beendet hatten und deren Gesichter noch die Unbescholtenheit einer Jugend trugen, die Claire nie besessen hatte. In den ersten Wochen schlug ihr eine spürbare, kühle Distanz entgegen. Man tuschelte hinter vorgehaltenem Handgelenk, hielt sie für eine verspätete Gasthörerin oder eine verbitterte Kriegswitwe, die sich die Zeit vertreiben wollte. Doch Claire schwieg, blickte starr nach vorn und ließ sich nicht beirren. Ihr Verstand, der über zwei Jahrzehnte hinweg am bäuerlichen Herd gefangen gewesen war, arbeitete mit einer hungrigen, fast manischen Präzision. Sie saß abends bis tief in die Nacht in ihrer kargen Studentenbude, las beim schwachen Schein einer Kerze die lateinischen Fachtexte zur Biochemie und zeichnete mit der ihr eigenen, feinen Kohle die komplexen Muskelstränge des menschlichen Körpers nach. Paula hielt in dieser entbehrungsreichen Zeit das Versprechen, das sie auf der Berghütte gegeben hatte. Alle zwei Wochen traf ein kleines, sorgfältig geschnürtes Paket im Wohnheim ein. Drinnen lagen magere, vom Munde abgesparte Lebensmittelrationen aus dem Dorf, ein Stück Speck, ein paar schrumpelige Äpfel oder ein Glas eingekochtes Gemüse, und immer ein kurzer, kraftvoller Brief. Lass dich von den jungen Schnöseln nicht einschüchtern, Claire, schrieb Paula mit ihrer schwungvollen Handschrift. Sie haben die Bücher im Kopf, aber du hast das Leben in den Händen. Wenn ein Professor dich prüft, dann denk an das Lazarett. Du weißt, wie ein schlagendes Herz aussieht. Die anderen haben es bisher nur auf Papier gesehen. Die Stunde der Wahrheit schlug im großen Anatomie-Hörsaal vor dem gestrengen Auge von Professor von Wedel, einem Ordinarius der alten Schule, der dafür bekannt war, unvorbereitete Studenten gnadenlos bloßzustellen. Er stand am Seziertisch, umringt von einer Gruppe nervöser Erstsemester. Sein Blick wanderte prüfend über die Gesichter, bis er an Claire hängen blieb. Nun, meine Dame, sagte er mit schneidender Stimme, während er auf die freigelegte Halsschlagader des Präparats deutete. „Vielleicht erklären Sie den jungen Herren hier, welche anatomischen Strukturen wir bei einer akuten Tracheotomie, einem Luftröhrenschnitt, unter allen Umständen schonen müssen, um eine tödliche Blutung zu verhindern. Und beschreiben Sie mir den exakten Winkel der Inzision. Ein spöttisches Raunen ging durch die Reihen der jüngeren Studenten. Claire trat einen Schritt vor. Ihre Hände, die vom jahrzehntelangen Scheuern einst rau waren, lagen ruhig an den Seiten ihres weißen Kittels. Sie blickte nicht auf die Skizzen im Lehrbuch, sondern suchte das innere Bild jener Bombennacht im Keller des Lazaretts von 1944, als sie Reinhardt das Skalpel gereicht hatte. Der Schnitt erfolgt exakt in der Mittellinie des Halses, unterhalb des Ringknorpels, begann Claire mit einer tiefen, vollkommen ruhigen und sicheren Stimme. Die Arteria carotis communis und die Vena jugularis interna liegen lateral und müssen durch stumpfes Auseinanderziehen des Gewebes geschützt werden. Der Schnitt darf niemals schräg angesetzt werden, da sonst der Isthmus der Schilddrüse unkontrolliert verletzt wird und der Patient in der eigenen Luftröhre erstickt. Sie blickte dem Professor direkt in die Augen. Ich habe diesen Eingriff unter Beschuss dreimal assistiert, Herr Professor. Das Gewebe verhält sich in der Realität weicher, als es Ihre Wachsmodelle vermuten lassen. Im Hörsaal wurde es schlagartig so still, dass man das Knistern des Kohleofens im Hintergrund hören konnte. Die jüngeren Kommilitonen starrten sie mit offenem Mund an; das Spötteln war augenblicklich aus ihren Gesichtern gewichen. Professor von Wedel senkte langsam die Pinzette. Er zog die Augenbrauen hoch, blickte lange über den Rand seiner Brille auf Claires reifes, vom Leben gezeichnetes Gesicht und nickte schließlich mit tiefem, ehrlichem Respekt. Ausgezeichnet, Kollegin, sagte er leise und betonte das Wort Kollegin mit spürbarem Nachdruck. Besser hätte es kein Lehrbuch formulieren können. Meine Herrschaften, nehmen Sie sich ein Beispiel an dieser Konzentration. Als Claire nach den Vorlesungen das Universitätsgebäude verließ und in den kalten Abendwind trat, spürte sie eine tiefe, heiße Welle des Stolzes und der Erleichterung durch ihre Brust schießen. Der Schmerz über die geopferte Kindheit und die verlorenen Jahre wich in diesem Moment einer tiefen, unerschütterlichen Genugtuung. Sie war keine hilflose Magd mehr, kein Rädchen im Getriebe einer bäuerlichen Familie. Ihr Verstand war frei, ihre praktische Kriegserfahrung wurde zu ihrem größten Fundament, und sie wusste mit absoluter Gewissheit, dass sie auf dem besten Weg war, die beste Studentin ihres Jahrgangs zu werden.";
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
