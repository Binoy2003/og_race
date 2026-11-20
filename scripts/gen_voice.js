// Script to fetch authentic Bangladeshi male neural voice using Edge TTS
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const text = "এটা কি করলি মামা!";
const voice = "bn-BD-PradeepNeural"; // Bangladeshi Bengali Male Neural Voice
const outputFile = path.resolve('public/audio/eta_ki_korli_mama.mp3');

fs.mkdirSync(path.dirname(outputFile), { recursive: true });

async function synthesize() {
  const connectionId = crypto.randomUUID().replace(/-/g, '');
  const url = `wss://speech.platform.bing.com/consumer/speech/synthesize/readahead/edge/v1?TrustedClientToken=6A5AA1D4EAFF4E9FB37E23D68491D6F4&ConnectionId=${connectionId}`;

  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url, {
      headers: {
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
        'Origin': 'chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold'
      }
    });

    const audioChunks = [];

    ws.onopen = () => {
      // 1. Send speech.config
      const configMsg = `Content-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n` +
        JSON.stringify({
          context: {
            synthesis: {
              audio: {
                metadataoptions: {
                  sentenceBoundaryEnabled: false,
                  wordBoundaryEnabled: false
                },
                outputFormat: "audio-24khz-48kbitrate-mono-mp3"
              }
            }
          }
        });
      ws.send(configMsg);

      // 2. Send SSML request
      const reqId = crypto.randomUUID().replace(/-/g, '');
      const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='bn-BD'>` +
        `<voice name='${voice}'>` +
        `<prosody pitch='+5Hz' rate='+10%'>${text}</prosody>` +
        `</voice></speak>`;

      const ssmlMsg = `X-RequestId:${reqId}\r\nContent-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n` + ssml;
      ws.send(ssmlMsg);
    };

    ws.onmessage = async (event) => {
      if (typeof event.data === 'string') {
        if (event.data.includes('Path:turn.end')) {
          ws.close();
          const buffer = Buffer.concat(audioChunks);
          fs.writeFileSync(outputFile, buffer);
          console.log(`Successfully generated audio: ${outputFile} (${buffer.length} bytes)`);
          resolve(outputFile);
        }
      } else {
        // Binary audio chunk
        const arrayBuffer = await event.data.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const headerLen = buffer.readUInt16BE(0);
        const audioData = buffer.subarray(headerLen + 2);
        audioChunks.push(audioData);
      }
    };

    ws.onerror = (err) => {
      console.error('WebSocket error:', err);
      reject(err);
    };

    ws.onclose = () => {
      if (audioChunks.length > 0 && !fs.existsSync(outputFile)) {
        const buffer = Buffer.concat(audioChunks);
        fs.writeFileSync(outputFile, buffer);
        console.log(`Audio saved on close: ${outputFile} (${buffer.length} bytes)`);
        resolve(outputFile);
      }
    };
  });
}

synthesize().catch(err => {
  console.error('Synthesis failed:', err);
  process.exit(1);
});
