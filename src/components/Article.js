import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class Article extends Component {
  render() {
    let classNames = "";
    if(this.props.mode === 'welcome'){
      classNames +=" visually-hidden"; // 공백!
    }
    console.log('Article render');
    return (
      <article>
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.desc}</p>
        <div className={classNames}>
        <hr/>
        <div className="d-flex justify-content-end gap-2">
          <Button
           variant="secondary"
           size="sm"
           onClick={(e)=>{
            e.preventDefault();
            this.props.onChangePage('modify');
           }}
           >Modify</Button>
          <Button 
          variant="danger" 
          size="sm" 
          onClick={(e)=>{
            e.preventDefault();
            this.props.onChangePage('delete');
          }}>Delete</Button>
        </div>
        </div>
      </article>
    )
  }
}
