import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';
import MockAjax from './Helpers/MockAjax'

const fakeFeed = [];

describe("App", () => {
	it("renders App and calls fetchFeed on component mount", () => {
		const fetchFeed = MockAjax({
			results: fakeFeed
		});
		const div = document.createElement('div');
		const component = mount(<App fetchFeed={fetchFeed} />, div);
	});

	it("set isLoading to false after fetch data", async () => {
		const fetchFeed = MockAjax({
			results: fakeFeed
		});
		const div = document.createElement('div');
		const component = await mount(<App fetchFeed={fetchFeed} />, div);
		expect(component.state("isLoading")).toEqual(false);
	});

	it("set component feed to returned data", async () => {
		const fetchFeed = MockAjax({
			results: fakeFeed
		});
		const div = document.createElement('div');
		const component = await mount(<App fetchFeed={fetchFeed} />, div);
		expect(component.state("feed")).toEqual(fakeFeed);
	});

	//Todo
	it("Should display a NO INTERNET message when offline", async () => {});

	it("Should display a NO NEWS FOUND message when no message is found", async () => {});

	it("Should display a SERVER PROBLEMS message when the server return an ERROR Status Code", async () => {});

});