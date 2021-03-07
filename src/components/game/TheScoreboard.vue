<template>
    <div class="scoreboard">
        <div class="scoreboard__group">
            <p class="scoreboard__playerName">{{ game.p1.name }}</p>
        </div>
        <div class="scoreboard__group">
            <p class="scoreboard__score">{{ game.p1.score }}:{{ game.p2.score }}</p>
            <p class="scoreboard__round">round: {{ game.round }}</p>
        </div>
        <div class="scoreboard__group">
            <p class="scoreboard__playerName">{{ game.p2.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        game() { 
            return this.$store.getters.getGame;
        },
    },
}
</script>

<style lang="scss" scoped>
.scoreboard {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__group {
        text-align: center;
    }

    &__playerName, &__score {
        text-transform: uppercase;
    }

    &__round {
        margin-top: calcRem(5px);
        color: $green-light;
        font-size: calcRem(14px);
    }
}
</style>