// Web Crypto AES-GCM 256-bit Encryption & PBKDF2 Key Derivation
// Dibuat khusus untuk pengamanan data nilai mahasiswa milik Faik Bajsair, S.Kom., M.Kom.

const ITERATIONS = 100000;
const SALT = new TextEncoder().encode("APEX_QA_FAIK_BAJSAIR_SALT_2026_SECURITY");

// Derive AES-GCM Key from User Passphrase
async function deriveKey(passphrase) {
  const enc = new TextEncoder();
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    enc.encode(passphrase),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: SALT,
      iterations: ITERATIONS,
      hash: "SHA-256"
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

// Encrypt plaintext data (objects, strings) to ciphertext
export async function encryptData(data, passphrase) {
  try {
    const key = await deriveKey(passphrase);
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encoded = new TextEncoder().encode(JSON.stringify(data));

    const ciphertext = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      encoded
    );

    return {
      iv: Array.from(iv),
      cipher: Array.from(new Uint8Array(ciphertext)),
      encryptedAt: new Date().toISOString()
    };
  } catch (err) {
    console.error("Encryption error:", err);
    throw new Error("Gagal mengenkripsi data: " + err.message);
  }
}

// Decrypt ciphertext to original data
export async function decryptData(encryptedPayload, passphrase) {
  try {
    if (!encryptedPayload || !encryptedPayload.cipher || !encryptedPayload.iv) {
      return null;
    }

    const key = await deriveKey(passphrase);
    const iv = new Uint8Array(encryptedPayload.iv);
    const ciphertext = new Uint8Array(encryptedPayload.cipher);

    const decrypted = await window.crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      ciphertext
    );

    const decoded = new TextDecoder().decode(decrypted);
    return JSON.parse(decoded);
  } catch (err) {
    console.warn("Decryption failed (Wrong Passphrase or corrupted data):", err);
    return null;
  }
}

// Generate SHA-256 hash for authentication verification
export async function hashPassphrase(passphrase) {
  const enc = new TextEncoder();
  const data = enc.encode(passphrase + "_FAIK_AUTH_PEPPER_2026");
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
