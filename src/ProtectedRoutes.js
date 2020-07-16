import React from 'react';
import ReportsView from './Deck'

const protectedRoutes = [
	{
		name: 'Deck',
		exact: true,
		path: '/DeckPage',
		main: props => <ReportsView {...props} />,
		public: false,
	},
];

export default protectedRoutes;