module.exports = {
  name: {
    type: 'string',
    index: true,
  },
  type: {
    type: 'string',
  },
  ingredients: {
    type: 'relationships',
    target: 'Ingredient',
    relationship: 'INGREDIENTS',
    direction: 'out',
    properties: {
      amount: 'string',
      accion: 'string',
      order: 'number',
    },
    eager: true,
  },
};
