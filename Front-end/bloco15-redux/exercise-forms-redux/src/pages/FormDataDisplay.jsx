import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const { infos } = this.props;
    const { personal, professional } = infos;
    const { nome, email, cpf, endereco, cidade, estado } = personal;
    const { curriculo, cargo, descricao } = professional;

    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { professional, personal } = store.reducer;
  return { infos: { professional, personal } };
};

FormDataDisplay.propTypes = {
  infos: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);
