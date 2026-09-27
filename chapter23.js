let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das matte, langsame Piepen des Herzmonitors im Intensivzimmer flachte immer weiter ab, bis es schließlich in einen einzigen, langgezogenen Ton überging. Die Nulllinie zog sich unbarmherzig über den grünen Bildschirm. Doch in genau diesem Moment wurde Paula, die mit verweinten Augen am Bett saß, zur Augenzeugin eines Wunders, das jede theologische Vorstellungskraft überstieg und die Grenzen der irdischen Welt wie Pergament zerriss. Die Luft im sterilen Krankenzimmer begann plötzlich zu flirren, und eine Welle aus überirdischem, goldenem Licht vertrieb die Schatten der Novembernacht. Paula hob unwillkürlich die Hand, um ihre Augen vor dem Glanz zu schützen. Doch als sie durch ihre Finger blickte, stockte ihr der Atem. Sie sah es mit ihren eigenen, hellwachen Augen: Direkt am Bett materialisierte sich die strahlende Gestalt einer jungen Frau. Es war Claires Mutter. Sie hielt Claire fest in ihren Armen, drückte sie mit unendlicher Zärtlichkeit an sich und wiegte sie sanft, während sie ihr Gesicht liebkoste. Paula blickte auf Claires irdischen Körper hinab. Das von Schmerz und Alter gezeichnete Gesicht ihrer besten Freundin entspannte sich im selben Augenblick vollkommen. Ein Ausdruck von absolutem, überirdischem Glück und tiefer, unendlicher Erlösung legte sich auf Claires Züge, als sie ihren letzten Atemzug tat. Es gab kein Aufbäumen mehr, keinen Kampf. Es war eine reine, vollkommene Heimkehr. Paula spürte in dieser heiligen Sekunde nicht den leisesten Funken von Trauer oder Verzweiflung. Eine tiefe, ehrfürchtige Ruhe ergriff ihr eigenes Herz. Sie erkannte, dass der Tod hier kein Ende war, sondern der triumphale Sieg einer geheilten Seele. Sie hob langsam ihre rheumatische, zitternde Hand und winkte den beiden Gestalten mit einem wehmütigen, aber unendlich glücklichen Lächeln zu. Geh nur, meine geliebte Claire, flüsterte Paula, und heiße Tränen des reinsten Glücks liefen ihr über die Wangen. Geh nach Hause. Du hast es dir verdient. Die Seelen von Claire und ihrer Mutter erhoben sich langsam aus dem irdischen Körper auf dem Bett. Claire wirkte plötzlich nicht mehr wie eine fünfundsiebzigjährige Frau; sie strahlte in der zeitlosen, unversehrten Schönheit ihres wahren Selbst. Hand in Hand, eng aneinandergeschmiegt, schwebten die beiden Frauen dem großen, hellen Licht entgegen, das sich am Fenster des Zimmers geöffnet hatte. Sie glitten lautlos hinaus in den nächtlichen Himmel, hinein in die ewige Freiheit, während das Tosen des fernen Meeres und der Duft von reifem Sommerkorn noch für Minuten als unsichtbares Echo im sterilen Raum zurückblieben.";
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
