import React, {useState, useEffect} from 'react'

export default function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        try {
            const value = window.localStorage.getItem(key)
            console.log('useLocalStorage - value', value, key, defaultValue)
            return value ? JSON.parse(value) : defaultValue
        } catch(e) {
            console.log('e', e)
            return defaultValue
        }
    })
    useEffect(() => {
        console.log('useEffect')
        window.localStorage.setItem(key, state)
    }, [state, key])

    return [state, setState]
}