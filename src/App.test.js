import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o portfólio com as seções principais', () => {
  render(<App />);

  expect(screen.getByText('Sou o Fabio Silva')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Resumo Profissional/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^Projetos$/i })).toBeInTheDocument();
});

test('mostra os quatro projetos, cada um com o link de acesso', () => {
  render(<App />);

  // O card é um botão que vira; o verso só entra na árvore de
  // acessibilidade depois de virado, por isso a busca é pelo rótulo do card.
  ['RainFlow SaaS', 'TiringaStore', 'FinançasFlow', 'Vitalize Consulta'].forEach((projeto) => {
    expect(screen.getByRole('button', { name: new RegExp(projeto) })).toBeInTheDocument();
  });

  expect(screen.getByText('Acessar Blog').closest('a'))
    .toHaveAttribute('href', 'https://blog.rainflow.com.br/');
  expect(screen.getByText('Ver Site').closest('a'))
    .toHaveAttribute('href', 'https://vitalizeconsulta.com.br/');
});
