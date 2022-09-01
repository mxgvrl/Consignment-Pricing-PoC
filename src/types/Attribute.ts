export type Attribute = {
    id: string; // 20 chars
    name: string; // 40 chars
    flag1: boolean;
    flag2: boolean;
    type: {
        name: string; // 20 chars
        extraPayload: string; // 200 chars
    }
}