import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={false} username="IT"></UserGreeting>

    </>
  );
}

export default App
