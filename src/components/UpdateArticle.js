import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class UpdateArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title : this.props.data.title,
      desc : this.props.data.desc
    }
  }
  modifyValue = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <section>
        <article>
          <h2>Update Article</h2>
          <Form onSubmit={(e)=>{
            e.preventDefault();
            this.props.onsubmit(
              this.state.title,
              this.state.title
            );
          }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              value={this.state.title}
              // value는 readonly로 적용됨 defaultValue는 수정 가능
              onChange={(e)=>{
                this.setState({
                  title:e.target.value
                })
              }}
              onChange={this.modifyValue}
              type="text" 
              name="title" 
              placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control 
              value={this.state.desc}
              // value는 readonly로 적용됨 defaultValue는 수정 가능
              onChange={(e)=>{
                this.setState({
                  desc:e.target.value
                })
              }}
              onChange={this.modifyValue}
              as="textarea" 
              name="desc" 
              rows={3} />
            </Form.Group>
            <Button 
            type="submit" 
            variant="success"
            >Submit</Button>
          </Form>
        </article>
      </section>
    )
  }
}
