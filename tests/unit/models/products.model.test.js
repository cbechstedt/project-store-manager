const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { products } = require('../mocks/products.mock')
const connection = require('../../../src/models/connection');

describe('Testa camada model de products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recupera lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);

    const result = await productsModel.findAll();

    expect(result).to.be.deep.equal(products);
  });

  it('Recupera um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);

    const result = await productsModel.findById(1);

    expect(result).to.be.deep.equal(products[0]);
  });

  // it('Não é possível retornar um produto com id undefined', async function () {
  //   sinon.stub(connection, 'execute').resolves([]);

  //   const result = await productsModel.findById(88);

  //   expect(result).to.be.equal(undefined);
  // });
});
