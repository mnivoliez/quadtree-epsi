'use strict';

const expect = require('chai').expect;

const ContainerNode = require('./../src/containerNode');
const LeafNode = require('./../src/leafNode');

describe('Test of treeNode', function() {
  describe('Test of add point', function() {

    let rootNode;

    beforeEach(function() {
      rootNode = new ContainerNode();
    });

    it('Should add a point single point to a node', function(done){
      rootNode.addNode(new LeafNode(1,2));
      rootNode.getChildren().forEach(function(child) {
        expect(child).to.be.an.instanceof(LeafNode);
      });
      expect(rootNode.getChildren()).to.have.lengthOf(1);
      done();
    });

    it('Should be the parent of a the added point', function(done){
      rootNode.addNode(new LeafNode(1,2));
      let leaf = rootNode.getChildren()[0];
      expect(leaf.getParent()).to.equal(rootNode);
      done();
    });

    it('Should create container', function(done){
      for(let i = 0; i<5; i++) {
        rootNode.addNode(new LeafNode(i, i+3));
      }
      let counter = 0;
      rootNode.getChildren().forEach(function(child) {
        if(child instanceof ContainerNode) {
          counter++;
        }
      });
      expect(counter).to.equal(1);
      done();
    });

  });
});
