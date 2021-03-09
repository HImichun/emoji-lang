<script lang="ts">
import { tick } from "svelte";

	import EmojiPallete from "./EmojiPallete.svelte"

	let inputField: HTMLTextAreaElement
	let text = ""

	async function handleEmojiInput(event) {
		const emoji = event.detail
		const cursorPos = inputField.selectionStart
		const cursorPosEnd = inputField.selectionEnd

		text = text.slice(0, cursorPos)
			+ emoji
			+ text.slice(cursorPosEnd)

		const newPos = cursorPos + emoji.length

		await tick()
		inputField.setSelectionRange(newPos, newPos)
	}
</script>

<main>
	<textarea type="text" bind:this={inputField} bind:value={text}/>
	<EmojiPallete on:input={handleEmojiInput}/>
</main>

<style>
	textarea {
		min-width: 100%;
		max-width: 100%;
	}
</style>