import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const HandleChange = val => {
        setValue(val);

    }
    return[value, HandleChange];
}
export default useInputState;