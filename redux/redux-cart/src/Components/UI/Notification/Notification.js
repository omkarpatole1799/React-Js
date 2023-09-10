const Notification = (props) => {
    let notificationClasses

    if (props.data.status === 'error') {
        notificationClasses = `flex justify-between items-center bg-red-500 text-white font-semibold p-3`
    }
    else if (props.data.status === 'success') {
        notificationClasses = `flex justify-between items-center bg-green-500 text-white font-semibold p-3`
    } else if (props.data.status === 'sending') {
        notificationClasses = `flex justify-between items-center bg-blue-400 text-white font-semibold p-3`
    }

    return <>
        <div className= {notificationClasses}>
            <span>{props.data.message}</span>
            <span>{props.data.description}</span>
        </div>
    </>
}

export default Notification