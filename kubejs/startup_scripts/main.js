// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', event => {
	event.create('incompleted_ammo', 'create:sequenced_assembly').displayName('incompleted ammo')
})

StartupEvents.registry('item', event => {
	event.create('incompleted_rocket', 'create:sequenced_assembly').displayName('incompleted rocket')
})

StartupEvents.registry('item', event => {
	event.create('incompleted_40mm', 'create:sequenced_assembly').displayName('incompleted 40mm')
})

StartupEvents.registry('item', event => {
	event.create('rocket').displayName('rocket')
})

StartupEvents.registry('item', event => {
	event.create('40mm').displayName('40mm')
})

StartupEvents.registry('item', event => {
	event.create('steel_plate').displayName('steel plate')
})

StartupEvents.registry('item', event => {
	event.create('9mm').displayName('9mm')
})

StartupEvents.registry('item', event => {
	event.create('45acp').displayName('45acp')
})

StartupEvents.registry('item', event => {
	event.create('46x30').displayName('46x30')
})

StartupEvents.registry('item', event => {
	event.create('556x45').displayName('556x45')
})

StartupEvents.registry('item', event => {
	event.create('762x54').displayName('762x54')
})

StartupEvents.registry('item', event => {
	event.create('762x39').displayName('762x39')
})

StartupEvents.registry('item', event => {
	event.create('762x25').displayName('762x25')
})

StartupEvents.registry('item', event => {
	event.create('357mag').displayName('357mag')
})

StartupEvents.registry('item', event => {
	event.create('58x42').displayName('58x42')
})

StartupEvents.registry('item', event => {
	event.create('30_06').displayName('30 06')
})

StartupEvents.registry('item', event => {
	event.create('68x51fury').displayName('68x51fury')
})

StartupEvents.registry('item', event => {
	event.create('50ae').displayName('50ae')
})

StartupEvents.registry('item', event => {
	event.create('50bmg').displayName('50bmg')
})

StartupEvents.registry('item', event => {
	event.create('57x28').displayName('57x28')
})

StartupEvents.registry('item', event => {
	event.create('308').displayName('308')
})

StartupEvents.registry('item', event => {
	event.create('45_70').displayName('45 70')
})

StartupEvents.registry('item', event => {
	event.create('338').displayName('338')
})

StartupEvents.registry('item', event => {
	event.create('12g').displayName('12g')
})
