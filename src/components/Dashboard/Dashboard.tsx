import { useEffect } from "react"
import { BackgroundBeamsDemo } from "../ui/background-beams"
const Dashboard = () => {
  useEffect(() => {
    document.body.style.overflow = "auto"
  },[])
  return (
    <div>
      <BackgroundBeamsDemo />
    </div>
  )
}

export default Dashboard