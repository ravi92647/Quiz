import ReactLogo from "./React_logo1.png"; // Import the image
import QuizLogo from "./Quiz_logo.jpeg"; // Import the image
function Header() {
  return (
    <header className="app-header">
      {/* <img src={ReactLogo} alt="Reactlogo" /> */}
      <img src={QuizLogo} alt="Reactlogo" />
      <h1>Let's Explore!</h1>
    </header>
  );
}

export default Header;
