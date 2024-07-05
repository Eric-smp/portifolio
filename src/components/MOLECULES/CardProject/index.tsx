import * as Styles from './styles'

type TCardProject = {
    name: string,
    sobrenome:string
}

export function CardProject(props:TCardProject) {
    return (
        <Styles.CardProject>

            <h1>{props.name }</h1>
            <h3>{props.sobrenome }</h3>
        </Styles.CardProject>
    )
}