StartupEvents.registry('block', event => {
  event.create('mine_travelling_block') // Create a new block
    .displayName('地球') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(-1) // Set hardness (affects mining time)
    .resistance(-1) // Set resistance (to explosions, etc)
    .tagBlock("minecraft:beacon") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .unbreakable()
    .fullBlock(false)
    .notSolid()
})

StartupEvents.registry('block', event => {
  event.create('home_block') // Create a new block
    .displayName('安全撤离点') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(-1) // Set hardness (affects mining time)
    .resistance(-1) // Set resistance (to explosions, etc)
    .tagBlock("minecraft:beacon") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .unbreakable()
    .fullBlock(false)
    .notSolid()
})