import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reset, reduxForm } from 'redux-form';
import { numberSelected } from '../actions';


class NumberInput extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : '' }`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          type='text'
          {...field.input}
        />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.numberSelected(values.number_selected);
  }

  render() {
    const { handleSubmit } = this.props;

    if (!isNaN(this.props.selectedNumber)) {
      return <noscript />;
    }

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label='Enter a random number between 1 and 100 to guess which movie is in that position in the IMDB Top 100'
            name='number_selected'
            component={this.renderField}
          />
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  const numberSelected = parseInt(values.number_selected)

  if (!numberSelected || isNaN(values.number_selected) || numberSelected < 0 || numberSelected > 100 ) {
    errors.number_selected = 'Make sure its only numbers between 1 and 100'
  }

  return errors;
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('SelectNumber'));

function mapStateToProps(state) {
  return {
    selectedNumber: state.selectedNumber
  };
}

export default reduxForm({
  validate,
  form: 'SelectNumber',
  onSubmitSuccess: afterSubmit
})(
  connect(mapStateToProps,{ numberSelected })(NumberInput)
);
