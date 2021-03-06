import { arrayQL } from "../src";
import { unorganizedData } from "./mocks";

describe("arrayql queries (map, filter)", () => {
  it("should map props", () => {
    const result = arrayQL(unorganizedData, {
      keys: {
        age: true,
        friends: {
          keys: {
            id: true,
          },
        },
      },
    });

    const expectedResult = [
      {
        age: 18,
        friends: [
          {
            id: 1,
          },
        ],
      },
      {
        age: 30,
        friends: [
          {
            id: 1,
          },
          {
            id: 9,
          },
        ],
      },
    ];

    expect(result).toEqual(expectedResult);
  });

  it("should filter users by age only over 19", () => {
    const result = arrayQL(unorganizedData, {
      where: ({ age }) => age > 19,
      keys: {
        age: true,
      },
    });

    expect(result).toEqual([
      {
        age: 30,
      },
    ]);
  });
  it("should map properly arrays of primitive data and functions", () => {
    const result = arrayQL(unorganizedData, {
      keys: {
        tags: true,
        luckyNumbers: true,
      },
    });

    expect(result).toEqual([
      {
        tags: ["array", "filter"],
        luckyNumbers: [1, 2, 3, 4],
      },
      {
        tags: ["array", "filter"],
        luckyNumbers: [1, 2, 3, 4],
      },
    ]);
  });
});
