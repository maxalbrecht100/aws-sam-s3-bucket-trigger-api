// src/js/components/List.js

// This component, List, will interact with the Redux store
// The key for connecting a React component with Redux is connect.
//      It takes at least one argument.
// We want List to get a list of articles.
//     It is therefore a matter of connecting
//            state.articles
//        with
//            the component
//     We do this with mapStateToProps
import React, { Component, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from "react-redux";
import { ListGroup } from 'react-bootstrap'
import "./List.css"
import ListItem from  './ListItem/ListItem';
import { Scrollbars } from 'react-custom-scrollbars';

function mapStateToProps(state){
  return { 
    ...state,
    articles: state.articles
  };
};

class ConnectedList extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    this.dispatch = dispatch;
  }
  constructor(props){
    super(props); 
    this.articles = props.articles;
    console.log("props.articles:");
    console.log(props.articles);
    this.render = this.render.bind(this);
  }

  render() {
    console.log("rendering list group...");

    return (
      <Fragment>
        <Form.Label className="textFieldLabel">Submitted Jobs</Form.Label>
        <Scrollbars className="scrollBars" >
          <ListGroup className="submittedJobsListGroup">
            {
              this.props.articles.map(
                el => ( <ListItem key={el.id} ListItemObject={el} /> )
              )
            }
          </ListGroup>
        </Scrollbars>
      </Fragment>
    )
  }
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;