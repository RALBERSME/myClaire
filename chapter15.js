let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die Sommersonne des Jahres 1946 stand hoch über den Gipfeln, als Claire und Paula den schmalen Pfad betraten, der sich tief in die heimischen Berge schlängelte. Hinter ihnen lag das erste, entbehrungsreiche Jahr im provisorischen Nachkriegskrankenhaus. Wochen voller Seuchenangst, Typhusverdacht und dem unermüdlichen Flicken von Menschenleben aus den Trümmern. Nun, für eine einzige Woche, hatten sie die weißen Kittel und die Sorgen des Tals zurückgelassen. Sie wollten hinauf, dorthin, wo die Luft dünner und die Welt unberührt war. Der Wald empfing sie mit einer feierlichen, kühlen Stille. Es roch intensiv nach harzigem Tannengrün, feuchtem Moos und dem erdigen Atem des Waldbodens. Claire spürte mit jedem Schritt, den ihre festen Wanderstiefel auf dem wurzeligen Pfad taten, wie die bleierne Schwere der Lazarettjahre langsam von ihren Schultern abfiel. Sie trug einen einfachen, praktischen Rock und eine helle Bluse. Ihre Bewegungen waren elastisch und kraftvoll geworden. Die Natur hatte hier oben keine Erinnerung an den Bombenkrieg; die Farne entrollten ihre Blätter im hellen Spiel der Sonnenstrahlen, und ein klarer Bergbach plätscherte munter neben dem Weg her. Warte auf mich, Claire!, rief Paula lachend von weiter unten. Sie hielt sich keuchend an einem hölzernen Wanderstab fest, die Wangen gesund gerötet, die Augen voller Schalk. Du läufst ja, als hättest du Flügel an den Fersen! Claire hielt inne und wandte sich um. Sie stellte sich auf einen großen, moosbewachsenen Stein und blickte zu ihrer Freundin hinab. Ein breites, freies Lächeln erhellte ihr Gesicht. Das liegt an der Luft, Paula! Spürst du das nicht? Hier oben drückt kein Dach, hier drückt keine Wand. Es gibt keine Patienten, die nach uns rufen, und keine Formulare, die wir ausfüllen müssen. Paula schloss zu ihr auf, stützte die Hände in die Hüften und blickte hinauf in den strahlend blauen Himmel, der zwischen den Baumkronen hindurchblickte. Weißt du noch, wie wir am Meer standen? Das hier ist dasselbe, nur in Grün. Die Welt schüttelt ihre Wunden ab. Und wir sollten das auch tun. Sie setzten ihren Weg fort, und je höher sie stiegen, desto mehr lösten sich die Zungen. Sie begannen zu singen. Anfangs waren es nur leise, summente Melodien, doch bald hallten ihre klaren Stimmen im Echo der Felswände wider. Sie sangen die alten Volkslieder ihrer Kindheit, Lieder von der Heimat, vom Wandern und vom Überleben. Die altbekannten Texte bekamen im Nachhall der überstandenen Katastrophen eine völlig neue, tiefe Bedeutung. Es war kein trauriger Gesang, sondern ein trotziger, lebenshungriger Triumph über den Tod. Am späten Nachmittag erreichten sie eine einsame, sonnenbeschiedene Waldlichtung. Das Gras stand hoch und war übersät mit wilden Bergblumen, gelber Arnika und tiefblauer Enzian. Claire blieb stehen, schloss die Augen und breitete die Arme weit aus, genau wie Paula es damals am Strand der Ostsee getan hatte. Der warme Wind strich ihr über das Gesicht. Paula, sagte sie leise, ohne die Augen zu öffnen. Ich fühle mich, als wäre ich fünfundzwanzig Jahre lang im Kreis gelaufen. Und jetzt stehe ich plötzlich am Anfang. Dann tanz den Kreis zu Ende, Claire, antwortete Paula sanft. Claire öffnete die Augen, sah Paula an und begann sich zu bewegen. Sie hob ihren Rock ein wenig an und drehte sich im Kreis. Erst langsam, dann immer schneller. Ihre Schritte auf dem weichen Gras waren leicht, fast schwebend. Es war kein starres Abzählen von Takten; es war ein rituelles Abschütteln aller Ängste, aller Nächte im Bombenrauch und aller Jahre am väterlichen Herd. Sie tanzte für die geopferte Kindheit, für die sterbenden Soldaten, denen sie die Hand gehalten hatte, und für die Frau, die sie nun endlich sein durfte. Paula stimmte mit ein, klatschte im Rhythmus in die Hände, und ihr gemeinsames Lachen erfüllte die einsame Lichtung mit einer vibrierenden, fast magischen Lebensfreude. Als die Sonne langsam hinter den Bergkämmen versank und den Himmel in ein tiefes, goldenes Licht tauchte, erreichten sie eine kleine, verlassene Berghütte, an der sie ihr Nachtlager aufschlagen wollten. Claire sammelte trockenes Holz, und bald knackte und loderte ein kleines Lagerfeuer vor der Hütte. Die Funken stiegen wie winzige Sterne in den dämmernden Abendhimmel auf. Sie saßen nebeneinander auf einer hölzernen Bank, die Beine ausgestreckt, die Tassen mit heißem Hagebudentee in den Händen. Die Atmosphäre war geschwängert von einer tiefen, erwartungsvollen Ruhe. Claire blickte in die tanzenden Flammen und spürte, dass ihre Seele nach all den Stürmen der Zeit endlich an einem sicheren Ufer angekommen war. Sie ahnte jedoch nicht, welche Wendung dieser Abend noch nehmen würde.";
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
