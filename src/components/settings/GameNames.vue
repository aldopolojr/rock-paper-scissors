<template>
    <div class="game-names">
        <label for="inputP1Name">Name player 1</label>
        <input id="inputP1Name" type="text" maxlength="9" v-model.trim="p1Name" @blur="validateName($event, 'Player 1')">
    </div>
    <div class="game-names" v-show="pvp">
        <label for="inputP2Name">Name player 2</label>
        <input id="inputP2Name" type="text" maxlength="9" v-model.trim="p2Name" @blur="validateName($event, 'Player 2')">
    </div>
</template>

<script>
export default {
    props: ['pvp'],
    emits: ['change-name'],
    data() {
        return {
            p1Name: 'Player 1',
            p2Name: 'Player 2',
        };
    },
    methods: {
        validateName(e, name) {
            let num = name[name.length - 1];

            if (e.target.value === '') {
                this[`p${num}Name`] = name;
            } else if (this.p1Name === this.p2Name) {
                this[`p${num}Name`] = name;
            }

            this.$emit('change-name', num, this[`p${num}Name`]);
        },
    },
}
</script>

<style lang="scss" scoped>
.game-names {
    margin: calcRem(5px) 0;

    label {
        display: inline-block;
        margin: calcRem(10px) 0 calcRem(3px);
    }
    input {
        display: block;
        margin: calcRem(10px) 0 0;
        padding: calcRem(15px) calcRem(20px);
        width: 100%;
        background: $blue-light;
        color: $grey1;
        font-size: calcRem(12px);
        text-transform: uppercase;
        border: none;
        border-radius: 5px;
        outline: none;
    }
}
</style>