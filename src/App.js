import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Helmet} from "react-helmet";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Data from "./Components/Data";
import Django from "./Components/Django";
import Git from "./Components/Git";
import Html from "./Components/Html";
import Javascript from "./Components/Javascript";
import Library from "./Components/Library";
import Node from "./Components/Node";
import Py from "./Components/Py";
import Rest from "./Components/Rest";

function App() {
	return (

		
		<React.Fragment>
			<Helmet>
                <meta charSet="utf-8" />
                <title>Lagos school of Programming | Course-Grid </title>
                <link rel="canonical" href="http://lasop.net" />
                <meta name="description" content="Lasop application" />
        </Helmet>
			<Router>
			<Navbar/>
				<Routes>
				<Route path="/" element={ <Html/> } />
                <Route path="/data" element={ <Data/> } />
                <Route path="/git" element={ <Git/> } />
                <Route path="/django" element={ <Django/> } />
                <Route path="/javascript" element={ <Javascript/> } />
                <Route path="/library" element={ <Library/> } />
                <Route path="/node" element={ <Node/> } />
                <Route path="/py" element={ <Py/> } />
                <Route path="/rest" element={ <Rest/> } />
				</Routes>
				<Footer/>
			</Router>
		</React.Fragment>
	);
}

export default App;
