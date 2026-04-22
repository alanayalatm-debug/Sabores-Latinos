const https = require('https');

const titles = [
  'Encebollado',
  'Vori_vori',
  'Mangú',
  'Mofongo',
  'Sancocho',
  'Gallo_pinto',
  'Vigorón',
  'Baleada',
  'Pupusa',
  'Pepián'
];

const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles.join('|'))}&prop=pageimages&format=json&pithumbsize=800`;

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const pages = json.query.pages;
    for (const key in pages) {
      if (pages[key].thumbnail) {
        console.log(`${pages[key].title}: ${pages[key].thumbnail.source}`);
      } else {
        console.log(`${pages[key].title}: No image found`);
      }
    }
  });
}).on('error', err => console.log(err));
