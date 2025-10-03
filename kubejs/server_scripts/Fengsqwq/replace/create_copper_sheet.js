ServerEvents.recipes(event =>{
  event.recipes.createPressing('create:copper_sheet', '#kubejs:copper_shell')
  event.recipes.createPressing('kubejs:steel_plate', 'kubejs:rocket')
  event.recipes.createPressing('kubejs:steel_plate', 'kubejs:40mm')
})