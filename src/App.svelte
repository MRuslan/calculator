<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.calc {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		width: 400px;
		/*height: 600px;*/
		border: 1px solid #2d2d2f;
		border-radius: 14px;
		background-color: #2d2d2f;
		box-shadow: 0 0 40px 14px #00000080;
		color: #fff;
	}
	.display {
		display: flex;
		flex-direction: column;
		border-top: 2px solid #717172;
		border-left: 2px solid #717172;
		border-right: 2px solid #717172;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
	}
	.top {
		display: flex;
		flex-direction: row;
	}
		.top_bt {
			width: 20px;
			height: 20px;
			border-radius: 100%;
			margin-left: 10px;
			margin-top: 10px;
		}
			.bt_1 {
				background-color: #ff5a52;
			}
			.bt_2 {
				background-color: #e6c029;
			}
			.bt_3 {
				background-color: #52c22a;
			}
	.bot {
		display: flex;
		flex-direction: column;
		align-items: end;
		justify-content: center;
		color: #fff;
		font-size: 70px;
		line-height: 70px;
		margin: 14px;
		word-wrap: wrap;
	}

	.keys {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		border-bottom: 2px solid #717172;
		border-left: 2px solid #717172;
		border-right: 2px solid #717172;
		border-bottom-left-radius: 12px;
		border-bottom-right-radius: 12px;
		box-sizing: border-box;
	}

</style>

<script>
	export let name;

	import Button from './Button.svelte';
	import { calculate } from './calculate';
	$: input = [];
	$: result = Number.isInteger(calculate(input)) ? calculate(input) : calculate(input).toFixed(5);
	function action(value) {
		const lastIndex = input.length - 1;
		const lastInputValue = input[lastIndex];
		const isLastInputNumber = !isNaN(input[lastIndex]);
		const isValueNumber = !isNaN(value);
		if (value === 'CE') {
	  		input = [];
		  	finalResult = 0;
		} else if (value === 'AC') {
		  	input = [...input.slice(0, -2)];
		} else if (value === '%') {

		  	input = [...input, value];
		} else if (value === '±') {
		  	let updatedLastInputValue;
		  	if (!isNaN(lastInputValue)) {
		    	updatedLastInputValue = `-${lastInputValue}`;
		  	} else {
		   	 	updatedLastInputValue = '−';
		  	}
		 	 	input = [...input.slice(0, -1), updatedLastInputValue];
		} else if (value === '.') {
		  	if (isLastInputNumber) {
		   		let updatedLastInputValue = `${lastInputValue}.`;
		   		input = [...input.slice(0, -1), updatedLastInputValue];
		  	}
		} else if (value === '=') {
		  	input = [`${result}`];
		} else if (isValueNumber && isLastInputNumber) {
		  	input = [...input.slice(0, -1), `${lastInputValue}${value}`];
		} else if (!isValueNumber && !isLastInputNumber) {
		  	input = [...input.slice(0, -1), value];
		} else {
		  	input = [...input, value];
		}
	}

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<div class="calc">
	<div class="display">
		<div class="top">
			<div class="top_bt bt_1"></div>
			<div class="top_bt bt_2"></div>
			<div class="top_bt bt_3"></div>
		</div>
		<div class="bot result">
			{#if result == 0}
				{result}
			{:else}
				{input.join(' ')}
			{/if}

		</div>
	</div>
	<div class="keys">
		<Button value={'AC'} {action} />
	    <Button value={'±'} {action} />
	    <Button value={'%'} {action} />
	    <Button value={'÷'} {action} />

	    <Button value={7} {action} />
	    <Button value={8} {action} />
	    <Button value={9} {action} />
	    <Button value={'×'} {action} />

	    <Button value={4} {action} />
	    <Button value={5} {action} />
	    <Button value={6} {action} />
	    <Button value={'−'} {action} />

	    <Button value={1} {action} />
	    <Button value={2} {action} />
	    <Button value={3} {action} />
	    <Button value={'+'} {action} />

	    <Button value={0} {action} />
	    <Button value={'.'} {action} />
	    <Button value={'='} {action} />
	</div>
</div>