import type React from "react"
import { NavLink } from "react-router"

export default function Navbar() {
    return (
    <>
        <nav className="navbar navbar-expand-md bg-dark-subtle">
            <div className="container-fluid">
                <NavbarBrand image={'assets/shiny-beldum-bw.gif'} />
                <NavbarButtons buttons= {[
                    <NavbarButton
                        type={'btn-outline-primary'}
                        text={'Invite Bot'}
                        iconName={'bi-discord'}
                        url={'https://discord.com/oauth2/authorize?client_id=454764425090433034'}
                        key={'invite'}
                    />,
                    <NavbarButton
                        type={'btn-outline-danger'}
                        text={'Donate'}
                        iconName={'bi-suit-heart-fill'}
                        url={'https://patreon.com/ToekneeL'}
                        key={'donate'}
                    />,
                    <NavbarButton
                        type={'btn-outline-light'}
                        text={'Source Code'}
                        iconName={'bi-github'}
                        url={'https://github.com/Tony120914/Beldum-Bot'}
                        key={'sourceCode'}
                    />
                ]}/>
            </div>
        </nav>
    </>
    )
}

function NavbarBrand({ image }: { image: string}) {
    return (
    <NavLink to='/' end onClick={() => window.scrollTo({top:0, behavior:'smooth'}) } style={{ textDecoration:'none' }} viewTransition>
        <span className="navbar-brand user-select-none d-flex align-items-center">
            <img src={image} alt="Beldum Logo" width="40" height="40" className='.d-inline-block mx-2'/>
            <span className="display-6 text-warning">Beldum Bot</span>
        </span>
    </NavLink>
    )
}

function NavbarButtons({ buttons }: { buttons: React.ReactElement[] }) {
    const navbarToggerId = 'navbarButtons';
    return (
    <>
        <button className="navbar-toggler mb-2 mt-2 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target={`#${navbarToggerId}`} aria-controls={navbarToggerId} aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id={navbarToggerId}>
            <div className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0 gap-3 user-select-none">
                {buttons}
            </div>
        </div>
    </>
    );
}

function NavbarButton({ type, text, iconName, url }: { type: string, text: string, iconName: string, url: string }) {
    return (
    <a href={url} target='_blank' className={`btn ${type} ms-auto pt-2`} role="button" aria-disabled="true">
        <i className={`bi ${iconName} me-2`} style={{'fontSize':'16px'}}></i>
        {text}
    </a>
    );
}
