import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'cruel',
		lastName: 'world'
	}
});

export default app;