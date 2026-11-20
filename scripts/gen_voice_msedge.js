import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import fs from 'fs';
import path from 'path';

async function main() {
  const tts = new MsEdgeTTS();
  await tts.setMetadata("bn-BD-PradeepNeural", OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

  const text = "এটা কি করলি মামা!";
  const outDir = path.resolve('public/audio');
  fs.mkdirSync(outDir, { recursive: true });

  console.log("Synthesizing:", text, "with bn-BD-PradeepNeural...");
  const res = await tts.toFile(outDir, text, {
    rate: "+12%",
    pitch: "+5Hz"
  });

  console.log("Generated:", res.audioFilePath);
  const targetFile = path.join(outDir, 'eta_ki_korli_mama.mp3');
  fs.copyFileSync(res.audioFilePath, targetFile);
  console.log("Saved audio to:", targetFile);
  const stat = fs.statSync(targetFile);
  console.log("File size:", stat.size, "bytes");
}

main().catch(err => {
  console.error("Error generating voice:", err);
  process.exit(1);
});
