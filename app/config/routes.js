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
import { Router, IndexRoute, Route, Link } from 'react-router';

export default (
	<Route path="/" component={Main} >
		<IndexRoute component={Color} />
		<Route path="/typography" component={Typography} />
		<Route path="/buttons" component={Buttons} />
		<Route path="/linkbutons" component={LinkButtons} />
		<Route path="/badges" component={Badges} />
		<Route path="/form" component={Form} />
		<Route path="/dialog" component={Dialog} />
		<Route path="/messages" component={Messages} />
		<Route path="/cards" component={Cards} />
		<Route path="/avatars" component={Avatars} />
	</Route>
);
