    import { useState } from 'react';

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    // Push new value to list
    // Recibe un elemento nuevo
    function push(element) {
        // COpia todo el elemento nuevo
        setValue((oldValue) => [...oldValue, element]);
    }

    // Remove value from list
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };


    // List is Empty ? true / false
    const isEmpty = () => value.length === 0;

    // TODO:Develop more functions for lists
    //Funcion para limpiar
    const clean = () => {
        setValue([]);
    }

    //Funcion para ordenar 
    function order () {
        setValue((oldValue)=>[...oldValue.sort()]);
    }
    //Invertir los elementos 
    function reverse(){
        setValue((oldValue) => [...oldValue.map(palabra => palabra.split('').reverse().join(''))]);
    }

    return {
            value, setValue, push, remove, isEmpty, clean, order, reverse,
        };
};

export default useList;
