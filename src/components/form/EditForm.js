import React from 'react';


export default class EditForm extends React.Component
{
    render(){
        
        return (
            <>
         <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-primary uk-card-body">
            <h3 class="uk-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-body">
            <h3 class="uk-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
      
            </>
        )
    }
}