// ======================
// IPv4 tests
// ======================
const ip_good = "192.168.1.1";
const ip_edge = "10.0.0.25";
const not_ip = "192.168.1.9999"; // false positive trap

// ======================
// Domain tests
// ======================
const domain_good = "example.com";
const domain_in_text = "login at example.com";
const fake_domain = "example..com"; // invalid

// ======================
// URL tests
// ======================
const url_good = "https://malicious-site.com/payload";
const url_with_port = "http://example.com:8080/test";
const url_encoded = "https%3A%2F%2Fexample.com"; // encoded form

// ======================
// Email tests
// ======================
const email_good = "attacker@phishing.com";
const email_in_text = "contact attacker@phishing.com now";

// ======================
// Hash tests
// ======================
const sha256_good =
  "d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2";

const md5_good = "5d41402abc4b2a76b9719d911017c592";

const fake_hash = "sha256-not-real-123456"; // false positive trap

// ======================
// CVE tests
// ======================
const cve_good = "CVE-2024-12345";
const cve_edge = "CVE-1999-0001";

// ======================
// Mixed real-world usage
// ======================
const redirectUrl = `https://${domain_good}/login?user=${email_good}`;
const logEntry = `User ${email_good} connected from ${ip_good}`;

// ======================
// XSS-adjacent unsafe usage (bonus test context)
// ======================
const userInput = location.search;

// ❌ unsafe sink (if your rules evolve beyond IOC detection)
document.body.innerHTML = userInput;
