module.exports = {
    getProduct (req, res) {
        const db = req.app.get('db')

        db.get_inventory()
            .then( inventory => res.status(200).send(inventory))
            .catch( err => res.status(500).send(err))
    },

    addNewProduct (req, res) {
        const db = req.app.get('db')
        const { name, price, img } = req.body;

        db.create_product([name, price, img])
            .then( product => res.sendStatus(200))
            .catch( err => console.log(err))
    },
    
    deleteProduct (req, res) {
        const db = req.app.get('db')

        db.delete_product(req.params.id)
            .then( inventory => res.sendStatus(200))
            .catch( err => res.status(500).send(err))
    }
}