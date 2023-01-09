
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { applyMiddleware,  createStore } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../module"

const  createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const renderWithRedux = (
    component,
    {
        initialState,
        store = createStoreWithMiddleware(reducers, initialState)
    }
) =>({
    ...render(
        <Provider store={store}>
            <SnackbarProvider>
                {component}
            </SnackbarProvider>
        </Provider>
    )
})

export default renderWithRedux;