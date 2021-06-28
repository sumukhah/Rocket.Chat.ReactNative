import { combineReducers } from 'redux';
import settings from './settings';
import login from './login';
import meteor from './connect';
import room from './room';
import rooms from './rooms';
import server from './server';
import selectedUsers from './selectedUsers';
import createChannel from './createChannel';
import app from './app';
import sortPreferences from './sortPreferences';
import share from './share';
import crashReport from './crashReport';
import customEmojis from './customEmojis';
import activeUsers from './activeUsers';
import usersActivity from './usersActivity';
import inviteLinks from './inviteLinks';
import createDiscussion from './createDiscussion';
import enterpriseModules from './enterpriseModules';
import encryption from './encryption';
import permissions from './permissions';

import inquiry from '../ee/omnichannel/reducers/inquiry';

export default combineReducers({
	settings,
	login,
	meteor,
	server,
	selectedUsers,
	createChannel,
	app,
	room,
	rooms,
	sortPreferences,
	share,
	crashReport,
	customEmojis,
	activeUsers,
	usersActivity,
	inviteLinks,
	createDiscussion,
	inquiry,
	enterpriseModules,
	encryption,
	permissions
});
