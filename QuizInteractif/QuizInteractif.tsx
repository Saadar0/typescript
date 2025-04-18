import { useState } from 'react';

interface e {
  texte: string;
  Reponse: string;
}

let tab: e[] = [
  { texte: "React est un framework.", Reponse: "Faux" },
  { texte: "useState permet de gérer l'état.", Reponse: "Vrai" },
  { texte: "JSX est une extension CSS.", Reponse: "Faux" },
  { texte: "Le Virtual DOM est plus rapide.", Reponse: "Vrai" }
];

function QuizInteractif() {
  const [index, setIndex] = useState(0);
  const [reponse, setReponse] = useState('');
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const userReponse = (choix: boolean) => {
    if (answered) return;
    const rep = choix ? "Vrai" : "Faux";
    setReponse(rep);
    verifierReponse(rep);
    setAnswered(true);
  };

  const verifierReponse = (reponse: string) => {
    if (reponse === tab[index].Reponse) {
      setMessage("Bonne réponse !");
      setScore(score + 1);
    } else {
      setMessage("Mauvaise réponse !");
    }
  };

  const Suivant = () => {
    setIndex(index + 1);
    setMessage('');
    setReponse('');
    setAnswered(false);
  };

  const Recommencer = () => {
    setIndex(0);
    setReponse('');
    setMessage('');
    setScore(0);
    setAnswered(false);
  };

  if (index === tab.length) {
    return (
      <div className="quiz-container">
        <h2>Quiz terminé !</h2>
        <p>Votre score : {score} / {tab.length}</p>
        <button onClick={Recommencer}>Recommencer</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <p>Question {index + 1} :</p>
      <p>{tab[index].texte}</p>
      <button onClick={() => userReponse(true)} disabled={answered}>Vrai</button>
      <button onClick={() => userReponse(false)} disabled={answered}>Faux</button>
      <p>{message}</p>
      {answered && <button onClick={Suivant}>Question Suivante</button>}
    </div>
  );
}

export default QuizInteractif;
