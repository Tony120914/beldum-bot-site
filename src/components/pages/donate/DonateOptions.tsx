
export default function DonateOptions({ }) {
    return (
    <div className="text-center">
        <h1 className='display-5 text-warning'>{'Thank you for the support!'}</h1>
        <GratefulBot image={'assets/shiny-beldum-swsh.gif'} />
        <div className="d-flex justify-content-center gap-5 mt-5">
            <DonateOption url="https://patreon.com/ToekneeL" name="Patreon" image="assets/patreon-logo.svg" />
            <DonateOption url="https://ko-fi.com/toeknee" name="Ko-fi" image="assets/ko-fi-logo.svg" />
        </div>
    </div>
    );
}

function GratefulBot({ image }: { image: string }) {
    return (
    <div className='d-flex justify-content-center'>
        <i className="bi bi-suit-heart-fill" style={{ 'fontSize':'50px', 'color':"pink" }}></i>
        <img src={image} className='img-fluid'></img>
    </div>
    );
}

function DonateOption({ url, image, name }: { url: string, image: string, name: string }) {
    return (
        <a href={url} className={`btn btn-lg btn-outline-light`} role="button" target='_blank' aria-disabled="true">
            <img src={image} className="img-fluid me-2" width='30'></img>
            {name}
        </a>
    );
}
