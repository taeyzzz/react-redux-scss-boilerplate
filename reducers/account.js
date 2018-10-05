const initialState = {
  currentUser: undefined,
  register: {
    fetchStatus: 'idle'
  },
  login: {
    fetchStatus: 'idle'
  },
  logout: {
    fetchStatus: 'idle'
  }
}

const account = (state = initialState, action) => {
  switch (action.type) {

    default: {
      return state
    }
  }
}

export default account
