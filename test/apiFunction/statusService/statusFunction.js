
const chai = require('chai');
const chaiHttp = require('chai-http');
const utils = require('../../../Utils');

chai.should();
chai.use(chaiHttp);


const statusFunction = {

  /**
   * 查询自身状态
   *
   * @returns
   */
  getStatus(body) {
    return chai.request(utils.config.apiGateway)
      .get('/iam/v1/users/self')     
      .set('Authorization', global.user.token)
      .set('Content-Type', 'application/json')
      .then((res) => {
        res.should.have.status(200);
        return res;
      });      
  },
};

export default statusFunction;