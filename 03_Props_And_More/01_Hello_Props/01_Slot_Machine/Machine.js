function randomSym() {
	const symbol = [ "🍉", "🍎", "🍇" ];
	return symbol[Math.floor(Math.random() * symbol.length)];
}

class Machine extends React.Component {
	render() {
		let sym1 = randomSym();
		let sym2 = randomSym();
		let sym3 = randomSym();
		let win;
		if (sym1 === sym2 && sym1 === sym3) {
			win = <h1>Congrats you win!!!</h1>;
		} else {
			win = <h1>You Lose!!!</h1>;
		}
		return (
			<div>
				<h1>
					{sym1}
					{sym2}
					{sym3}
				</h1>
				{win}
			</div>
		);
	}
}
