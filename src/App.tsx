import SearchBar from "./components/SearchBar/SearchBar";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Container maxWidth="sm">
        <SearchBar />
      </Container>
    </div>
  );
}

export default App;
