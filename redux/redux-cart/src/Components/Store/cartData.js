import { UIActions } from "./UI-slice"
import { cartItemAction } from "./cart-items-slice"
import notification from "./notification-actions/notification"


// getting cart data from server
export const fetchData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://cart-data-8caf2-default-rtdb.firebaseio.com/cart-data.json')

            if (!response.ok) {
                dispatch(UIActions.showNotification(
                    notification.error
                ))
            }
            const data = response.json()
            return data
        }

        try {
            const cartData = await fetchData()
            console.log(cartData)
            dispatch(cartItemAction.replaceCartData({
                items: cartData.items || [],
                totalCartItems: cartData.totalCartItems,
            }))
        } catch (error) {
            dispatch(UIActions.showNotification(
                notification.error
            ))
        }
    }
}


// sending cart data to server
export const sendData = (cartData) => {
    return async (dispatch) => {

        dispatch(UIActions.showNotification(
            notification.sending
        ))

        const sendData = async () => {
            const response = await fetch('https://cart-data-8caf2-default-rtdb.firebaseio.com/cart-data.json', {
                method: "PUT",
                body: JSON.stringify(cartData)
            })

            if (!response.ok) {
                throw new Error('something went wrong')
            }
        }

        try {
            await sendData()
            dispatch(UIActions.showNotification(
                notification.success
            ))
        } catch (error) {
            dispatch(UIActions.showNotification(notification.error))
        }
    }
}