import React, { Component } from "react";
import { ThemeContext } from "./context/ThemeContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { withLanguageContext } from "./context/LanguageContext";
import styles from "./styles/NavBarStyles";

const stuff = {
	english: {
		flag: "🇺🇸",
		search: "Search...",
	},
	dutch: {
		flag: "🇳🇱",
		search: "Zoek...",
	},
	spanish: {
		flag: "🇦🇷",
		search: "Busca...",
	},
};

class Navbar extends Component {
	static contextType = ThemeContext;

	render() {
		const { classes, LanguageContext } = this.props;
		const { isDarkMode, changeTheme } = this.context;
		return (
			<div className={classes.root}>
				<AppBar position="static" color={isDarkMode ? "default" : "primary"}>
					<Toolbar>
						<IconButton className={classes.menuButton} color="inherit">
							<span>{stuff[LanguageContext.language].flag}</span>
						</IconButton>
						<Typography className={classes.title} variant="h6" color="inherit">
							App Title {LanguageContext.language}
						</Typography>
						<Switch onClick={() => changeTheme()} />
						<div className={classes.grow} />
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder={stuff[LanguageContext.language].search}
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
							/>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withLanguageContext(withStyles(styles)(Navbar));
