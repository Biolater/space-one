
import { useEffect, useState } from "react"

export default function PcMobileSearchBarSuggestions() {
    const [isEnabled, setIsEnabled] = useState(false);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const searchInput = document.getElementById("search-input") as HTMLInputElement;
            if (searchInput.value.length > 0) {
                setIsEnabled(true);
            } else {
                setIsEnabled(false);
            }
        },200)

        return () => clearInterval(intervalId);
    })
   return (
    <div  className={`search__results w-full fixed top-0 z-10 ${isEnabled ? "h-40" : "h-0"} bg-primary`}>
        
    </div>  )
}
