<template>
  <Layout>
    <h1 class="mb-4">About</h1>
    <img class="about-image" src="../../uploads/profile_image_twitch-1.png" />

    <p>I play retro games from the 90s and early 00s. I strive to play games on real hardware, often with my original cartridges and CDs. I like to play retro DOS/9x PC games on my custom Windows 98 machine.</p>

    <p>Currently the list of consoles I have working for streaming includes:</p>
    <ul>
      <li>Windows 98 machine (VGA/DVI) [DOS, 95, 98, XP]</li>
      <li>Analogue Mega SG (HDMI) [Genesis/Master System/GameGear]</li>
      <li>Analogue Super NT (HDMI) [Super Nintendo]</li>
      <li>Analogue Pocket + Dock (HDMI) [GB/GBC/GBA/GameGear]</li>
      <li>Playstation Portable (PSP) (Component Video)</li>
      <li>Playstation 2 (Component Video) [PS2, PS1] </li>
      <li>Playstation 3 (HDMI) [PS3, PS2+PS1 as well but software emulation]</li>
      <li>Playstation 5 (HDMI) [PS5, PS4]</li>
      <li>Nintendo Switch + Dock (HDMI)</li>
      <li>GameCube (Component Video)</li>
      <li>Sega Dreamcast (VGA)</li>
      <li>Sega Saturn (HDMI)</li>
    </ul>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style lang="scss" scoped>
.about-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
