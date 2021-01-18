// @desc    Get All Warehouses
// @route   GET /api/v1/warehouses
// @access  Public
exports.getWarehouses = (req, res, next) => {
    res.status(200).json({ success: true, msg: "show all warehouses"})
}

// @desc    Get Single Warehouse By ID
// @route   GET /api/v1/warehouses/:id
// @access  Public
exports.getWarehouse = (req, res, next) => {
    res.status(200).json({ success: true, msg: "show single warehouse"})
}

// @desc    Create a new warehouse
// @route   POST /api/v1/warehouses
// @access  Private
exports.createWarehouse = (req, res, next) => {
    res.status(200).json({ success: true, msg: "create a warehouse"})
}

// @desc    Update a warehouse
// @route   PUT /api/v1/warehouses/:id
// @access  Private
exports.updateWarehouse = (req, res, next) => {
    res.status(200).json({ success: true, msg: "update a warehouse"})
}

// @desc    Delete a warehouse
// @route   POST /api/v1/warehouses/:id
// @access  Private
exports.deleteWarehouse = (req, res, next) => {
    res.status(200).json({ success: true, msg: "delete a warehouse"})
}