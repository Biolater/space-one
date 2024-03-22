import { useParams } from "react-router"
export default function ProfilePage() {
  const { username } = useParams();
  return (
    <div>{username}</div>
  )
}
