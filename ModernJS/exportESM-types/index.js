import { inline } from "./inline.js"; // não pode ser renomeado, podendo dar conflito de nomes
import defaultInline from "./inline.js"; // só pode ter um por arquivo, pode ser uma função anônima

import { group, group1, group2 } from "./non-inline.js"
import exportDefault from "./non-inline.js";


inline();
defaultInline();

group();
group1();
group2();
exportDefault();