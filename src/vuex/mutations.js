const mutations={
    'userIsLogined'(state){
        state.userIsLogin.isLoading = false;
        state.userIsLogin.isLogined = true;
    }
};
export default mutations;