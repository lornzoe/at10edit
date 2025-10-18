ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'quarryplus:quarry' })
    allthemods.shaped('quarryplus:quarry', ['ABA', 'DED', 'ACA'], {
      A: 'alltheores:diamond_gear',
      B: 'minecraft:diamond_pickaxe',
      C: 'computercraft:computer_normal',
      D: 'quarryplus:marker',
      E: 'justdirethings:blockbreakert2'
    })
  })