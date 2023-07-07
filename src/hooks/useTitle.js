import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        // document.title = title;
        document.title = `${title} - E-commerce`
    }, [title])
};

export default useTitle;