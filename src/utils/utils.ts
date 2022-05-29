import { STATE_NAME } from './constant'

export const getStateName = (id: number) => {
    const stateName = STATE_NAME.find((s: { id: number }) => s.id === id)
    if (stateName) {
        return stateName.name
    } else {
        return '未設定'
    }
}
