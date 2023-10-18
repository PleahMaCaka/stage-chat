<script lang="ts">
    import { bufferStore } from "../stores/BufferStore"

    function sendMessage() {
        console.log($bufferStore.chatBuffer)
    }
</script>


<div id="chat-input-box">
    <input
            type="text"
            id="chat-input"
            bind:value={$bufferStore.chatBuffer}
            placeholder="Type a message..."
            on:keydown={e => {
                if (e.key === "Enter")
                    sendMessage()
            }}
    />
    <button
            id="chat-send"
            on:click={sendMessage}
    >
        <img src="/send.svg" alt="Send"/>
    </button>
</div>

<style>
    #chat-input-box {
        width: 100%;
        height: auto;
        border-radius: 0 0 25px 25px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    #chat-input {
        width: 40vw;
        height: 4vh;
        margin-right: 1vw;
        background-color: rgba(0, 0, 0, 0);
        border: 4px solid #4053a9;
        border-radius: 25px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

        color: #f2f2f2;
        font-size: 24px;
        padding-left: 20px;
        padding-right: 20px;

        &:focus {
            outline: none;
            border: 4px solid #2c3f8e;
        }

        &::placeholder {
            color: #f2f2f2;
            opacity: 0.5;
        }

        &:hover {
            transition: 0.2s;
            border: 4px solid #2c3f8e;
        }
    }

    #chat-send {
        width: 7vw;
        height: 4vh;
        background-color: #4053a9;
        border: 4px solid #4053a9;
        border-radius: 25px;
        color: white;
        font-size: 1.5vw;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

        &:hover {
            background-color: #2c3f8e;
            transition: 0.2s;
        }
    }
</style>