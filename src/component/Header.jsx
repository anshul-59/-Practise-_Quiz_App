import quizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizLogo}></img>
      <h1>QUIZZ</h1>
    </header>
  );
}
