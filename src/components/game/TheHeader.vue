<template>
    <header class="header">
        <div class="header__scoreboard">
            <the-scoreboard></the-scoreboard>
        </div>
        <div class="header__buttons">
            <base-button mode="secondary" @click="OpenSettings">Settings</base-button>
            <base-button mode="secondary" @click="resetGame">Reset</base-button>
        </div>
    </header>
</template>

<script>
import theScoreboard from './TheScoreboard.vue';

export default {
    inject: ['setComponent', 'resetGame'],
    components: {
        theScoreboard,
    },
    methods: {
        OpenSettings() {
            this.setComponent('the-settings');
        },
    },
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;

    &__scoreboard {
        margin: calcRem(20px) 0 0 0;
        width: 100%;
    }

    &__buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;

        button:first-child {
            margin: 0 calcRem(10px) 0 0;
        }
    }
}

@include phablet {
    .header {
        flex-direction: row;

        &__scoreboard {
            margin: 0 calcRem(20px) 0 0;
        }

        &__buttons {
            flex-direction: column;
            width: auto;

            button:first-child {
                margin: 0 0 calcRem(10px) 0;
            }
        }
    }
}
</style>