//来自https://www.mcmod.cn/post/4682.html 使用 CC BY-NC-SA 协议
ClientEvents.tick((event) => {
  const key = Java.loadClass("com.tacz.guns.client.input.InspectKey").INSPECT_KEY; // 检视按键，翻TaCZ源码找的
 
  // 以下一段是为了防止玩家长按检视导致输出刷屏
  // 是从 https://gumeng.gitbook.io/kubejs-jiao-cheng-1.20.1/kubejsprojects/regkey 的教程抄的
  if (key.isDown()) { // 检测按键按下
    if (!event.player.getPersistentData().getBoolean("inspect")) {
      event.player.sendData("inspect"); // 给服务器发包
      event.player.getPersistentData().putBoolean("inspect", true);
    }
  } else {
    if (event.player.getPersistentData().getBoolean("inspect")) {
      event.player.getPersistentData().putBoolean("inspect", false);
    }
  }
});