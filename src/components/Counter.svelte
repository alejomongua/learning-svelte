<script>
    let count = 0
    let handleClick = () => {
        count += 1
    }
</script>

<div class='Counter'>
    <button on:click={handleClick}>Click me!</button>
    <p>
        { count === 0 ? '' : `Clicked ${count} times` }
    </p>
</div>