<script lang="ts">
    export let author: string = "No Name"
    export let profileUrl: string = "/me.png"
    export let message: string = "Nothing to say"
</script>

<div class="msg-box">
    <div class="msg-content">
        <div class="msg-author"><b>{author}</b></div>
        <div class="msg">
            {message}
        </div>
    </div>
    <img src={profileUrl} alt="me" class="profile-img"/>
</div>

<style>
    @font-face {
        font-family: "Cabin";
        src: url("/fonts/Cabin-Regular.ttf");
    }

    .msg-box {
        display: flex;
        flex-direction: row;
        margin: 25px;

        animation: fadeIn 0.5s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .msg-author {

        letter-spacing: 0.05em;
        margin-bottom: 8px;
        margin-right: 2px;
        text-align: right;
    }

    .profile-img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-left: auto; /* # */
    }

    .msg-content {
        display: flex;
        flex-direction: column;
        color: #f2f2f2;
        font-family: Cabin, serif;
        font-size: 18px;
        margin-left: auto; /* # */

    }

    .msg {
        width: 47vw;
        min-height: 64px;
        padding: 3px 8px;
        background-color: #768dfa;
        border-radius: 8px;
        border: 1px solid #f2f2f2;

        &:hover {
            cursor: pointer;
            background-color: #5171f8;
            transition: 0.2s;
        }
    }
</style>