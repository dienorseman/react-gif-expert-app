import axios from "axios";

describe("primer test", () => {
  test("should return hellor world", async () => {
    const categories = 'opm'
    const api_key = "tngM89Coviwv4pbLukfjBICe5LIHKCa";
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}a&q=${categories}&limit=5`;
    const resp = await axios.get(url);

    console.log(resp);
  });
});
