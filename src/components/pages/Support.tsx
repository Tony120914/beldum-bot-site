import BackButton from "../BackButton.js";
import Navbar from "../Navbar.js";
import Button from "./support/Button.js";
import Gratitude from "./support/Gratitude.js";
import Option from "./support/Option.js";

export default function Support({ }) {
    return (
    <>
        <header className='sticky-top'>
            <Navbar back={<BackButton to='/'/>} />
        </header>
        <div className='container-fluid mt-3'>
            <main className="text-center">
                <Gratitude image={'assets/shiny-beldum-swsh.gif'} />
                <Option title={'Donate'} icon={'bi-balloon-heart'}
                    buttons={[
                        <Button key={'patreon'}
                            url={'https://patreon.com/ToekneeL'}
                            name="Patreon"
                            image={'assets/patreon-logo.svg'}
                        />,
                        <Button key={'ko-fi'}
                            url={'https://ko-fi.com/toeknee'}
                            name="Ko-fi"
                            image={'assets/ko-fi-logo.svg'}
                        />
                    ]}
                />
                <hr className="mx-auto my-4" style={{ width:'80%' }} />
                <Option title={'Upvote'} icon={'bi-arrow-up'}
                    buttons={[
                        <Button key={'topgg'}
                            url={"https://top.gg/bot/454764425090433034/vote"}
                            name="Top.gg"
                            image={"assets/top.gg-logo.svg"}
                        />,
                        <Button key={'discord-bot-list'}
                            url={"https://discordbotlist.com/bots/beldum-bot/upvote"}
                            name="Discord Bot List"
                            image={"assets/discord-bot-list-logo.svg"}
                        />
                    ]}
                />
            </main>
        </div>
    </>
    );
}
