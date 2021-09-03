const router = require('express').Router();
const controller = require('./controller');

//sync
router.get('/',  controller.getUsers);
router.get('/:Id',  controller.getUser);
router.post('/create',  controller.CreateUser);
router.put('/update',  controller.UpdateUser);
router.delete('/:Id',  controller.DeleteUser);

//Async
//router.getAsync('/',  controller.getUsers);
//router.getAsync('/:Id',  controller.getUser);
//router.postAsync('/create',  controller.CreateUser);
//router.putAsync('/update',  controller.UpdateUser);
//router.deleteAsync('/:Id',  controller.DeleteUser);


module.exports = router;