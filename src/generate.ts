import { Attribute } from "./types/Attribute";
import { Specification } from "./types/Specification";

const attribute: Attribute = {
    id: 'i'.repeat(20),
    name: 'n'.repeat(40),
    flag1: true,
    flag2: false,
    type: {
        name: 't'.repeat(20),
        extraPayload: 'e'.repeat(200)
    }
}

const specification: Specification = {
    id: 'i'.repeat(20),
    name: 'n'.repeat(40),
    version: 5,
    attributes: Array(100).fill(attribute)
}

const generatedSpecifications: Specification[] = Array(100).fill(specification);

export default generatedSpecifications;