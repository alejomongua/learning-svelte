<script>
	import About from './components/About.svelte'
	import Counter from './components/Counter.svelte';
	import Person from './components/Person.svelte';
	import Text from './components/Text.svelte';
	export let name
	export let lastName
	let style = {
		darkMode: false
	}

	const data = {
		name: 'Alejandro',
		lastName: 'Mongua',
		age: 99,
	}
	let myImage = 'https://alejodeveloper.com/sample-logo.png'

	let toggleDarkMode = () => {
		style.darkMode = !style.darkMode
		window.document.body.classList.toggle('dark-mode')
	}
</script>

<main>
	<button on:click={toggleDarkMode}>Toggle dark mode</button>
	<h1>Hello {name} {lastName}!</h1>
	<About />
	<Counter />
	{#if style.darkMode}
		<Text someText='Prop test' />
	{:else}
		<Text />
	{/if}
	<Person {...data} />
	<div>
		<img src="{myImage}" alt="Logo bonito">
	</div>
	<small>
		<a href='https://www.freepik.com/vectors/logo'>Logo vector created by sentavio - www.freepik.com</a>
	</small>
</main>

<style>
	:global(body) {
		background-color:linen;
		color:darkcyan
	}
	:global(body.dark-mode) {
		background-color:navy;
		color:oldlace;
	}

	:global(:root) {
		--theme-color: darkgray;
	}

	p {
		color: var(--theme-color);
		font-size: 2em;
	}
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
</style>