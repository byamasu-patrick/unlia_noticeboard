import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText, Row, Label, Col,
    Button } from 'reactstrap';
import { motion } from 'framer-motion/dist/framer-motion';
import { Stagger, Fade } from 'react-animation-components';
import { LocalForm, Control, Errors, Form } from 'react-redux-form';

// Create validator functions

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class CommentsForm extends Component{
    constructor(props){
        super(props);
        // Bind the handleSubmit() function 
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        // Send the comment to the sever
        console.log("Comment: "+ JSON.stringify(values));
        this.props.resetDishComment(); 
        // Save the post
        this.props.postComment(this.props.dish.id, values.rating, values.author, values.comment);
    }
    render(){
        return (
            <div className='col-12 col-md-5 m-1'>
                <LocalForm model="comment_form" onSubmit={(values) => this.handleSubmit(values) }>
                <Row className='form-group'>
                        <Label htmlFor='rating' md={ 12 }>Ration</Label>
                        <Col md={ 12 }>
                            <Control.select model='.rating' id='rating' name='rating' className='form-control'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Label htmlFor='author' md='12'>Your Name</Label>
                        <Col md={ 12 }>
                            <Control.text model='.author' id='author' name='author' className='form-control'
                                placeholder='Your Name'
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                                <Errors 
                                    className='text-danger'
                                    model='.author'
                                    show='touched'
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Label htmlFor='comment' md={12}>Comment</Label>
                        <Col md = { 12 }>
                            <Control.textarea model=".comment" id="comment" name="comment"
                            className='form-control' rows="6"/>
                        </Col>
                    </Row>
                    <Row className="form-group mt-3">
                        <Col md={ { size: 3 } }>
                            <motion.div whileTap = {{ scale: 0.9 }}>
                                <Button type="submit" color="primary">Submit</Button>
                            </motion.div>
                        </Col>
                    </Row>
                </LocalForm>
            </div>
        );
    }
        
}
const RenderDish = ({ dish }) => {
    if(dish != null){
        return(
            <Card className='m-3'>
                <CardImg src = { dish.image } width="100%" alt={ dish.name } />
                <CardBody>
                    <CardTitle>{ dish.name }</CardTitle>
                    <CardText>{ dish.description }</CardText>
                </CardBody>
            </Card>
        );
    }
    else{
        return (
            <div></div>
        );
    }
};
const RenderComments = ({ comments, dish, postComment, resetDishComment }) => {
    if (comments !=  null) {
        return (
            <motion.div className='col-12 col-md-5 m-1 mt-3'>
                <h4>Comments</h4>
                <ul>
                    <Stagger in>
                        {
                            comments.map((comment) => {
                                return (
                                    <Fade in>
                                        <div className='container' key={comment.id}>
                                            <motion.div
                                                animate = {{ scale: 1.1}}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <li>
                                                    <p>{ comment.comment }</p>
                                                    <p>-- { comment.author }</p>
                                                </li>
                                            </motion.div>
                                        </div>
                                    </Fade>
                                );
                            })
                        }
                    </Stagger>
                    <CommentsForm 
                        dish = { dish }
                        postComment = { postComment }
                        resetDishComment = { resetDishComment }  />
                </ul>
            </motion.div>
        );
    }
    else{
        return (
                <CommentsForm 
                    dish = { dish.id }
                    postComment = { postComment }
                    resetDishComment = { resetDishComment } />
            );
    }
};
const DishDetails = (props) => {
        return (
            <div className='row'>
                <div className='col-12 col-md-4 mb-3 pl-1'>
                    <motion.div 
                        whileHover = {{ scale: 1 }}
                        whileTap = {{ scale: 0.9 }}
                    >
                        <RenderDish dish = { props.dish } />
                    </motion.div>
                </div> 
                <RenderComments 
                    dish_id = { props.dish }
                    comments= { props.comments }
                    postComment = { props.postComment }
                    resetDishComment= { props.resetDishComment } />               
            </div>
        );
};

export default DishDetails;