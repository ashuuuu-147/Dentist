const urls = [
  "http://localhost:3000/",
  "http://localhost:3000/our-services",
  "http://localhost:3000/meet-our-team",
  "http://localhost:3000/make-appointment",
  "http://localhost:3000/contact",
];

for (const url of urls) {
  try {
    const res = await fetch(url);
    console.log(`${res.status} ${url}`);
    if (res.status !== 200) {
      console.error(`Failed ${url}: ${res.status}`);
      process.exit(1);
    }
  } catch (err) {
    console.error(`Error requesting ${url}:`, err);
    process.exit(1);
  }
}
console.log("All SSR routes respond 200 OK!");
