describe("A suite", function() {
  it("contains spec with an expectation", function() {
    var board = ['X','O','O']
    game = new Game(board)
    expect(game.getBoard()).toEqual(board);
  });
});
