ServerEvents.recipes(event =>{
 event.recipes.create.milling(Item.of('create:crushed_raw_copper',1),'#forge:ingots/copper')
  event.recipes.create.milling(Item.of('create:crushed_raw_copper',1),'#forge:raw_materials/copper')

 event.recipes.create.milling(Item.of('create:crushed_raw_zinc',1),'#forge:raw_materials/zinc')
  event.recipes.create.milling(Item.of('create:crushed_raw_zinc',1),'#forge:ingots/zinc')

 event.recipes.create.mixing(['kubejs:crushed_brass'], [Fluid.lava(500),'create:crushed_raw_copper', 'create:crushed_raw_zinc'])
 event.recipes.create.mixing(['kubejs:crushed_brass'], [Fluid.lava(500),'9x #forge:nuggets/copper', '9x #forge:nuggets/zinc'])

 event.smelting('2x create:brass_ingot', 'kubejs:crushed_brass')
})
