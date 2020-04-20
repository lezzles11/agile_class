import React, { Component } from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import courses from './reducers'
import Filter from './Filter'

const store = createStore(courses)

export default class ReduxFilter extends Component {
	render() {
		return (
			<Provider store={store}>
				<Filter/>
			</Provider>
		)
	}
}

