const router = require('express').Router();
const LoginController = require('../controller/login');
const UserController = require('../controller/user');
const HistoryController=require('../controller/history');

// const ProfileController = require('../controllers/profile');
// const TodoListController = require('../controllers/todoList');

//login page
router.post('/login', LoginController.login);
router.post('/createUser', UserController.createUser);
router.get('/getUserHistories/:id', HistoryController.getUserHistories);
router.post('/createNewHistory/:id', HistoryController.createNewHistory);


// //profile page
// router.post('/updateUser/:id', ProfileController.updateUser);
// router.get('/deleteUser/:id', ProfileController.deleteUser);

// //todoList page
// router.post('/createNewTask/:id', TodoListController.createNewTask);
// router.get('/getUserTasks/:id', TodoListController.getUserTasks);


// router.get('/userTasksTrue/:id', TodoListController.userTasksTrue);

module.exports = router;