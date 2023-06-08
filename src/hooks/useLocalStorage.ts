import { useState } from 'react';
import { useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T | (() => T)) => {
  const [value, setValue] = useState<T>(() => {
    const jsonData = localStorage.getItem(key)
    if(jsonData !== null) return JSON.parse(jsonData)

    if(typeof initialValue === 'function') return (initialValue as (() => T))
    return initialValue
  })


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]

}