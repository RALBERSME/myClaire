let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Das Lagerfeuer knackte leise im schwindenden Licht des Abends. Die Dunkelheit hatte sich mittlerweile vollständig über die Berggipfel gelegt, und am klaren Nachthimmel funkelten die ersten, unzählbaren Sterne. Claire hielt ihre warme Teetasse fest umschlossen und blickte versonnen in die Glut. Das Tanzen auf der Lichtung steckte ihr noch in den Knochen, doch es war eine gute, erlösende Müdigkeit, die jede Faser ihres Körpers erfüllte. Paula saß schweigend neben ihr. Ihr Blick ruhte auf Claires Profil, auf den Zügen einer Frau, die endlich aufgehört hatte, nur das Schattenbild ihrer eigenen Pflichten zu sein. Ohne ein Wort zu sagen, griff Paula tief in die Innentasche ihrer Strickjacke. Als sie die Hand wieder herauszog, hielt sie ein dickes, reinweißes Kuvert fest, das im fahlen Schein des Feuers fast zu leuchten schien. Sie legte es Claire sanft auf die Knie. Claire sah von den Flammen herab auf das Kuvert. Sie bewegte die Hand nicht. Ein plötzlicher, unerwarteter Schrecken durchfuhr sie, und ihr Herz setzte für einen Schlag aus. Paula, was ist das? Woher hast du das? Mach es auf, Claire, sagte Paula leise, aber mit einer Bestimmtheit, die keinen Raum für Ausflüchte ließ. Es ist das, worauf du dein ganzes Leben lang gewartet hast, ohne es zu wissen. Mit leicht zitternden Fingern brach Claire das schwere Papiersiegel des Umschlags. Sie zog ein mehrseitiges Dokument heraus, das mit dem offiziellen Briefkopf der neu strukturierten Universitätsleitung und einer kirchlichen Nachkriegsstiftung versehen war. Als sie die großen, gedruckten Buchstaben im Schein des Feuers überflog, stockte ihr der Atem: Antragsformular für ein Sonderstipendium im Fachbereich Humanmedizin für Spätberufene und Kriegserfahrene. Nein, flüsterte Claire augenblicklich. Sie schüttelte heftig den Kopf und wollte das Papier zurück in den Umschlag schieben, als brenne es auf ihrer Haut. Nein, Paula. Das ist unmöglich. Das kann nicht dein Ernst sein. Paula packte Claires Handgelenk, fest und warm. Warum nicht, Claire? Sag mir ein einziges vernünftiges Argument, warum es unmöglich sein soll. Ich bin über vierzig Jahre alt!, stieß Claire hervor, und ihre Stimme überschlug sich fast in der nächtlichen Stille. Die aufgestaute Angst vor dem eigenen Versagen, die sie jahrelang mühsam unterdrückt hatte, brach sich nun Bahn. Schau mich doch an! Ich bin einundvierzig! Wenn ich dieses Studium beende, gehe ich stramm auf die fünfzig zu. Die anderen Studenten in den Hörsälen werden jung sein, sie kommen frisch von den Schulen, ihr Verstand ist unberührt von dem, was wir gesehen haben. Ich bin zu alt, Paula. Meine Zeit für so etwas ist längst abgelaufen. Paula wich keinen Zentimeter zurück. Sie blickte Claire direkt in die Augen, und in ihren Pupillen spiegelten sich die tanzenden Flammen des Feuers. Zu alt? Für wen? Für die bürokratischen Tabellen von früher? Claire, dieses Land liegt in Trümmern. Millionen Menschen sind tot, die Krankenhäuser sind überfüllt, und die Hälfte der alten Ärzte ist entweder im Krieg geblieben oder wegen ihrer Verstrickungen suspendiert worden. Wir brauchen jetzt jeden Menschen, der weiß, wie man eine Wunde schließt, ohne in Ohnmacht zu fallen. Wir brauchen gute, erfahrene Köpfe. Aber der theoretische Stoff, versuchte Claire einzuwenden, doch die Tränen der Überforderung traten ihr bereits in die Augen. Das ist etwas anderes als ein Lazarett, Paula. Das sind Jahre voller Prüfungen, voller lateinischer Texte, voller Physiologie. Du hast im Lazarett an der Seite von Reinhardt operiert!, unterbrach Paula sie energisch, ihre Stimme zitterte vor leidenschaftlicher Überzeugung. Er selbst hat mir geschrieben, Claire! Er hat gesagt, dass deine Handgriffe präziser sind als die seiner Assistenzärzte und dass dein Verstand messerscharf arbeitet. Glaubst du ernsthaft, du scheiterst an ein paar Lehrbüchern? Du hast als neunjähriges Mädchen eine ganze Familie durchgebracht und dich danach im Krieg behauptet. Willst du mir jetzt wirklich erzählen, dass du Angst vor ein paar Professoren hast? Claire schwieg. Sie starrte auf das weiße Papier in ihrem Schoß. Die Worte ihrer Freundin trafen sie an einer Stelle, die sie tief in sich verschlossen geglaubt hatte. Es war der Schwur, den sie einst am Bett ihrer sterbenden Mutter geleistet hatte, der Schwur, das Leben zu verstehen und zu schützen, damit keine Frau mehr so hilflos bluten musste. Ich habe einfach so große Angst, mich lächerlich zu machen, Paula, flüsterte sie schließlich, und die Tränen liefen ihr ungehindert über die Wangen. Ich habe mein ganzes Leben geopfert. Wenn ich das jetzt versuche und scheitere… dann bleibt mir gar nichts mehr. Paula rückte ganz dicht an sie heran. Sie legte den Arm um Claires Schultern, zog sie fest an sich und drückte ihr einen Kuss auf das graumelierte Haar. Du wirst nicht scheitern, Claire. Weil ich bei dir bin. Und weil dieses Talent in dir brennt, seit du ein Kind warst. Du hast lang genug im Schatten gestanden. Nimm diesen Stift und unterschreib. Für deine Mutter, für die Soldaten da draußen, aber vor allem für dich selbst. In der Stille der Nacht nahm Claire den kleinen Bleistift, den Paula ihr reichte. Das Feuer war fast heruntergebrannt, doch als sie ihren Namen unter das Formular setzte, spürte sie eine tiefe, unerschütterliche Wärme, die durch ihre Adern schoss. Der Pakt war geschlossen. Es gab kein Zurück mehr.";
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
