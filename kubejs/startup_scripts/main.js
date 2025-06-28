// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', event => {
	event.create('incompleted_ammo', 'create:sequenced_assembly').displayName('半成品弹药')
})

StartupEvents.registry('item', event => {
	event.create('incompleted_rocket', 'create:sequenced_assembly').displayName('半成品火箭筒')
})

StartupEvents.registry('item', event => {
	event.create('incompleted_40mm', 'create:sequenced_assembly').displayName('半成品40mm子弹')
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
	event.create('9mm').displayName('9mm弹壳')
})

StartupEvents.registry('item', event => {
	event.create('45acp').displayName('45acp弹壳')
})

StartupEvents.registry('item', event => {
	event.create('46x30').displayName('46x30弹壳')
})

StartupEvents.registry('item', event => {
	event.create('556x45').displayName('556x45弹壳')
})

StartupEvents.registry('item', event => {
	event.create('762x54').displayName('762x54弹壳')
})

StartupEvents.registry('item', event => {
	event.create('762x39').displayName('762x39弹壳')
})

StartupEvents.registry('item', event => {
	event.create('762x25').displayName('762x25弹壳')
})

StartupEvents.registry('item', event => {
	event.create('357mag').displayName('357mag弹壳')
})

StartupEvents.registry('item', event => {
	event.create('58x42').displayName('58x42弹壳')
})

StartupEvents.registry('item', event => {
	event.create('30_06').displayName('30 06弹壳')
})

StartupEvents.registry('item', event => {
	event.create('68x51fury').displayName('68x51fury弹壳')
})

StartupEvents.registry('item', event => {
	event.create('50ae').displayName('50ae弹壳')
})

StartupEvents.registry('item', event => {
	event.create('50bmg').displayName('50bmg弹壳')
})

StartupEvents.registry('item', event => {
	event.create('57x28').displayName('57x28弹壳')
})

StartupEvents.registry('item', event => {
	event.create('308').displayName('308弹壳')
})

StartupEvents.registry('item', event => {
	event.create('45_70').displayName('45 70弹壳')
})

StartupEvents.registry('item', event => {
	event.create('338').displayName('338弹壳')
})

StartupEvents.registry('item', event => {
	event.create('12g').displayName('12g弹壳')
})
