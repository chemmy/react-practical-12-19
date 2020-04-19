import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createUserPost } from '../../actions/userActions';

function UserCreatePost({ handleSubmit, createUserPost }) {
  const [userId, setUserId] = useState(null);

  const history = useHistory();
  const match = useRouteMatch();
  useEffect(() => {
    const userId = match.params.id;
    setUserId(userId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  const renderInput = ({ input, label, meta, type }) => {
    const className = `field ${meta.touched && meta.error ? 'error': ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        {type === 'textarea'
          ? <textarea {...input} />
          : <input {...input} autoComplete='off' />
        }
      </div>
    )
  };

  const onSubmit = (formValues) => {
    const newPost = { ...formValues, userId: userId }
    createUserPost(newPost);
    history.push(`/users/${userId}`);
  }
  
  return (
    <form className='ui form error' onSubmit={handleSubmit(onSubmit)}>
      <h3>Create New Post</h3>
      <Field name='title' component={renderInput} label='Enter title' />
      <Field name='body' component={renderInput} type='textarea' label='Enter post body' />
      <button className='ui button primary'>Submit</button>
    </form>
  )
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Required';
  }

  if (!formValues.body) {
    errors.body = 'Required';
  }

  return errors;
};

export default reduxForm({
  form: 'postCreate',
  validate
})(connect(null, { createUserPost })(UserCreatePost));
