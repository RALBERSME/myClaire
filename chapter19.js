let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Die Jahre zwischen 1955 und 1965 flossen wie ein tiefer, ruhiger Strom durch das Tal. Claire hatte die alte Landarztpraxis am Rande des Dorfes übernommen. Das alte Schindeldach war frisch gedeckt, und an der weißen Fassade prangte nun ein schlichtes, sauberes Messingschild, das in der Morgensonne glänzte. Claire war nun eine Frau in den Fünfzigern; ihr Wesen strahlte eine tiefe, unerschütterliche Autorität aus, gepaart mit einer Sanftheit, die die Menschen im Tal noch nie bei einem Mediziner erlebt hatten. Sie war keine gewöhnliche Landärztin. Wenn die Bauern zu ihr in die Sprechstunde kamen, Männer mit vom Wetter gegerbten Gesichtern und Frauen, deren Hände von der Feldarbeit gezeichnet waren, untersuchte Claire nicht nur die körperlichen Symptome. Dank ihrer eigenen, schmerzhaften Biografie besaß sie das untrügliche Gespür, die ungesagten seelischen Nöte hinter dem Husten oder dem chronischen Rückenschmerz zu hören. Sie wusste exakt, wie schwer die Last der familiären Pflicht wiegen konnte. Sie verurteilte niemanden, sie drängte nicht, sondern sie hörte zu. Sie war eine „verwundete Heilerin“ geworden; ihr eigener, durchlittener Schmerz war zur Brücke in die Herzen ihrer Patienten geworden. Paula stand ihr in all diesen Jahren unermüdlich zur Seite. Als Pfarrfräulein war sie das soziale Gewissen der Gemeinde. Sie wusste genau, in welcher Familie der Vater trank, wo das Geld für die Winterschuhe der Kinder fehlte oder wo eine junge Mutter am Rande der Erschöpfung stand. Claire, du musst heute Abend noch rauf auf den Berghof zu den Webers, sagte Paula an einem stürmischen Herbstnachmittag, während sie im Vorraum der Praxis fleißig die Patientenakten ordnete. Sie trat in das Behandlungszimmer und reichte Claire eine Tasse heißen Lindenblütentee. Die junge Anna hat ihr drittes Kind bekommen. Körperlich ist alles gut, aber der alte Weber sitzt in der Stube und schimpft, weil sie nicht schnell genug wieder auf dem Feld steht. Die Kleine erinnert mich so sehr an dich damals. Sie braucht dich. Claire nahm die Tasse, und ein tiefes, wissendes Leuchten trat in ihre Augen. Ich fahre sofort los, Paula. Mein Auto steht bereit. Pack mir bitte ein paar von deinen stärkenden Kräutern ein. Und… leg eines der Märchenhefte dazu. Schon erledigt, antwortete Paula mit einem warmen, verschmitzten Lächeln. Sie trat an Claire heran und strich ihr beruhigend über die Schulter. Und vergiss nicht, danach die Praxis abzuschließen. Du hast diese Woche schon wieder viel zu viel gearbeitet. Ich habe in unserer Küche den Eintopf auf dem Herd. Du musst auch an dich selbst denken. Ich verspreche es, sagte Claire leise. Die Praxisräume selbst erzählten die Geschichte von Claires wiedererwachtem Leben. Die Wände des Wartezimmers waren nicht kahl und steril; sie waren behängt mit farbenfrohen, lebendigen Ölgemälden, die Claire in ihrer knappen Freizeit gemalt hatte. Wilde, aufpeitschende Wellen der Ostsee, stürmische Gischt und weite, grenzenlose Horizonte erstrahlten dort in leuchtenden Blau- und Orangetönen. Wenn die kranken Kinder des Dorfes auf den Holzbänken warteten, vergaßen sie ihre Angst vor der Spritze, weil Claire herauskam, sich zu ihnen setzte und ihnen dieselben Märchen von gefangenen Prinzessinnen erzählte, die nun endlich glücklich und frei durch die Wälder streiften. Wenn Claire nachts mit ihrer schweren Arzttasche im dichten Nebel zu den entlegenen Höfen aufbrach, spürte sie keine Bitterkeit mehr über ihre geopferte Jugend. Das Gefühl, ausgenutzt worden zu sein, war vollständig einer tiefen, fast religiösen Erfüllung gewichen. Ihr Leben war rund geworden, eingebettet in die Arbeit, die sie liebte, und getragen von einer unverbrüchlichen Frauenfreundschaft mit Paula, die allen Stürmen der Zeit und der Epoche getrotzt hatte. Sie hatte ihre Bestimmung gefunden.";
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
