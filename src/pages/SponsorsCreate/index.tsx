import { Sidebar } from '../../components/SideBar'
import * as S from './styles'

export function SponsorsCreate() {    
    const path = [
        {title: 'Patrocinadores',
         path: '/sponsors'},
         {title: 'Cadastro patrocinador',
         path: '/sponsors-create'}
        ]
    return (
        <Sidebar menuActive="/sponsors" paths={path}>
            <S.Content>
               <h1>Criar Patrocinadores</h1>
            </S.Content>
        </Sidebar>
    )
}