import React from "react";
import { render } from "react-dom";

import { Button } from "./components/Button";
import { Header } from "./components/Header"

class Wrapper extends React.Component{
	render(){
		return(
			<div className="rt-wrapper">
				<Header/>
				<Button/>
			</div>
		);
	}
}

render(<Wrapper/>, window.document.getElementById("app"));