const Category = require("../models/CategoryModel");

const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find({}).sort({name: "asc"}).orFail();
        res.json(categories);
    } catch (error) {
        next(error);
    }
};

const newCategory = async (req, res, next) => {
    try {
        const {category} = req.body;
        if (!category) {
            res.status(400).send("Category input is required");
        }
        const categoryExists = await Category.findOne({name: category});
        if (categoryExists) {
            res.status(400).send("Category already exists");
        }
        res.send(category);
    } catch (err) {
        next(err);
    }
};

const deleteCategory = async (req, res, next) => {
    // return res.send(req.params.category);
    try {
        if (req.params.category !== "Choose category") {
            const categoryExists = await Category.findOne({
                name: decodeURIComponent(req.params.category),
            }).orFail();
            await categoryExists.remove();
            res.json({categoryDeleted: true});
        }
    } catch (err) {
        next(err);
    }
};

const saveAttr = async (req, res, next) => {
    const {key, val, categoryChoosen} = req.body;
    if (!key || !val || !categoryChoosen) {
        return res.status(400).send("All inputs are required");
    }
    try {
        const category = categoryChoosen.split("/")[0];
        const categoryExists = await Category.findOne({name: category}).orFail();
        if (categoryExists.attrs.length > 0) {
            var keyDoesNotExistsInDatabase = true;

            categoryExists.attrs.map((item, idx) => {
                if (item.key === key) {
                    keyDoesNotExistsInDatabase = false;
                    var copyAttributeValues = [...categoryExists.attrs[idx].value];
                    copyAttributeValues.push(val);
                    var newAttributeValues = [...new Set(copyAttributeValues)];
                    categoryExists.attrs[idx].value = newAttributeValues;
                }
            });

            if (keyDoesNotExistsInDatabase) {
                categoryExists.attrs.push({key: key, value: [val]});
            }
        } else {
            categoryExists.attrs.push({key: key, value: [val]});
        }
        await categoryExists.save();
        let cat = await Category.find({}).sort({name: "asc"});
        return res.status(201).json({categoriesUpdated: cat});
    } catch (err) {
        next(err);
    }
};

module.exports = {getCategories, newCategory, deleteCategory, saveAttr};
