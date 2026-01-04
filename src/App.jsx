import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
function App() {
  return(
    <>
      <Card></Card>
      <Card></Card>
      <Button></Button>
      <Student name="A" age={30} isStudent={false} />
      <Student name="B" age={20} isStudent={true} />
      <Student name="C" age={530} isStudent={false} />

    </>
  );
}

export default App
