import React from "react";

const useOnScreen = (options) => {
    const ref = React.useRef();
    const [isVisibleState, setIsVisibleState] = React.useState(false);
    
    
    React.useEffect(()=> {
        const observer = new IntersectionObserver(([entry])=> {
            setIsVisibleState(entry.isIntersecting);
        } , options);

        if(ref.current){
            observer.observe(ref.current);
        }

        return()=> {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        }

    } , [ref , options])

    return [ref, isVisibleState];

}

export default useOnScreen;