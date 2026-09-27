let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Es war ein bitterkalter, stiller Novembermorgen im Jahr 1980. Draußen lag der erste, hauchdünne Reif wie Puderzucker auf den kahlen Ästen der Bäume am Waldrand. Im kleinen Fachwerkhaus war es noch dunkel. Claire, die erst vor wenigen Tagen ihren fünfundsiebzigsten Geburtstag gefeiert hatte, stand allein in der Küche und wollte gerade das Wasser für den morgendlichen Tee aufsetzen. Sie trug einen dicken, grauen Strickmantel über dem Nachthemd, und ihre Schritte auf den alten Holzdielen waren schwerer geworden als in den Jahren zuvor. Als sie den schweren Wasserkessel anheben wollte, geschah es ohne jede Vorwarnung. Ein plötzlicher, unbarmherziger Schmerz riss durch ihre Brust. Es fühlte sich an, als würde eine eiserne Faust in ihr Herz greifen und es mit aller Gewalt zusammendrücken. Ein brennender, lähmender Druck strahlte augenblicklich in ihre linke Schulter und den Kiefer aus, so heftig, dass ihr der Atem in der Kehle stockte. Der Kessel entglitt ihren kraftlosen Fingern und schlug mit einem lauten, metallischen Scheppern auf den Boden. Das Wasser ergoss sich über die Dielen. Claire taumelte, suchte Halt an der Kante der Küchentheke, doch ihre Knie gaben nach. Mit einem erstickten Keuchen brach sie zusammen und blieb regungslos im kalten Wasser liegen. Das Bewusstsein entwich ihr wie das Licht einer ausgeblasenen Kerze. Claire! Mein Gott, Claire! Paula, die durch das laute Scheppern des Kessels aufgewacht war, schleppte sich so schnell es ihre rheumageplagten Glieder erlaubten die Treppe hinunter. Als sie ihre beste Freundin leblos auf dem Küchenboden sah, schoss ihr das nackte Entsetzen in die Glieder. Mit zitternden Fingern eilte sie zum Telefon im Flur und wählte mit brechender Stimme den Notruf. Wenig später zerschnitt das gellende Martinshorn die morgendliche Stille des Tals. Der Krankenwagen raste mit Blaulicht über die frostigen Landstraßen, direkt hinein in die städtische Klinik, genau in jene Hallen, in denen Claire im Jahr 1947 als reife, einundvierzigjährige Frau unter den skeptischen Blicken der Jüngeren ihr Medizinstudium begonnen hatte. Schicksalhaft schloss sich hier der Kreis ihres Lebenswerkes. Nun lag sie selbst als Patientin in dem sterilen, weiß gefliesten Intensivzimmer. Das rhythmische, mechanische Piepen der Herzmonitore war das einzige Geräusch im Raum. Claire war an Schläuche und Kabel angeschlossen, ihr Gesicht so bleich und wächsern wie das ihrer Mutter im Sommer 1914. Paula saß auf dem harten, unbequemen Stuhl direkt neben dem Bett. Ihre deformierten Hände umklammerten Claires kalte, kraftlose Rechte mit aller Kraft, die sie noch aufbringen konnte. Tränen der Angst und der tiefen Sorge liefen ihr ungehindert über die eingefallenen Wangen. Du darfst mich nicht allein lassen, Claire, flüsterte sie immer und immer wieder in die sterile Stille hinein. Wir haben doch noch so viel zu bereden. Bleib bei mir. Claire bekam von den Worten ihrer Freundin im Außen nichts mehr mit. Sie befand sich in einem dämmrigen, unendlich tiefen Zwischenreich. Es war ein Ort vollkommener Schwerelosigkeit. Der fressende Schmerz in ihrer Brust war vollständig verschwunden; stattdessen spürte sie eine tiefe, unerschütterliche Ruhe, die sie wie eine warme Decke einhüllte. Ihr Geist war seltsam klar. Sie spürte, dass der Lebensfaden, der sie an die irdische Welt fesselte, einen tiefen Riss bekommen hatte und dünn wurde wie Pergamentpapier. Doch in dieser Grenzzone gab es keine Angst. Keine Panik vor dem Vergehen, kein Hadern mit dem Schicksal. Wer sein wahres Selbst im Leben so radikal und mutig verwirklicht hatte wie Claire, der fürchtete den Tod nicht mehr. Sie spürte, dass ihr großer Lebenskreis sich dem Ende zuneigte und die Grenze zwischen den Welten im Begriff war, sich zu öffnen.";
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
