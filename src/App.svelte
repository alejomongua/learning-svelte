<script>
	import About from './components/About.svelte'
	import Counter from './components/Counter.svelte';
	import Input from './components/Input.svelte';
	import Person from './components/Person.svelte';
import Photos from './components/Photos.svelte';
	import Skills from './components/Skills.svelte';
	import Text from './components/Text.svelte';
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
	<Input />
	<About />
	<Photos />
	<Counter />
	{#if style.darkMode}
		<Text someText='Prop test' />
	{:else}
		<Text />
	{/if}
	<Person {...data} />
	<Skills />
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

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>