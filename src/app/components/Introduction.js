
export default function Introduction({ }) {
    return (
        <>
            <div className='row align-items-center justify-content-evenly'>
                <div className='col-sm-5 text-center text-sm-start'>
                    <BotIntroduction />
                </div>
                <div className='col-sm-5 text-center'>
                    <BeldumSpriteAnimated />
                </div>
                <hr className='mb-5 mt-4'/>
                <div className='col-sm-5 text-center'>
                    <CloudflareWorkersLogo />
                </div>
                <div className='col-sm-5 text-center text-sm-start'>
                    <ServerlessIntroduction />
                </div>
            </div>
        </>
    );
}

function BotIntroduction({}) {
    return (
        <>
            <h1 className='display-1 text-warning'>Beldum Bot</h1>
            <p className='lead'>Hey, cool Discord bot application.</p>
            <p className='lead'>Currently in 7000+ servers.</p>
            <p className="lead">Check it out. ¯\_(ツ)_/¯</p>
            <div className='d-grid d-sm-flex gap-2'>
                <a className="btn btn-lg btn-outline-warning" role="button" target='_blank' rel='noreferrer' href='https://discord.com/oauth2/authorize?client_id=454764425090433034'>Invite Bot</a>
                <a className='btn btn-lg btn-outline-warning' onClick={() => document.getElementById('commands').scrollIntoView()}>See Commands</a>
            </div>
        </>
    );
}

function BeldumSpriteAnimated({}) {
    return (
        <img src='assets/beldumSpriteAnimated.png' className='img-fluid' alt='Beldum sprite' width='75%'></img>
    );
}

function CloudflareWorkersLogo({}) {
    return (
        <img src='assets/cloudflareWorkersLogo.svg' className='img-fluid' alt='Cloudflare Workers Logo' width='75%'></img>
    );
}

function ServerlessIntroduction({}) {
    return (
        <>
            <h1 className='display-6 text-warning mt-4'>Serverless</h1>
            <p className='lead'>...that technically still uses servers.</p>
            <p className="lead">But on demand.</p>
        </>
    );
}
