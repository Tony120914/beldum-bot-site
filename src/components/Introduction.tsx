
export default function Introduction({ }) {
    return (
    <>
        <div className='row align-items-center justify-content-evenly'>
            <div className='col-md-5 text-center'>
                <BeldumSpriteAnimated />
            </div>
            <div className='col-md-5 text-center text-md-start'>
                <BotIntroduction />
            </div>
            <hr className='mb-5 mt-4'/>
            <div className='col-md-5 text-center'>
                <TopggWidget />
            </div>
            <div className='col-md-5 text-center text-md-start'>
                <PopularityIntroduction />
            </div>
            <hr className='mb-5 mt-4'/>
            <div className='col-sm-5 text-center'>
                <CloudflareWorkersLogo />
            </div>
            <div className='col-md-5 text-center text-md-start'>
                <ServerlessIntroduction />
            </div>
        </div>
    </>
    );
}

function BeldumSpriteAnimated({}) {
    return (
    <img src='assets/beldum-sprite-animated.gif' className='img-fluid' alt='Beldum sprite' width='40%'></img>
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
            <a className='btn btn-lg btn-outline-warning' onClick={() => document.getElementById('commands').scrollIntoView()}>See Commands</a>
        </div>
    </>
    );
}

function TopggWidget({}) {
    return (
    <img src="https://top.gg/api/widget/454764425090433034.svg" className="img-fluid" alt="Topgg widget showing server count" width='65%'></img>
    );
}

function PopularityIntroduction({}) {
    return (
    <>
        <h1 className='display-6 text-warning mt-4'>7000+ Communities</h1>
        <p className='lead'>Help the bot grow on Discord.</p>
        <a className="btn btn-lg btn-outline-warning" role="button" target='_blank' rel='noreferrer' href='https://top.gg/bot/454764425090433034/vote'>Vote on Top.gg</a>
    </>
    );
}

function CloudflareWorkersLogo({}) {
    return (
    <img src='assets/cloudflare-workers-logo.svg' className='img-fluid' alt='Cloudflare Workers Logo' width='70%'></img>
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
