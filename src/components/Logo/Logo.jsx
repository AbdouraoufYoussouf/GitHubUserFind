import React from 'react'
import logo from '../../assets/logo.png';
import PropTypes  from 'prop-types';
import style from './Logo.module.scss'
export const Logo = ({isTitle = true}) => {
    const TitleTag = isTitle ? 'h1' : 'span';

  return (
    <div className={style.logo}>
        <img alt='logo' src={logo} className={style.logo_icon} />
        <TitleTag role='heading' aria-level="1"  className={style.logo_title} >
            GitUserFind
        </TitleTag>
    </div>
  )
}

Logo.prototype = {
  isTitle: PropTypes.bool
}

