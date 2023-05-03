import React, { useCallback, useState } from 'react'

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async (url, applyData) => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error('Woops! Something went wrong')
            }

            const responseData = await response.json()
            setIsLoading(false)
            applyData(responseData)
            
        } catch (error) {
            setError(error.message)
        }
        
    }, [])

    return {
        fetchData: fetchData,
        error: error,
        loading: isLoading        
    }
}

export default useHttp