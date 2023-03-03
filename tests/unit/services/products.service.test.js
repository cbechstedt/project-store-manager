const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { products } = require('../mocks/products.mock')
const { productsModel } = require('../../../src/models');

describe('Testa camada service de products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recupera lista de produtos', async function () {
    sinon.stub(productsModel, 'findAll').resolves(products);

    const result = await productService.findAll();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(products);
  });

  it('Recupera um produto a partir do seu id', async function () {
    sinon.stub(productsModel, 'findById').resolves(products[0]);

    const result = await productService.findById(1);

    expect(result.message).to.be.deep.equal(products[0]);
  });

  it('Não é possível retornar um produto com id undefined', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);

    const result = await productService.findById(88);

    expect(result.type).to.be.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.be.equal('Product not found');
  });
});