import { createContext, useState } from 'react'

interface props {
    children: JSX.Element | JSX.Element[]
}

interface loadingContextType {
    loading: boolean
    toggleLoading?: () => void
}

const defaultState = {
    loading: false,
};

export const LoadingContext = createContext<loadingContextType>(defaultState)

export const LoadingProvider = ({ children }: props) => {
    const [loading, loadingSet] = useState<boolean>(defaultState.loading)

    function toggleLoading(): void {
        loadingSet(prevLoading => !prevLoading)
    }

    return (
        <LoadingContext.Provider value= {{ loading, toggleLoading }
}>
    { children }
    < /LoadingContext.Provider>
    )
}