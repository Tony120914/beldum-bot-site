import commands from '../../../data/commands.json' with { type: 'json'};

export default function CommandsTable({ }) {
    function buildCommandRows() {
        const rows = [];
        const cmds = commands.commands;
        for (let i = 0; i < cmds.length; i++) {
            const cmd = cmds[i];
            if (!cmd) continue;
            rows.push(
                <tr className='text-break' key={cmd.command} style={{'whiteSpace': 'pre-line'}}>
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
    <div className='table-responsive mx-auto mb-5'>
        <h1 className='display-5 text-warning'>Commands</h1>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th scope="col" className='col-2'>Command</th>
                    <th scope="col" className='col-5'>Usage</th>
                    <th scope="col" className='col-5'>Description</th>
                </tr>
            </thead>
            <tbody className='table-group-divider' style={{'borderTopColor':'gold'}}>
                {buildCommandRows()}
            </tbody>
        </table>
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
