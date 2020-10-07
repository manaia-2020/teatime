import React from 'react'

function Header() {
    const brandImg = 'img/logo.png'
    const brandName = 'Tea Time'
    const brandTag = 'Taking the stress out of deciding what to cook'

    return (
        <header>
            <div className="logoImg smallerLogo">
                <a href='index.html'>
                    <img src={brandImg} alt="brand image" />
                </a>
            </div>
            <div className="logo printHidden">
                {brandName}
            </div>
            <div className="logoTag printHidden">
                {brandTag}
            </div>
        </header>
    )
}

export default Header