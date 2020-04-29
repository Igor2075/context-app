import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { InputLabel } from "@material-ui/core";
import { LanguageContext } from "./context/LanguageContext";

const dict = {
	english: {
		email: "Email",
		password: "Password",
		singnin: "Sign In",
		remember: "Remember Me",
	},
	dutch: {
		email: "Email Addres",
		password: "Wachtwoord",
		singnin: "Log in",
		remember: "Onthoudt Me",
	},
	spanish: {
		email: "correo electronico",
		password: "Contraseña",
		singnin: "Entra",
		remember: "Recordame",
	},
};

class Form extends Component {
	static contextType = LanguageContext;
	render() {
		const { classes } = this.props;
		const { language, changeLanguage } = this.context;
		return (
			<div className={classes.main}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlined />
					</Avatar>
					<Typography variant="h5">{dict[language].singnin}</Typography>
					<Select value={language} onChange={changeLanguage}>
						<MenuItem value="english">English</MenuItem>
						<MenuItem value="dutch">Dutch</MenuItem>
						<MenuItem value="spanish">Spanish</MenuItem>
					</Select>
					<form className={classes.form}>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="email">{dict[language].email}</InputLabel>
							<Input id="email" name="email" autoFocus></Input>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password">
								{dict[language].password}
							</InputLabel>
							<Input id="password" name="password" type="password"></Input>
						</FormControl>
						<FormControlLabel
							control={<Checkbox color="primary" />}
							label={dict[language].remember}
						/>
						<Button
							variant="contained"
							type="submit"
							fullWidth
							color="primary"
							className={classes.submit}>
							{dict[language].singnin}
						</Button>
					</form>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(Form);
