import { convert } from "./currency";

jest.mock("./currency");

it('converts USD to CAD', async () => {
  convert.mockReturnValue(1.42);

  const rate = await convert('USD', 'CAD');
  expect(rate).toEqual(1.42);
});