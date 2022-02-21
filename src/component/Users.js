
export default function Users(props) {
    console.log(props)
    return (
        <div>
            <h4>{props.data.name} - {props.data.number}</h4>
        </div>
    )
}
