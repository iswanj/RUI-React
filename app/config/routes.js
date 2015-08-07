import React from 'react';
import Main from '../components/Main';
import Color from '../components/Color';
import Typography from '../components/Typography';
import Buttons from '../components/Buttons';
import LinkButtons from '../components/LinkButtons';
//<Route name="profile" path="buttons" handler={Buttons} />

import {Router, DefaultRoute, Route} from 'react-router';

export default (
	<Route location="history" name="app" path="/" handler={Main} >
		<DefaultRoute handler={Color} />
		<Route name="typography" path="typography" handler={Typography} />
		<Route name="buttons" path="buttons" handler={Buttons} />
		<Route name="linkbutons" path="linkbutons" handler={LinkButtons} />
	</Route>
);
