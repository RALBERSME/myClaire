let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Der Mai des Jahres 1945 brachte keine Fanfaren, sondern eine bleierne, staubige Stille, die sich über die Ruinen des Landes legte. Der Krieg war vorbei. Das Lazarett war evakuiert, die Betten leer, und die Wände standen nur noch als geschwärzte Skelette im fahlen Frühlingslicht. Claire stand im Hof der zerstörten Klinik, einen kleinen, abgewetzten Koffer in der Hand. Ihr Gesicht war schmaler geworden, gezeichnet von den schlaflosen Nächten des letzten Kriegsjahres, aber in ihren Augen lag eine neue, unerschütterliche Ruhe. Dr. Robert Reinhardt trat aus dem Sanitätszelt, das im Hof errichtet worden war. Seine Haare waren vollkommen weiß geworden, doch sein Blick besaß noch immer dieselbe väterliche Wärme wie bei ihrer ersten Begegnung. Er reichte Claire die Hand. Es war kein Abschied zwischen Vorgesetztem und Angestellter; es war der Händedruck zweier Kollegen, die gemeinsam durch die Hölle gegangen waren. Ihr Weg führt Sie zurück aufs Land, Claire?, fragte er leise. Ja, Herr Oberarzt. Nach Hause. Zu Paula, antwortete sie, und bei der Erwähnung des Namens ihrer Freundin spürte sie das erste Mal seit Monaten einen warmen Funken in der Brust. Reinhardt nickte langsam, drückte ihre Hand fest und sah sie eindringlich an. Vergessen Sie nicht, was ich Ihnen gesagt habe. Sie haben die Hände und den Verstand einer Ärztin. Lassen Sie sich von den Trümmern da draußen nicht einreden, Ihre Zeit sei vorbei. Das Land wird Frauen wie Sie brauchen, um die Wunden zu heilen, die sichtbaren und die unsichtbaren. Gehen Sie mit Gott, Claire. Die Rückreise war eine Odyssee durch ein kollabiertes Land. Züge fuhren nur unregelmäßig, oft musste Claire meilenweit zu Fuß gehen oder auf den Ladeflächen von Lastwagen mitfahren. Doch je näher sie den vertrauten Hügeln ihrer Heimat kam, desto mehr fiel die Last der städtischen Lazarettjahre von ihr ab. Die Natur kümmerte sich nicht um den Untergang der Reiche; die Wiesen standen im saftigen Grün, und die alten Wälder atmeten den Duft von feuchter Erde und Moos. Als Claire schließlich die staubige Landstraße des Dorfes hinaufging, sah sie Paula bereits von Weitem am Gartenzaun des Pfarrhauses stehen. Paula trug ein einfaches, geflicktes Kleid, das Gesicht von der Sonne gebräunt. Auch an ihr war der Krieg nicht spurlos vorbeigegangen. Als Pfarrfräulein hatte sie jahrelang die Nachrichtenkarten der Gefallenen überbringen, weinende Mütter trösten und die Gemeinde durch die mageren Jahre der Rationierung steuern müssen. Oft hatte sie in ihren Briefen Claires Rat gesucht, wie man mit den schweren seelischen Verletzungen der traumatisierten Heimkehrer umging. Aus der Lehrerin von einst war eine Suchende geworden. Claire ließ den Koffer in den Staub fallen. Die beiden Frauen liefen aufeinander zu und fielen sich stumm um den Hals. Sie sagten kein Wort. Keine von beiden weinte laut, doch ihre Körper zitterten im Gleichklang einer tiefen, reifen Verbundenheit, die den Schrecken der Epoche standgehalten hatte. Als sie sich schließlich voneinander lösten, hielt Paula Claires Gesicht in ihren Händen. Sie betrachtete die feinen Fältchen um Claires Augen, den festen Zug um ihren Mund und lächelte mit tränennassen Augen. Du bist zurückgekommen, flüsterte Paula. Und du hast dich nicht verloren. Ich bin nicht mehr dieselbe, Paula, sagte Claire leise. Der Krieg hat vieles verbrannt. Der Krieg hat nur die Maske verbrannt, die man dir aufgezwungen hat, erwiderte Paula mit fester Stimme, nahm Claires Hand und hob ihren Koffer auf. Komm herein. Die Küche des Krankenhauses im Nachbarort wartet auf uns. Sie haben dort ein Provisorium eingerichtet, und sie suchen händringend nach Kräften, die Blut sehen können und keine Angst vor dem Sterben haben. Wir fangen ganz von vorne an. Gemeinsam. In dieser Nacht saßen die beiden Frauen bis weit nach Mitternacht in der Stube des Pfarrhauses. Es gab keine Hierarchie mehr zwischen ihnen, keine Retterin und kein Opfer. Sie saßen dort als zwei gleichberechtigte Frauen, die gelernt hatten, ihren eigenen Schatten zu integrieren und Grenzen zu setzen. Sie schmiedeten Pläne für das kleine Provinzkrankenhaus, teilten ihre Erfahrungen und besiegelten eine Freundschaft auf absoluter Augenhöhe, die bereit war, das neue Leben aus den Trümmern aufzubauen.";
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
