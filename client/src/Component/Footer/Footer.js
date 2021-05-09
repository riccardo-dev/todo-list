import React from 'react'
import style from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>
                {'Copyright ©'} {' '}
                <a className={style.link} href="https://riccardo-dev.github.io/portfolio/">
                    Riccardo Andria
                </a>{' '}
                {new Date().getFullYear()}
                {'.'}
            </div>
        </footer>
    )
}

export default Footer;
