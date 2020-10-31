<script>
    export let name = 'cruel world!'
</script>

<div class='input'>
    <input type='text' bind:value={name} />
    <h1>Hello {name}</h1>
</div>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>