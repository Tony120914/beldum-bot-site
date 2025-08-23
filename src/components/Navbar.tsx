
export default function Navbar() {
    return (
    <>
        <nav className="navbar navbar-expand-md bg-body-tertiary mb-2">
            <div className="container-fluid">
                <NavbarBrand name={'Beldum Bot'} image={'assets/shiny-beldum-bw.gif'} />
                <NavbarToggler target={'navbarButtons'} />
                <NavbarButtons id={'navbarButtons'} buttons= {[
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

function NavbarBrand({ name, image }) {
    return (
    <a className="navbar-brand user-select-none d-flex align-items-center ms-1" href=''>
        <img src={image} alt="Logo" width="40" height="40" className='.d-inline-block me-1'/>
        <span className="display-6 text-warning">{name}</span>
    </a>
    )
}

function NavbarToggler({ target }) {
    return (
    <button className="navbar-toggler mb-2 mt-2 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target={`#${target}`} aria-controls={target} aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    )
}

function NavbarButtons({ id, buttons }) {
    return (
    <div className="collapse navbar-collapse" id={id}>
        <div className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0 gap-3 user-select-none">
            {buttons}
        </div>
    </div>
    )
}

function NavbarButton({ type, text, iconName, url }) {
    return (
    <a href={url} target='_blank' className={`btn ${type} ms-auto pt-2`} role="button" aria-disabled="true">
        <i className={`bi ${iconName} me-2`} style={{'fontSize':'16px'}}></i>
        {text}
    </a>
    );
}
