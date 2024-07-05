
import {ContentGlobal, CardProject} from '@/components'
import * as Styles from './styles'
import { useEffect, useState } from 'react';
import axios from 'axios';

export function ContentProjects() {
    const [data, setData] = useState<{ nome: string, sobrenome: string }[]>([]);

    useEffect(() => {
        const apiProject = async () => {
            const response = await axios.get('https://raw.githubusercontent.com/Eric-smp/testeJSON/main/teste.json')
            setData(response.data)
        }
        apiProject();
    },[])

     
    return (
        <ContentGlobal>

        <Styles.ContentProjects>
                <h1>Projetos</h1>
                <div className="projects">

                {data.map((item, index) => 
                    <CardProject key={index} name={item.nome} sobrenome={item.sobrenome} />
                )}
                </div>
        </Styles.ContentProjects>
        </ContentGlobal>
    )
}