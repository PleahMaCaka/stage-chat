<script>
    import ChatInput from "./ChatInput.svelte";
    import ChatHistory from "./ChatHistory.svelte";
</script>

<div id="app">

    <div id="chat-frame">
        <ChatHistory/>
        <ChatInput/>
    </div>
</div>

<style>
    #chat-frame {
        border-color: #5272F2;
        border-style: solid;
        border-width: 4px;

        box-shadow: 0 0 3px 2px #5272F2 inset;
        border-radius: 25px;
        width: 100%;
        height: 90vh;
    }

    #app {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        border-radius: 25px;
    }
</style>