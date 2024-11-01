import { useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = e => {
        e.perventDefault();
        console.log(nameRef.current.value);
        console.log(nameRef.current.value);
        console.log(passwordRef.current.value);

        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name"/>
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="text" name="phone" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;