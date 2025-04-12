
import { useSelector } from 'react-redux'
import UserCard from './UserCard'
import { BASE_URL } from '../utils/constants'
import EditProfile from './EditProfile'

const Profile = () => {
  const user = useSelector(store => store.user)
  return user && (
    <EditProfile user={user} />
  )
}

export default Profile