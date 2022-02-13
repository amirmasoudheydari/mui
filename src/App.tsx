import Header from "./components/Header";
import TextField, { TextFieldVariants } from "./components/TextField";

function App() {
  // let title: string = "social manager";

  // type UserType = {
  //   name: string;
  //   email: string;
  //   age: number;
  // };

  // type DictionaryType = {
  //   title: string;
  //   body: string;
  //   pages: number;
  //   user: UserType;
  // };

  // const dictionary: DictionaryType = {
  //   title: "social manager",
  //   body: "social manager social manager social manager social manager social manager ",
  //   pages: 10,
  //   user: { name: "ali", email: "mhosseintaher@gmail.com" },
  // };

  return (
    <div>
      <Header name="Hossein" />
      <TextField
        label="email"
        placeholder="enter your email"
        value=""
        variant={TextFieldVariants.Md}
      />
    </div>
  );
}

export default App;
