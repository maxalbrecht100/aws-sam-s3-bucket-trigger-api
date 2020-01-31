import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from  './../../dnd_list/column';
import BrowseButton from './browseButton';

function SourceFiles() {
  this.BrowseButton = BrowseButton.bind(this);

    return (
      <Form.Group as={Col} className="textFieldLabel sourceFilesFormGroup">
        <Form.Row>
          <Col>
            <Form.Label className="formNotes">Source Files</Form.Label>
          </Col>
          <Col className="formBrowseButtonCol">
            { this.BrowseButton() }
          </Col>     
        </Form.Row>
          <DragDropContext
            className="textField sourceFilesField"
            onDragStart={this.onDragStart}
            onDragUpdate={this.onDragUpdate}
            onDragEnd={this.onDragEnd}
          >
            {this.state.sourceFiles.columnOrder.map((columnId) => {
              const column = this.state.sourceFiles.columns[columnId];
              const docs = column.docIds.map(docId => this.state.sourceFiles.docs[docId]);
              
              return <Column key={column.id} column={column} docs={docs} />;
            })}
          </DragDropContext>
      </Form.Group>
    )
  } 

export default SourceFiles;