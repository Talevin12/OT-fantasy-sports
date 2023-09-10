
class routeSetup {
    static setupRoutes(app, apiIndex) {
      app.use("/api/fixtures", apiIndex.fixtures);
      app.use("/api/teams", apiIndex.teams);
      app.use("/api/teams", apiIndex.teamsStats);
      app.use("/api/players", apiIndex.players);
      app.use("/api/players", apiIndex.playersStats);
      app.use("/api/players", apiIndex.topPerformers);
      app.use("/api/injuries", apiIndex.injuries);
    }
  }
  
  module.exports = routeSetup;
  