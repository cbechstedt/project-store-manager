const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const { productsController } = require('../../../src/controllers');
const { products, productId01 } = require('../mocks/products.mock')
const { productService } = require('../../../src/services');
const { expect } = chai;

chai.use(sinonChai);

describe('Testa camada controller de products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recupera lista de produtos', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "findAll").resolves({
      type: null,
      message: products,
    });

    await productsController.getProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Recupera um produto a partir do seu id', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'findById').resolves({ type: null, message: productId01 });

    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productId01);
  });

  // it('Não é possível retornar um produto com id undefined', async function () {
  //   sinon.stub(productsController, 'getProductById').resolves(undefined);

  //   const result = await productService.findById(88);

  //   expect(result.type).to.be.equal(404);
  //   expect(result.message).to.be.equal('Product not found');
  // });
});