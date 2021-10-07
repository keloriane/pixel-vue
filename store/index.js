
export const state = () => ({
  users:[]
})

export const getters = {

}

export const actions = {
  async getUsers() {
    const users = await axios.post("https://randomuser.me./api/?results=10")
    commit('addUsers' , users)
    return users
  }
}

export const mutations= {
  addUsers(state , users ) {
    state.users.push({...users})
  }
}


