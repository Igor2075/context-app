import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

class App extends Component {
	render() {
		return (
			<LanguageProvider>
				<ThemeProvider>
					<PageContent>
						<Navbar />
						<Form />
					</PageContent>
				</ThemeProvider>
			</LanguageProvider>
		);
	}
}

export default App;
