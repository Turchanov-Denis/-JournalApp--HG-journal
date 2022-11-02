export const state = () => ({
    activeComment: false,
    activeListBar: true
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
    }
}

export const actions = {
    async fetchCounter({ state }) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    }
}

