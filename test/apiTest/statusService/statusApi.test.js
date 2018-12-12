
import statusFunc from '../../apiFunction/statusService/statusFunction';
import utils from '../../../Utils';

const { projectId } = utils.config;


describe('Status Api-SELF', () => {
  it('[GET] 查询自身状态', () => {
    
    /**
    * @data  用户token
    * @expect  正确的用户状态
    * 
    */
    return statusFunc.getStatus();
  });
});
