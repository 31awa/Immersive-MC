// 监听物品右键事件
ItemEvents.rightClicked(event => {
  const { player, item } = event

  // 检查物品是指南针且玩家在主世界
  if (item.id === 'minecraft:compass' && player.level.dimension === 'minecraft:overworld') {

    // 设置目标坐标 (X, Y, Z)
    const targetPos = { x: 3, y: 65, z: 2 } // 修改为你需要的坐标

    // 执行传送
    player.teleportTo(
      targetPos.x,
      targetPos.y,
      targetPos.z
    )

    // 发送提示消息
    player.tell('已传送到空岛')
  }
})