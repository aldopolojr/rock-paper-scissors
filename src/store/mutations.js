export default {
    updateSettings(state, payload) {
        state.settings[payload.key] = payload.val;
    },
    updateGameData(state, payload) {
        state.game[payload.key] = payload.val;
    },
    updatePlayerData(state, payload) {
        state.game[payload.player][payload.key] = payload.val;
    },
    incScore(state, payload) {
        state.game[payload].score++;
    },
    incRound(state) {
        state.game.round++;
    },
    startGame(state) {
        state.game.p1.score = 0;
        state.game.p1.choice = null;
        state.game.p2.score = 0;
        state.game.p2.choice = null;
        state.game.round = 0;
        state.settings.p1Turn = true;
        state.settings.showResult = false;
        // state.message = '';
    },
};