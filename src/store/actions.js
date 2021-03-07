export default {
    updateSettings(context, payload) {
        context.commit('updateSettings', { key: payload.key, val: payload.val });
    },
    updateGameData(context, payload) {
        context.commit('updateGameData', { key: payload.key, val: payload.val });
    },
    updatePlayerData(context, payload) {
        context.commit('updatePlayerData', { player: payload.player, key: payload.key, val: payload.val });
    },
    incScore(context, payload) {
        context.commit('incScore', payload);
    },
    incRound(context) {
        context.commit('incRound');
    },
    startGame(context) {
        context.commit('startGame');
    },
    updateCommentary(context, payload) {
        context.commit('updateCommentary', payload);
    },
    updateCommentaryResult(context, payload) {
        context.commit('updateCommentaryResult', payload);
    },
};