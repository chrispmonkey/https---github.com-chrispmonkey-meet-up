// Meetup App
// Switch only works with npm install react-router-dom@5
import { Route, Switch } from "react-router-dom"; // Job is to define different paths and which path should be loaded for components

// import all of the various pages
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  // localhost:3000/favorites
  // my-page.com/
  return (
    <div>
      <Switch>
        {/* Defualt path should end with / */}
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>

        {/* Rendered if the url matches this path */}
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>

        {/* Rendered if the url matches this path */}
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
