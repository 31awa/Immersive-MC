//此脚本从(https://www.mcmod.cn/post/4823.html)复制,感谢大佬的脚本.
ServerEvents.recipes(e => {
    //各种糖类经过加热变成糖水
    e.recipes.create.mixing
    (Fluid.of('firmalife:sugar_water',500),["1x #tfc:sweetener",Fluid.of('minecraft:water',1000)])
    .heated()
 
    //糖水加热变成糖浆
    e.recipes.create.mixing
    (Fluid.of('artisanal:molasses',100),[Fluid.of('firmalife:sugar_water',500)])
    .heated()
 
    //这是一段函数，免得代码重复写太多
    function flour(output, Input) {
    //和面！！
    e.recipes.create.mixing
    (output,
    [Fluid.of('firmalife:yeast_starter',100),Input,'#tfc:sweetener'])
    }
    
    //这是函数对应的物品ID
    flour('4x firmalife:food/rye_dough','tfc:food/rye_flour')
    flour('4x firmalife:food/rice_dough','tfc:food/rice_flour')
    flour('4x firmalife:food/maize_dough','tfc:food/maize_flour')
    flour('4x firmalife:food/oat_dough','tfc:food/oat_flour')
    flour('4x firmalife:food/wheat_dough','tfc:food/wheat_flour')
    flour('4x firmalife:food/barley_dough','tfc:food/barley_flour')
        
    //矿块用搅拌器煮成团矿
    e.recipes.create.mixing("immersiveengineering:ingot_aluminum",["4x tfcorewashing:briquet_bauxite"]).heated()
    e.recipes.create.mixing("tfc:metal/ingot/bismuth",["4x tfcorewashing:briquet_bismuthinite"]).heated()
    e.recipes.create.mixing("tfc:metal/ingot/tin",["4x tfcorewashing:briquet_cassiterite"]).heated()
    e.recipes.create.mixing("firmalife:metal/ingot/chromium",["4x tfcorewashing:briquet_chromium"]).heated()
    e.recipes.create.mixing("immersiveengineering:ingot_lead",["4x tfcorewashing:briquet_galena"]).heated()
    e.recipes.create.mixing("tfc:metal/ingot/nickel",["4x tfcorewashing:briquet_garnierite"]).heated()
    e.recipes.create.mixing("tfc:metal/ingot/wrought_iron",["4x tfcorewashing:briquet_hematite"]).heated()
    e.recipes.create.mixing("tfc:metal/ingot/wrought_iron",["4x tfcorewashing:briquet_limonite"]).heated()
    e.recipes.create.mixing("tfc:metal/ingot/wrought_iron",["4x tfcorewashing:briquet_magnetite"]).heated()
    e.recipes.create.mixing("tfc:metal/ingot/copper",["4x tfcorewashing:briquet_malachite"]).heated()
    e.recipes.create.mixing("tfc:metal/ingot/copper",["4x tfcorewashing:briquet_tetrahedrite"]).heated()
    e.recipes.create.mixing("immersiveengineering:ingot_uranium",["4x tfcorewashing:briquet_uraninite"]).heated()
    e.recipes.create.mixing("tfc:metal/ingot/zinc",["4x tfcorewashing:briquet_sphalerite"]).heated()
    //黏土变高岭土
    e.recipes.create.mixing("tfc:powder/kaolinite",["5x minecraft:clay_ball"]).heated()
    //助焊剂烧石灰
    e.recipes.create.mixing("tfc:powder/lime",["tfc:powder/flux"]).heated()
    //生海带烧熟海带，海带烧苏打灰
    e.recipes.create.mixing("tfc:food/dried_kelp",["#tfc:plants/kelp"]).heated()
    e.recipes.create.mixing("tfc:food/dried_kelp",["tfc:plant/laminaria"]).heated()
    e.recipes.create.mixing("6x tfc:powder/soda_ash",["tfc:food/dried_kelp"]).heated()
    //防腐木板制作
    e.recipes.create.mixing("immersiveengineering:treated_wood_horizontal",["#minecraft:planks",Fluid.of('immersiveengineering:creosote', 250)])
    e.recipes.create.mixing("tfc_ie_addon:treated_wood_lumber",["#tfc:lumber",Fluid.of('immersiveengineering:creosote', 250)])
    //木头自动化烧木炭
    e.recipes.create.mixing("minecraft:charcoal",["#minecraft:logs"]).heated()
    //桦树汁加工 
    e.recipes.create.mixing(Fluid.of('afc:birch_sap_concentrate', 100),[Fluid.of('afc:birch_sap', 1000)]).heated()
    e.recipes.create.mixing(Fluid.of('afc:birch_syrup', 1000),[Fluid.of('afc:birch_sap_concentrate', 1000)]).heated()
    e.recipes.create.mixing("afc:birch_sugar",[Fluid.of('afc:birch_syrup', 100)]).heated()
    //混凝土 
    e.recipes.create.mixing(Fluid.of('rnr:concrete', 1000),["10x rnr:concrete_powder",Fluid.of('minecraft:water', 1000)])
    //石英
    e.recipes.create.mixing("4x tfc_ie_addon:mineral/quartz_shard",["tfc_ie_addon:mineral/quartz_shard"])
    //咸水变盐
    e.recipes.create.mixing("tfc:powder/salt",[Fluid.of('tfc:salt_water', 100)]).heated()
    //石灰变石灰水，沙子和石灰水变砂浆
    e.recipes.create.mixing(Fluid.of('tfc:limewater', 500),["tfc:powder/lime",Fluid.of('minecraft:water', 500)])
    e.recipes.create.mixing("16x tfc:mortar",["#minecraft:sand",Fluid.of('tfc:limewater', 100)])
    //橄榄油配方
    e.recipes.create.mixing(Fluid.of('tfc:olive_oil', 200),["5x tfc:olive_paste",Fluid.of('minecraft:water', 1000)]).heated()
    //无序配方，锯末制造纸张
    e.shapeless(
        Item.of('minecraft:paper', 1),
        [
          '4x immersiveengineering:dust_wood'
        ]
      )
    //铝土矿配方返回标准流程
    e.recipes.create.pressing('2x tfcorewashing:rocky_chunks_bauxite', 'dfc:ore/small_bauxite')
    e.recipes.create.pressing('3x tfcorewashing:rocky_chunks_bauxite', 'dfc:ore/poor_bauxite')
    e.recipes.create.pressing('5x tfcorewashing:rocky_chunks_bauxite', 'dfc:ore/normal_bauxite')
    e.recipes.create.pressing('7x tfcorewashing:rocky_chunks_bauxite', 'dfc:ore/rich_bauxite')
    //石墨粉烧石墨锭
    e.recipes.create.mixing("immersiveengineering:ingot_hop_graphite",["immersiveengineering:dust_hop_graphite"]).superheated()
    //玻璃制取
    e.recipes.create.mixing("minecraft:glass",["#forge:sand"]).heated()
    //黑钢自动化
    e.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[{"item":"tfc:metal/ingot/pig_iron"}],
        "energy":102400,
        "input":{"item":"tfc:metal/ingot/weak_steel"},
        "results":[{"item":"tfc:metal/ingot/black_steel"}],
        "slag":{"tag":"forge:slag"},
        "time":400
    })
    //红钢自动化
    e.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[{"item":"tfc:metal/ingot/black_steel"}],
        "energy":102400,
        "input":{"item":"tfc:metal/ingot/weak_red_steel"},
        "results":[{"item":"tfc:metal/ingot/red_steel"}],
        "slag":{"tag":"forge:slag"},
        "time":400
    })
    //蓝钢自动化
    e.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[{"item":"tfc:metal/ingot/black_steel"}],
        "energy":102400,
        "input":{"item":"tfc:metal/ingot/weak_blue_steel"},
        "results":[{"item":"tfc:metal/ingot/blue_steel"}],
        "slag":{"tag":"forge:slag"},
        "time":400
    })
    //防腐木材互相转换
    e.shapeless(
        Item.of('firmalife:treated_lumber', 1),
        [
          '1x tfc_ie_addon:treated_wood_lumber'
        ]
      )
      e.shapeless(
        Item.of('tfc_ie_addon:treated_wood_lumber', 1),
        [
          '1x firmalife:treated_lumber'
        ]
      )
      e.shapeless(
        Item.of('immersiveengineering:treated_wood_horizontal', 1),
        [
          '1x firmalife:treated_wood'
        ]
      )
      e.shapeless(
        Item.of('firmalife:treated_wood', 1),
        [
          '1x immersiveengineering:treated_wood_horizontal'
        ]
      )
 
})
