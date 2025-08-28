
export default function VoteOptions({ }) {
    return (
    <div className="text-center">
        <h1 className='display-5 text-warning'>{'Thank you for voting!'}</h1>
        <GratefulBot image={'assets/shiny-beldum-swsh.gif'} />
        <div className="d-flex justify-content-center gap-5 mt-5">
            <VoteOption url="https://top.gg/bot/454764425090433034/vote" name="Top.gg" image="assets/top.gg-logo.svg" />
            <VoteOption url="https://discordbotlist.com/bots/beldum-bot/upvote" name="Discord Bot List" image="assets/discord-bot-list-logo.svg" />
        </div>
    </div>
    );
}

function GratefulBot({ image }: { image: string }) {
    return (
    <div className='d-flex justify-content-center'>
        <i className="bi bi-hearts" style={{ 'fontSize':'75px', 'color':"pink" }}></i>
        <img src={image} className='img-fluid'></img>
    </div>
    );
}

function VoteOption({ url, image, name }: { url: string, image: string, name: string }) {
    return (
        <a href={url} className={`btn btn-lg btn-outline-light`} role="button" target='_blank' aria-disabled="true">
            <img src={image} className="img-fluid me-2" width='30'></img>
            {name}
        </a>
    );
}
