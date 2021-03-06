<template>
    <div class="game-settings">
        <p>Sound</p>
        <base-toggle @click="emitToggleSound" :val=sound></base-toggle>
    </div>
    <div class="game-settings">
        <p>Player vs. player</p>
        <base-toggle @click="emitTogglePvP" :val=pvp></base-toggle>
    </div>
</template>

<script>
export default {
    props: ['sound', 'pvp'],
    emits: ['toggle-sound', 'toggle-pvp'],
    methods: {
        emitToggleSound() {
            this.$emit('toggle-sound');
        },
        emitTogglePvP() {
            this.$emit('toggle-pvp');
        },
    },
}
</script>

<style lang="scss" scoped>
.game-settings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: calcRem(10px) 0;
}
</style>