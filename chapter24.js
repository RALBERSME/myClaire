let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Nur wenige Wochen nach Claires Heimgang legte sich eine tiefe, winterliche Stille über das kleine Fachwerkhaus am Waldrand. Der Dezemberwind trieb weiße Schneeflocken gegen die Scheiben der Stube, in der das Feuer im Kachelofen längst erloschen war. Paula lag in ihrem Bett, die Hände friedlich auf der Brust gefaltet. Ihr Herz, das so viele Jahrzehnte lang für die Menschen im Tal geschlagen hatte, war müde geworden. Nach einem langen, tiefen Schlaf schloss sie im dämmrigen Morgenlicht für immer die Augen. Ihr irdischer Atem verwebte sich mit der Stille des Raumes, und ihre Seele trat die letzte, große Reise an. Als Paula die Augen im Jenseits wieder öffnete, war der Schmerz der rheumageplagten Glieder vollkommen von ihr abgefallen. Sie stand auf einem Pfad aus purem, flüssigem Licht, das in allen Farben des Regenbogens schimmerte. Vor ihr erhob sich die prachtvolle, goldene Himmelspforte, die in einen unendlichen Raum voller Wärme, Musik und ungezähmter Lebensfreude führte. Und dort, direkt am Torbogen, standen sie bereits. Claire und ihre Mutter warteten nebeneinander, die Arme weit geöffnet, die Gesichter von einem überirdischen Strahlen erhellt. Als Claire Paula erblickte, stieß sie einen hellen, jubelnden Ruf aus. Sie lief ihr entgegen, mit den leichten, schwebenden Schritten der jungen Frau, die einst barfuß durch die Ostseebrandung getanzt war, völlig frei von der Last des Alters oder der geopferten Kindheit. Die drei Frauen fielen sich um den Hals. Es war ein triumphales, von himmlischen Chören begleitetes Wiedersehen. Sie hielten sich fest, lachten, weinten Tränen aus reinem Licht und drehten sich im Kreis, während um sie herum ein unbeschreibliches Fest der Freude ausbrach. Alle Hürden des irdischen Lebens, der bittere Schmerz des Jahres 1914, die Grausamkeit des Bombenkrieges und die Entbehrungen der Nachkriegszeit waren in diesem einzigen Moment für immer weggewischt. Wir haben es geschafft, Paula!, rief Claire gegen den jubelnden Klang der Ewigkeit an, und ihre Augen leuchteten in vollkommener Fülle. Wir haben alle Hürden gemeistert. Wir sind frei! Hand in Hand, fest miteinander verbunden, schritten die drei Frauen tiefer in das unendliche, goldene Licht des Himmels hinein. Es gab keine Despoten mehr, keine unerfüllten Träume, keine trennenden Grenzen und keine Pflichten – nur noch die ewige, unzerstörbare Freiheit ihrer unsterblichen Seelen, die sie nun für immer gemeinsam in vollen Zügen feierten.";
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
