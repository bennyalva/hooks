import React, { useState, useEffect, useRef } from 'react'

export const useFecth = (url) => {

 const isMounted = useRef(true);
 const [state, setstate] = useState({data: null, loading: true, error: null});
 useEffect(() => {
   return () => {
     isMounted.current = false;
   }
 }, [])
 useEffect(() => {
    setstate({data: null, loading: true, error: null})
    fetch(url)
    .then(result => result.json())
    .then(data => {
      setTimeout(() => {
          if(isMounted.current){
            setstate({
              loading: false,
              error: null,
              data
          })
          } else {
            console.log('no se llamo')
          }
      }, 1000)
    });
 }, [url]);
 return state;
}
