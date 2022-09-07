import {Route, Switch} from "react-router-dom";
import ShortLink from "./containers/ShortLink/ShortLink";

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={ShortLink}/>
            <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
    );
}

export default App;
