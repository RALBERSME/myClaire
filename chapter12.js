let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Winter 1943 hatte sich mit eisiger Härte über das Lazarett gelegt. Die Kohle war knapp, und durch die Ritzen der provisorischen Fenster pfiff ein schneidender Wind. Claire stand am Desinfektionsbecken, die Hände bis zu den Handgelenken in brennender Karbollösung. Sie spürte die Kälte des Wassers kaum noch. Ihr Blick war starr auf die Fliesen gerichtet, ihr Gesicht so unbeweglich wie in den Monaten zuvor. Sie war zu einer perfekten, aber seelenlosen Funktionärin des Todes geworden. Sie waschen sich die Haut von den Knochen, Schwester Claire. Und die Seele gleich mit. Die tiefe, von jahrelangem Pfeifenrauchen raue Stimme gehörte Dr. Robert Reinhardt. Der leitende Lazarettarzt stand mit untergeschlagenen Armen im Türrahmen des Sterilisationsraums. Er war ein Mann Ende fünfzig, mit tiefen Falten um die Augen, die jedoch keine Spuren von Bitterkeit waren, sondern von einer unerschütterlichen, gütigen Menschlichkeit. Er trug seinen weißen Kittel über einer abgewetzten Weste, die Ärmel hochgekrempelt. Claire fuhr nicht erschrocken herum. Sie nahm ein trockenes Tuch, rieb sich die Hände trocken und erwiderte kühl: Es ist viel zu tun, Herr Oberarzt. Der nächste Transport aus dem Osten wird in zwei Stunden erwartet. Wir brauchen jedes saubere Instrument. Robert Reinhardt trat näher. Er nahm eine chirurgische Klemme vom Tisch, betrachtete sie kurz und sah Claire dann direkt in die Augen. Es war ein Blick, der nicht an ihrer professionellen Maske hängen blieb, sondern tief in sie hineinsah, dorthin, wo Claire ihren Schmerz und ihre Träume weggesperrt hatte. Ich beobachte Sie nun schon seit Wochen, Claire, sagte er sanft und verzichtete bewusst auf das formelle Schwester. Ihre Schnelligkeit ist bemerkenswert. Ihre Präzision bei den Nahtsetzungen übertrifft die mancher meiner Assistenzärzte. Sie haben ein untrügliches Gespür für die Anatomie. Aber Sie versteinern mir unter den Händen. Wenn Sie so weitermachen, wird dieser Krieg Sie brechen, ohne dass eine einzige Kugel Sie trifft. Claire spürte, wie eine plötzliche, heiße Welle der Abwehr in ihr aufstieg. Ich tue meine Pflicht, Herr Oberarzt. Wenn ich hier drinnen anfange zu weinen, hilft das keinem der sterbenden Jungen da draußen. Es geht nicht ums Weinen, erwiderte Reinhardt und trat noch einen Schritt näher. Er legte eine Hand auf ihre Schulter. Die Geste war vollkommen väterlich, getragen von tiefem, kollegialem Respekt. Es geht darum, ob Sie den Jungen noch in die Augen sehen können. Ein Patient braucht Medizin, ja. Aber ein sterbender Mensch braucht ein Gegenüber. Er braucht Wärme, Anerkennung. Und Sie, Claire, Sie haben diese Wärme im Überfluss. Ich sehe es an der Art, wie Sie die Kissen aufschütteln, wenn Sie glauben, dass niemand hinsieht. Warum verstecken Sie sich hinter dieser Eiswand? Claire wandte den Blick ab. Die Berührung auf ihrer Schulter brannte. Ich habe gelernt, dass Gefühle gefährlich sind. Sie halten einen nur auf. Wenn man funktionieren muss, darf man nicht fühlen. Reinhardt schüttelte langsam den Kopf. Wer hat Ihnen diesen Unsinn beigebracht? Ihr Vater? Das Leben auf dem Land? Er wartete ihre Antwort nicht ab, sondern fuhr mit fester Stimme fort: Ab morgen werden Sie mir bei den großen Thorax-Operationen assistieren. Ich will, dass Sie mir über die Schulter sehen. Sie haben den Verstand einer Ärztin, Claire. Nutzen Sie ihn. Aber versprechen Sie mir eines: Lassen Sie das Herz dabei offen. Nur ein verwundeter Heiler ist ein guter Heiler. In den folgenden Wochen wurde der Operationssaal zu Claires neuem Universum. Reinhardt forderte sie intellektuell heraus, erklärte ihr jeden Schnitt, jede physiologische Reaktion und behandelte sie nicht wie eine Handlangerin, sondern wie eine geschätzte Kollegin. Er schenkte ihr die fachliche Anerkennung und den intellektuellen Respekt, nach dem sie sich ihr ganzes Leben lang unwissentlich gesehnt hatte. Er tat dies mit einer reinen, platonischen Güte, stets treu an seine eigene Ehefrau gebunden, was Claire ein Gefühl von absoluter emotionaler Sicherheit gab. Durch diese väterliche Führung begann das Eis um ihr Herz langsam aufzutauen. Eines Nachts, als ein schwerverletzter Soldat im Bett 14 unruhig hin und her warf und im Fieber wimmerte, ging Claire nicht distanziert vorbei. Sie setzte sich an seine Bettkante. Sie nahm seine Hand, und anstatt nur den Puls zu fühlen, begann sie mit leiser, melodischer Stimme ein altes Märchen von einer gefangenen Prinzessin zu erzählen, die den Weg aus dem dunklen Turm fand. Der Soldat wurde ruhig. Seine Atmung flachte ab, und ein friedlicher Ausdruck legte sich auf sein Gesicht. Claire sah zu ihm herab und spürte das erste Mal seit Jahren wieder eine tiefe, schmerzhafte, aber wunderschöne Empathie durch ihre Adern fließen. Sie funktionierte immer noch perfekt, aber sie fühlte wieder.";
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
