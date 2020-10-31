<script>
    export let count = 0
    export let text
</script>

<div class='button'>
    <button on:click>
        {text} 
        { count === 0 ? '' : `Clicked ${count} times` }
    </button>
</div>