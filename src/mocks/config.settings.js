import { functionCatalog } from './function.catalog';
import { complexityCatalog } from './complexity.catalog';
import { complexityRiseCatalog } from './complexity.rise.catalog';
import { patternCatalog } from './pattern.catalog';
import { noveltyUseCatalog } from './novelty.use.catalog';
import { noveltyCatalog } from './novelty.catalog';

export const configSettings = [
    {
        label: 'code analysis',
        description: 'Choose your software functions',
        value: functionCatalog,
        required: true,
        multi: true,
    },
    {
        label: 'complexity analysis',
        description: 'Choose the particular qualities of software',
        value: complexityCatalog,
        required: false,
        multi: true,
    }, {
        label: 'increased complexity',
        description: 'Choose software particular qualities with increased complexity',
        value: complexityRiseCatalog,
        required: false,
        multi: true,
    }, {
        label: 'degree of novelty',
        description: 'Choose degree of novelty',
        value: noveltyCatalog,
        required: true,
        multi: false,
    }, {
        label: 'novelty of use',
        description: 'Choose novelty of use',
        value: noveltyUseCatalog,
        required: false,
        multi: true,
    }, {
        label: 'pattern usage',
        description: 'Specify the percentage of use of standard modules',
        value: patternCatalog,
        required: true,
        multi: false,
    },
]