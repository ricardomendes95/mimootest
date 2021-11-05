import { Sidebar } from '../../components/SideBar'
import emoji from '../../assets/Emoji.svg'
import * as S from './styles'

export function Dashboard() {    
    return (
        <Sidebar menuActive="/dashboard" paths={[{title: "Dashboard", path: '/dashboard'}]}>
            <S.Content>
                <img src={emoji} />
                <span>Em construção...</span>
            </S.Content>
        </Sidebar>
    )
}