import { NavLink } from "react-router";

export default function Stats({}) {
    return (
    <div className='row align-items-center justify-content-evenly text-center bg-body-tertiary py-5'>
        <div className='col-lg-6 col-xxl-5'>
            <Popularity />
        </div>
        <hr className="d-lg-none my-5" style={{ width:'80%' }} />
        <div className='col-lg-6 col-xxl-5'>
            <Serverless />
        </div>
    </div>
    );

}

function Popularity({}) {
    return (
    <>
        <img src='https://top.gg/api/widget/454764425090433034.svg' className='img-fluid' alt='Top.gg widget: real time server count' width='300px' ></img>
        <h1 className='display-6 text-warning mt-4'>7000+ Communities</h1>
        <p className='lead'>Help the bot grow on Discord.</p>
        <NavLink to={'/support'} end onClick={() => window.scrollTo({top:0, behavior:'smooth'}) } viewTransition >
            <button className='btn btn-lg btn-outline-warning'>Upvote Daily!</button>
        </NavLink>
    </>
    );
}

function Serverless({}) {
    return (
    <>
        <img src='assets/cloudflare-workers-logo.svg' className='img-fluid' alt='Cloudflare Workers Logo' width='300px' ></img>
        <h1 className='display-6 text-warning mt-4'>Serverless</h1>
        <p className='lead'>...that technically still uses servers.</p>
        <p className="lead">But on demand.</p>
    </>
    );
}
