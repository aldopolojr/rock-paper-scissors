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
        state.game.p1Turn = true;
        state.game.showResult = false;
    },
    updateCommentary(state, payload) {
        let instructions = [
            `<strong>${payload}</strong>, make your move.`,
            `Make your move <strong>${payload}</strong>.`,
            `<strong>${payload}</strong> make a move.`, 
            `Make a move, <strong>${payload}</strong>.`,
            `<strong>${payload}</strong> it's your turn.`,
            `It's your turn <strong>${payload}</strong>.`,
            `<strong>${payload}</strong>, your turn.`,
            `Your turn, <strong>${payload}</strong>.`,
            `<strong>${payload}</strong> choose wisely.`,
            `Choose wisely <strong>${payload}</strong>.`,
            `<strong>${payload}</strong>, pick your move.`,
            `Pick your move <strong>${payload}</strong>.`,
            `<strong>${payload}</strong> pick a move.`,
            `Pick a move <strong>${payload}</strong>.`,
            `<strong>${payload}</strong>, decision time.`,
            `Decision time, <strong>${payload}</strong>`,
            `<strong>${payload}</strong>, make your decision.`,
            `Make your decision <strong>${payload}</strong>.`,
       ];
       state.message = instructions[Math.floor(Math.random() * instructions.length)];
    },
    updateCommentaryResult(state, payload) {
        state.message = payload;
    },
};