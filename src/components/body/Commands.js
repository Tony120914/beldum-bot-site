import React from 'react';
import { title } from '../../config.json';
import { commands } from './commands.json'

class Commands extends React.Component {
  componentDidMount() {
    document.title = `Commands - ${title}`;
  }

  render() {
    return (
      <div className='Commands'>
        <h1>Commands | Examples | Descriptions</h1>
        <ul>
          {commands.map(cmd => {
            return (
              <li key={cmd.command}>
                {`${cmd.usage} | ${cmd.description} | ${cmd.example}`}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Commands;
