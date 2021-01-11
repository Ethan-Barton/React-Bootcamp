class App extends React.Component {
	render() {
		return (
			<div>
				<Hello to="Ringo" from="Paul" bangs={4} num={3} data={[ 1, 2, 3, 4, 5 ]} isFunny />
				<Hello to="Cher" from="Sonny" bangs={10} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
