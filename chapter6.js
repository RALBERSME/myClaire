let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1938 brachte einen unbarmherzig heißen Sommer über das Tal, doch für Claire floss jeder Tag zäh und unterschiedslos in den nächsten. Sie war nun dreiunddreißig Jahre alt. Ihre Hoffnungen auf ein anderes Leben waren zu einer fernen, fast schmerzhaften Erinnerung verblasst. Doch inmitten dieser drückenden Routine des Hoflebens begegnete sie Heinrich, dem Sohn des Nachbarbauern. Er war ein stiller Mann mit melancholischen, tiefen Augen, in denen Claire sofort ein Spiegelbild ihrer eigenen, tiefen Einsamkeit erkannte. Heinrich trug eine schwere Last mit sich herum: Bei Holzfällarbeiten im vergangenen Winter war seine rechte Schulter von einem stürzenden Stamm zertrümmert worden. Seither war er für die schwere Feldarbeit kaum noch zu gebrauchen und musste für langwierige Behandlungen oft ins städtische Krankenhaus. Dieser beschädigte, vom Schicksal getroffene Körper weckte in Claire sofort den schlummernden Pflegeinstinkt, den sie über Jahrzehnte hinweg bei ihren Geschwistern professionalisiert hatte. In den kurzen, gestohlenen Momenten am Brunnenrand, wenn Heinrich seine Pferde tränkte, keimte in ihr das erste Mal seit ihrer Kindheit das Gefühl von persönlichem Glück und weiblicher Begehrtlichkeit auf. Sie sprachen wenig, doch das gemeinsame Schweigen hüllte sie ein wie ein schützender Mantel. Heinrich sah in ihr nicht nur die tüchtige Magd des Vaters, sondern eine Frau, die Trost spenden konnte. Als Heinrich um ihre Hand anhielt, gab Claires Vater bereitwillig seinen Segen. Er wurde von der Gicht geplagt und war sichtlich froh, seine treue Tochter in guten, wenn auch körperlich beeinträchtigten Händen zu wissen, zumal Heinrichs Hof nahe lag. Claire klammerte sich an diese Verlobung wie an einen Rettungsanker. Für sie war die Ehe mit Heinrich kein Liebesmärchen, sondern die vermeintlich einzige Chance, dem Gefängnis des väterlichen Hauses zu entkommen und endlich ein eigenes Reich zu führen. Sie sehnte sich so sehr nach Veränderung, dass sie in ihrer Verzweiflung die dunklen Wolken übersah, die über Heinrichs Heimathof hingen. Sie ahnte nicht, dass sie im Begriff war, das eine Joch lediglich gegen ein anderes, noch viel brutaleres einzutauschen.";
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
