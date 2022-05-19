import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import { actionLogin } from '../redux/action/action';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { personalInfo } = this.props;
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const payload = { nome, email, cpf, endereco, cidade, estado };
    personalInfo(payload);

    this.setState({
      redirect: true,
    });
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado, redirect } = this.state;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal',
    ];
    return (
      <fieldset>
        <Input
          label="nome: "
          type="text"
          onChange={ this.handleChange }
          value={ nome }
          name="nome"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="endereco: "
          type="text"
          onChange={ this.handleChange }
          value={ endereco }
          name="endereco"
          required
        />
        <Input
          label="cidade: "
          type="text"
          onChange={ this.handleChange }
          name="cidade"
          value={ cidade }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ estado }
          label="Estado: "
          id="estado"
          name="estado"
          options={ states }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ this.handleClick }
        />

        {
          redirect && <Redirect to="/professionalform" />
        }
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  personalInfo: (payload) => dispatch(actionLogin(payload)),
});

PersonalForm.propTypes = {
  personalInfo: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(PersonalForm);
