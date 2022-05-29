import React, { MouseEventHandler } from 'react'
import styles from './style.module.scss'

export type AppEditorButtonProps = {
    isActive?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}

export const AppEditorButton: React.FC<AppEditorButtonProps> = ({
    isActive,
    onClick,
    children,
}) => {
    const className = [styles.AppEditorButton]
    if (isActive) {
        className.push(styles['AppEditorButton--active'])
    }

    return (
        <button onClick={onClick} className={className.join(' ')}>
            {children}
        </button>
    )
}
