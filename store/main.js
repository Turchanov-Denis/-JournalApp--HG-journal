export const state = () => ({
    activeComment: false,
    activeListBar: true,
    autorisation: true,
    inputValue: "",
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
        state.autorisation = !state.autorisation
    },
    changeInputValue(state, value) {
        state.inputValue = value
    }
}


