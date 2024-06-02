
import {ContentGlobal, CardProject} from '@/components'
import * as Styles from './styles'

export function ContentProjects() {
    return (
        <ContentGlobal>

        <Styles.ContentProjects>
                <h1>Projetos</h1>
                <div className='projects'>
                    <CardProject/>
                    <CardProject/>
                    <CardProject/>
                    
                    
                </div>
        </Styles.ContentProjects>
        </ContentGlobal>
    )
}