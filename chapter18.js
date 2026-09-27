let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1951 brachte einen strahlenden, milden Frühlingstag, als sich die schweren Flügeltüren der Universitätsaula öffneten. Claire stand in der vordersten Reihe der Absolventen. Sie war nun sechsundvierzig Jahre alt. In ihrem Haar glänzten breite, silberne Strähnen, und die feinen Linien um ihre Augen erzählten die epische Geschichte eines Lebens, das sich durch zwei Kriege, eine geopferte Kindheit und jahrelange, bittere Entbehrungen gekämpft hatte. Doch an diesem Morgen stand sie aufrecht, der Rücken kerzengerade, die Hände ruhig und gefasst. Als ihr Name aufgerufen wurde, trat sie vor das Podium. Aus den hinteren Reihen des vollbesetzten Saales ertönte ein stürmischer, lang anhaltender Applaus. Es waren nicht nur ihre jüngeren Kommilitonen, die in den vergangenen Jahren gelernt hatten, zu der reifen, klugen Frau aufzusehen; es war vor allem eine kleine Gruppe im Zentrum des Raumes. Drei ihrer Geschwister waren angereist, die Augen feucht vor staunendem Stolz, als sie die Schwester, die sie einst nur als schuftende Magd gekannt hatten, im akademischen Licht sahen. Und mittendrin saß Paula. Sie trug ihr bestes kornblumenblaues Festkleid, hielt die Hände wie zum Gebet gefaltet und weinte stumme, glückliche Tränen des Triumphs. Claire hob die rechte Hand und sprach mit tiefer, klarer und ungebeugter Stimme den medizinischen Eid. In jedem einzelnen Wort schwang das Echo der Vergangenheit mit. Sie schwor nicht nur für die Zukunft; sie schwor für die Mutter, die 1914 hilflos verblutet war. Sie schwor für die namenlosen Soldaten, deren Schmerzensschreie sie im Lazarettrauch begleitet hatten. Als sie das offizielle Diplom entgegennahm, fühlte es sich an, als würde eine zentnerschweres, unsichtbares Joch endgültig von ihrer Seele abfallen. Wenig später, im hellen Arztzimmer des örtlichen Krankenhauses ihrer Heimatstadt, stand Claire allein vor dem Spiegel. Auf der hölzernen Lehne des Stuhls lag er bereit: ihr allererster, eigener Arztkittel. Ein makelloses, reines Weiß, über dessen Brusttasche in feiner, dunkelblauer Seide die Worte eingestickt waren: Dr. med. Claire Bachmann. Mit langsamen, fast feierlichen Bewegungen glitt sie mit den Armen in die Ärmel. Sie zog den Kittel über die Schultern, strich den Stoff an den Seiten glatt und schloss die Knöpfe. Als sie den letzten Knopf am Kragen schloss, blickte sie sich selbst in die Augen. In diesem Moment brach ein jahrzehntealter Damm in ihrer Brust. Ein heftiges, befreiendes Schluchzen schüttelte ihren Körper, und heiße, dicke Tränen der Erlösung liefen ihr ungehindert über die Wangen. Es waren keine Tränen der Bitterkeit mehr. Es waren die Tränen des neunjährigen Mädchens, das endlich aus dem dunklen Turm der Pflichten befreit worden war. Sie hatte es geschafft. Sie hatte aus den Trümmern einer gestohlenen Jugend und einer kollabierten Welt ihre ganz eigene, strahlende Realität erschaffen. Dieser Kittel war nicht das aufgezwungene Joch der mütterlichen Schürze aus dem Jahr 1919, es war das selbst gewählte Gewand ihrer Freiheit, ihrer Würde und ihrer tiefen Berufung. Die Tür öffnete sich leise, und Paula trat herein. Sie hielt in den Händen zwei einfache Gläser und eine Flasche Apfelwein, doch als sie Claire im weißen Kittel sah, hielt sie mitten in der Bewegung inne. Ein tiefes, unendliches Verstehen spiegelte sich in den Blicken der beiden Frauen. Paula stellte die Gläser ab, ging auf Claire zu und nahm sie schweigend, aber mit fester, unerschütterlicher Kraft in die Arme. Da bist du ja endlich, Claire, flüsterte Paula an ihrer Schulter, während sie die weinende Freundin hielt. Die Heilerin des Tals hat ihren Dienst angetreten. Claire drückte Paula fest an sich und spürte, wie die chronische, lähmende Leere, die sie seit ihrer Kindheit wie ein Schatten begleitet hatte, in diesem Moment einer warmen, pulsierenden und unendlichen Fülle wich. Sie stand am Beginn ihres eigentlichen Lebens – an der Seite der Frau, die ihre Seele gerettet hatte.";
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
