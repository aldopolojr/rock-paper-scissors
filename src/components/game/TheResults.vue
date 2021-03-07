<template>
    <div class="results">
        <div class="results__result">
            <div class="results__choice"><i :class=p1ChoiceIcon></i></div>
            <p>vs.</p>
            <div class="results__choice"><i :class=p2ChoiceIcon></i></div>
        </div>
        <div class="results__button">
            <base-button mode="primary" @click="newTurn">New turn</base-button>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['newTurn'],
    props: ['game'],
    computed: {
        p1ChoiceIcon() {
            return `icon icon-${this.game.p1.choice}`;
        },
        p2ChoiceIcon() {
            return `icon icon-${this.game.p2.choice}`;
        },
    },
}
</script>

<style lang="scss" scoped>
.results {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__result {
        flex: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: calcRem(20px);
    }

    &__choice {
        margin: 0 calcRem(20px);
        padding: calcRem(25px);
        background: $green-light;
        color: $white;
        text-align: center;
        border-radius: 5px;
    }

    &__button {
        margin: calcRem(40px) 0 0 0;
    }    
}

@include phablet {
    .results {
        flex-direction: row;

        &__button {
            margin: 0 0 0 calcRem(20px);
        }    
    }
}
</style>