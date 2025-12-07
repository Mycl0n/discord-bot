module.exports = {
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) {
      return interaction.reply("Komut bulunamadı.");
    }

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error(error);
      interaction.reply({ content: "Komut çalıştırılırken bir hata oluştu.", ephemeral: true });
    }
  }
};
