module.exports = {
  once: true,
  execute(client) {
    console.log(`Bot aktif: ${client.user.tag}`);
    client.user.setActivity("Arda'yı izliyor 👀");
  }
};
