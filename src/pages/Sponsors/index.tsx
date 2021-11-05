import { Sidebar } from '../../components/SideBar'
import * as S from './styles'

export function Sponsors() {    
    return (
        <Sidebar menuActive="/sponsors" paths={[{title: 'Patrocinadores', path: '/sponsors'}]}>
            <S.Content>
               <h1>Patrocinadores</h1>
            </S.Content>
        </Sidebar>
    )
}