BlockEvents.rightClicked('kubejs:home_block', event => {
event.server.runCommand('execute in safe_zone:minecraft_safezone run tp @a 0 5.00 0 1000 50')
})

BlockEvents.rightClicked('kubejs:mine_travelling_block', event => {
event.player.runCommand('rtp')
Utils.server.scheduleInTicks(20 * 10, () => {
    Utils.server.runCommand('execute in minecraft:overworld as @a[distance=0..] run tp @a @p')

})
})

