let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Jahr 1944 neigte sich dem Ende zu, und der Krieg, der so lange in der Ferne gedröhnt hatte, holte das Lazarett mit voller Wucht ein. Es war eine pechschwarze Novembernacht, als die Sirenen die Stille zerrissen. Das Heulen stieg in anklagenden Wellen über den Dächern auf, gefolgt von dem tiefen, markerschütternden Vibrieren schwerer Fliegerverbände am Himmel. Bruchteile von Sekunden später erbebte die Erde. Ein ohrenbetäubender Knall zerschlug die Fenster des Lazaretts. Die Erschütterung war so gewaltig, dass der Putz von der Decke regnete und das Licht der Petroleumlampen mit einem Schlag erlosch. Claire wurde durch die Druckwelle gegen die Wand des Flurs geschleudert. Um sie herum brach das nackte Chaos aus: Das Klirren von berstendem Glas, das Splittern von Holz und die gellenden, panischen Schreie der bettlägerigen Soldaten, die hilflos im Dunkeln gefangen waren. Staub und der beißende Geruch von Schwefel und verbranntem Gummi füllten die Luft. Claire rappelte sich mühsam auf, der Kopf dröhnte, Schmutz brannte in ihren Augen. Sie tastete sich durch den verrauchten Flur, geleitet von den Rufen der Verwundeten. Unter Lebensgefahr begann sie, herabstürzende Balken beiseite zu schieben und verletzte Männer aus den Trümmern des teilzerstörten Flügels zu zerren. Ihre Hände brannten von den scharfen Splittern, doch sie spürte den physischen Schmerz nicht. Plötzlich drang ein Geräusch durch den dichten Rauch, das Claires Bewegungen wie ein Blitzschlag einfrieren ließ. Es war das hohe, gellende, unbarmherzige Weinen eines jungen, schwer verbrannten Soldaten, der in einer Ecke lag. In Claires Kopf verschob sich in diesem Moment die Realität. Das Weinen des Soldaten verwandelte sich vor ihrem inneren Ohr in die schrillen, fordernden Schreie des Neugeborenen aus dem Sommer 1914. Der Geruch von Brandwunden vermischte sich mit dem metallischen Duft von Blut, der damals in der mütterlichen Schlafkammer gestanden hatte. Das verdrängte Kindheitstraumata des Todes ihrer Mutter brach mit der Wucht einer Lawine über sie herein. Claire stand regungslos mitten im Chaos, die Arme schlaff an den Seiten, die Augen weit aufgerissen und starr in die Dunkelheit gerichtet. Eine akute, lähmende Psychoblockade hielt sie gefangen. Sie war wieder das neunjährige, hilflose Mädchen am hölzernen Bettpfosten, unfähig zu handeln, gefangen im sterbenden Atem der Vergangenheit. Um sie herum stürzte die Welt ein, doch in ihrem Inneren herrschte eine eisige, entsetzliche Starre. Claire! Wach auf! Ich brauche Sie hier! Die raue, feste Stimme von Dr. Robert Reinhardt durchschnitt die Lähmung. Er tauchte wie ein Schatten aus dem Rauch auf, das Gesicht voller Ruß, die Hände blutig. Er packte sie fest an den Schultern und schüttelte sie energisch. Er sah den nackten Terror in ihren Augen und verstand sofort, dass hier keine physische Verletzung, sondern eine tief verwundete Seele mit den Geistern der Vergangenheit rang. Sehen Sie mich an, Claire!, rief er laut gegen das Dröhnen der fernen Detonationen an. Seine Stimme war von einer sanften Strenge, die keinen Widerspruch duldete. Das hier ist nicht das Gestern. Sie sind nicht mehr das kleine Mädchen. Sie sind Schwester Claire! Sie haben das Wissen, Sie haben die Kraft. Dort drüben liegt ein Mann mit einer schweren Thoraxverletzung. Wenn wir jetzt nicht schneiden, erstickt er uns unter den Händen. Kommen Sie zurück zu mir! Reinhardt ließ sie nicht los, bis er sah, dass der starrsinnige, fokussierte Blick der Heilerin in ihre Augen zurückkehrte. Er zog sie regelrecht mit sich in den behelfsmäßig eingerichteten Operationsraum im Keller, wo die Notlampen schwach flackerten. Er drückte ihr das Skalpell in die Hand und zwang sie, ihm bei der komplizierten Notoperation zu assistieren. Mit zitternden Fingern setzte Claire an. Doch als sie den ersten präzisen Schnitt ausführte und das Blut floss, passierte die eigentliche Transformation. Die Lähmung wich einer messerscharfen Konzentration. Sie überwand ihre Angst, funktionierte fehlerfrei an Reinhardt Seite und half, das Leben des Mannes zu retten, während draußen die Welt in Schutt und Asche sank. Erst Stunden später, als der Angriff vorbei war und die ersten Sonnenstrahlen durch den dichten Rauch des zerstörten Lazaretts brachen, saß Claire erschöpft auf einer umgestürzten Kiste im Hof. Ihre Hände waren schwarz von Ruß und Blut, doch in ihrer Brust tobte ein ganz anderer Kampf. Sie weinte stumm, die Tränen bahnten sich saubere Spuren durch den Schmutz auf ihrem Gesicht. Sie begriff in dieser Nacht, dass der Krieg in ihrem Inneren genauso wütete wie an den Fronten. Sie verstand, dass sie die Vergangenheit, den Tod ihrer Mutter, das Opfer ihrer eigenen Kindheit, nicht einfach wegsperren oder vergessen konnte. Sie musste diesen Schmerz ganz annehmen, ihn vollkommen durchleiden und betrauern, um als Frau und als zukünftige Ärztin jemals wirklich ganz zu werden.";
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
