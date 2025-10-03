ServerEvents.recipes(event =>{
 event.recipes.create.milling(Item.of('minecraft:quartz',1).withChance(0.20),'minecraft:diorite')
 event.recipes.create.milling(Item.of('minecraft:quartz',1).withChance(0.20),'#create:stone_types/diorite')
})