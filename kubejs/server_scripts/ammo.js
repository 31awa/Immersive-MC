TaCZServerEvents.gunDataLoad((event) => {
  const id = event.getId().toString();
  // 修改 p90 的弹药数量为 123
  if (id === "cibs:ak105_kaltsit_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:556x45";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:9a91_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:9mm";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:asval_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:9mm";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:ar2_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:762x54";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:882_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:556x45";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:ak105_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:762x39";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:881_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:556x45";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:ppk_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:9mm";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:type14_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:9mm";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:qsz92_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:9mm";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:type11_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:46x30";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:m99_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:338";
    return event.setJson(JSON.stringify(json));
  }
    if (id === "cib:type38_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = "tacz:30_06";
    return event.setJson(JSON.stringify(json));
  }
});

// 与 `TaCZStartupEvents.ammoIndexLoad` 功能一致, 但优先级更高
TaCZServerEvents.ammoIndexLoad((event) => {
    const id = event.getId().toString();
    if (id === "cib:8x22") {
      return event.removeAmmo();;
    }
    if (id === "cib:9x39mm") {
      return event.removeAmmo();;
    }
        if (id === "cib:32acp") {
      return event.removeAmmo();;
    }
        if (id === "cib:58x21") {
      return event.removeAmmo();;
    }
        if (id === "cib:65x50") {
      return event.removeAmmo();;
    }
        if (id === "cib:127x108") {
      return event.removeAmmo();;
    }
        if (id === "cib:545x39") {
      return event.removeAmmo();;
    }
        if (id === "cib:battery") {
      return event.removeAmmo();;
    }
})
TaCZServerEvents.gunIndexLoad((event) => {
  const id = event.getId().toString();
   if (id === "cib:katana") {
    return event.removeGun();
  }
     if (id === "cib:batons") {
    return event.removeGun();
  }
});