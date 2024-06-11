import commands from '../schemas/commands.json';

export default function Commands({ }) {
    return (
        <div className='table-responsive' style={{width:'75%', margin:'auto'}}>
            <table className='table table-striped table-hover table-sm'>
                <thead>
                    <tr>
                        <th scope="col" className='col-1'>Command</th>
                        <th scope="col" className='col-3'>Usage</th>
                        <th scope="col" className='col-3'>Example</th>
                        <th scope="col" className='col-5'>Description</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {getCommandRows()}
                </tbody>
            </table>
        </div>
    );
}

function getCommandRows() {
    const rows = [];
    const commandList = commands.commands;
    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];
        rows.push(
            <tr key={command.command} style={{'whiteSpace': 'pre-line'}}>
                <td>{command.command}</td>
                <td><code>{command.usage}</code></td>
                <td><samp>{command.example}</samp></td>
                <td>{command.description}</td>
            </tr>
        );
    }
    return rows;
}
