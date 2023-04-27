/*--------------------------
  --- SUPER FORÇA ----------
  ---------------------------
*/

//Super Força - "superforca"
RegisterCommand('superforca', ()=> {

    SetWeaponDamageModifier('WEAPON_UNARMED', 9999)

})

//Força Normal - "normalforca"
RegisterCommand('normalforca', ()=> {

    SetWeaponDamageModifier('WEAPON_UNARMED', 1)

})

/*--------------------------
  --- Super Poderes ----------
  ---------------------------
*/

//Super Poderes (salto e velocidade) - "poderes"
RegisterCommand('poderes', ()=> {

    setTick(()=> {

        SetSuperJumpThisFrame(PlayerId())
        SetPedMoveRateOverride(PlayerPedId(), 5.0)
    })

}) 









