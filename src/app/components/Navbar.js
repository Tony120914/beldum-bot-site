
export default function Navbar({  }) {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary mb-2">
                <div className="container-fluid">
                    <NavbarBrand name={'Beldum Bot'} image={'assets/beldumBrand.png'} />
                    <NavbarToggler target={'navbarSupportedContent'} />
                    <NavbarButtons id={'navbarSupportedContent'} buttons= {[
                        <InviteButton key={'invite'}/>,
                        <DonateButton key={'donate'}/>,
                        <SourceCodeButton key={'sourceCode'}/>
                    ]}/>
                </div>
            </nav>
        </>
    );
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
        <a href="https://discord.com/oauth2/authorize?client_id=454764425090433034" target='_blank' className="btn btn-outline-primary ms-auto" role="button" aria-disabled="true">
            <i className="bi bi-discord me-2" style={{'fontSize':'20px'}}></i>
            Invite Bot
        </a>
    );
}

function DonateButton({}) {
    return (
        <>
            <a data-bs-toggle='modal' data-bs-target='#kofi-modal' type='button' target='_blank' className="btn btn-outline-danger ms-auto" role="button" aria-disabled="true">
                <i className="bi bi-suit-heart-fill me-2" style={{'fontSize':'20px'}}></i>
                Donate
            </a>
            <KofiModal id={'kofi-modal'}/>
        </>
    );
}

function KofiModal({ id }) {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Thank you!</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex justify-content-center">
                        <iframe id='kofiframe' src='https://ko-fi.com/toeknee/?hidefeed=true&widget=true&embed=true&preview=true' loading='lazy' height='712' title='toeknee'></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SourceCodeButton({}) {
    return (
        <a href="https://github.com/Tony120914/Beldum-Bot" target='_blank' className="btn btn-outline-light ms-auto" role="button" aria-disabled="true">
            <i className="bi bi-github me-2" style={{'fontSize':'20px'}}></i>
            Source Code
        </a>
    );
}
