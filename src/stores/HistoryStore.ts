import { writable } from "svelte/store"

export interface History {
    author: string
    message: string
}

export const historyStore = writable<Array<History>>([
    {
        author: "Bot",
        message: "Hello, How can I do for you?"
    },
    {
        author: "User",
        message: "I want to know about you"
    }
])