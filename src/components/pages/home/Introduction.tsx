import { NavLink } from "react-router";

export default function Introduction({ }) {
    return (
        <div className='row align-items-center text-center justify-content-evenly my-5'>
            <div className='col-md-5'>
                <img src='assets/shiny-beldum-oras-promo.png' className='img-fluid' alt='Shiny Beldum Promo' width='100%'></img>
            </div>
            <div className='col-md-5 text-md-start'>
                <Description />
            </div>
        </div>
    );
}

function Description({ }) {
    return (
    <>
        <h1 className='display-1 text-warning'>{'Beldum Bot'}</h1>
        <p className='lead'>Hey, a cool Discord bot application.</p>
        <p className="lead">Check it out. ¯\_(ツ)_/¯</p>
        <div className='d-flex gap-2 justify-content-center justify-content-md-start'>
            <a className="btn btn-lg btn-outline-warning" role="button" target='_blank' rel='noreferrer' href={'https://discord.com/oauth2/authorize?client_id=454764425090433034'}>Invite Bot</a>
            <NavLink to={'/docs'} end onClick={() => window.scrollTo({top:0, behavior:'smooth'}) } viewTransition >
                <button className='btn btn-lg btn-outline-warning'>See Commands</button>
            </NavLink>
        </div>
    </>
    );
}
