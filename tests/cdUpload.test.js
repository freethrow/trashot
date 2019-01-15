const chai = require('chai');
const expect = chai.expect;

chai.use(require('chai-url'));

cdUpload = require('../cdUpload.js');
downloadImage = require('../download');

// download an image
downloadImage();


describe('Testing cdUploader', () => {

    cdUpload('../images/stockton.jpg');

    it('should find a file', () => {
      


      expect(1).to.equal(2);

      })
    });

  
