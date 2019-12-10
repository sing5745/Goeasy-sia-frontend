import React from 'react';


export default class Tracker extends React.Component
{
    render(){
        var link = "http://localhost:3001/download/" + this.props.excelCreated;
        return (
            <>
                <div className="container">
                    <h1>
                        "Tracker"
                    </h1>
                    <a href={link}>Download {this.props.excelCreated}</a>
                </div>
    
      
            </>
        )
    }
}