import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState();

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if ( value.length <= 1 ) {
            return;
        }
        onNewCategory( value );
        setInputValue( '' );
    };

    return (
        <form onSubmit={ onSubmitForm }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    );

};

export default AddCategory;