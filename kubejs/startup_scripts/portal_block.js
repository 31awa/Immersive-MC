// KubeJS 6 传统事件注册方式
BlockEvents.modification(event => {
    // 修改下界传送门方块
    event.modify('minecraft:nether_portal', block => {
        block.destroySpeed = 0.5;    // 设置硬度（空手可破坏）
        block.requiresTool = false;   // 不需要工具
        block.explosionResistance = 0; // 防止爆炸抗性过高
    });

        // 修改无尽传送门方块
    event.modify('infinity:neither_portal', block => {
        block.destroySpeed = 0.5;
        block.requiresTool = false;
        block.explosionResistance = 0;
    });
});