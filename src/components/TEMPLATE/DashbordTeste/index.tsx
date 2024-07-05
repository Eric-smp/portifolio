import * as Styles from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function DashbordTeste() {
    const [data, setData] = useState<{ nome: string, sobrenome: string }[]>([]);
    const [nome, setNome] = useState(null);
    const [sobrenome, setSobrenome] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://raw.githubusercontent.com/Eric-smp/testeJSON/main/teste.json');
            setData(response.data);
           
        };

        fetchData();
    }, []);

    return (
        <Styles.Container>
            <h1>Aqui é a página asdsasddasteste</h1>
            {data.map((item, index) => (
                <div key={index}>
                    <h1>{item.nome}</h1>
                    <h1>{item.sobrenome}</h1>
                </div>
        ))}
        </Styles.Container>
    )
}