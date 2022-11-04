export const state = () => ({
    activeLogin: true,
    activeMail: false
})


export const mutations = {
    changeActiveLogin(state) {
        state.activeLogin = !state.activeLogin
    },
    changeActiveMail(state) {
        state.activeMail = !state.activeMail
    }
}


export const actions = {
    async switchMail(context) {
        context.commit('changeActiveLogin');
        context.commit('changeActiveMail');

    }
}