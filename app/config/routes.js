import React from 'react';
import Main from '../components/Main';
import Color from '../components/Color';
import Typography from '../components/Typography';
import Buttons from '../components/Buttons';
import LinkButtons from '../components/LinkButtons';
import Badges from '../components/Badges';
import Form from '../components/Form';
import Dialog from '../components/Dialogs';
import Messages from '../components/Messages';
import Cards from '../components/Cards';
import Avatars from '../components/Avatars';
import Router from 'react-router';
//<Route name="profile" path="buttons" handler={Buttons} />
//import {Router, DefaultRoute, Route} from 'react-router';
let {DefaultRoute, Route, Routes} = Router;

export default (
	<Route name="app" path="/" handler={Main} >
		<DefaultRoute name="color" handler={Color} />
		<Route name="typography" path="typography" handler={Typography} />
		<Route name="buttons" path="buttons" handler={Buttons} />
		<Route name="linkbutons" path="linkbutons" handler={LinkButtons} />
		<Route name="badges" path="badges" handler={Badges} />
		<Route name="form" path="form" handler={Form} />
		<Route name="dialog" path="dialog" handler={Dialog} />
		<Route name="messages" path="messages" handler={Messages} />
		<Route name="cards" path="cards" handler={Cards} />
		<Route name="avatars" path="avatars" handler={Avatars} />
	</Route>
);
