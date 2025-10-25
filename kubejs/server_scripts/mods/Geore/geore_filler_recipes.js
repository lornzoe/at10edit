ServerEvents.recipes(allthemods => {

	const variants = [
		{
			result: 'ae2:flawless_budding_quartz',
			crystal: 'ae2:charged_certus_quartz_crystal'
		},
		{
			result: 'geore:budding_monazite',
			crystal: 'modern_industialization:monazite_block'
		},
		{
			result: 'geore:budding_tungsten',
			crystal: 'modern_industialization:tungsten_block'
		},
		{
			result: 'geore:budding_uraninite',
			crystal: 'powah:uraninite_block'
		}
	]

	variants.forEach(v => {
		allthemods.shaped(v.result, [' BC', 'BAB', 'CB '], {
			A: 'geore:budding_quartz',
			B: v.crystal,
			C: 'minecraft:nether_star'
		})
	})
})