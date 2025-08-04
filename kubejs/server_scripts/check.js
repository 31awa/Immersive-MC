//来自https://www.mcmod.cn/post/4682.html 使用 CC BY-NC-SA 协议
NetworkEvents.dataReceived("inspect", (event) => { // 接受到客户端的发包后执行
  const player = event.player;
  let handItem = player.getMainHandItem();
 
  if (handItem.areItemsEqual(Item.of("tacz:modern_kinetic_gun"))) { // 仅在主手为枪械的情况下才执行以下代码
    // 获取枪械 NBT
    let nbt = handItem.getNbt();
    let ammo =
      nbt.getInt("GunCurrentAmmoCount") + nbt.getByte("HasBulletInBarrel");
    let fire_mode = nbt.getString("GunFireMode");
 
    // 以下是一些字符串处理
    switch (fire_mode) { // 给开火模式加字符画 :)
      case "自动":
        fire_mode += " <A]";
        break;
      case "单发":
        fire_mode += " <1]";
        break;
      case "三连发":
        fire_mode += " <<]";
        break;
      default:
        break;
    }
    let tell_fire_mode = `Fire mode: ${fire_mode}`;
    var tell_ammo = ""; // 在没有子弹时弹药数量显示为红色
    if (ammo == 0) {
      tell_ammo = Component.red(`Ammo: 0`);
    } else {
      tell_ammo = Component.string(`Ammo: ${ammo}`);
    }
 
    // 告诉玩家有关信息
    player.tell(tell_ammo);
    player.tell(tell_fire_mode);
  }
  //Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:19,GunFireMode:"BURST",GunId:"tacz:qbz_95",HasBulletInBarrel:1b}')
});