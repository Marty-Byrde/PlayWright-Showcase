import { GitHubUser } from '@/lib/getSession'
import { UserInformation } from '@/components/root/UserProfile/UserInformation'

export function LoadingProfileInformation() {
  const DummyUser: GitHubUser = {
    name: 'Loading...',
    image: 'https://avatars.githubusercontent.com/u/101210932?v=4',
    email: '',
    id: '',
  }

  return <UserInformation user={DummyUser} profilePage='#' />
}
