import { NavLink } from "react-router";

export default function Introductions({ }) {
    return (
    <>
        <div className='row align-items-center justify-content-evenly my-5'>
            <div className='col-md-5 text-center'>
                <PromoImage image={'assets/shiny-beldum-oras-promo.png'} alt={'Shiny Beldum Promo'}
                />
            </div>
            <div className='col-md-5 text-center text-md-start'>
                <BotIntroduction />
            </div>
        </div>
        <div className='row align-items-center justify-content-evenly bg-body-tertiary py-5'>
            <div className='col-lg-6 col-xxl-5 text-center'>
                <PopularityIntroduction />
            </div>
            <hr className="d-lg-none my-5" style={{ width:'80%' }} />
            <div className='col-lg-6 col-xxl-5 text-center'>
                <ServerlessIntroduction />
            </div>
        </div>
    </>
    );
}

function PromoImage({ image, alt }: { image: string, alt: string }) {
    return (
        <img src={image} className='img-fluid' alt={alt} ></img>
    );
}

function BotIntroduction({}) {
    return (
    <>
        <h1 className='display-1 text-warning'>Beldum Bot</h1>
        <p className='lead'>Hey, a cool Discord bot application.</p>
        <p className="lead">Check it out. ¯\_(ツ)_/¯</p>
        <div className='d-flex gap-2 justify-content-center justify-content-md-start'>
            <a className="btn btn-lg btn-outline-warning" role="button" target='_blank' rel='noreferrer' href='https://discord.com/oauth2/authorize?client_id=454764425090433034'>Invite Bot</a>
            <NavLink to='/docs' end onClick={() => window.scrollTo({top:0, behavior:'smooth'}) } viewTransition >
                <button className='btn btn-lg btn-outline-warning'>See Commands</button>
            </NavLink>
        </div>
    </>
    );
}

function PopularityIntroduction({}) {
    return (
    <>
        <img src="https://top.gg/api/widget/454764425090433034.svg" className="img-fluid" alt="Top.gg widget's real time server count" ></img>
        <h1 className='display-6 text-warning mt-4'>7000+ Communities</h1>
        <p className='lead'>Help the bot grow on Discord.</p>
        <NavLink to='/vote' end onClick={() => window.scrollTo({top:0, behavior:'smooth'}) } viewTransition >
            <button className='btn btn-lg btn-outline-warning'>Vote Daily!</button>
        </NavLink>
    </>
    );
}

function ServerlessIntroduction({}) {
    return (
    <>
        <img src='assets/cloudflare-workers-logo.svg' className='img-fluid' alt='Cloudflare Workers Logo' width='350'></img>
        <h1 className='display-6 text-warning mt-4'>Serverless</h1>
        <p className='lead'>...that technically still uses servers.</p>
        <p className="lead">But on demand.</p>
    </>
    );
}
