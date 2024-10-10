import React from 'react';
import './NutricaoAnimal.css';

const NutricaoAnimal = () => {
  return (
    <div className="nutricaoanimal-container">
      <h1 className="nutricaoanimal-title">Nutrição Animal: Entenda o Básico</h1>
      <p className="nutricaoanimal-paragraph">
        A nutrição animal é sobre entender o que os animais precisam comer para crescerem saudáveis e fortes. Uma alimentação equilibrada ajuda no crescimento, na reprodução e na saúde geral dos bichos. Pesquisadores trabalham para descobrir como os animais digerem e absorvem os nutrientes, além de desenvolver rações que sejam boas para os animais e o meio ambiente.
      </p>

      <h2 className="nutricaoanimal-subtitle">Palavras-chave</h2>
      <ul className="nutricaoanimal-list">
        <li>Nutrição Animal</li>
        <li>Saúde</li>
        <li>Dieta Balanceada</li>
        <li>Bem-estar</li>
        <li>Pesquisa</li>
        <li>Rações</li>
      </ul>

      <h2 className="nutricaoanimal-subtitle">Tópicos de Interesse</h2>
      <ul className="nutricaoanimal-list">
        <li><strong>Nutrientes Essenciais:</strong> Como proteínas, carboidratos, gorduras, vitaminas e minerais.</li>
        <li><strong>Digestão e Absorção:</strong> Como o corpo dos animais processa a comida.</li>
        <li><strong>Formulação de Rações:</strong> Como são criadas as dietas para os bichos.</li>
        <li><strong>Nutrição para Diferentes Espécies:</strong> Como alimentar bovinos, suínos, aves, cavalos, etc.</li>
        <li><strong>Nutrição e Bem-Estar:</strong> Como a alimentação afeta a qualidade de vida dos animais.</li>
        <li><strong>Nutrição e Sustentabilidade:</strong> Como a produção de alimentos para animais pode ser mais ecológica.</li>
      </ul>

      <h2 className="nutricaoanimal-subtitle">Tabela de Nutrientes Essenciais</h2>
      <table className="nutricaoanimal-table">
        <thead>
          <tr>
            <th>Nutriente</th>
            <th>Função</th>
            <th>Fontes Comuns</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Proteínas</td>
            <td>Construção e reparo do corpo</td>
            <td>Carne, peixe, ovos, soja</td>
          </tr>
          <tr>
            <td>Carboidratos</td>
            <td>Energia rápida</td>
            <td>Milho, trigo, arroz</td>
          </tr>
          <tr>
            <td>Gorduras</td>
            <td>Energia e absorção de vitaminas</td>
            <td>Óleos vegetais, gordura animal</td>
          </tr>
          <tr>
            <td>Vitaminas</td>
            <td>Manutenção da saúde</td>
            <td>Frutas, vegetais, fígado</td>
          </tr>
          <tr>
            <td>Minerais</td>
            <td>Ossos, dentes, fluídos corporais</td>
            <td>Sal, cálcio, fósforo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutricaoAnimal;
