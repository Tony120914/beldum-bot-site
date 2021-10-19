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
        <div className='table-responsive' style={{width:'75%', margin:'auto'}}>
          <table className='table table-dark table-striped table-hover'>
            <TableHeader/>
            <TableBody/>
          </table>
        </div>
      </div>
    );
  }
} export default Commands;

class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th className='col-3' scope='col'>Commands</th>
          <th className='col-3' scope='col'>Examples</th>
          <th className='col-6' scope='col'>Descriptions</th>
        </tr>
      </thead>
    );
  }
}

class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        {commands.map(cmd => {
          return (
            <tr key={cmd.command}>
              <td><code>{cmd.usage}</code></td>
              <td><kbd>{cmd.example}</kbd></td>
              <td>{cmd.description}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}