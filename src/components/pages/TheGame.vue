<template>
    <div class="game">
        <div class="game__group">
            <the-header></the-header>
        </div>
        <div class="game__group">
            <the-commentary :message="message"></the-commentary>
        </div>
        <div class="game__group">
            <the-actions v-if="!game.showResult"></the-actions>
            <the-results v-else :game="game"></the-results>
        </div>
    </div>
</template>

<script>
import TheHeader from '../game/TheHeader.vue';
import TheCommentary from '../game/TheCommentary.vue';
import TheActions from '../game/TheActions.vue';
import TheResults from '../game/TheResults.vue';

export default {
    components: {
        TheHeader,
        TheCommentary,
        TheActions,
        TheResults,
    },
    data() {
        return {
            options: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
        };
    },
    provide() {
        return {
            options: this.options,
            resetGame: this.resetGame,
            makeMove: this.makeMove,
            newTurn: this.newTurn,
        };
    },
    computed: {
        game() {
            return this.$store.getters.getGame;
        },
        settings() {
            return this.$store.getters.getSettings;
        },
        message() {
            return this.$store.getters.getMessage;
        },
    },
    methods: {
        resetGame() {
            this.$store.dispatch('startGame');
            this.$store.dispatch('updateCommentary', this.game.p1.name);
        },
        makeMove(choice) {
            if (this.game.p1Turn) {
                this.p1Move(choice);
            } else {
                this.p2Move(choice);
            }
        },
        p1Move(choice) {
            this.$store.dispatch('updateGameData', { key: 'p1Turn', val: false });
            this.$store.dispatch('updatePlayerData', { player: 'p1', key: 'choice', val: choice });

            if (this.settings.pvp) {
                this.$store.dispatch('updateCommentary', this.game.p2.name);
            } else {
                this.computerMove();
            }
        },
        p2Move(choice) {
            this.$store.dispatch('updatePlayerData', { player: 'p2', key: 'choice', val: choice });
            setTimeout(()=> { this.determineResult()}, 250);
        },
        computerMove() {
            let choice = this.options[Math.floor(Math.random() * this.options.length)];
            this.$store.dispatch('updatePlayerData', { player: 'p2', key: 'choice', val: choice });
            setTimeout(()=> { this.determineResult()}, 500);
        },
        determineResult() {
            let p1Name = this.game.p1.name;
            let p2Name = this.game.p2.name;
            let p1Choice = this.game.p1.choice;
            let p2Choice = this.game.p2.choice;
            let p1Index = this.options.indexOf(p1Choice);
            let p2Index = this.options.indexOf(p2Choice);
            let x = p1Index * this.options.length + p2Index;

            switch (x) {
                case 0: 
                    this.$store.dispatch('updateCommentaryResult', `It's a draw, play again!`);
                    break;
                case 1: 
                    this.$store.dispatch('updateCommentaryResult', `Paper covers Rock, <strong>${p2Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p2');
                    break;
                case 2: 
                    this.$store.dispatch('updateCommentaryResult', `Rock crushes Scissors, <strong>${p1Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p1');
                    break;
                case 3: 
                    this.$store.dispatch('updateCommentaryResult', `Rock crushes Lizard, <strong>${p1Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p1');
                    break;
                case 4: 
                    this.$store.dispatch('updateCommentaryResult', `Spock vaporizes Rock, <strong>${p2Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p2');
                    break;
                case 5: 
                    this.$store.dispatch('updateCommentaryResult', `Paper covers Rock, <strong>${p1Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p1');
                    break;
                case 6: 
                    this.$store.dispatch('updateCommentaryResult', `It's a draw, play again!`);
                    break;
                case 7: 
                    this.$store.dispatch('updateCommentaryResult', `Scissors cuts Paper, <strong>${p2Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p2');
                    break;
                case 8: 
                    this.$store.dispatch('updateCommentaryResult', `Lizard eats Paper, <strong>${p2Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p2');
                    break;
                case 9: 
                    this.$store.dispatch('updateCommentaryResult', `Paper disproves Spock, <strong>${p1Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p1');
                    break;
                case 10: 
                    this.$store.dispatch('updateCommentaryResult', `Rock crushes Scissors, <strong>${p2Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p2');
                    break;
                case 11: 
                    this.$store.dispatch('updateCommentaryResult', `Scissors cuts Paper, <strong>${p1Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p1');
                    break;
                case 12: 
                    this.$store.dispatch('updateCommentaryResult', `It's a draw, play again!`);
                    break;
                case 13: 
                    this.$store.dispatch('updateCommentaryResult', `Scissors decapitates Lizard, <strong>${p1Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p1');
                    break;
                case 14:
                    this.$store.dispatch('updateCommentaryResult', `Spock smashes Scissors, <strong>${p2Name}</strong> wins`);
                    this.$store.dispatch('incScore', 'p2');
                    break;
                case 15: 
                    this.$store.dispatch('updateCommentaryResult', `Rock crushes Lizard, <strong>${p2Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p2');
                    break;
                case 16: 
                    this.$store.dispatch('updateCommentaryResult', `Lizard eats Paper, <strong>${p1Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p1');
                    break;
                case 17: 
                    this.$store.dispatch('updateCommentaryResult', `Scissors decapitates Lizard, <strong>${p2Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p2');
                    break;
                case 18: 
                    this.$store.dispatch('updateCommentaryResult', `It's a draw, play again!`);
                    break;
                case 19: 
                    this.$store.dispatch('updateCommentaryResult', `Lizard poisons Spock, <strong>${p1Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p1');
                    break;
                case 20: 
                    this.$store.dispatch('updateCommentaryResult', `Spock vaporizes Rock, <strong>${p1Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p1');
                    break;
                case 21: 
                    this.$store.dispatch('updateCommentaryResult', `Paper disproves Spock, <strong>${p2Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p2');
                    break;
                case 22: 
                    this.$store.dispatch('updateCommentaryResult', `Spock smashes Scissors, <strong>${p1Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p1');
                    break;
                case 23: 
                    this.$store.dispatch('updateCommentaryResult', `Lizard poisons Spock, <strong>${p2Name}</strong> wins!`);
                    this.$store.dispatch('incScore', 'p2');
                    break;
                case 24: 
                    this.$store.dispatch('updateCommentaryResult', `It's a draw, play again!`);
                    break;
            }

            this.$store.dispatch('incRound');
            this.$store.dispatch('updateGameData', { key: 'showResult', val: true });
        },
        newTurn() {
            this.$store.dispatch('updateGameData', { key: 'p1Turn', val: true });
            this.$store.dispatch('updateGameData', { key: 'showResult', val: false });
            this.$store.dispatch('updateCommentary', this.game.p1.name);
        },
    },
}
</script>

<style lang="scss" scoped>
.game {
    &__group {
        margin: calcRem(20px) 0;
    }
}
</style>