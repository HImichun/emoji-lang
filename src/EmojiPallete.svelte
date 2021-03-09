<script lang="ts">
	import * as Emojis from "./emojis"
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	let currentTab: "all"|"people"|"nature"|"food"|"things"|"misc"|"flags" = "all"

	function handleClick(emoji: string) {
		dispatch("input", emoji)
	}

	function copyText() {
		dispatch("copy")
	}
</script>

<main>
	<div class="pallete">
		<div class="grammar">
			{#each Emojis.grammar as emoji}
				<button on:click={() => handleClick(emoji)}>{emoji}</button>
			{/each}
		</div>
		<div class="list">
			{#each Emojis[currentTab] as emoji}
				<button on:click={() => handleClick(emoji)}>{emoji}</button>
			{/each}
		</div>
		<div class="tabs">
			<button on:click={()=>currentTab = "all"}>♾️</button>
			<button on:click={()=>currentTab = "people"}>🙋</button>
			<button on:click={()=>currentTab = "nature"}>🐱</button>
			<button on:click={()=>currentTab = "food"}>🍎</button>
			<button on:click={()=>currentTab = "things"}>🎳</button>
			<button on:click={()=>currentTab = "misc"}>🚮</button>
			<button on:click={()=>currentTab = "flags"}>🏳️‍⚧️</button>
			<span class="separator"></span>
			<button on:click={copyText}></button>
			<button on:click={copyText}>📋</button>
		</div>
	</div>
</main>

<style>
	button {
		background: transparent;
		border: none;
	}

	.pallete {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto 1fr;
		gap: 1em;
	}

	.grammar {
		grid-column: 1/3;

		max-width: 100%;
		display: flex;
		overflow-x: auto;
	}
	.grammar > * {
		min-width: 2em;
	}

	.list {
		grid-row: 2/4;

		max-width: 100%;
		max-height: 20em;
		display: grid;
		grid-template-columns: repeat( auto-fit, minmax(2em, 1fr));
		overflow-y: auto;
		overflow-x: hidden;
	}

	.tabs {
		display: flex;
		flex-direction: column;
		border: 1px solid black;
	}

	.separator {
		min-width: 1em;
		min-height: 1em;
	}
</style>