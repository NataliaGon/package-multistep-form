import React from 'react'
import cx from 'classnames'
import './Button.css'

const Button = ({ children, className, onClick, title, ariaLabel }) => (
    <button className={cx("button", className)} onClick={onClick} title={title} aria-label={ariaLabel}>
        {children}
    </button>
)

export default Button
