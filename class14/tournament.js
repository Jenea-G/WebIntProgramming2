class Tournament {
  constructor(id, name, game, entryFee, maxPlayers, registeredPlayers, status) {
    this.id = id;
    this.name = name;
    this.game = game;
    this.entryFee = entryFee;
    this.maxPlayers = maxPlayers;
    this.registeredPlayers = registeredPlayers;
    this.status = status;
  }

  get spotsLeft() {
    return this.maxPlayers - this.registeredPlayers;
  }

  get maxPlayers() {
    return this.__maxPlayers;
  }

  set maxPlayers(value) {
    if (value <= 0 || value < this.registeredPlayers) {
      throw new Error(
        "Max number of players should be greater than 0 and registered players",
      );
    }
    this.__maxPlayers = value;
  }

  static fromObject(data) {
    return new Tournament(
      data.id,
      data.name,
      data.game,
      data.entryFee,
      data.maxPlayers,
      data.registeredPlayers,
      data.status,
    );
  }
}
