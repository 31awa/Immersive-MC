// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
  event.recipes.create.pressing('kubejs:steel_plate', '#forge:ingots/steel')
})

ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:rocket', 'kubejs:steel_plate').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:40mm', 'kubejs:steel_plate').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:9mm', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:45acp', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:46x30', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:556x45', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:762x54', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:762x39', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:762x25', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:357mag', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:58x42', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:30_06', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:68x51fury', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:50ae', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:50bmg', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:57x28', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:308', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:45_70', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:338', '#forge:plates/brass').processingTime(250)
})
ServerEvents.recipes(event => {
  event.recipes.create.cutting('kubejs:12g', '#forge:plates/brass').processingTime(250)
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 5,'{AmmoId:"tacz:9mm"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:9mm', [ // 'create:golden_sheet' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 3,'{AmmoId:"tacz:45acp"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:45acp', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:46x30"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:46x30', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:556x45"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:556x45', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:762x54"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:762x54', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:762x39"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:762x39', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:762x25"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:762x25', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:357mag"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:357mag', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:58x42"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:58x42', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:30_06"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:30_06', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:68x51fury"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:68x51fury', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:50ae"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:50ae', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#c:lapis']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:57x28"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:57x28', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#c:lapis']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:308"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:308', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#c:lapis']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:45_70"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:45_70', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#c:lapis']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:338"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:338', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#c:lapis']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:338"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:338', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#c:lapis']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:338"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:338', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#c:lapis']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:50bmg"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:50bmg', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#c:lapis']),
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:blaze_powder']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2, '{AmmoId:"tacz:12g"}').withChance(130.0),Item.of('create:brass_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:12g', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/iron']),
		event.recipes.createDeploying('kubejs:incompleted_ammo', ['kubejs:incompleted_ammo', '#forge:nuggets/zinc']),
		event.recipes.createPressing('kubejs:incompleted_ammo', 'kubejs:incompleted_ammo'),
	]).transitionalItem('kubejs:incompleted_ammo').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', '{AmmoId:"tacz:rpg_rocket"}').withChance(130.0),Item.of('kubejs:steel_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:rocket', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_rocket', ['kubejs:incompleted_rocket', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_rocket', ['kubejs:incompleted_rocket', '#forge:ingots/iron']),
		event.recipes.createDeploying('kubejs:incompleted_rocket', ['kubejs:incompleted_rocket', 'minecraft:tnt']),
		event.recipes.createPressing('kubejs:incompleted_rocket', 'kubejs:incompleted_rocket'),
	]).transitionalItem('kubejs:incompleted_rocket').loops(1) // set the transitional item and the number of loops
})

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('tacz:ammo', 2,'{AmmoId:"tacz:40mm"}').withChance(130.0),Item.of('kubejs:steel_sheet').withChance(8.0), // this is the item that will appear in JEI as the result
	], 'kubejs:40mm', [ // 'create:golden_sheet' is the input
		 
		event.recipes.createDeploying('kubejs:incompleted_40mm', ['kubejs:incompleted_40mm', 'minecraft:gunpowder']),
		 
		event.recipes.createDeploying('kubejs:incompleted_40mm', ['kubejs:incompleted_40mm', '#forge:ingots/iron']),
		event.recipes.createDeploying('kubejs:incompleted_40mm', ['kubejs:incompleted_40mm', 'minecraft:tnt']),
		event.recipes.createPressing('kubejs:incompleted_40mm', 'kubejs:incompleted_40mm'),
	]).transitionalItem('kubejs:incompleted_40mm').loops(1) // set the transitional item and the number of loops
})

//ban掉子弹装配台
ServerEvents.recipes(event => {
event.remove({id: 'tacz:ammo_workbench'})
})

ServerEvents.recipes(event => {
event.remove({id: 'cib:cib_printer_bullet'})
})

ServerEvents.recipes(event => {
event.stonecutting('kubejs:12g','create:brass_sheet')
event.stonecutting('kubejs:308','create:brass_sheet')  
event.stonecutting('kubejs:30_06','create:brass_sheet')  
event.stonecutting('kubejs:338','create:brass_sheet')
event.stonecutting('kubejs:357mag','create:brass_sheet')
event.stonecutting('kubejs:45_70','create:brass_sheet')
event.stonecutting('kubejs:45acp','create:brass_sheet')
event.stonecutting('kubejs:46x30','create:brass_sheet')
event.stonecutting('kubejs:50ae','create:brass_sheet')
event.stonecutting('kubejs:50bmg','create:brass_sheet')
event.stonecutting('kubejs:556x45','create:brass_sheet')
event.stonecutting('kubejs:57x28','create:brass_sheet')
event.stonecutting('kubejs:58x42','create:brass_sheet')
event.stonecutting('kubejs:68x51fury','create:brass_sheet')
event.stonecutting('kubejs:762x25','create:brass_sheet')
event.stonecutting('kubejs:762x39','create:brass_sheet')
event.stonecutting('kubejs:762x54','create:brass_sheet')
event.stonecutting('kubejs:9mm','create:brass_sheet')
})