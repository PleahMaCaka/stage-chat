import { writable } from "svelte/store"

export interface BufferStore {

    /**
     * User's chatting buffer (on:input)
     */
    chatBuffer: string

    /**
     buffer variable for text generation by stream way
     */
    generating: string
}

export const bufferStore = writable<BufferStore>({
    chatBuffer: "",
    generating: ""
})