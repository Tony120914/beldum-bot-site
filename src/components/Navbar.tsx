
export default function Navbar() {
    return (
    <>
        <nav className="navbar navbar-expand-md bg-body-tertiary mb-2">
            <div className="container-fluid">
                <NavbarBrand name={'Beldum Bot'} image={'assets/beldum-brand.png'} />
                <NavbarToggler target={'navbarButtons'} />
                <NavbarButtons id={'navbarButtons'} buttons= {[
                    <InviteButton key={'invite'}/>,
                    <DonateButton key={'donate'}/>,
                    <SourceCodeButton key={'sourceCode'}/>
                ]}/>
            </div>
        </nav>
    </>
    )
}

function NavbarBrand({ name, image }) {
    return (
    <a className="navbar-brand user-select-none d-flex align-items-center" href=''>
        <img src={image} alt="Logo" width="40" height="40" className='.d-inline-block me-2'/>
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

function InviteButton({}) {
    return (
    <a href="https://discord.com/oauth2/authorize?client_id=454764425090433034" target='_blank' className="btn btn-outline-primary ms-auto pt-2" role="button" aria-disabled="true">
        <i className="bi bi-discord me-2" style={{'fontSize':'16px'}}></i>
        Invite Bot
    </a>
    );
}

function DonateButton({}) {
    return (
    <a href="https://patreon.com/ToekneeL" target='_blank' className="btn btn-outline-danger ms-auto pt-2" role="button" aria-disabled="true">
        <i className="bi bi-suit-heart-fill me-2" style={{'fontSize':'16px'}}></i>
        Donate
    </a>
    );
}

function SourceCodeButton({}) {
    return (
    <a href="https://github.com/Tony120914/Beldum-Bot" target='_blank' className="btn btn-outline-light ms-auto pt-2" role="button" aria-disabled="true">
        <i className="bi bi-github me-2" style={{'fontSize':'16px'}}></i>
        Source Code
    </a>
    );
}
