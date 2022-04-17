export type fakedataType = {
    name: string
    x: number,
    y: number,
    z: number,
    a: number,
    b: number,
    c: number,
}

export type EquipmentType = {
    name: string,
    data: Array<fakedataType>
}

export const fakedata: Array<fakedataType> = [
    { name: "Unit_A", "x": 123.1, "y": 78.3, "z": 123.3, "a": 20, "b": 102, "c": 87 },
    { name: "Unit_B", "x": 13.1, "y": 163, "z": 32.6, "a": 20, "b": 102, "c": 87 },
    { name: "Unit_C", "x": 67.4, "y": 122.2, "z": 47.9, "a": 20, "b": 102, "c": 87 },
    { name: "Unit_D", "x": 181.3, "y": 37.8, "z": 66.7, "a": 20, "b": 102, "c": 87 },
    { name: "Unit_E", "x": 121.7, "y": 39, "z": 36.5, "a": 20, "b": 102, "c": 87 },
]
