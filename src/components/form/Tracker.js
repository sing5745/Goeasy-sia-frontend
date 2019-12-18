import React from 'react';
import {API} from '../../helpers';
import { Table} from 'react-materialize';

export default class Tracker extends React.Component
{
    state = {
        excelData: null
    }


    async componentDidMount(){
        this.getData()
    }

    async getData(){
        await fetch(API() + 'api/get-excel-data', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'mode': 'no cors'
            },
          }).then(response => response.json().then(data => this.setState({excelData: data}) ));
      }  

    render(){

        var details = null
        if(this.state.excelData !== null){

             details = this.state.excelData.map((data, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <td>{data[1]}</td>
                            <td>{data[2]}</td>
                            <td>{data[3]}</td>
                        </tr>
                    </tbody>
                );
            })
        }

        var link = "http://localhost:3001/download/" + this.props.excelCreated;
        return (
            <>
                <div className="container">
                    <h1>
                        Tracker
                    </h1>
                    <a href={link}>Download {this.props.excelCreated}</a>
                    <Table hoverable={true} striped={true} id="table">
                            <thead>
                                <tr>
                                    <th data-field="tracker">Tracker</th>
                                    <th data-field="user_name">User created excel</th>
                                    <th data-field="date created">Date created</th>
                                </tr>
                            </thead>
                            {details}
                    </Table>
                </div>
    
      
            </>
        )
    }
}