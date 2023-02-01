const express = require('express')

const FruitsController = require('../controller/fruits.controller')
const {FruitValidate,FruitIdValidate,updateFruitValidate} = require("../middleware/fruit.middleware")

let router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Fruit:
 *       type: object
 *       required:
 *         - name
 *         - color
 *       properties:
 *         name:
 *           type: string
 *           description: The fruit name
 *         color:
 *           type: string
 *           description: The fruit color 
 *       example:       
 *           name: apple
 *           color: white
 */

/**
 * @swagger
 * tags:
 *   name: Fruits
 *   description: The fruits managing API
 * /fruits:
 *   post:
 *     summary: Create a new fruit
 *     tags: [Fruits]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fruit'
 *     responses:
 *       201:
 *         description: The created user.
 *         
 *       500:
 *         description: Some server error
 *
 */ 

router.post('/fruits',FruitValidate, FruitsController.POST)

// fruits list
/** 
* @swagger
* tags:
*   name: Fruits
*   description: The Fruits managing API
* /fruits:
*   get:
*     summary: Lists all the fruits
*     tags: [Fruits]
*     responses:
*       200:
*         description: ok
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Fruit'
*/

router.get('/fruits',FruitsController.GET)


// get one fruit
/** 
* @swagger
* /fruit/{id}:
*   get:
*     summary: Get one fruit by id
*     tags: [Fruits]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The fruit id
*     responses:
*       200:
*         description: The fruit response by id
*         content:
*           application/json:
*             schema:
*                  $ref: '#/components/schemas/Fruit'
*       404:
*         description: The fruit was not found
*/

router.get('/fruit/:id',FruitIdValidate, FruitsController.GET_ONE_FRUIT)



// delete one fruit
/** 
* @swagger
* /fruit/{id}:
*  delete:
*     summary: Remove the fruit by id
*     tags: [Fruits]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The fruit id
*
*     responses:
*       200:
*         description: The fruit was deleted
*       404:
*         description: The fruit was not found
*/

router.delete('/fruit/:id',FruitIdValidate,  FruitsController.DELETE)


//update one fruit
/** 
*  @swagger
* /fruit/{id}:
*   put:
*    summary: Update the fruit by the id
*    tags: [Fruits]
*    parameters:
*      - in: path
*        name: id
*        schema:
*          type: string
*        required: true
*        description: The fruit id
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Fruit'
*    responses:
*      200:
*        description: The fruit was updated
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Fruit'
*      404:
*        description: The fruit was not found
*      500:
*        description: Some error happened
*/
router.put('/fruit/:id',updateFruitValidate, FruitsController.UPDATE_FRUIT)

      
      
 


module.exports = router