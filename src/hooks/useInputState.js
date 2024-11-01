import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        setValue(e.target.value);

    }
    // const HandleChange = e => {
    //     setValue(e.target.value);

    // }
    // return[value, HandleChange];
    return{
        value,
        onChange
    }
}
export default useInputState;