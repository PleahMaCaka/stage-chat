<script lang="ts">
    import type { History } from "../stores/HistoryStore"
    import { historyStore } from "../stores/HistoryStore"
    import CharMessage from "./Message/CharMessage.svelte"
    import UserMessage from "./Message/UserMessage.svelte"

    let history: Array<History> = $historyStore
</script>

<div id="chat-history">F
    {#each history as h}
        {#if h.author === "Bot"}
            <CharMessage message={h.message} author="AI Assistant" profileUrl="/llama2.jpg"/>
        {:else if h.author === "User"}
            <UserMessage message={h.message} author="User"/>
        {/if}
    {/each}
</div>

<style>
    #chat-history {
        width: 100%;
        height: 90%;
        border-radius: 25px 25px 0 0;
    }
</style>