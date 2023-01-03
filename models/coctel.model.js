module.exports = {
    name: {
        type: 'string',
        index: true,
    },
    type: {
        type: 'string'
    },
    // preparation: {
    //     type: 'string'
    // },
    ingredients: {
        type: 'relationships',
        target: 'Ingredient',
        relationship: 'INGREDIENTS',
        direction: 'out',
        properties: {
            amount: "string",
            accion: "string",
            order: "integer"
        },
        eager: true
    },
}