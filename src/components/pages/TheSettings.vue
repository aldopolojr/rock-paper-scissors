<template>
    <div class="settings">
        <div class="settings__group">
            <game-settings @toggle-sound="toggleSound" @toggle-pvp="togglePvP" :sound="sound" :pvp="pvp"></game-settings>
        </div>
        <div class="settings__group">
            <game-names @change-name="changeName" :pvp="pvp"></game-names>
        </div>
        <div class="settings__group settings__group--buttons">
            <base-button mode="primary" @click="newgame">New Game</base-button>
            <base-button mode="secondary" @click="cancel" :disabled=startGame>Cancel</base-button>
        </div>
    </div>
</template>

<script>
import GameSettings from '../settings/GameSettings.vue';
import GameNames from '../settings/GameNames.vue';

export default {
    inject: ['setComponent'],
    components: { GameSettings, GameNames },
    data() {
        return {
            startGame: true,
            sound: true,
            pvp: false,
            p1Name: 'Player 1',
            p2Name: 'Player 2',
        };
    },
    methods: {
        toggleSound() {
            this.sound = !this.sound;
        },
        togglePvP() {
            this.pvp = !this.pvp;
        },
        changeName(num, name) {
            this[`p${num}Name`] = name;
        },
        newgame() {
            this.startGame = false;
            this.$store.dispatch('updateSettings', { key: 'sound', val: this.sound });
            this.$store.dispatch('updateSettings', { key: 'pvp', val: this.pvp });
            this.$store.dispatch('updatePlayerData', { player: 'p1', key: 'name', val: this.p1Name });
            if (this.pvp) {
                this.$store.dispatch('updatePlayerData', { player: 'p2', key: 'name', val: this.p2Name });
            } else {
                this.$store.dispatch('updatePlayerData', { player: 'p2', key: 'name', val: 'Computer' });
            }
            this.$store.dispatch('startGame');
            this.$store.dispatch('updateCommentary', this.p1Name);
            this.setComponent('the-game');
        },
        cancel() {
            this.setComponent('the-game')
        },
    },
}
</script>

<style lang="scss" scoped>
.settings {
    &__group {
        margin: calcRem(20px) 0;
    }

    &__group--buttons {
        display: flex;
        flex-direction: row-reverse;

        button:first-child {
            margin-left: calcRem(10px);
        }
    }
}
</style>