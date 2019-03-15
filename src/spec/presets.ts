import { Preset, StandardSpec } from '@musical-patterns/pattern'
import { ObjectOf } from '@musical-patterns/utilities'
import {
    PRESET_BALANCED_BASE_DURATION,
    PRESET_BALANCED_CORE,
    PRESET_BALANCED_ENTITY_COUNT,
    PRESET_DENSE_BASE_DURATION,
    PRESET_DENSE_BASE_FREQUENCY,
    PRESET_DENSE_CORE,
    PRESET_DENSE_ENTITY_COUNT,
    PRESET_DENSE_REPETITIONS,
    PRESET_PRIMAL_BASE_DURATION,
    PRESET_PRIMAL_BASE_FREQUENCY,
    PRESET_PRIMAL_CORE,
    PRESET_PRIMAL_ENTITY_COUNT,
    PRESET_ROUND_BASE_DURATION,
    PRESET_ROUND_BASE_FREQUENCY,
    PRESET_ROUND_CORE,
    PRESET_ROUND_ENTITY_COUNT,
} from './constants'
import { initialSpecs } from './initials'
import { BeatenPathSpecs, BeatenPathStyle } from './types'

const presets: ObjectOf<Preset<BeatenPathSpecs>> = {
    balanced: {
        description: 'not too many entities, not too complex a core, this porridge is just right',
        order: 2,
        specs: {
            ...initialSpecs,
            [ StandardSpec.BASE_DURATION ]: PRESET_BALANCED_BASE_DURATION,
            core: PRESET_BALANCED_CORE,
            entityCount: PRESET_BALANCED_ENTITY_COUNT,
            reverse: true,
        },
    },
    dense: {
        description: 'leaning toward more entities but simpler core, for an etherial effect',
        order: 1,
        specs: {
            ...initialSpecs,
            [ StandardSpec.BASE_DURATION ]: PRESET_DENSE_BASE_DURATION,
            [ StandardSpec.BASE_FREQUENCY ]: PRESET_DENSE_BASE_FREQUENCY,
            core: PRESET_DENSE_CORE,
            entityCount: PRESET_DENSE_ENTITY_COUNT,
            repetitions: PRESET_DENSE_REPETITIONS,
        },
    },
    entropic: {
        description: 'simple illustration of entities movement, with a sufficiently interestingly complex core',
        order: 0,
        specs: initialSpecs,
    },
    primal: {
        description: 'demonstration of the power of the 11th and 13th harmonics',
        order: 3,
        specs: {
            ...initialSpecs,
            [ StandardSpec.BASE_DURATION ]: PRESET_PRIMAL_BASE_DURATION,
            [ StandardSpec.BASE_FREQUENCY ]: PRESET_PRIMAL_BASE_FREQUENCY,
            core: PRESET_PRIMAL_CORE,
            entityCount: PRESET_PRIMAL_ENTITY_COUNT,
            style: BeatenPathStyle.SMOOTH,
        },
    },
    round: {
        description: 'testing the limits of the entity density',
        order: 4,
        specs: {
            ...initialSpecs,
            [ StandardSpec.BASE_DURATION ]: PRESET_ROUND_BASE_DURATION,
            [ StandardSpec.BASE_FREQUENCY ]: PRESET_ROUND_BASE_FREQUENCY,
            core: PRESET_ROUND_CORE,
            entityCount: PRESET_ROUND_ENTITY_COUNT,
            reverse: true,
            style: BeatenPathStyle.SMOOTH,
        },
    },
}

export {
    presets,
}
