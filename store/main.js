export const state = () => ({
    activeComment: false,
    activeListBar: true,
    activeLogin: true,
    autorisation: true,
})

export const getters = {
    getCounter(state) {
        return state.counter
    }
}

export const mutations = {
    changeActiveComment(state) {
        state.activeComment = !state.activeComment
    },
    changeListBar(state) {
        state.activeListBar = !state.activeListBar
    },
    changeActiveLogin(state) {
        state.activeLogin = !state.activeLogin
    }
}


