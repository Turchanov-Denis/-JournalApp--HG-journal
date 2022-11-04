export const state = () => ({
    activeLogin: true,
    activeMail: false,
    activeGateEmail:false,
})


export const mutations = {
    changeActiveLogin(state) {
        state.activeLogin = !state.activeLogin
    },
    changeActiveMail(state) {
        state.activeMail = !state.activeMail
    },
    changeActiveMailGate(state) {
        state.activeGateEmail = !state.activeGateEmail
    },

}


export const actions = {
    async switchRegMail(context) {
        context.commit('changeActiveLogin');
        context.commit('changeActiveMail');

    },
    async switchGateMail(context) {
        context.commit('changeActiveLogin');
        context.commit('changeActiveMailGate');

    }
}