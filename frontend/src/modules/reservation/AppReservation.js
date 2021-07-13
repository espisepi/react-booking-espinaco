import React from 'react'
import AppRouter from './main/routers/AppRouter'

// Redux
import { Provider } from 'react-redux'
import store from './main/redux/store'

const AppReservation = props => {
    return (
    <div className="App-reservation">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
    )
}

export default AppReservation
