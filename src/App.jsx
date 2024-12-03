import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import fantasyBooks from "./data/fantasy.json";
import { Component } from "react";

class App extends Component {
  state = {
    selectedBookAsin: null
  };

  handleBookSelect = (asin) => {
    this.setState((prevState) => ({
      selectedBookAsin: prevState.selectedBookAsin === asin ? null : asin
    }));
  };

  render() {
    return (
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <div className="flex-grow-1">
          <MyNav />
          <Welcome />
          <BookList books={fantasyBooks} selectedBookAsin={this.state.selectedBookAsin} onBookSelect={this.handleBookSelect} />
        </div>
        <MyFooter />
      </div>
    );
  }
}

export default App;
