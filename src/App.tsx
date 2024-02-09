import Button from "./components/Button";
import Header from "./components/Header";
import Image from "./components/Image";
import Student from "./components/Student";
function App() {
  return (
    <div>
      <Button textButton = {"BUTTON"}/>

      <Header textHeader = {"HEADER H1"}/>

      <Image srcImage = {"https://media.istockphoto.com/id/1267021092/photo/funny-winking-kitten.jpg?s=612x612&w=0&k=20&c=9PoFYkqKZ30F_ubxX90_azwsR22ENwrFnOjxV0RaoTo="} altImage= {"IMAGE"}/>
      
      <Student firstName="Jack" lastName="Sparrow" grades={[6,6,6,6,6,6,6,6]}/>
      <Student firstName="Hermione" lastName="Granger" grades={[1,1,1,1,1,1,1,1]}/>
      <Student firstName="Alesha" lastName="Popovich" grades={[1,2,1,2,2,1,2,1]}/>
      <Student firstName="Olaf" lastName="Snow" grades={[3,2,5,2,3,3,5,3]}/>
    </div>
  );
}

export default App;
