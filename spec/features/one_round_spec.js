describe("A suite", function() {
  it("contains spec with an expectation", function() {
    game = new Game(['X','O','O'])
    expect(game.next()).toEqual(['O', 'X', 'O']);
  });
});
