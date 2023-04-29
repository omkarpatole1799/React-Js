import React,{ useState, useCallback } from 'react'

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestDetails, applyData) => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await fetch(
                requestDetails.url,
                {
                    method: requestDetails.method ? 'POST' : 'GET',
                    body: requestDetails.body ? JSON.stringify(requestDetails.body) : null,
                    headers: requestDetails.headers ? requestDetails.headers : {}
                }
            );
                
            if (!response.ok) {
                throw new Error('Request failed!');
            }
            const data = await response.json();
            applyData(data)

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [])
    
    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
}
export default useHttp