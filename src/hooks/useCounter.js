import { useState } from 'react';

const useCounter= (initialValue = 1) => {
    const [value, setValue] = useState(initialValue);
    const [contador, setContador] = useState(1);
    let x;
    function valor(elemento){
        setContador(elemento);
    }
   //increment, para aumentar su valor./
   function suma () {
    setValue((oldValue) => oldValue + contador);
   }
   //Valor para decrementar 
   
   function restar (){
    x = value -  contador;
    setValue(x);
   }

   function reset(){
    setValue(1);
    setContador(1);
   }
    return{
        valor, value, setValue, suma, reset, restar, contador, setContador
    }
};

export default useCounter;