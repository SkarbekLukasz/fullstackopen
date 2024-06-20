const Notification = ({message, error}) => {

    const successStyles = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorStyles = {...successStyles, color: 'red'}

    if(message === '') {
        return null
    }

    return(
        <div style={error ? errorStyles : successStyles}>
            {message}
        </div>
    )
}

export default Notification