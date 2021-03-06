import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { actionProfessional } from '../redux/action/action';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { professionalInfo } = this.props;
    const { curriculo, cargo, descricao } = this.state;
    const infos = { curriculo, cargo, descricao };
    professionalInfo(infos);

    this.setState({
      redirect: true,
    });
  }

  render() {
    const { curriculo, cargo, descricao, redirect } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button
          label="enviar"
          onClick={ this.handleClick }
        />
        { redirect && <Redirect to="/formdisplay" /> }
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  professionalInfo: (infos) => dispatch(actionProfessional(infos)),
});

ProfessionalForm.propTypes = {
  professionalInfo: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(ProfessionalForm);
