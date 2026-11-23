// Importação das 10 funções
const {
  calcularMedia,
  verificarAprovacao,
  classificarFaixaEtaria,
  converterKmParaMilhas,
  gerarEmailCorporativo,
  adicionarItemCarrinho,
  calcularSalarioLiquido,
  criarProduto,
  ehTrianguloValido,
  removerElemento
} = require('./exercicios');

describe('🧪 Suíte de Testes Unitários - 10 Regras de Negócio', () => {

  // TESTE 1 - calcularMedia
  test('deve calcular a média e validar notas', () => {
    expect(calcularMedia(7, 8, 9)).toBe(8);

    expect(calcularMedia(7.5, 8.0, 9.0))
      .toBeCloseTo(8.17, 2);

    expect(() => calcularMedia(-1, 8, 9))
      .toThrow('Nota inválida: deve estar entre 0 e 10');

    expect(() => calcularMedia(7, 11, 9))
      .toThrow('Nota inválida: deve estar entre 0 e 10');
  });

  // TESTE 2 - verificarAprovacao
  test('deve verificar a aprovação por média e frequência', () => {
    expect(verificarAprovacao(7.0, 75)).toBe(true);

    expect(verificarAprovacao(8.5, 80)).toBe(true);

    expect(verificarAprovacao(6.9, 90)).toBe(false);

    expect(verificarAprovacao(9.0, 74)).toBe(false);
  });

  // TESTE 3 - classificarFaixaEtaria
  test('deve classificar corretamente as faixas etárias', () => {
    expect(classificarFaixaEtaria(10)).toBe('Criança');

    expect(classificarFaixaEtaria(15)).toBe('Adolescente');

    expect(classificarFaixaEtaria(25)).toBe('Adulto');

    expect(classificarFaixaEtaria(65)).toBe('Idoso');

    expect(() => classificarFaixaEtaria(-5))
      .toThrow('Idade não pode ser negativa');
  });

  // TESTE 4 - converterKmParaMilhas
  test('deve converter quilômetros para milhas', () => {
    expect(converterKmParaMilhas(10))
      .toBeCloseTo(6.21, 2);

    expect(converterKmParaMilhas(0)).toBe(0);

    expect(() => converterKmParaMilhas(-10))
      .toThrow('Distância não pode ser negativa');
  });

  // TESTE 5 - gerarEmailCorporativo
  test('deve gerar e-mail corporativo padronizado', () => {
    expect(
      gerarEmailCorporativo('Lucas', 'Silva', 'empresa.com')
    ).toBe('lucas.silva@empresa.com');

    expect(
      gerarEmailCorporativo(' Ana ', ' Souza ', 'TECH.IO')
    ).toBe('ana.souza@tech.io');
  });

  // TESTE 6 - adicionarItemCarrinho
  test('deve adicionar item ao carrinho sem modificar o original', () => {
    const carrinhoInicial = ['Monitor', 'Mouse'];

    const novoCarrinho = adicionarItemCarrinho(
      carrinhoInicial,
      'Teclado'
    );

    expect(novoCarrinho).toEqual([
      'Monitor',
      'Mouse',
      'Teclado'
    ]);

    expect(novoCarrinho).toHaveLength(3);

    expect(carrinhoInicial).toHaveLength(2);
  });

  // TESTE 7 - calcularSalarioLiquido
  test('deve calcular o salário líquido e validar os valores', () => {
    expect(calcularSalarioLiquido(3000, 10)).toBe(2700);

    expect(calcularSalarioLiquido(5000, 0)).toBe(5000);

    expect(() => calcularSalarioLiquido(0, 10))
      .toThrow('Valores de salário ou desconto inválidos');

    expect(() => calcularSalarioLiquido(3000, -5))
      .toThrow('Valores de salário ou desconto inválidos');
  });

  // TESTE 8 - criarProduto
  test('deve criar produto com os atributos corretos', () => {
    const produto = criarProduto(
      1,
      'Monitor',
      899.90,
      'Informática'
    );

    expect(produto).toEqual({
      id: 1,
      nome: 'Monitor',
      preco: 899.90,
      categoria: 'Informática',
      emEstoque: true
    });

    expect(() => criarProduto(2, 'Mouse', 0, 'Informática'))
      .toThrow('Preço deve ser maior que zero');

    expect(() => criarProduto(3, 'Teclado', -50, 'Informática'))
      .toThrow('Preço deve ser maior que zero');
  });

  // TESTE 9 - ehTrianguloValido
  test('deve validar as medidas de um triângulo', () => {
    expect(ehTrianguloValido(3, 4, 5)).toBe(true);

    expect(ehTrianguloValido(1, 2, 10)).toBe(false);

    expect(ehTrianguloValido(0, 4, 5)).toBe(false);

    expect(ehTrianguloValido(-1, 4, 5)).toBe(false);
  });

  // TESTE 10 - removerElemento
  test('deve remover elementos sem modificar o array original', () => {
    const listaOriginal = ['banana', 'maca', 'uva'];

    const novaLista = removerElemento(listaOriginal, 'maca');

    expect(novaLista).toEqual(['banana', 'uva']);

    expect(removerElemento([1, 2, 3], 99))
      .toEqual([1, 2, 3]);

    expect(listaOriginal).toHaveLength(3);

    expect(listaOriginal).toEqual([
      'banana',
      'maca',
      'uva'
    ]);
  });

});
