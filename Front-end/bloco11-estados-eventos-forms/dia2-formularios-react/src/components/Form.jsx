import React, { Component } from 'react';
import estados from '../helpers/estados';

class Form extends Component {
  constructor(){
    super();

    this.state = {
      name:'',
      email:'',
      cpf:'',
      endereco:'',
      cidade:'',
      estado:'AC',
      moradia:'',
    }

  }

  handleChange = ({ target }) => {
    this.setState({[target.id]: target.value

    })
  }

  setRadio = ({target}) => {
    this.setState({
      moradia: target.id,
    })
  };

  alertMessage = () => {
    alert('Preencha com cuidado as informações.');
  }

  render() {
    const {
      name,
      email,
      cpf,
      endereco,
      cidade,
      estado,
    }= this.state
    return (
      <div>
        <fieldset>
          <form>
            <label htmlFor="name">Nome:
              <input type="text" maxLength="40" style={{ textTransform: "uppercase" }} onChange={this.handleChange} id="name" value={name} required />
            </label>
            <label htmlFor="email">E-mail:
              <input type="email" maxLength="50" id="email" onChange={this.handleChange} value={email} required />
            </label>
            <label htmlFor="cpf">CPF:
              <input type="number" maxLength="11" id="cpf" onChange={this.handleChange} value={cpf} required />
            </label>
            <label htmlFor="endereco">Endereço:
              <input type="text" maxLength="200" id="endereco" onChange={this.handleChange} value={endereco} required />
            </label>
            <label htmlFor="cidade">Cidade:
              <input type="text" maxLength="28" id="cidade" onChange={this.handleChange} value={cidade} required />
            </label>
            <label htmlFor="estado">Estado:
              <select name="" id="estado" value={estado} onChange={this.handleChange}>{estados.map((estado) => (
                <option key={estado}value={ estado }>{ estado }</option>
              )           
              )}
              </select>
            </label>
            Tipo de moradia:
            <label htmlFor="casa">
              <input type="radio" name="moradia" id="casa" onChange={this.setRadio}/>Casa
            </label>
            <label htmlFor="apto"><input type="radio" name="moradia" id="apto" onChange={this.setRadio}/>Apto</label>
          </form>
        </fieldset>
        <fieldset>
          <form>
            <label htmlFor="textarea"><div>Resumo de curriculo:</div>
              <textarea name="text" id="textarea" cols="30" rows="10" maxLength="1000" required />
            </label>
            <br />
            <label htmlFor="cargo">Cargo:
              <input type="text" maxLength="40" onMouseEnter={ this.alertMessage } id="cargo" required/>
            </label>
            <label htmlFor="descricao">Descriçao do cargo:
              <input type="text" maxLength="500" required />
            </label>
          </form>
        </fieldset>
      </div>
    )

  }
}

export default Form;