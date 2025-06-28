// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', event => {
	event.create('incompleted_ammo', 'create:sequenced_assembly').displayName('半成品 弹药')
})

StartupEvents.registry('item', event => {
	event.create('incompleted_rocket', 'create:sequenced_assembly').displayName('半成品 火箭筒')
})

StartupEvents.registry('item', event => {
	event.create('incompleted_40mm', 'create:sequenced_assembly').displayName('半成品 40mm子弹')
})

StartupEvents.registry('item', event => {
	event.create('rocket').displayName('火箭筒壳')
})

StartupEvents.registry('item', event => {
	event.create('40mm').displayName('40mm弹壳')
})

StartupEvents.registry('item', event => {
	event.create('steel_plate').displayName('钢板')
})

StartupEvents.registry('item', event => {
	event.create('casing').displayName('弹壳')
})
StartupEvents.registry('item', event => {
	event.create('12g').displayName('12g霰弹枪弹壳')
})
