import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import React from 'react';

function App() {
  return (
    <div className="App">
      < Table />
    </div>
  );
}


const columns = [
  { accessor: 'title', label: 'Tytuł' },
  { accessor: 'content', label: 'Treść wiadomości' },
  { accessor: 'date', label: 'Data dodania' },
]


class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: [
        { title: 'Testowy tytuł 1', content: 'Treść pierwszej wiadomości', date: '2022-04-10'},
        { title: 'Testowy tytuł 2', content: 'Treść drugiej wiadomości', date: '2022-04-11'},
        { title: 'Testowy tytuł 3', content: 'Treść trzeciej wiadomości', date: '2022-04-12'},
        { title: 'Testowy tytuł 4', content: 'Treść czwartej wiadomości', date: '2022-04-13'}
      ]
    }
  }


  renderTableHeader() {
    return (
      <thead>
          <tr>            
          {columns.map(column => {
            return <th key={column.accessor}>{column.label}</th>
          })}
          </tr>          
      </thead>
    )
  }

  renderTableData() {
    return this.state.emails.map((email, index) => {
      const { title, content, date } = email
      return (
        <tr key={title}>
          <td>{title}</td>
          <td>{content}</td>
          <td>{date}</td>
          <td><button>X</button></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <button>Dodaj</button>
        <table id='emails'>
          {this.renderTableHeader()}
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}




//new Date().toISOString().slice(0, 10)




export default App;
