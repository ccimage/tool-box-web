import { Notify } from 'quasar'
export function showErrorNotify(msg) {
    Notify.create({
        type: 'negative',
        message: msg
    })
}