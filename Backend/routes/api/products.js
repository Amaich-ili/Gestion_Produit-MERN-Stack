// 'use strict';

const express = require('express');
const router = express.Router();

// Load Phone model
const Phone = require('../../models/phone.js');

// Create a Schema
/**
 * @swagger
 * definitions:
 *   phone:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *          quantity:
 *              type: integer
 *          price:
 *              type: integer
 *          version:
 *              type: string
 *          chargeur:
 *              type: string
 *          image:
 *              type: string 
 *   error:
 *     type: object
 *     properties:
 *       error:
 *         type: object
 *         properties:
 *           status:
 *             type: integer
 *           message:
 *             type: string
 */


// @route GET api/products/test
// @description tests products route
// @access Public
router.get('/test', (req, res) => res.send('product route testing!'));


/**
 * @swagger
 * /api/products:
 *   get:
 *     tags: [Display Products]
 *     description: Return all Products
 *     responses:
 *       200:
 *         description: Display all Products in Database
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/phone'
 *       404:
 *         description: No Products found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/error'
 */


// @route GET api/products
// @description Get all products
// @access Public
router.get('/', async(req, res) => {
    await Phone.find()
    .then(phones => res.status(200).json(phones))
    .catch(err => res.status(404).json({ error: 'No Products found' }));
});


/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     tags: [Search Product]
 *     description: Return the Product of the given id
 *     parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: id of an existing Product
 *              schema:
 *                  type: string
 *                  required: true
 *     responses:
 *       200:
 *         description: Display the Product with a given id
 *       404:
 *         description: No Products found
 */

// @route GET api/products/:id
// @description Get single product by id
// @access Public
router.get('/:id', async(req, res) => {
    await Phone.findById(req.params.id)
    .then(phone => res.status(200).json(phone))
    .catch(err => res.status(404).json({ error: 'No Products found' }));
});


/**
 * @swagger
 * /api/products:
 *   post:
 *     tags: [Add Product]
 *     description:  Create a new product
 *     requestBody:
 *          required: true 
 *          content:
 *               application/json:
 *                     schema:
 *                         $ref: '#/definitions/phone'
 *     responses:
 *       200:
 *         description: Added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/phone'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/error'
 */


// @route GET api/products
// @description add/save product
// @access Public
router.post('/',  async(req, res) => {
    await Phone.create(req.body)
    .then(phone => res.status(200).json({ msg: 'Product added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this product' }));
});


/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     tags: [Update Product]
 *     description: Return the Product of the given id
 *     parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: id of an existing Product
 *              schema:
 *                  required: true
 *     requestBody:
 *          required: true 
 *          content:
 *               application/json:
 *                     schema:
 *                         $ref: '#/definitions/phone'
 *     responses:
 *       200:
 *         description: Updated Successfully
 *       400:
 *         description: No Products found
 */


// @route GET api/products/:id
// @description Update product
// @access Public
router.put('/:id', async(req, res) => {
    await Phone.findByIdAndUpdate(req.params.id, req.body)
    .then(phone => res.status(200).json({ msg: 'Updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update the Database' })
    );
});


/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     tags: [Delete Product]
 *     description: Return a deleted Product 
 *     parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: id of an existing Product
 *              schema:
 *                  required: true
 *     responses:
 *       200:
 *         description: Deleted Successfully
 *       404:
 *         description: No Products found
 */


// @route GET api/products/:id
// @description Delete product by id
// @access Public
router.delete('/:id', async(req, res) => {
    await Phone.findByIdAndRemove(req.params.id, req.body)
    .then(phone => res.status(200).json({ mgs: 'product entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a product' }));
});

module.exports = router;