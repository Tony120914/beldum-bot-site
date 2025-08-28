import commands from '../../../data/commands.json' with { type: 'json'};

export default function Commands({ }) {
    const getCommandRows = () => {
        const rows = [];
        const cmds = commands.commands;
        for (let i = 0; i < cmds.length; i++) {
            const cmd = cmds[i];
            if (!cmd) continue;
            rows.push(
                <tr key={cmd.command} style={{'whiteSpace': 'pre-line'}}>
                    <td>{cmd.command}</td>
                    <td>
                        <div><code>{cmd.usage}</code></div>
                        <div><ExampleCollapse example={cmd.example} id={cmd.command.replaceAll(' ', '_')} /></div>
                    </td>
                    <td>{cmd.description}</td>
                </tr>
            );
        }
        return rows;
    }

    return (
    <div className='table-responsive mx-auto mb-5' style={{'maxWidth': '1000px'}}>
        <CommandsTableTitle title={'Commands'} image={'assets/shiny-beldum-swsh.gif'} />
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th scope="col" className='col-1'>Command</th>
                    <th scope="col" className='col-3'>Usage</th>
                    <th scope="col" className='col-5'>Description</th>
                </tr>
            </thead>
            <tbody className='table-group-divider' style={{'borderTopColor':'gold'}}>
                {getCommandRows()}
            </tbody>
        </table>
    </div>
    );
}

function CommandsTableTitle({ title, image }: { title: string, image: string }) {
    return (
    <div className='d-sm-flex gap-3'>
        <h1 className='display-5 text-warning'>{title}</h1>
        <img src={image} className='img-fluid' width='66' ></img>
    </div>
    );
}

function ExampleCollapse({ example, id }: { example: string, id: string }) {
    return (
    <>
        <button className='btn btn-sm dropdown-toggle' type='button' data-bs-toggle='collapse' data-bs-target={`#${id}`} aria-controls={`${id}`} aria-expanded='false'>
            Example
        </button>
        <div className='collapse' id={id}>
            <div className='card card-body'>
                <samp>{example}</samp>
            </div>
        </div>
    </>
    );
}
