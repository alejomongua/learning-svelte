<script>
    let skills = [
        {
            id: 1,
            name: 'Ruby'
        },
        {
            id: 2,
            name: 'Python'
        },
        {
            id: 3,
            name: 'Javascript'
        },
        {
            id: 4,
            name: 'Golang'
        },
        {
            id: 5,
            name: 'Bash'
        },
        {
            id: 6,
            name: 'C++'
        },
    ]
</script>

<style>
    .skills {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul {
        list-style:square;
    }
</style>

<div class='skills'>
    <h3>My skills</h3>
    <ul>
        {#each skills as { name }}
            <li>{name}</li>
        {/each}
    </ul>
</div>