const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Bot gecikmesini ölçer"),

  async execute(interaction) {
    const sent = await interaction.reply({ content: "Pong hesaplanıyor...", fetchReply: true });
    const latency = sent.createdTimestamp - interaction.createdTimestamp;

    await interaction.editReply(`🏓 Gecikme: **${latency}ms**`);
  }
};
